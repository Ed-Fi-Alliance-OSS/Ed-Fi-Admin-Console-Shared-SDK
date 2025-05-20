import { Flex, Image } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import useImagesLinkUrl from "../../hooks/useImagesLinkUrl"

interface NotificationItemLogoProps {
    data: IMessage
}

interface ApplicationImageNames {
    [key: string]: string
}

const applicationImageNames: ApplicationImageNames = {
    edx: 'tx-notification-icon.svg',
    community: 'tx-notification-icon.svg'
}

const NotificationItemLogo = ({ data }: NotificationItemLogoProps) => {
    const { getAssetsUrl } = useImagesLinkUrl()

    const getImageName = (applicationName: string) => {
        if (applicationName === 'The Community')
            return applicationImageNames.community

        return applicationImageNames.edx
    }

    if (data.payload.from) {
        const applicationImageName = applicationImageNames[data.payload.from as string]

        return (
            <Image
                src={`${getAssetsUrl()}/${getImageName(applicationImageName)}`}
                borderRadius='4px'
                h='16px'
                w='16px'
                alt={applicationImageName} />
        )
    }

    return (
        <Flex
            bg='blue.600'
            borderRadius='4px'
            h='16px'
            w='16px' />
    )
}

export default NotificationItemLogo
