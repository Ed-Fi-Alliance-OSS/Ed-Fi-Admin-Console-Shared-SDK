import { Button, Flex, Spinner, Text } from "@chakra-ui/react"
import { Tooltip } from "@chakra-ui/tooltip"
import { Tenant } from '../../core'

interface TenantSelectPopoverSearchListProps {
    filteredList: Tenant[]
    isChangingTenant: boolean
    tenantIdToUpdate: number
    handleChangeTenantId: (tenantId: Tenant) => void
}

const TenantSelectPopoverSearchList = ({ filteredList, tenantIdToUpdate, isChangingTenant, handleChangeTenantId }: TenantSelectPopoverSearchListProps) => {
    return (
        <Flex flexDir="column" mt={4} h="100px" overflowY="auto" w="full" css={{
            "::-webkit-scrollbar": { width: "8px" },
            "::-webkit-scrollbar-track": { background: "#EFF4F6" },
            "::-webkit-scrollbar-thumb": { background: "#3D5EFC", borderRadius: "4px" }
        }}>
            {filteredList.map(tenant =>
                <Button
                    aria-label={`Select ${tenant.document.name} tenant`}
                    display="flex"
                    color="gray.800"
                    justifyContent="space-between"
                    disabled={isChangingTenant}
                    size="sm"
                    px={2} py={2}
                    w="full"
                    _hover={{ bg: "gray.100" }}
                    key={tenant.tenantId}
                    title={`Tenant ID: ${tenant.tenantId}, Org ID: ${tenant.document.name}`}
                    onClick={() => handleChangeTenantId(tenant)}>
                      <Text color="gray.800" maxW="200px">
                            {tenant.document.name}
                        </Text>
                        { tenant.tenantId === tenantIdToUpdate && <Spinner size='sm' /> }
                </Button>
            )}
        </Flex>
    )
}

export default TenantSelectPopoverSearchList
