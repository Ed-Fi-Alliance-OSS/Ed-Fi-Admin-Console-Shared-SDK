import {
    Button,
    Flex,
    Heading,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { IoMdBookmarks } from 'react-icons/io'

const CommunityCardCoursesPopover = () => {
    const bg = useColorModeValue('white', 'blue.600')

    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label="Show Courses"
                    display='flex' 
                    alignItems='center'
                    fontWeight='light'
                    fontFamily='Poppins'
                    padding='5px 5px 0px 5px'
                    size='sm'
                    minW='auto'
                    w='auto'> 
                        <IoMdBookmarks fontSize='20px' />
                        <Text   
                            fontFamily='Poppins'
                            size='xs'
                            marginLeft='3px'>
                                Courses
                        </Text>
                </Button>
            </PopoverTrigger>
            <PopoverContent aria-label="Community Card Popover" bg={bg} top='0px' right='-35px'>
                <PopoverBody paddingBottom='12px'>
                    <Flex alignItems='center' paddingTop='10px'>
                        <IoMdBookmarks fontSize='20px' />
                        <Heading fontSize='lg' marginLeft='10px'>Intro to Administrator...</Heading>
                    </Flex>
                    <Flex 
                        fontFamily='Poppins' 
                        fontSize='xs'
                        fontStyle='italic'
                        marginLeft='30px'>
                            <Text>345 Posts</Text>
                            <Text marginLeft='10px'>64 Members</Text>
                            <Text marginLeft='10px'>129 Likes</Text>
                    </Flex>
                    <Flex 
                        bg='gray.300' 
                        marginTop='10px'
                        marginLeft='auto' 
                        marginRight='auto' 
                        h='1px' 
                        w='100%'></Flex>
                     <Flex alignItems='center' paddingTop='10px'>
                        <IoMdBookmarks fontSize='20px' />
                        <Heading fontSize='lg' marginLeft='10px'>Advanced Techniques for...</Heading>
                    </Flex>
                    <Flex 
                        fontFamily='Poppins' 
                        fontSize='xs'
                        fontStyle='italic'
                        marginLeft='30px'>
                            <Text>345 Posts</Text>
                            <Text marginLeft='10px'>64 Members</Text>
                            <Text marginLeft='10px'>129 Likes</Text>
                    </Flex>
                    <Flex 
                        bg='gray.300' 
                        marginTop='10px'
                        marginLeft='auto' 
                        marginRight='auto' 
                        h='1px' 
                        w='100%'></Flex>
                     <Flex alignItems='center' paddingTop='10px'>
                        <IoMdBookmarks fontSize='20px' />
                        <Heading fontSize='lg' marginLeft='10px'>How I use the...</Heading>
                    </Flex>
                    <Flex 
                        fontFamily='Poppins' 
                        fontSize='xs'
                        fontStyle='italic'
                        marginLeft='30px'>
                            <Text>345 Posts</Text>
                            <Text marginLeft='10px'>64 Members</Text>
                            <Text marginLeft='10px'>129 Likes</Text>
                    </Flex>
                    <Flex 
                        justifyContent='flex-end' 
                        marginTop='20px'
                        w='full'>
                        <Button
                            aria-label="View All Courses"
                            variant='primaryBlue600' 
                            paddingLeft='15px' 
                            paddingRight='15px'>View All Courses</Button>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default CommunityCardCoursesPopover