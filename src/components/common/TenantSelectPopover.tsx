import { FaCheckCircle, FaChevronDown } from "react-icons/fa"
import { Button, Flex, Popover, Spinner, Text, Tooltip, Box } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/system"
import { useConfig } from '../../context'
import { Tenant, UserProfile } from "../../core"
import useTenantSelectPopover from "../../hooks/useTenantSelectPopover"
import TenantSelectPopoverPaginationControls from "./TenantSelectPopoverPaginationControls"
import TenantSelectPopoverSearchBar from "./TenantSelectPopoverSearchBar"
import TenantSelectPopoverSearchList from "./TenantSelectPopoverSearchList"

interface TenantSelectPopoverProps {
    userProfile: UserProfile | null
    tenants: Tenant[]
    onChangeTenantId: (tenantId: string) => void
}

const TenantSelectPopover = ({ tenants, userProfile, onChangeTenantId }: TenantSelectPopoverProps) => {
    const {config} = useConfig()
    const bg = useColorModeValue('white', 'blue.700')
    const borderColor = useColorModeValue('gray.200', 'blue.600')
    const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.15)', 'rgba(0, 0, 0, 0.3)')
    const textColor = useColorModeValue('gray.800', 'white')
    const textBg = useColorModeValue('gray.50', 'blue.600')
    const hoverBg = useColorModeValue('blue.50', 'blue.600')
    const selectedColor = useColorModeValue("blue.500", "blue.400")
    const selectedBg = useColorModeValue("blue.50", "blue.700")
    const tenantTextColor = useColorModeValue('gray.700', 'gray.200')
    const triggerBg = useColorModeValue('white', 'blue.800')
    const triggerBorderColor = useColorModeValue('gray.300', 'blue.600')
    const triggerHoverBg = useColorModeValue('gray.50', 'blue.700')

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
        // onLoadMoreItems,
        isSelectedTenantId,
        selectedTenant
    } = useTenantSelectPopover({ tenants, userProfile, onChangeTenantId })
    const tenantBtnLabel = 'District/Charter School'

    function getSelectedTenant() {
        if (!selectedTenant) {
            return
        }
        return tenants.find(tenant => tenant.document.name === selectedTenant)
    }    if (!config.app.multiTenancy) {
      return null
    }

    return (
        <Popover.Root>
            <Popover.Trigger>
                <Button
                    aria-label={tenantBtnLabel}
                    bg={triggerBg}
                    borderWidth="1px"
                    borderColor={triggerBorderColor}
                    borderRadius="md"
                    color='gray.600'
                    ml='10px'
                    size='sm'
                    _hover={{
                        bg: triggerHoverBg,
                        borderColor: selectedColor,
                        transform: 'translateY(-1px)',
                        shadow: 'sm'
                    }}
                    transition="all 0.2s ease-in-out">
                        <Text
                            fontWeight='600'
                            color='gray.700'>
                                Tenant Instance:
                        </Text>
                        <Flex
                            alignItems='center'
                            border='1px'
                            borderColor={triggerBorderColor}
                            borderRadius='6px'
                            py='6px'
                            px='12px'
                            ml='10px'
                            bg={triggerBg}
                            minW="150px">                            <Text
                                fontSize='sm'
                                color={tenantTextColor}
                                fontFamily='Poppins'
                                fontWeight='500'
                                truncate
                                maxW="120px">
                                    {findCurrentTenant()}
                            </Text>
                            <FaChevronDown
                                fontSize='12px'
                                style={{ marginLeft: 'auto', transition: 'transform 0.2s ease-in-out' }}
                                aria-hidden="true"
                                focusable="false" />
                        </Flex>
                </Button>
            </Popover.Trigger>
            <Popover.Content>
                <Box
                    bg={bg}
                    w='300px'
                    maxH='400px'
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    shadow="xl"
                    zIndex='1000'
                    aria-label={`${tenantBtnLabel} Select`}
                    style={{
                        boxShadow: `0 10px 25px ${shadowColor}`,
                    }}>
                    <Popover.Body padding='0'>
                        <Box p='16px' borderBottom="1px" borderColor={borderColor}>
                            <Text
                                fontSize="md"
                                fontWeight="600"
                                color={textColor}
                                fontFamily="Poppins">
                                Select Tenant
                            </Text>
                        </Box>
                        <Box maxH="300px" overflowY="auto">
                            <Flex flexDir='column' p='8px' w='full'>
                                {topItemsList.map(tenant => (
                                    <Button
                                        aria-label={`Select ${tenant.document.name} tenant`}
                                        display='flex'
                                        variant="ghost"
                                        justifyContent='space-between'
                                        alignItems="center"
                                        disabled={isChangingTenant}
                                        size='md'
                                        py='12px'
                                        px='12px'
                                        w='full'
                                        borderRadius="md"
                                        bg={isSelectedTenantId(tenant, getSelectedTenant()) ? selectedBg : 'transparent'}
                                        color={isSelectedTenantId(tenant, getSelectedTenant()) ? selectedColor : textColor}
                                        _hover={{
                                            bg: isSelectedTenantId(tenant, getSelectedTenant()) ? selectedBg : hoverBg,
                                            transform: 'translateX(4px)',
                                            transition: 'all 0.2s ease-in-out'
                                        }}
                                        _disabled={{
                                            opacity: 0.6,
                                            cursor: 'not-allowed'
                                        }}
                                        transition="all 0.2s ease-in-out"
                                        key={tenant.tenantId}
                                        onClick={() => handleChangeTenantId(tenant)}
                                        title={`Tenant ID: ${tenant.tenantId}, Org ID: ${tenant.document.name || tenant.tenantId}`}>                                        <Text
                                            color={isSelectedTenantId(tenant, getSelectedTenant()) ? selectedColor : textColor}
                                            fontWeight={isSelectedTenantId(tenant, getSelectedTenant()) ? "600" : "400"}
                                            fontSize="sm"
                                            truncate
                                            maxW="200px">
                                            {tenant.document.name || tenant.tenantId}
                                        </Text>
                                        <Flex alignItems="center" gap={2}>
                                            { isSelectedTenantId(tenant, getSelectedTenant()) &&
                                                <FaCheckCircle
                                                    color={selectedColor}
                                                    fontSize='16px' /> }
                                            { tenant.tenantId === tenantIdToUpdate && <Spinner size='sm' color={selectedColor} /> }                                        </Flex>
                                    </Button>
                                ))}
                            </Flex>
                        </Box>
                        { showSearchBar && (
                            <>
                                <Box px='16px' py='12px' borderTop="1px" borderColor={borderColor}>
                                    <TenantSelectPopoverSearchBar
                                        searchText={searchText}
                                        onSearch={onSearch} />
                                </Box>
                                { filteredList.length > 0 && (
                                    <>
                                        <Box maxH="200px" overflowY="auto">
                                            <TenantSelectPopoverSearchList
                                                filteredList={filteredList}
                                                tenantIdToUpdate={tenantIdToUpdate}
                                                isChangingTenant={isChangingTenant}
                                                handleChangeTenantId={handleChangeTenantId} />
                                        </Box>
                                        <Box px='16px' py='12px' borderTop="1px" borderColor={borderColor}>
                                            <TenantSelectPopoverPaginationControls
                                                shownItems={filteredList.length}
                                                totalItems={paginationData.totalCount}
                                                onLoadMoreItems={() => {}} />
                                        </Box>
                                    </>
                                ) }
                                { foundNoResults && (
                                    <Box px='16px' py='12px' borderTop="1px" borderColor={borderColor}>
                                        <Text
                                            color={textColor}
                                            fontSize='sm'
                                            textAlign="center"
                                            fontFamily="Poppins">
                                            No results found
                                        </Text>
                                    </Box>
                                ) }
                            </>
                        ) }
                    </Popover.Body>
                </Box>
            </Popover.Content>
        </Popover.Root>
    )
}

export default TenantSelectPopover
