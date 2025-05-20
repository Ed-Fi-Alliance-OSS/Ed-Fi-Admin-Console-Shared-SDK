import {
    Flex,
    Heading,
    Link,
    Popover,
    Text,
    Box
} from '@chakra-ui/react'
import {
  useColorModeValue,
} from '@chakra-ui/system'
import { useRef } from 'react'
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
    const ref = useRef(null)

    return (
        <Popover.Root>
            <Popover.Trigger>
                <span>
                    {cardType === 'app'?
                        <AppItemCard {...appCardProps} /> :
                        <CommunityCard {...appCardProps} />}
                </span>
            </Popover.Trigger>
            <Popover.Content>
                <Box bg={bg} style={{ top: '-40px', left: '50px', position: 'relative' }} aria-label="App Tooltip Popover">
                    <Popover.Body>
                        <Flex justify='space-between'>
                            <Heading fontSize='md'>{appCardProps.description}</Heading>
                            <Link
                                fontSize='xs'
                                fontFamily='Poppins'
                                color={linkColor}
                                href={appCardProps.actionLink}>Go to app</Link>
                        </Flex>
                        <Flex bg='gray.300' h='0.5px' w='full' mt='10px' />
                        <Flex direction='column' mt='10px'>
                            <Text fontSize='sm' fontFamily='Poppins'>
                                This is the {appCardProps.description}
                            </Text>
                            <Flex mt='15px' w='full'>
                                <CommunityCardGroupPopover />
                                <CommunityCardCoursesPopover />
                            </Flex>
                        </Flex>
                    </Popover.Body>
                </Box>
            </Popover.Content>
        </Popover.Root>
    )
}

export default TooltipAppCard
