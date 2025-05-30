import { Card, Flex, Heading, Link, Text, Image } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/system'
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
    <Card.Root
      display='flex'
      flexDirection='row'
      borderRadius='8px'
      marginTop='15px'
      marginRight='15px'
      boxShadow='lg'
      bg={bg}
      h='200px'
      w='643px'
      position='relative'
      cursor='pointer'
      onClick={() => window.location.href = actionLink}>
      <Card.Body
        display='flex'
        flexDirection='row'
        padding='0'
        h='full'
        w='full'>
        <Flex h='full' w='200px' align='center' justify='center'>
          {imageUrl ?
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
        </Flex>
        <Flex
          fontSize='sm'
          justifyContent='center'
          alignItems='center'
          padding='38px 38px'
          h='full'
          w='443px'
          flexDir='column'>
          <Card.Title as={Heading}
            fontWeight='600'
            fontSize='sm'>{description}</Card.Title>
          <Text
            color='gray.600'
            fontFamily='Poppins'
            fontWeight='400'
            mt='5px'
            fontSize='sm'>{text}</Text>
          <Flex
            position='absolute'
            top='8px'
            right='8px'
            zIndex='2'
            onClick={(e) => e.stopPropagation()}>
            <AppItemCardOptionsPopover
              appId={appId}
              description={description}
              actionLink={actionLink}
              bookmarked={bookmarked}
              onBookmark={onBookmark} />
          </Flex>
        </Flex>
      </Card.Body>
    </Card.Root>
    )
}

export default AppItemCardXl
