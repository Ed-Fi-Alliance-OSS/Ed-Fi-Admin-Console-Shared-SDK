import { Flex, Spinner, Img, Text, useColorMode } from "@chakra-ui/react";
import { AnimatePresence, motion, Variants } from 'framer-motion';
import useImagesLinkUrl from "../../hooks/useImagesLinkUrl";


interface LoadingWindowProps {
    loading: boolean 
    state: string
    delay: number
}

const LoadingScreen = ({ loading, delay, state }: LoadingWindowProps) => {
    const { colorMode } = useColorMode()
    const { getAssetsUrl } = useImagesLinkUrl()

    const variants: Variants = {
        "animate": {
            opacity: 1
        },
        "exit": {
            opacity: 0,
            transition: { delay }
        }
    }

    return (
        <AnimatePresence initial={false}>
            {loading && <motion.div 
                id='container-load'
                animate="animate"
                exit='exit'
                variants={variants}
                style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'fixed',
                    top: 0,
                    height: '100vh',
                    width: '100vw',
                    zIndex: 1000 }}>
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
                                            {/* <Img 
                                                src={`${getAssetsUrl()}/ed-fi.jfif`}
                                                h='full'
                                                w='50px'
                                                alt="ed fi logo symbol" /> */}
                                            <Img 
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
            </motion.div>}
        </AnimatePresence>
    );
}
 
export default LoadingScreen