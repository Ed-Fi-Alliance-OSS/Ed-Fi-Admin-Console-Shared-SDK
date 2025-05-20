import { Flex, Spinner, Image, Text, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/system";
import useImagesLinkUrl from "../../hooks/useImagesLinkUrl";


interface LoadingWindowProps {
    loading: boolean
    state: string
    delay: number
}

const LoadingScreen = ({ loading, delay, state }: LoadingWindowProps) => {
    const { colorMode } = useColorMode()
    const { getAssetsUrl } = useImagesLinkUrl()

    return (
        <Box
            id='container-load'
            pointerEvents={loading ? 'auto' : 'none'}
            opacity={loading ? 1 : 0}
            transition={`opacity 0.4s ease ${delay || 0}s`}
            position='fixed'
            top={0}
            left={0}
            height='100vh'
            width='100vw'
            zIndex={1000}
            display='flex'
            alignItems='center'
            justifyContent='center'
        >
            <Flex
                bg={colorMode === 'light'? 'white' : 'blue.900'}
                justifyContent='center'
                h='100vh'
                w='100vw'>
                <Flex
                    flexDir='column'
                    alignItems='center'
                    justifyContent='center'
                    marginBottom='150px'>
                        <Flex
                            alignItems='center'
                            justifyContent='center'
                            h='50px'>
                                <Image
                                    src={ colorMode === 'light'? `${getAssetsUrl()}/acme.jpg` : `${getAssetsUrl()}/exchange-word-white.svg`}
                                    marginTop='30px'
                                    h='full'
                                    w='full'
                                    alt="Ed-Fi" />
                        </Flex>
                        <Spinner
                            color={colorMode === 'light'? 'blue.900' : 'white'}
                            size='xl'
                            marginTop='50px' />
                        <Text marginTop='20px'>{ state }</Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default LoadingScreen
