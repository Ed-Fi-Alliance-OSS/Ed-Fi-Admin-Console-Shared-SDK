import { ExternalLinkIcon, QuestionIcon } from "@chakra-ui/icons"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Button, Flex, Heading, Link, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, useColorModeValue } from "@chakra-ui/react"
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiBookmark } from "react-icons/hi"
import { IoMdBookmarks } from "react-icons/io"
import { MdBugReport, MdModeComment } from "react-icons/md"
import modeColors from "../../themes/baseTheme/modeColors"

interface AppsItemCardOptionsPopoverProps {
    appId: string
    websiteUrl?: string 
    descriptionUrl?: string 
    description: string
    bookmarked: boolean
    actionLink: string
    onBookmark: (appId: string) => void
}

const AppItemCardOptionsPopover = ({ appId, websiteUrl, descriptionUrl, actionLink, description, bookmarked, onBookmark }: AppsItemCardOptionsPopoverProps) => {
    const { colorblued } = modeColors
    const bg = useColorModeValue(colorblued.light, colorblued.dark)
    const textColor = useColorModeValue('blue.600', 'white')
    const grayText = useColorModeValue('gray.400', 'gray.300')
    const bookmarkColor = useColorModeValue('blue.600', 'white')
    const notBookmarkColor = useColorModeValue("gray.300", 'gray.400')

    return (
        <Popover isLazy={true}>
            <PopoverTrigger>
                <Button 
                    aria-label="application card menu"
                    variant='icon' 
                    border='none' 
                    fontSize='md' 
                    padding='0px' 
                    minW='auto' 
                    w='20px'>
                        <BsThreeDotsVertical 
                            cursor='pointer' 
                            fontSize='20px' />
                </Button>
            </PopoverTrigger>
            <PopoverContent aria-label="App Menu" bg={bg} padding='0' maxW='290px'>
                <PopoverBody padding='16px'>
                    <Flex flexDir='column' justifyContent='space-between' w='full'>
                        <Flex justifyContent='space-between' w='full'>
                            <Heading
                                fontFamily='Poppins'
                                fontWeight='700'
                                size='sm'>{description}</Heading>
                            <Button 
                                display='flex'
                                aria-label="toggle application bookmark"
                                onClick={() => onBookmark(appId)}
                                color={bookmarked? bookmarkColor : notBookmarkColor}
                                fontFamily='Poppins'
                                fontWeight='thin'
                                justifyContent='center'
                                alignItems='center'
                                minW='20px'
                                w='20px'>
                                    <HiBookmark fontSize='20px' />
                            </Button>
                        </Flex>
                        <Text
                            color='gray.600'
                            fontFamily='Poppins'
                            size='sm'>
                                {description}
                        </Text>
                        <Link 
                            color='blue.500'
                            fontFamily='Poppins'
                            size='sm'
                            href={descriptionUrl}>See Full Description</Link>
                        <Flex justifyContent='space-between' mt='16px' w='full'>
                            <Link display='flex' href={websiteUrl} alignItems='center'>
                                <ExternalLinkIcon fontSize='15px' />
                                <Text
                                    fontFamily='Poppins'
                                    ml='5px'>
                                        Website
                                </Text>
                            </Link>
                            <Button
                                aria-label="Help"
                                color='black'
                                variant='simple'
                                minW='auto'
                                maxW='auto'>
                                    <QuestionIcon fontSize='15px' />
                                    <Text
                                        fontFamily='Poppins'
                                        ml='5px'>
                                            Help
                                    </Text>
                            </Button>
                            <Button 
                                aria-label="Report a bug"
                                color='black'
                                variant='simple'
                                minW='auto'
                                padding='0'
                                maxW='auto'>
                                    <MdBugReport fontSize={20} />
                                    <Text
                                        fontFamily='Poppins'
                                        ml='5px'>
                                            Report a Bug
                                    </Text>
                            </Button>
                        </Flex>
                    </Flex>
                    <Flex bg='gray.300' h='1.5px' marginTop='10px'></Flex>
                    <Accordion>
                        <AccordionItem padding='0'>
                            <AccordionButton display='flex' justifyContent='space-between' paddingX='0'>
                                <Flex alignItems='center' color='blue.600'>
                                    <MdModeComment />
                                    <Text 
                                        color={textColor}
                                        fontFamily='Poppins' 
                                        size='sm' 
                                        fontWeight='bold'
                                        marginLeft='5px'>Top Discussions</Text>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} paddingX='0'>
                                {/* cSpell:disable */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                {/* cSpell:enable */}
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem padding='0'>
                            <AccordionButton display='flex' justifyContent='space-between' paddingX='0'>
                                <Flex alignItems='center' color='blue.600'>
                                    <IoMdBookmarks fontSize='15px' />
                                    <Text 
                                        color={textColor}
                                        fontWeight='bold'
                                        fontFamily='Poppins' 
                                        size='sm' 
                                        marginLeft='5px'>Exchange Training</Text>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} paddingX='0'>
                                <Flex flexDir='column'>
                                    <Flex flexDir='column'>
                                        <Text   
                                            color={textColor}
                                            fontFamily='Poppins'
                                            fontSize='12.5px'>Intro to App Title</Text>
                                        <Flex 
                                            fontFamily='Poppins' 
                                            fontSize='xs'>
                                                <Text color={grayText} size='xs' fontWeight='bold'>129 Likes</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex flexDir='column' marginTop='10px'>
                                        <Text   
                                            color={textColor}
                                            fontFamily='Poppins'
                                            fontSize='12.5px'>Advanced Techniques for Facilitating App...</Text>
                                        <Flex 
                                            fontFamily='Poppins' 
                                            fontSize='xs'>
                                                <Text color={grayText} size='xs' fontWeight='bold'>45 Likes</Text>
                                        </Flex>
                                    </Flex>
                                    <Flex flexDir='column' marginTop='10px'>
                                        <Text   
                                            color={textColor}
                                        fontFamily='Poppins'
                                        fontSize='12.5px'>How I use the app title to do a certain task...</Text>
                                        <Flex 
                                            fontFamily='Poppins' 
                                            fontSize='xs'>
                                                <Text color={grayText} size='xs' fontWeight='bold'>100 Likes</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default AppItemCardOptionsPopover