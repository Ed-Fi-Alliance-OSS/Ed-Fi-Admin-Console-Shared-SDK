import { Card, Flex, Heading, Link, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import modeColors from '../../themes/baseTheme/modeColors'
import AppItemCardIcon from './AppItemCardIcon'
import AppItemCardOptionsPopover from './AppItemCardOptionsPopover'

interface AppItemCardXlProps {
    appId: string
    imageUrl: string | null
    lightBackgroundUrl?: string 
    darkImageUrl?: string
    darkBackgroundUrl?: string
    overlayColor: string
    description: string
    text?: string 
    actionLink: string
    bookmarked: boolean
    onBookmark: (appId: string) => void
}

const AppItemCardXl = ({ appId, imageUrl, description, text, actionLink, lightBackgroundUrl, darkBackgroundUrl, darkImageUrl, overlayColor, bookmarked, onBookmark }: AppItemCardXlProps) => {
    const { colorblued } = modeColors
    const bg = useColorModeValue(colorblued.light, colorblued.dark)
    const { colorMode } = useColorMode()

    return (
        <Card 
            display='flex' 
            direction='row' 
            borderRadius='8px' 
            marginTop='15px' 
            marginRight='15px'
            shadow='lg'
            bg={bg}
            h='200px' 
            w='643px'>
                <Link href={actionLink} display='flex' h='full' w='200px'>
                    {imageUrl? 
                        <AppItemCardIcon 
                            colorMode={colorMode}
                            lightBackgroundTileUrl={lightBackgroundUrl ?? ""}
                            darkBackgroundTileUrl={darkBackgroundUrl ?? ""}
                            darkIconUrl={darkImageUrl ?? ""}
                            lightIconUrl={imageUrl ?? ""}
                            size="xl" /> : 
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
                    padding='38px 38px'
                    h='full'
                    w='443px'>
                        <Link 
                            display='flex'
                            alignItems='center'
                            href={actionLink}
                            padding='0px 0px'
                            h='full'
                            w='full'> 
                                <Flex flexDir='column' justifyContent='center'>
                                    <Heading 
                                        fontWeight='600'
                                        size='sm'>{description}</Heading>
                                    <Text 
                                        color='gray.600'
                                        fontFamily='Poppins'
                                        fontWeight='400'
                                        mt='5px'
                                        size='sm'>{text}</Text>
                                </Flex>
                        </Link>
                        <AppItemCardOptionsPopover 
                            appId={appId}
                            description={description}
                            actionLink={actionLink}
                            bookmarked={bookmarked}
                            onBookmark={onBookmark} />
                </Flex>
        </Card>
    )
}

export default AppItemCardXl