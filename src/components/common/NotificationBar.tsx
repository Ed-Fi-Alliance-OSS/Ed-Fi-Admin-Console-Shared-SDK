import { InfoIcon } from "@chakra-ui/icons"
import { CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react"

interface NotificationBarProps {
    content: JSX.Element | string
    show: boolean
    onClose: () => void
}

const NotificationBar = ({ content, show, onClose }: NotificationBarProps) => {
    const bg = useColorModeValue("blue.100", "blue.500")
    const textColor = useColorModeValue("blue.600", "white")
    const closeBtnColor = useColorModeValue('gray.700', 'white')

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
                            <InfoIcon 
                                fontSize='md'
                                marginRight='10px' />
                            { typeof(content) === 'string'? 
                                <Text 
                                    color={textColor}
                                    fontFamily='Poppins'>{content}</Text> : content }
                    </Flex>
                    <CloseButton 
                        aria-label="Close notification bar"
                        color={closeBtnColor}
                        justifySelf='flex-end'
                        size='sm'
                        onClick={onClose} />
            </Flex> }
        </>
    )
}

export default NotificationBar