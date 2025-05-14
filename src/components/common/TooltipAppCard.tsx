import {
    Flex,
    Heading,
    Link,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
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
        <Popover trigger='hover' initialFocusRef={ref}>
            <PopoverTrigger>
                <span>
                    {cardType === 'app'? 
                        <AppItemCard {...appCardProps} /> : 
                        <CommunityCard {...appCardProps} />}
                </span>
            </PopoverTrigger>
            <PopoverContent aria-label="App Tooltip Popover" bg={bg} top='-40px' left='50px'>
                <PopoverBody>
                    <Flex justifyContent='space-between'>
                        <Heading fontSize='md'>{appCardProps.description}</Heading>
                        <Link 
                            fontSize='xs' 
                            fontFamily='Poppins'
                            color={linkColor}
                            href={appCardProps.actionLink}>Go to app</Link>
                    </Flex>
                    <Flex bg='gray.300' h='0.5px' w='full' marginTop='10px' />
                    <Flex flexDir='column' marginTop='10px'>
                        <Text fontSize='sm' fontFamily='Poppins'>
                            This is the {appCardProps.description}
                        </Text>
                        <Flex marginTop='15px' w='full'>
                            <CommunityCardGroupPopover />
                            <CommunityCardCoursesPopover />
                        </Flex>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default TooltipAppCard