import { Button, Flex, Heading, Input, Link, Select, Text, Field } from "@chakra-ui/react"
import { NotificationBar } from "../common"

interface SettingsModalContentWrapperProps {
    children?: JSX.Element | JSX.Element[]
    onSave: () => void
    onCancel: () => void
}

const SettingsModalContentWrapper = ({ children, onCancel, onSave }: SettingsModalContentWrapperProps) => {
    return (
        <Flex
            flexDir='column'
            bg='white'
            padding='16px'>
                <Flex alignItems='center' justifyContent='space-between' w='full'>
                    <Heading
                        fontFamily='Poppins'
                        fontWeight='bold'
                        fontSize='xl'>
                            Settings
                    </Heading>
                    <Flex>
                        <Button
                            aria-label="Cancel"
                            onClick={onCancel}
                            size='xs'
                            borderRadius='4px'
                            variant='solid'
                            minW='72px'>
                                Cancel
                        </Button>
                        <Button
                            aria-label="Save changes"
                            onClick={onSave}
                            size='xs'
                            borderRadius='4px'
                            variant='solid'
                            ml='10px'
                            minW='68px'>
                                Save
                        </Button>
                    </Flex>
                </Flex>
                <Flex flexDir='column' w='full'>
                    {children}
                </Flex>
                <Flex flexDir='column' mt='15px' w='full'>
                    <Text fontFamily='Poppins' mt='15px'>
                        {/* cSpell:disable */}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt consequuntur, id laudantium aperiam voluptatibus non molestiae a officia provident quas mollitia ut cum, dolore ipsum.
                        {/* cSpell:enable */}
                    </Text>
                    <Flex mt='15px'>
                        <NotificationBar show={true} onClose={() => null} content="Optional Alert Block" />
                    </Flex>
                   <Text
                        fontFamily='Poppins'
                        fontWeight='bold'
                        fontSize='lg'
                        mt='20px'>
                            Optional Subheader
                   </Text>
                   <Field.Root>
                        <Field.Label>
                          <span className="settingsTextField">
                          Settings Text Field
                          </span>
                        </Field.Label>
                        <Input size='xs' placeholder="Placeholder" />
                   </Field.Root>
                   <Field.Root>
                        <Field.Label>
                          <span className="settingsTextField">
                            Settings Dropdown
                          </span>
                        </Field.Label>
                        <Select.Root name="tenant-action">
                            <Select.Trigger />
                            <Select.Content>
                            <Select.Item /*key="one"*/>
                              <Select.ItemText>Tenant Action</Select.ItemText>
                            </Select.Item>

                            </Select.Content>
                        </Select.Root>
                   </Field.Root>
                   <Flex bg='gray.300' my='15px' h='1.5px' w='full'></Flex>
                   <Text
                        fontFamily='Poppins'
                        fontWeight='bold'
                        fontSize='lg'>
                            Subheader 2
                   </Text>
                   <Text
                        fontFamily='Poppins'
                        fontWeight='bold'
                        mt='10px'>
                            Settings Link Out to In-App Settings
                   </Text>
                   <Link
                        color='blue.600'
                        fontSize='14px'>
                            Settings Link Out to In-App Settings
                   </Link>
                </Flex>
        </Flex>
    )
}

export default SettingsModalContentWrapper
