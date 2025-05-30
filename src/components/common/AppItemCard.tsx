import { Flex, Box as Card, Link, Image, Heading } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/system'
import modeColors from '../../themes/baseTheme/modeColors'
import AppItemCardIcon from './AppItemCardIcon'
import AppItemCardOptionsPopover from './AppItemCardOptionsPopover'

interface AppItemCardProps {
    appId: string
    imageUrl: string | null
    lightBackgroundUrl?: string
    darkImageUrl?: string
    darkBackgroundUrl?: string
    overlayColor: string
    description: string
    actionLink: string
    bookmarked: boolean
    onBookmark: (appId: string) => void
}

const AppItemCard = ({ appId, imageUrl, description, actionLink, lightBackgroundUrl, darkBackgroundUrl, darkImageUrl, overlayColor, bookmarked, onBookmark }: AppItemCardProps) => {
    const { colorblued } = modeColors
    const { colorMode } = useColorMode()
    const bg = colorMode === 'light' ? colorblued.light : colorblued.dark

    return (
        <Card
            display='flex'
            flexDir='row'
            borderRadius='8px'
            mt='15px'
            mr='15px'
            boxShadow='lg'
            bg={bg}
            h='102px'
            w='303px'>
                <Link href={actionLink} display='flex' h='full' w='102px'>
                    {imageUrl?
                        <AppItemCardIcon
                            colorMode={colorMode}
                            lightBackgroundTileUrl={lightBackgroundUrl ?? ""}
                            darkBackgroundTileUrl={darkBackgroundUrl ?? ""}
                            darkIconUrl={darkImageUrl ?? ""}
                            lightIconUrl={imageUrl ?? ""} /> :
                        <Flex
                            bg='blue.500'
                            borderRadius='10px 0 0 10px'
                            h='full'
                            w='full' />}
                </Link>
                <Flex
                    fontSize='sm'
                    justifyContent='center'
                    alignItems='center'
                    p='5px 10px'
                    h='full'
                    w='201px'
                    position='relative'
                    cursor='pointer'
                    onClick={() => window.location.href = actionLink}>
                        <Flex
                            fontFamily='Poppins'
                            display='flex'
                            alignItems='center'
                            p='5px'
                            h='full'
                            w='full'>
                                <Heading
                                    fontWeight='600'
                                    size='xs'>{description}</Heading>
                        </Flex>
                        <Flex
                            position='absolute'
                            top='5px'
                            right='5px'
                            onClick={(e) => e.stopPropagation()}>
                            <AppItemCardOptionsPopover
                                appId={appId}
                                description={description}
                                actionLink={actionLink}
                                bookmarked={bookmarked}
                                onBookmark={onBookmark} />
                        </Flex>
                </Flex>
        </Card>
    )
}

export default AppItemCard
