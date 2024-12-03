import { CheckCircleIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Spinner, Text, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { useConfig } from '../../context'
import { UserProfile } from "../../core"
import useTenantSelectPopover from "../../hooks/useTenantSelectPopover"
import TenantSelectPopoverPaginationControls from "./TenantSelectPopoverPaginationControls"
import TenantSelectPopoverSearchBar from "./TenantSelectPopoverSearchBar"
import TenantSelectPopoverSearchList from "./TenantSelectPopoverSearchList"

interface TenantSelectPopoverProps {
    userProfile: UserProfile | null
    onChangeTenantId: (tenantId: string) => void
}

const TenantSelectPopover = ({ userProfile, onChangeTenantId }: TenantSelectPopoverProps) => {
    const {config} = useConfig()
    const bg = useColorModeValue('white', 'blue.600')
    const textColor = useColorModeValue('gray.800', 'white')
    const textBg = useColorModeValue('gray.100', 'blue.800')
    const selectedColor = useColorModeValue("blue.500", "blue.500")
    const tenantTextColor = useColorModeValue('gray.600', 'gray.300')

    const {
        tenantIdToUpdate,
        showSearchBar,
        paginationData,
        isChangingTenant,
        searchText,
        foundNoResults,
        topItemsList,
        filteredList,
        handleChangeTenantId,
        findCurrentTenant,
        onSearch,
        onLoadMoreItems,
        isSelectedTenantId
    } = useTenantSelectPopover({ userProfile, onChangeTenantId })
    const tenantBtnLabel = 'District/Charter School'

    if (!config.app.multiTenancy) {
      return null
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label={tenantBtnLabel}
                    color='gray.400'
                    ml='10px'
                    size='sm'>
                        <Text
                            fontWeight='bold'
                            color='gray.600'>
                                Tenant Instance:
                        </Text>
                        <Flex alignItems='center' border='2px' borderColor='gray.300' borderRadius='4px' py='5px' px='10px' ml='10px'>
                            <Text 
                                size='xs'
                                color={tenantTextColor}
                                fontFamily='Open sans'
                                fontWeight='light'>
                                    {findCurrentTenant()}
                            </Text>
                            <ChevronDownIcon
                                fontSize='20px' 
                                marginLeft='10px' 
                                aria-hidden="true" focusable="false" />
                        </Flex>
                </Button>
            </PopoverTrigger>
            <PopoverContent aria-label={`${tenantBtnLabel} Select`} bg={bg} w='268px' zIndex='3'>
                <PopoverBody padding='16px 16px'>
                    <Flex flexDir='column' marginTop='0px' w='full'>
                        {topItemsList.map(tenant => 
                            <Button
                                aria-label={`Select ${tenant.organizationName} tenant`}
                                display='flex'
                                color={isSelectedTenantId(tenant.tenantId, userProfile?.tenantId)? selectedColor : textColor}
                                justifyContent='space-between'
                                isDisabled={isChangingTenant}
                                size='sm'
                                padding='0 10px'
                                w='full'
                                _hover={{ backgroundColor: textBg }}
                                key={tenant.tenantId}
                                onClick={() => handleChangeTenantId(tenant.tenantId)}>
                                    <Tooltip 
                                        hasArrow 
                                        label={<Flex color='white' flexDir='column' w='full'>
                                            <Text color='white' fontFamily='Open sans'>Tenant ID: {tenant.tenantId}</Text>
                                            <Text color='white' fontFamily='Open sans'>Org ID: {tenant.organizationIdentifier}</Text>
                                        </Flex>} 
                                        bg='black' 
                                        fontSize='12px' 
                                        color="white">
                                            <Text color={isSelectedTenantId(tenant.tenantId, userProfile?.tenantId)? selectedColor : textColor }>
                                                {tenant.organizationName.length < 23? tenant.organizationName : tenant.organizationName.slice(0, 24) + '...'}
                                            </Text>
                                    </Tooltip>
                                    { isSelectedTenantId(tenant.tenantId, userProfile?.tenantId) && 
                                        <CheckCircleIcon 
                                            color={selectedColor}
                                            fontSize='14px' /> }
                                    { tenant.tenantId === tenantIdToUpdate && <Spinner size='sm' /> }
                            </Button>
                        )}
                    </Flex>
                    { showSearchBar && <>
                        <Flex h='2px' bg='gray.300' my='16px' />
                        <TenantSelectPopoverSearchBar
                            searchText={searchText}
                            onSearch={onSearch} />
                        { filteredList.length > 0 && <>
                            <TenantSelectPopoverSearchList
                                filteredList={filteredList}
                                tenantIdToUpdate={tenantIdToUpdate}
                                isChangingTenant={isChangingTenant}
                                handleChangeTenantId={handleChangeTenantId} />
                            <TenantSelectPopoverPaginationControls
                                shownItems={filteredList.length}
                                totalItems={paginationData.totalCount}
                                onLoadMoreItems={onLoadMoreItems} />
                        </> }
                        { foundNoResults && <Text 
                            color='gray.800' 
                            fontSize='12px'
                            mt='12px'>
                                Found 0 results
                            </Text> }
                    </> }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default TenantSelectPopover