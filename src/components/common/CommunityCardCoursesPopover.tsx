import {
  Button,
  Flex,
  Heading,
  Popover,
  Text
} from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import { IoMdBookmarks } from 'react-icons/io'

const CommunityCardCoursesPopover = () => {
  const bg = useColorModeValue('white', 'blue.600')

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Flex
          as="div"
          role="button"
          tabIndex={0}
          aria-label="Show Courses"
          display='flex'
          alignItems='center'
          fontWeight='light'
          fontFamily='Poppins'
          padding='5px 5px 0px 5px'
          cursor='pointer'
          borderRadius='md'
          minW='auto'
          w='auto'
          _hover={{ backgroundColor: 'gray.100' }}
          _focus={{ boxShadow: 'outline' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}>
          <IoMdBookmarks fontSize='20px' />
          <Text
            fontFamily='Poppins'
            fontSize='xs'
            marginLeft='3px'>
            Courses
          </Text>
        </Flex>
      </Popover.Trigger>
      <Popover.Content>
        <Flex aria-label="Community Card Popover" bg={bg} top='0px' right='-35px'>
          <Popover.Body paddingBottom='12px'>
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
                variant="solid"
                color='primaryBlue600'
                colorPalette="blue"
                paddingLeft='15px'
                paddingRight='15px'>View All Courses</Button>
            </Flex>
          </Popover.Body>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

export default CommunityCardCoursesPopover
