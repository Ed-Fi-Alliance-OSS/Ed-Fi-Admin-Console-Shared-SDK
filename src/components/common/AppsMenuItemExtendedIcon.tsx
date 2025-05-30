import { Flex, Image } from "@chakra-ui/react"
import { ColorMode } from "@chakra-ui/system"
import { ExternalAppData } from "../../core"

interface AppsMenuItemExtendedIconProps {
    colorMode: ColorMode
    data: ExternalAppData
}

const AppsMenuItemExtendedIcon = ({ colorMode, data }: AppsMenuItemExtendedIconProps) => {
    return (
        <Flex
            backgroundImage={ colorMode === 'light'? data.lightBackgroundTileUrl : data.darkBackgroundTileUrl}
            borderRadius='4px'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize="cover"
            alignItems='center'
            justifyContent='center'
            h='50px'
            w='50px'>
                <Image
                    src={ colorMode === 'light'? data.lightIconUrl : data.darkIconUrl }
                    h='38px'
                    w='38px'
                    transition="all 0.3s ease-in-out"
                    _hover={{ height: '42px', width: '42px' }}
                    alt='app icon' />
        </Flex>
    )
}

export default AppsMenuItemExtendedIcon
