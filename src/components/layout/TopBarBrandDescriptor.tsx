import { Flex, Image, Link, Text, Tooltip, useColorModeValue } from "@chakra-ui/react"
import { useConfig } from '../../context'

interface TopBarBrandDescriptorProps {
  imageUrl?: string
  appName?: string
  onClick?: () => void
}

const TopBarBrandDescriptor = ({ onClick }: TopBarBrandDescriptorProps) => {
  const {config} = useConfig()
  const appName = config.app.title?.toString() ?? 'Admin Console'
  const imageUrl = config.app.logo ?? ''

  const textColor = useColorModeValue("blue.600", "white")
  const margin = 'auto 0 auto 20px'
  const height = '40px'
  function getChildComponent() {
    

    if (imageUrl) {
      return (
        <Image
          h={height}
          margin={margin}
          src={imageUrl}
          alt='app descriptor' />)
    }

    return (
      <Text
        color={textColor}
        fontFamily='Poppins'
        fontWeight='600'
        size='sm'
        margin={margin}>
        {appName ?? 'Admin Console'}
      </Text>
    )
  }
  return <Flex alignItems='center'>
    <Tooltip label={appName ?? 'Admin Console'}>
    <Link href={config.app.basePath ?? '/'}>
      {getChildComponent()}
    </Link>
    </Tooltip>
  </Flex>
}

export default TopBarBrandDescriptor