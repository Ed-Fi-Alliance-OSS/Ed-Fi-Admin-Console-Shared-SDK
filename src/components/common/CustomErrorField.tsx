import { Flex, Text } from "@chakra-ui/react"

interface CustomErrorFieldProps {
    errorMessage: string
}

const CustomErrorField = ({ errorMessage }: CustomErrorFieldProps) => {
    return (
        <Flex
            alignItems='center'
            bg='red.100'
            borderRadius='4px'
            marginTop='10px'
            marginBottom='5px'
            padding='4px 8px'
            height='20px'
            width='auto'>
                <Text
                    color='red.700'
                    fontFamily='Archivo Narrow'
                    fontWeight='400'
                    fontSize='sm'
                    lineHeight='16px'>
                        {errorMessage}
                </Text>
        </Flex>
    )
}

export default CustomErrorField
