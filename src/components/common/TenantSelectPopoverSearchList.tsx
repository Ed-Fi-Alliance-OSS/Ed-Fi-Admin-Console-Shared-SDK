import { Button, Flex, Spinner, Text, Tooltip } from "@chakra-ui/react"
import { Tenant } from '../../core'

interface TenantSelectPopoverSearchListProps {
    filteredList: Tenant[]
    isChangingTenant: boolean 
    tenantIdToUpdate: number 
    handleChangeTenantId: (tenantId: Tenant) => void
}

const TenantSelectPopoverSearchList = ({ filteredList, tenantIdToUpdate, isChangingTenant, handleChangeTenantId }: TenantSelectPopoverSearchListProps) => {
    return (
        <Flex flexDir='column' marginTop='15px' h='100px' overflowY='scroll' w='full' style={{ scrollbarColor: "#3D5EFC #EFF4F6", scrollbarWidth: "thin" }}>
            {filteredList.map(tenant => 
                <Button
                    aria-label={`Select ${tenant.document.name} tenant`}
                    display='flex'
                    color="gray.800"
                    justifyContent='space-between'
                    isDisabled={isChangingTenant}
                    size='sm'
                    padding='10px 10px'
                    w='full'
                    _hover={{ backgroundColor: 'gray.100' }}
                    key={tenant.tenantId}
                    onClick={() => handleChangeTenantId(tenant)}>
                        <Tooltip 
                            hasArrow 
                            label={<Flex color='white' flexDir='column' w='full'>
                                <Text color='white' fontFamily='Poppins'>Tenant ID: {tenant.tenantId}</Text>
                                <Text color='white' fontFamily='Poppins'>Org ID: {tenant.document.name}</Text>
                            </Flex>} 
                            bg='black' 
                            fontSize='12px' 
                            color="white">
                                <Text color='gray.800'>
                                    {tenant.document.name.length < 23? tenant.document.name : tenant.document.name.slice(0, 24) + '...'}
                                </Text>
                        </Tooltip>
                        { tenant.tenantId === tenantIdToUpdate && <Spinner size='sm' /> }
                </Button>
            )}
        </Flex>
    )
}

export default TenantSelectPopoverSearchList