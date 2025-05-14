import { Button, Flex, FormControl, FormLabel, Heading, Input, Link, Select, Text } from "@chakra-ui/react"
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
                        size='xl'>
                            Settings
                    </Heading>
                    <Flex>
                        <Button 
                            aria-label="Cancel"
                            onClick={onCancel}
                            size='xs'
                            borderRadius='4px'
                            variant='secondaryBlue600'
                            minW='72px'>
                                Cancel
                        </Button>
                        <Button 
                            aria-label="Save changes"
                            onClick={onSave}
                            size='xs'
                            borderRadius='4px'
                            variant='primaryBlue600'
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
                   <FormControl>
                        <FormLabel fontFamily='Poppins' fontWeight='bold' mt='15px'>
                            Settings Text Field
                        </FormLabel>
                        <Input size='xs' placeholder="Placeholder" />
                   </FormControl>
                   <FormControl>
                        <FormLabel fontFamily='Poppins' fontWeight='bold' mt='15px'>
                            Settings Dropdown
                        </FormLabel>
                        <Select size='xs'>
                            <option value="one">Tenant Action</option>
                        </Select>
                   </FormControl>
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