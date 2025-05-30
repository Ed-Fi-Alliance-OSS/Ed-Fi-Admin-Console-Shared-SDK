import {
  Button,
  Flex,
  Text,
  Link,
  useDisclosure,
  Popover
} from '@chakra-ui/react'
import { useColorModeValue, useColorMode } from '@chakra-ui/system'
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
  const { colorMode } = useColorMode()
  const bg = useColorModeValue(colorblued.light, colorblued.dark)
  const profileIconColor = useColorModeValue('blue.900', 'white')
  const emailColor = useColorModeValue('gray.500', 'white')
  const logoutColor = useColorModeValue('red.700', 'white')
  const loginColor = useColorModeValue('blue.900', 'white')
  const lineColor = useColorModeValue('gray.200', 'blue.900')
  const { open, onClose: onModalClose, onOpen } = useDisclosure()
  const {config} = useConfig()

  const getCommunityLink = (appsList: ExternalAppData[]) => {
    const communityApp = appsList.find(app => app.applicationId === "0741a7d8-2f48-4ba2-a2c4-efb5ff6ae711")

    if (communityApp)
      return communityApp.applicationUri

    return ""
  }

  return (
    <>      <Popover.Root>
        <Popover.Trigger>
          <Flex
            as="div"
            role="button"
            tabIndex={0}
            aria-label="Open profile menu"
            border='none'
            color={profileIconColor}
            padding='0'
            cursor='pointer'
            _hover={{ opacity: 0.8 }}
            _focus={{ boxShadow: 'outline' }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.currentTarget.click();
              }
            }}
          >
            <BsPersonCircle fontSize='20px' aria-hidden="true" focusable="false" />
          </Flex>
        </Popover.Trigger>

        <Popover.Content>
          <Flex
            bg={bg}
            w='268px'
            minW='268px'
            padding='16px'
            shadow="md"
            borderRadius="md"
            position="relative">
            <Popover.Body p="0" w="full">
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

            <Flex bg={lineColor} marginTop='10px' marginBottom='10px' h='1px' w='full' />
            <Flex flexDir='column' w='full'>
              <Link
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
              </Link>
            </Flex>

            <Flex bg={lineColor} margin='10px 0' h='1px' w='full' />
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
                bg='none'
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
            </Popover.Body>
          </Flex>
        </Popover.Content>
      </Popover.Root>

      <CommonModal
        show={open}
        canClose={!isClosingSession}
        header='Log Out'
        content='Are you sure you want to log out?'
        footer={<>
          <Button
            aria-label="Cancel"
            bg='gray.600'
            onClick={onModalClose}
            disabled={isClosingSession}
            variant="solid"
            colorPalette="gray"
            size='md'>
            Cancel
          </Button>
          <Button
            aria-label="Log out"
            bg='blue.600'
            onClick={onLogOut}
            disabled={isClosingSession}
            loading={isClosingSession}
            variant="solid"
            colorPalette="blue"
            _hover={{ background: 'blue.800' }}
            marginLeft='15px'
            size='md'>
            Log Out
          </Button>
        </>}
        onClose={onModalClose} />
    </>
  )
}

export default TopBarProfilePopover
