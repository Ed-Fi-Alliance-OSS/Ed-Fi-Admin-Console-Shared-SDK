import {
    Button,
    Flex,
    Heading,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Text,
    useColorModeValue
} from '@chakra-ui/react'
import { HiThumbUp } from 'react-icons/hi'
import { MdModeComment } from 'react-icons/md'

const CommunityCardGroupPopover = () => {
    const bg = useColorModeValue('white', 'blue.600')

    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label="Show Group"
                    display='flex' 
                    fontWeight='light'
                    fontFamily='Poppins'
                    justifyContent='flex-end'
                    alignItems='flex-end'
                    padding='0px'
                    borderColor='none'
                    size='sm'
                    minW='auto'
                    w='auto'> 
                        <Flex 
                            borderRadius='5px 5px 0px 0px'
                            alignItems='center'
                            padding='5px 5px 5px 5px'>
                                <MdModeComment />
                                <Text 
                                    fontFamily='Poppins'
                                    size='xs'
                                    marginLeft='3px'>
                                        Group
                                </Text>
                        </Flex>
                </Button>
            </PopoverTrigger>
            <PopoverContent aria-label="Community Card Popover" bg={bg} top='0px' left='50px'>
                <PopoverHeader>
                    <Flex alignItems='center' paddingTop='10px'>
                        <MdModeComment fontSize='20px' />
                        <Heading fontSize='lg' marginLeft='10px'>Administrator Dashboards</Heading>
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
                </PopoverHeader>
                <PopoverBody paddingBottom='16px'>
                    <Flex alignItems='flex-start'>
                        <Flex alignItems='center'>
                            <HiThumbUp fontSize='18px' />
                            <Text fontSize='sm' marginTop='2px' marginLeft='5px'>58</Text>
                        </Flex>
                        <Text 
                            fontFamily='Poppins'
                            fontWeight='light'
                            marginLeft='10px'>Introduction to your Administrator Dashboards</Text>
                    </Flex>
                    <Flex alignItems='flex-start' marginTop='15px'>
                        <Flex alignItems='center'>
                            <HiThumbUp fontSize='18px' />
                            <Text fontSize='sm' marginTop='2px' marginLeft='5px'>27</Text>
                        </Flex>
                        <Text 
                            fontFamily='Poppins'
                            fontWeight='light'
                            marginLeft='10px'>How to use your Administrator Dashboard in classroom</Text>
                    </Flex>
                    <Flex alignItems='flex-start' marginTop='15px'>
                        <Flex alignItems='center'>
                            <HiThumbUp fontSize='18px' />
                            <Text fontSize='sm' marginTop='2px' marginLeft='5px'>14</Text>
                        </Flex>
                        <Text 
                            fontFamily='Poppins'
                            fontWeight='light'
                            marginLeft='10px'>Question: Where can I get help with customizing the settings in my...</Text>
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default CommunityCardGroupPopover