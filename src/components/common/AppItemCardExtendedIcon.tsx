import { Flex, Image } from "@chakra-ui/react"
import { ColorMode } from "@chakra-ui/system"

interface AppsMenuItemExtendedIconProps {
    colorMode: ColorMode  
    darkBackgroundTileUrl: string 
    lightBackgroundTileUrl: string
    darkIconUrl: string 
    lightIconUrl: string 
    size: 'sm' | 'xl'
}

const getSize = (size: 'sm' | 'xl') => {
    return size === 'sm'? '65px' : '85px'
}

const AppItemCardExtendedIcon = ({ colorMode, lightIconUrl, darkIconUrl, lightBackgroundTileUrl, darkBackgroundTileUrl, size }: AppsMenuItemExtendedIconProps) => {

    return (
        <Flex 
            backgroundImage={ colorMode === 'light'? lightBackgroundTileUrl : darkBackgroundTileUrl} 
            borderRadius='4px'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize="cover"
            alignItems='center'
            justifyContent='center'
            h='full' 
            w='full'
            _hover={{
                '&& > img': { height: getSize(size), width: getSize(size) }
            }}>
                <Image 
                    src={ colorMode === 'light'? lightIconUrl : darkIconUrl }
                    h='65px'
                    w='65px'
                    transition="all 0.3s ease-in-out"
                    alt="app icon" />
        </Flex>
    )
}

export default AppItemCardExtendedIcon