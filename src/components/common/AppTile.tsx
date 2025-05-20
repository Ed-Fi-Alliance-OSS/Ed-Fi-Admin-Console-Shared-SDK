import { Flex, Image, Link, Text } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/system"

interface AppItemCardSmProps {
    imageUrl: string | null
    lightBackgroundUrl?: string
    darkImageUrl?: string
    darkBackgroundUrl?: string
    overlayColor: string
    description: string
    actionLink: string
    tileSize?: 'default' | 'small'
}

const small = '70px'
const def = '102px'


const AppTile = ({ tileSize, imageUrl, lightBackgroundUrl, overlayColor, darkBackgroundUrl, darkImageUrl, description, actionLink }: AppItemCardSmProps) => {
    const { colorMode } = useColorMode()

    const selectSize = () => {
        return !tileSize || tileSize === 'default'? def : small
    }

    return (
        <Link href={actionLink} display='flex' w={selectSize()}>
            <Flex flexDir='column' h='full' w='full'>
                {imageUrl?
                    <Flex
                        backgroundImage={colorMode === 'light'? lightBackgroundUrl : darkBackgroundUrl}
                        backgroundPosition='center'
                        backgroundRepeat='no-repeat'
                        backgroundSize='cover'
                        borderRadius='8px'
                        position='relative'
                        alignItems='center'
                        justifyContent='center'
                        transition='all 1s ease-in-out'
                        _hover={{
                            backgroundSize: '200%',
                            _before: {
                              opacity: 0.3,
                            }
                        }}
                        h={selectSize()}
                        w={selectSize()}
                        zIndex='2'>
                            <>
                                <Flex
                                    borderRadius='8px'
                                    alignItems='center'
                                    justifyContent='center'
                                    h='full'
                                    w='full'>
                                        <Flex
                                            borderRadius='8px'
                                            backgroundColor={overlayColor}
                                            opacity='0.8'
                                            id='innerOverlay'
                                            h='full'
                                            w='full'>
                                        </Flex>
                                        <Image
                                            position='absolute'
                                            h='50%'
                                            src={colorMode === 'light'? imageUrl : darkImageUrl}
                                            alt='app image' />
                                </Flex>
                            </>
                    </Flex> :
                    <Flex
                        bg='blue.500'
                        borderRadius='8px'
                        h={selectSize()}
                        w={selectSize()} />}
                <Text
                    mt={selectSize() === '102px'? '16px' : '8px'}
                    fontSize={selectSize() ===  '102px'? '12px' : '10px'}
                    fontWeight='600'>{description}</Text>
            </Flex>
        </Link>
    )
}

export default AppTile
