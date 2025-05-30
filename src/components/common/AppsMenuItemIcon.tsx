import { ColorMode } from "@chakra-ui/system"
import { ExternalAppData } from "../../core"
import AppsMenuItemExtendedIcon from "./AppsMenuItemExtendedIcon"
import AppsMenuItemSimpleIcon from "./AppsMenuItemSimpleIcon"

interface AppsMenuItemIconProps {
    colorMode: ColorMode
    data: ExternalAppData
}

const AppsMenuItemIcon = ({ colorMode, data }: AppsMenuItemIconProps) => {
    return (
        <>
            {data.darkBackgroundTileUrl === data.lightBackgroundTileUrl && data.darkIconUrl === data.lightIconUrl?
                <AppsMenuItemSimpleIcon data={data} />
                :
                <AppsMenuItemExtendedIcon colorMode={colorMode} data={data} />}
        </>
    )
}

export default AppsMenuItemIcon
