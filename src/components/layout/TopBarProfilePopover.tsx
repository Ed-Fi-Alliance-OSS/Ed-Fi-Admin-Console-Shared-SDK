import { Button, Flex, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverTrigger, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { ExternalAppsContext, useConfig } from '../../context'
import { ExternalAppData, UserProfile } from '../../core'
import useHelpLink from '../../hooks/useHelpLink'
import modeColors from '../../themes/baseTheme/modeColors'
import { CommonModal } from '../common'

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
  // const { showEdxModal, hideEdxModal, openEdxModal } = useEdxModal()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const {config} = useConfig()

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
              {profileData ? profileData?.firstName?.[0]?.toUpperCase() ?? '' : 'GS'}
            </Flex>
            <Flex direction='column' justifyContent='center' marginLeft='10px' h='64px'>
              <Text
                fontSize='xl'
                fontWeight='bold'>{profileData ? `${profileData.firstName} ${profileData.lastName}` : 'Guest'}</Text>
              <Text
                fontSize='xs'
                fontFamily='Poppins'
                color={emailColor}>{profileData ? profileData.email : 'guest@mail.com'}</Text>
            </Flex>
          </Flex>
        </PopoverBody>
        <PopoverFooter borderTop='none' color='black' padding='0'>
          <Flex bg={lineColor} marginBottom='10px' h='1px' w='full' />
          <Flex flexDir='column' w='full'>
            {/* <UserProfileModal 
                            userProfileData={profileData}
                            mode="simple"
                            show={showEdxModal}
                            onClose={hideEdxModal} /> */}
            <Button
              as='a'
              href={`${config.auth.authority}account?redirect_uri=${window.location.origin}${config.app.basePath}`}
              target='_blank'
              display='flex'
              justifyContent='flex-start'
              color='black'
              textAlign='start'
              fontFamily='Poppins'
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
                            fontFamily='Poppins'
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
                            fontFamily='Poppins'
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
          {profileData ?
            <Button
              aria-label="Log out"
              onClick={onOpen}
              border='none'
              display='flex'
              fontFamily='Poppins'
              justifyContent='flex-start'
              fontSize='xs'
              h='auto'
              color={logoutColor}
              _hover={{ background: 'none', textDecor: 'underline' }}>
              {'Log out'}
            </Button>
            :
            <Button
              aria-label="Sign in"
              onClick={onLogIn}
              border='none'
              fontSize='xs'
              fontFamily='Poppins'
              display='flex'
              justifyContent='flex-start'
              h='auto'
              w='auto'
              padding='0'
              color={loginColor}
              _hover={{ background: 'none', textDecor: 'underline' }}>
              {'Sign in'}
            </Button>}
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default TopBarProfilePopover