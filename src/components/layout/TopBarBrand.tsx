import { Flex, Image, useColorModeValue } from "@chakra-ui/react"
import useImagesLinkUrl from "../../hooks/useImagesLinkUrl"
import modeColors from "../../themes/baseTheme/modeColors"
import TopBarBrandDescriptor from "./TopBarBrandDescriptor"

interface TopBarBrandProps {
    imageUrl?: string
    appName?: string
    onClick?: () => void
}

const TopBarBrand = ({ imageUrl, appName, onClick }: TopBarBrandProps) => {
    const { colorbluea } = modeColors
    const bg = useColorModeValue(colorbluea.light, colorbluea.dark)
    const { getAssetsUrl } = useImagesLinkUrl()

    return (
        <Flex overflow='hidden' bg={bg} h='full' position='relative' w={appName? '500px' : 'auto'}>
            <Image 
                position='absolute'
                h='full'
                w='52px'
                src={`${getAssetsUrl()}/acme.jpg`}
                zIndex='3'
                alt='EdFi Logo' />
            <Flex position='absolute' bg='white' h='100%' w='200px' style={{ rotate: '-59deg' }} left={appName? '-21%' : '-42%'} />
            {onClick?  
                <Flex onClick={onClick} display='flex' cursor='pointer' w='auto'>
                    <TopBarBrandDescriptor 
                        imageUrl={imageUrl}
                        appName={appName} />
                </Flex> : 
                <TopBarBrandDescriptor 
                    imageUrl={imageUrl}
                    appName={appName} />}
        </Flex>
    )
}

export default TopBarBrand