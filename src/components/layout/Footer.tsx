import { Flex, Image, Img, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react"
import { TEEAuthDataContext } from "../../context"
import useHelpLink from "../../hooks/useHelpLink"
import useImagesLinkUrl from "../../hooks/useImagesLinkUrl"

const Footer = () => {
    const { edxAppConfig } = useContext(TEEAuthDataContext)
    const { getHelpLink } = useHelpLink()
    const { colorMode } = useColorMode()
    const bgColor = useColorModeValue("white", "blue.900")
    const borderColor = useColorModeValue("gray.200", "blue.600")
    const textColor = useColorModeValue("blue.600", "white")
    const { getAssetsUrl } = useImagesLinkUrl()

    return (
        <footer 
            style={{ marginTop: 'auto' }}>
                <Flex 
                    bg={bgColor}
                    borderTop='2px'
                    borderTopColor={borderColor}
                    alignItems='center'
                    justifyContent='space-between'
                    h='86px'
                    w='full'
                    overflow='hidden'
                    padding='20px 45px'>
                        <Flex fontSize='sm'>
                            <Link 
                                href="https://txedexchange.net/terms-privacy" 
                                target="_blank"
                                _notFirst={{ marginLeft: '25px' }}>
                                    <Text
                                        color={textColor}
                                        fontFamily='Poppins'
                                        fontWeight='600'
                                        size='sm'>
                                            Terms and Data Privacy
                                    </Text>
                            </Link>
                            { edxAppConfig && edxAppConfig.app && edxAppConfig.app.helpLinkUrl && <Link 
                                href={getHelpLink()} 
                                target="_blank"
                                _notFirst={{ marginLeft: '25px' }}>
                                    <Text
                                        color={textColor}
                                        fontFamily='Poppins'
                                        fontWeight='600'
                                        size='sm'>
                                            Need Help?
                                    </Text>
                            </Link> }
                        </Flex>
                        <Flex 
                            position='relative'
                            h='full'>
                                <Flex 
                                    flexDir='column'
                                    marginRight='100px'>
                                        <Img 
                                            src={`${getAssetsUrl()}/acme.jpg`}
                                            w='70px'
                                            alt='Powered by Acme Service Center' />
                                </Flex>
                                <Image 
                                    position='absolute'
                                    top='-86px'
                                    right='-30px'
                                    src={ colorMode === 'light'? `${getAssetsUrl()}/footer-symbol-light.svg` : `${getAssetsUrl()}/footer-symbol-dark.svg` }
                                    h='150px'
                                    w='160px'
                                    alt="footer exchange symbol" />
                        </Flex>
                </Flex>
        </footer>
    )
}

export default Footer