import { Text } from "@chakra-ui/react"

interface CustomFormHeaderProps {
    text: string
}

const CustomFormHeader = ({ text }: CustomFormHeaderProps) => {
    return (
        <Text
            borderRadius='4px'
            bg='gray.100'
            fontFamily={{ base: 'Poppins' }}
            fontWeight={{ base: '700' }}
            padding='8px 16px'
            width='full'>
                {text}
        </Text>
    )
}

export default CustomFormHeader
