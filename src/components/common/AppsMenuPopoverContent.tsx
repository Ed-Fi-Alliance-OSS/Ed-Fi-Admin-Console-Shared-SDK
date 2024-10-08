import { Heading, Flex, Link } from "@chakra-ui/react"
import { useContext } from "react"
import { TEEAuthDataContext } from "../../context"
import { EdxAppConfig, ExternalAppData } from "../../core"
import AppsMenu from "./AppsMenu"

interface AppsMenuPopoverContent {
    heading: string
    appsList: ExternalAppData[]
}

const selectBackToTheExchangeLink = (config: EdxAppConfig | null) => {
    if (config) {
        const backToTheExchangeUrl = config.app.launcher

        if (backToTheExchangeUrl)
            return backToTheExchangeUrl

        const exchangeBase = "https://apps.txedexchange"
        const environmentIdentifier = config.auth.redirectUri.includes(".dev") || config.auth.redirectUri.includes("localhost")? '.dev' : '.net'
        const communityRoute = '/community/dashboard'

        return `${exchangeBase}${environmentIdentifier}${communityRoute}`
    }
}

const AppsMenuPopoverContent = ({ heading, appsList }: AppsMenuPopoverContent) => {
    const { edxAppConfig } = useContext(TEEAuthDataContext)

    return (
        <>
            <Flex justifyContent='space-between' alignItems='flex-end'>
                <Heading fontSize='xl'>{heading}</Heading>
                <Link 
                    color='blue.500'
                    fontFamily='Open sans'
                    fontSize='12px'
                    mb='5px'
                    ml='10px'
                    href={selectBackToTheExchangeLink(edxAppConfig)}>Acme Service Center</Link>
            </Flex>
            <Flex marginTop='15px'>
                <AppsMenu items={appsList} />
            </Flex>
        </>
    )
}

export default AppsMenuPopoverContent