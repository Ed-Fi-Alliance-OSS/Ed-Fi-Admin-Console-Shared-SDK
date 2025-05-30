import { MdInfoOutline as InfoIcon } from "react-icons/md"
import { Flex, Text, Button, Box } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/system"
interface NotificationBarProps {
    content: JSX.Element | string
    show: boolean
    onClose: () => void
}

const NotificationBar = ({ content, show, onClose }: NotificationBarProps) => {
    const { colorMode } = useColorMode()
    const bg = colorMode === 'light' ? "blue.100" : "blue.500"
    const textColor = colorMode === 'light' ? "blue.600" : "white"
    const closeBtnColor = colorMode === 'light' ? 'gray.700' : 'white'

    return (
        <>
            {show && <Flex
                bg={bg}
                alignItems='center'
                justifyContent='center'
                padding='0px 40px'
                h='52px'
                w='full'>
                    <Flex
                        color={textColor}
                        fontSize='sm'
                        alignItems='center'
                        marginLeft='auto'
                        marginRight='auto'
                        justifyContent='center'>
                            <Box marginRight='10px'>
                                <InfoIcon fontSize='md' />
                            </Box>
                            { typeof(content) === 'string'?
                                <Text
                                    color={textColor}
                                    fontFamily='Poppins'>{content}</Text> : content }
                    </Flex>
                    <Button
                        variant="ghost"
                        aria-label="Close notification bar"
                        color={closeBtnColor}
                        justifySelf='flex-end'
                        size='sm'
                        onClick={onClose}>×</Button>
            </Flex> }
        </>
    )
}

export default NotificationBar
