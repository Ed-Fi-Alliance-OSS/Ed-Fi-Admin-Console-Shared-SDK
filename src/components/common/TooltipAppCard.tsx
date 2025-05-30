import {
    Flex,
    Heading,
    Link,
    Text,
    Box
} from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/tooltip'
import {
  useColorModeValue,
} from '@chakra-ui/system'
import AppItemCard from './AppItemCard'
import CommunityCard from './CommunityCard'
import CommunityCardCoursesPopover from './CommunityCardCoursesPopover'
import CommunityCardGroupPopover from './CommunityCardGroupPopover'

interface AppCardProps {
    appId: string
    imageUrl: string | null
    lightBackgroundUrl?: string
    darkImageUrl?: string
    darkBackgroundUrl?: string
    overlayColor: string
    description: string
    actionLink: string
    bookmarked: boolean
    onBookmark: (appId: string) => void
}

interface TooltipAppCardProps {
    appCardProps: AppCardProps
    cardType: 'app' | 'community'
}

const TooltipAppCard = ({ appCardProps, cardType }: TooltipAppCardProps) => {
    const bg = useColorModeValue('white', 'blue.600')
    const linkColor = useColorModeValue('blue.600', 'white')

    const tooltipContent = (
        <Box bg={bg} p={4} borderRadius="md" maxW="300px" aria-label="App Tooltip">
            <Flex justify='space-between' mb={2}>
                <Heading fontSize='md'>{appCardProps.description}</Heading>
                <Link
                    fontSize='xs'
                    fontFamily='Poppins'
                    color={linkColor}
                    href={appCardProps.actionLink}>Go to app</Link>
            </Flex>
            <Flex bg='gray.300' h='0.5px' w='full' mb={3} />
            <Flex direction='column'>
                <Text fontSize='sm' fontFamily='Poppins'>
                    This is the {appCardProps.description}
                </Text>
                <Flex mt='15px' w='full'>
                    <CommunityCardGroupPopover />
                    <CommunityCardCoursesPopover />
                </Flex>
            </Flex>
        </Box>
    )

    return (
        <Tooltip label={tooltipContent} placement="top-start" hasArrow>
            <Box>
                {cardType === 'app'?
                    <AppItemCard {...appCardProps} /> :
                    <CommunityCard {...appCardProps} />}
            </Box>
        </Tooltip>
    )
}

export default TooltipAppCard
