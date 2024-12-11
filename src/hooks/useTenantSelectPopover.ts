import { ChangeEvent, useContext, useEffect, useState } from "react"
import { useSessionStorage } from 'react-use'
import { TEEAuthDataContext, useConfig } from "../context"
import { Tenant, UserProfile } from "../core"
import useDebounce from "./useDebounce"
import { TenantSelectPopoverPaginationData } from "./useTenantSelectPopover.types"


interface UseTenantSelectPopoverProps {
  userProfile: UserProfile | null
  tenants: Tenant[]
  onChangeTenantId: (tenantId: string) => void
}

const useTenantSelectPopover = ({ tenants, userProfile, onChangeTenantId }: UseTenantSelectPopoverProps) => {
  const { auth, edxAppConfig } = useContext(TEEAuthDataContext)
  const [tenantIdToUpdate, setTenantIdToUpdate] = useState<string>('')
  const [isChangingTenant, setIsChangingTenant] = useState(false)
  const [selectedTenant, setSelectedTenant] = useSessionStorage<string>('selectedTenant', '', true)
  const [searchText, setSearchText] = useState("")
  const { debouncedValue } = useDebounce({ value: searchText, delay: 1000 })
  const [filteredList, setFilteredList] = useState<Tenant[]>([])
  const [topItemsList, setTopItemsList] = useState<Tenant[]>([])
  const [showSearchBar, setShowSearchBar] = useState(false)
  const [paginationData, setPaginationData] = useState<TenantSelectPopoverPaginationData>({
    pageIndex: 0,
    pageSize: 10,
    isLoading: false,
    totalCount: 0
  })
  const [foundNoResults, setFoundNoResults] = useState(false)
  const { config } = useConfig()
  const handleChangeTenantId = (tenant: Tenant) => {
    setSelectedTenant(tenant.document.name)
    setIsChangingTenant(true)
    window.location.assign(config.app.basePath)
  }

  const findCurrentTenant = () => {

    if (!selectedTenant) {
      return "..."
    }
    const tenant = tenants.find(tenant => tenant.document.name === selectedTenant)

    if(!tenant) {
      return "..."
    }
    console.log('tenant', tenant)

    return tenant.document.name.length < 20 ? tenant.document.name : tenant.document.name.slice(0, 12) + '...'

  }

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)

  const isSelectedTenantId = (tenant: Tenant, currentTenant?: Tenant) => tenant.document.name === currentTenant?.document.name

  const selectTopItemsList = () => {
    if (!userProfile || !tenants)
      return

    setTopItemsList(tenants)

    if (tenants.length > 10)
      setShowSearchBar(false)
  }

  // const onLoadMoreItems = async () => {
  //     if (paginationData.totalCount <= filteredList.length)
  //         return 

  //     const nextPageIndex = paginationData.pageIndex + 1

  //     const newPaginationData = {...paginationData}
  //     newPaginationData.isLoading = true

  //     setPaginationData(newPaginationData)

  //     const response = await fetchMyTenants({ 
  //         pageIndex: nextPageIndex,
  //         text: debouncedValue as string
  //     })

  //     newPaginationData.pageIndex = nextPageIndex
  //     newPaginationData.isLoading = false

  //     setPaginationData(newPaginationData)

  //     if (!response)
  //         return 

  //     const newFilteredList = filteredList.map(item => ({...item}))
  //     for (let i = 0; i < response.data.length; i++) {
  //         const tenant = response.data[i]

  //         newFilteredList.push({
  //             tenantId: tenant.tenantId,
  //             organizationIdentifier: tenant.organizationIdentifier,
  //             organizationName: tenant.organizationName
  //         })
  //     }

  //     setFilteredList(newFilteredList)
  // }

  // const onExecuteSearch = async () => {
  //     const newPaginationData = {...paginationData}
  //     newPaginationData.pageIndex = 0
  //     newPaginationData.isLoading = true

  //     setPaginationData(newPaginationData)

  //     const response = await fetchMyTenants({ 
  //         pageIndex: 0,
  //         text: debouncedValue as string
  //     })

  //     newPaginationData.isLoading = false
  //     if (response) {
  //         newPaginationData.totalCount = response.count
  //         if (response.count === 0)
  //             setFoundNoResults(true)
  //         else 
  //             setFoundNoResults(false)
  //         setFilteredList(response.data)
  //     }

  //     setPaginationData(newPaginationData)
  // }

  // useEffect(() => {
  //     if (debouncedValue.toString().length > 0) {
  //         onExecuteSearch()
  //     }
  //     else {
  //         setFilteredList([])
  //         setFoundNoResults(false)
  //     }
  // }, [ debouncedValue ])

  useEffect(() => {
    selectTopItemsList()
  }, [tenants])

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
    selectedTenant,
    isSelectedTenantId
  }
}

export default useTenantSelectPopover