import { Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import useImagesLinkUrl from "../../hooks/useImagesLinkUrl"

interface TopBarBrandDescriptorProps {
    imageUrl?: string
    appName?: string
}

const TopBarBrandDescriptor = ({ appName, imageUrl }: TopBarBrandDescriptorProps) => {
    const textColor = useColorModeValue("blue.600", "white")
    const { colorMode } = useColorMode()
    const { getAssetsUrl } = useImagesLinkUrl()

    if (appName) {
        return (
            <Text
                color={textColor}
                fontFamily='Poppins'
                fontWeight='600'
                size='sm'
                margin='auto 0 auto 70px'>
                    {appName}
            </Text>
        ) 
    }

    if (imageUrl) {
        return (
            <Image 
                h='30px'
                margin='auto 0 auto 70px'
                src={imageUrl}
                alt='app descriptor' />)
    }

    return (
        <Image 
            h='30px'
            margin='auto 0 auto 70px'
            src={colorMode === 'light'? `${getAssetsUrl()}/acme.jpg` : `${getAssetsUrl()}/acme.jpg`}
            alt='app logo image' />)
}

export default TopBarBrandDescriptor