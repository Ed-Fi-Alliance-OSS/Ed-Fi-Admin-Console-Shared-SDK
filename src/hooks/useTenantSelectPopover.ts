import { ChangeEvent, useEffect, useState } from "react"
import { useSessionStorage } from 'react-use'
import { useConfig } from "../context"
import { Tenant, UserProfile } from "../core"
import useDebounce from "./useDebounce"
import { TenantSelectPopoverPaginationData } from "./useTenantSelectPopover.types"


interface UseTenantSelectPopoverProps {
  userProfile: UserProfile | null
  tenants: Tenant[]
  onChangeTenantId: (tenantId: string) => void
}

const useTenantSelectPopover = ({ tenants, userProfile, onChangeTenantId }: UseTenantSelectPopoverProps) => {
  const [tenantIdToUpdate, setTenantIdToUpdate] = useState<number>(-1)
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