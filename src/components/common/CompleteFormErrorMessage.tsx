import { AiOutlineInfoCircle } from "react-icons/ai"
import { Flex, Text } from "@chakra-ui/react"

const CompleteFormErrorMessage = () => {
    return (
        <Flex
            alignItems='center'
            bg='red.100'
            color='red.600'
            padding='12px 16px'
            mb='16px'
            h='88px'
            w='full'>
                <AiOutlineInfoCircle fontSize='16px' />
                <Flex flexDir='column' ml='15px' w='80%'>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='600'
                        fontSize='md'>ERROR</Text>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='400'
                        fontSize='md'
                        lineHeight='22px'>
                            Please correct the errors below and resubmit the form.
                    </Text>
                </Flex>
        </Flex>
    )
}

export default CompleteFormErrorMessage
