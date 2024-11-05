import { Text, Flex, Popover, PopoverTrigger, Button, PopoverContent, PopoverCloseButton, PopoverBody, PopoverFooter, useColorModeValue, useDisclosure, Link } from '@chakra-ui/react'
import modeColors from '../../themes/baseTheme/modeColors'
import { BsPersonCircle } from 'react-icons/bs'
import { CommonModal } from '../common'
import { ExternalAppData, UserProfile } from '../../core'
import useEdxModal from '../../hooks/useEdxModal'
import UserProfileModal from './UserProfileModal'
import { useContext } from 'react'
import { ExternalAppsContext } from '../../context'
import useHelpLink from '../../hooks/useHelpLink'

interface TopBarProfilePopoverProps {
    profileData: UserProfile | null
    isClosingSession: boolean
    onLogIn: () => Promise<void>
    onLogOut: () => Promise<void>
}

const TopBarProfilePopover = ({ profileData, isClosingSession, onLogOut, onLogIn }: TopBarProfilePopoverProps) => {
    const { externalApps } = useContext(ExternalAppsContext)
    const { getHelpLink } = useHelpLink()
    const { colorblued } = modeColors
    const bg = useColorModeValue(colorblued.light, colorblued.dark)
    const profileIconColor = useColorModeValue('blue.900', 'white')
    const emailColor = useColorModeValue('gray.500', 'white')
    const logoutColor = useColorModeValue('red.700', 'white')
    const loginColor = useColorModeValue('blue.900', 'white')
    const lineColor = useColorModeValue('gray.200', 'blue.900')
    const { showEdxModal, hideEdxModal, openEdxModal } = useEdxModal()
    const {isOpen, onClose, onOpen } = useDisclosure()

    const getCommunityLink = (appsList: ExternalAppData[]) => {
        const communityApp = appsList.find(app => app.applicationId === "0741a7d8-2f48-4ba2-a2c4-efb5ff6ae711")

        if (communityApp)
            return communityApp.applicationUri

        return ""
    }

    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    aria-label="Open profile menu"
                    border='none'
                    color={profileIconColor}
                    padding='0'
                    variant='icon'>
                        <BsPersonCircle fontSize='20px' aria-description="Profile Icon" aria-hidden="true" focusable="false" />
                </Button>
            </PopoverTrigger>
            <PopoverContent 
                aria-label="Profile Popover"
                bg={bg} 
                w='268px' 
                minW='268px' 
                padding='16px'
                right='10px'>
                <PopoverCloseButton />
                <PopoverBody color='white' padding='0px'>
                    <Flex direction='row' height='70px' w='full'>
                        <Flex 
                            justifyContent='center' 
                            alignItems='center' 
                            borderRadius='full' 
                            color='white'
                            fontWeight='bold'
                            fontSize='xl'
                            bg='blue.500' 
                            h='64px' 
                            w='64px'>
                                { profileData? profileData.firstName[0].toUpperCase() : 'GS'}
                            </Flex>
                            <Flex direction='column' justifyContent='center' marginLeft='10px' h='64px'>
                                <Text 
                                    fontSize='xl' 
                                    fontWeight='bold'>{profileData? `${profileData.firstName} ${profileData.lastName}` : 'Guest' }</Text>
                                <Text 
                                    fontSize='xs' 
                                    fontFamily='Open sans'
                                    color={emailColor}>{profileData? profileData.email : 'guest@mail.com'}</Text>
                            </Flex>
                    </Flex>
                </PopoverBody>
                <PopoverFooter borderTop='none' color='black' padding='0'>
                    <Flex bg={lineColor} marginBottom='10px' h='1px' w='full' />
                    <Flex flexDir='column' w='full'>
                        <UserProfileModal 
                            userProfileData={profileData}
                            mode="simple"
                            show={showEdxModal}
                            onClose={hideEdxModal} />
                        <Button 
                            onClick={openEdxModal}
                            display='flex'
                            justifyContent='flex-start'
                            color='black'
                            textAlign='start'
                            fontFamily='Open sans'
                            fontWeight='400'
                            fontSize='xs'
                            marginTop='5px'
                            minW='auto'
                            w='auto'>
                                Account Info
                        </Button>
                        {/* <Link 
                            href={getCommunityLink(externalApps)}
                            display='flex'
                            justifyContent='flex-start'
                            color='black'
                            textAlign='start'
                            fontFamily='Open sans'
                            fontWeight='400'
                            fontSize='xs'
                            marginTop='5px'
                            minW='auto'
                            w='auto'>
                                Community
                        </Link> */}
                        {/* <Link 
                            href={getHelpLink()}
                            display='flex'
                            justifyContent='flex-start'
                            color='black'
                            textAlign='start'
                            fontFamily='Open sans'
                            fontWeight='400'
                            fontSize='xs'
                            marginTop='5px'
                            minW='auto'
                            w='auto'>
                                Help
                        </Link> */}
                    </Flex>
                    <Flex bg={lineColor} margin='10px 0' h='1px' w='full' />
                    <CommonModal 
                        show={isOpen} 
                        canClose={!isClosingSession}
                        header='Log Out'
                        content='Are you sure you want to log out?'
                        footer={<>
                            <Button 
                                aria-label="Cancel"
                                onClick={onClose} 
                                isDisabled={isClosingSession}
                                variant='primaryGray300'
                                size='md'>
                                    Cancel
                            </Button>
                            <Button 
                                aria-label="Log out"
                                onClick={onLogOut}
                                isDisabled={isClosingSession}
                                isLoading={isClosingSession}
                                variant='primaryBlue600'
                                _hover={{ background: 'blue.800' }}
                                marginLeft='15px'
                                size='md'>
                                    Log Out
                            </Button>
                          </>}
                        onClose={onClose} />
                    {profileData? 
                        <Button 
                            aria-label="Log out"
                            onClick={onOpen}
                            border='none' 
                            display='flex'
                            fontFamily='Open sans'
                            justifyContent='flex-start'
                            fontSize='xs'
                            h='auto' 
                            color={logoutColor}
                            _hover={{ background: 'none', textDecor: 'underline' }}>
                                { 'Log out' }
                        </Button> 
                        : 
                        <Button 
                            aria-label="Sign in"
                            onClick={onLogIn}
                            border='none' 
                            fontSize='xs'
                            fontFamily='Open sans'
                            display='flex'
                            justifyContent='flex-start'
                            h='auto' 
                            w='auto' 
                            padding='0' 
                            color={loginColor}
                            _hover={{ background: 'none', textDecor: 'underline' }}>
                                { 'Sign in' }
                        </Button>}
                </PopoverFooter>
            </PopoverContent>
        </Popover>
    )
}

export default TopBarProfilePopover