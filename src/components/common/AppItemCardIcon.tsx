import { Flex, Image } from "@chakra-ui/react"
import { ColorMode } from "@chakra-ui/system"
import AppItemCardExtendedIcon from "./AppItemCardExtendedIcon"
import AppItemCardSimpleIcon from "./AppItemCardSimpleIcon"

interface AppsMenuItemIconProps {
    colorMode: ColorMode
    darkBackgroundTileUrl: string
    lightBackgroundTileUrl: string
    darkIconUrl: string
    lightIconUrl: string
    size?: 'sm' | 'xl'
}

const AppItemCardIcon = ({ colorMode, darkBackgroundTileUrl, lightBackgroundTileUrl, lightIconUrl, darkIconUrl, size }: AppsMenuItemIconProps) => {
    return (
        <>
            {darkBackgroundTileUrl === lightBackgroundTileUrl && darkIconUrl === lightIconUrl?
                <AppItemCardSimpleIcon lightIconUrl={lightIconUrl} />
                :
                <AppItemCardExtendedIcon
                    colorMode={colorMode}
                    lightIconUrl={lightIconUrl}
                    lightBackgroundTileUrl={lightBackgroundTileUrl}
                    darkBackgroundTileUrl={darkBackgroundTileUrl}
                    darkIconUrl={darkIconUrl}
                    size={size? size : 'sm'} />}
        </>
    )
}

export default AppItemCardIcon
