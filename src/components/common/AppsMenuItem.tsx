import { Box, Text, GridItem, Link } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/system"
import { ExternalAppData } from "../../core"
import AppsMenuItemIcon from "./AppsMenuItemIcon"

interface AppsMenuItemProps {
    data: ExternalAppData
}

const applicationNameText = (applicationName: string) => {
    if (applicationName.length > 31) {
        console.log("applicationName:", applicationName.slice(0, 26) + '...')
        return applicationName.slice(0, 15) + '...'
    }

    return applicationName
}

const AppsMenuItem = ({ data }: AppsMenuItemProps) => {
    const { colorMode } = useColorMode()

    return (
        <GridItem flexDirection='column' w='50px'>
            <Link
                href={data.applicationUri}
                target={data.openInNewWindow? "_blank" : "_self"}
                referrerPolicy="no-referrer"
                textDecoration='none'>
                     {data.lightIconUrl?
                        <AppsMenuItemIcon colorMode={colorMode} data={data} /> :
                        <Box
                            borderRadius='md'
                            bg='blue.500'
                            h='50px'
                            w='50px' />}
                    <Text
                        display='inline-block'
                        overflow='hidden'
                        fontWeight='600'
                        fontSize='8px'
                        lineHeight='10px'
                        marginTop='5px'
                        transition="all 0.3s ease-in-out"
                        h='30px'
                        w='full'
                        overflowY='hidden'>
                            {applicationNameText(data.applicationName)}
                    </Text>
            </Link>
        </GridItem>
    )
}

export default AppsMenuItem
