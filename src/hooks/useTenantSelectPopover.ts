import { ChangeEvent, useContext, useEffect, useState } from "react"
import { TEEAuthDataContext } from "../context"
import { UserProfile } from "../core"
import { getMyTenants } from "../services/ProfileService/ProfileService"
import { GetMyTenantsRequest } from "../services/ProfileService/ProfileService.requests"
import useDebounce from "./useDebounce"
import { TenantSelectPopoverItem, TenantSelectPopoverPaginationData } from "./useTenantSelectPopover.types"

interface UseTenantSelectPopoverProps {
    userProfile: UserProfile | null
    onChangeTenantId: (tenantId: string) => void
}

const useTenantSelectPopover = ({ userProfile, onChangeTenantId }: UseTenantSelectPopoverProps) => {
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext)
    const [tenantIdToUpdate, setTenantIdToUpdate] = useState<string>('')
    const [isChangingTenant, setIsChangingTenant] = useState(false)
    const [searchText, setSearchText] = useState("")
    const { debouncedValue } = useDebounce({ value: searchText, delay: 1000 })
    const [filteredList, setFilteredList] = useState<TenantSelectPopoverItem[]>([])
    const [topItemsList, setTopItemsList] = useState<TenantSelectPopoverItem[]>([])
    const [showSearchBar, setShowSearchBar ] = useState(false)
    const [paginationData, setPaginationData] = useState<TenantSelectPopoverPaginationData>({
        pageIndex: 0,
        pageSize: 10,
        isLoading: false,
        totalCount: 0
    })
    const [foundNoResults, setFoundNoResults] = useState(false)

    const handleChangeTenantId = (tenantId: string) => {
        if (tenantId !== userProfile?.tenantId) {
            setIsChangingTenant(true)
            setTenantIdToUpdate(tenantId)
    
            onChangeTenantId(tenantId)
        }
    }

    const findCurrentTenant = () => {
        if (userProfile) {
            const selectedTenant = userProfile.selectedTenant

            return selectedTenant.organizationName.length < 20? selectedTenant.organizationName : selectedTenant.organizationName.slice(0, 12) + '...'
        }

        return "..."
    }

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)

    const isSelectedTenantId = (tenantId: string, currentTenantId: string | undefined) => tenantId === currentTenantId

    const fetchMyTenants = async (requestDetails: { pageIndex: number, text: string }) => {
        if (!edxAppConfig || !auth || !auth.user)
            return 

        const apiUrl = edxAppConfig.api.edfiApiBaseUri
        const token = auth.user.access_token
        const request: GetMyTenantsRequest = {
            pageIndex: requestDetails.pageIndex,
            pageSize: 10,
            filterBy: `organizationName.contains("${requestDetails.text}") or organizationName.toLower().contains("${requestDetails.text}")`,
            orderBy: `organizationName asc`
        }

        const getMyTenantsResult = await getMyTenants(token, apiUrl, request, edxAppConfig.api)

        if (getMyTenantsResult.type !== "Response")
            return null

        return getMyTenantsResult.data
    }

    const selectTopItemsList = () => {
        if (!userProfile)
            return 

        const showLimit = userProfile.tenantsTotalCount > 10? 4 : userProfile.tenants.length

        const tenantsList = userProfile.tenants
            .filter(tenant => tenant.tenantId !== userProfile.selectedTenant.tenantId)
            .filter((tenant, index) => index < showLimit)
            .map(tenant => {
                const tenantItem: TenantSelectPopoverItem = {
                    tenantId: tenant.tenantId,
                    organizationIdentifier: tenant.organizationIdentifier,
                    organizationName: tenant.organizationName
                }

                return tenantItem
            })

        tenantsList.unshift({
            tenantId: userProfile.selectedTenant.tenantId,
            organizationName: userProfile.selectedTenant.organizationName,
            organizationIdentifier: userProfile.selectedTenant.organizationIdentifier,
        })

        setTopItemsList(tenantsList)

        if (userProfile.tenantsTotalCount > 10)
            setShowSearchBar(true)
    }

    const onLoadMoreItems = async () => {
        if (paginationData.totalCount <= filteredList.length)
            return 

        const nextPageIndex = paginationData.pageIndex + 1

        const newPaginationData = {...paginationData}
        newPaginationData.isLoading = true

        setPaginationData(newPaginationData)

        const response = await fetchMyTenants({ 
            pageIndex: nextPageIndex,
            text: debouncedValue as string
        })

        newPaginationData.pageIndex = nextPageIndex
        newPaginationData.isLoading = false

        setPaginationData(newPaginationData)

        if (!response)
            return 

        const newFilteredList = filteredList.map(item => ({...item}))
        for (let i = 0; i < response.data.length; i++) {
            const tenant = response.data[i]

            newFilteredList.push({
                tenantId: tenant.tenantId,
                organizationIdentifier: tenant.organizationIdentifier,
                organizationName: tenant.organizationName
            })
        }

        setFilteredList(newFilteredList)
    }

    const onExecuteSearch = async () => {
        const newPaginationData = {...paginationData}
        newPaginationData.pageIndex = 0
        newPaginationData.isLoading = true

        setPaginationData(newPaginationData)

        const response = await fetchMyTenants({ 
            pageIndex: 0,
            text: debouncedValue as string
        })
    
        newPaginationData.isLoading = false
        if (response) {
            newPaginationData.totalCount = response.count
            if (response.count === 0)
                setFoundNoResults(true)
            else 
                setFoundNoResults(false)
            setFilteredList(response.data)
        }

        setPaginationData(newPaginationData)
    }

    useEffect(() => {
        if (debouncedValue.toString().length > 0) {
            onExecuteSearch()
        }
        else {
            setFilteredList([])
            setFoundNoResults(false)
        }
    }, [ debouncedValue ])

    useEffect(() => {
        if (userProfile)
            selectTopItemsList()
    }, [ userProfile?.tenantId ])

    return {
        tenantIdToUpdate,
        isChangingTenant,
        showSearchBar, 
        paginationData,
        foundNoResults,
        searchText,
        topItemsList,
        filteredList,
        handleChangeTenantId,
        findCurrentTenant,
        onSearch,
        onLoadMoreItems,
        isSelectedTenantId
    }
}

export default useTenantSelectPopover