import { FiExternalLink, FiHelpCircle } from "react-icons/fi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { HiBookmark } from "react-icons/hi"
import { IoMdBookmarks } from "react-icons/io"
import { MdBugReport, MdModeComment } from "react-icons/md"
import { Button, IconButton, Flex, Heading, Link, Text, Popover, Accordion } from "@chakra-ui/react"
import { useColorMode } from "@chakra-ui/system"
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

const AppItemCardOptionsPopover = ({
  appId,
  websiteUrl,
  descriptionUrl,
  description,
  bookmarked,
  onBookmark,
}: AppsItemCardOptionsPopoverProps) => {
  const { colorblued } = modeColors
  const { colorMode } = useColorMode()
  const bg = colorMode === 'light' ? colorblued.light : colorblued.dark
  const textColor = colorMode === 'light' ? "blue.600" : "white"
  const grayText = colorMode === 'light' ? "gray.400" : "gray.300"
  const bookmarkColor = colorMode === 'light' ? "blue.600" : "white"
  const notBookmarkColor = colorMode === 'light' ? "gray.300" : "gray.400"

  return (
    <Popover.Root isLazy>
      <Popover.Trigger>
        <Flex
          as="div"
          role="button"
          tabIndex={0}
          aria-label="application card menu"
          //variant="ghost"
          fontSize="sm"
          cursor="pointer"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          w="auto"
          h="auto"
          minW="auto"
          p="8px"
          _hover={{ bg: 'gray.100' }}
          _focus={{ boxShadow: 'outline' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          <BsThreeDotsVertical fontSize="20px" />
        </Flex>
      </Popover.Trigger>

      <Popover.Content>
        <Flex aria-label="App Menu" bg={bg} p={0} maxW="290px">
          <Popover.Body p="16px">
            <Flex direction="column" justify="space-between" w="full">
              <Flex justify="space-between" w="full">
                <Heading fontFamily="Poppins" fontWeight="700" size="sm">
                  {description}
                </Heading>
                <IconButton
                  aria-label="toggle application bookmark"
                  onClick={() => onBookmark(appId)}
                  color={bookmarked ? bookmarkColor : notBookmarkColor}
                  variant="ghost"
                  size="sm"
                >
                  <HiBookmark fontSize="20px" />
                </IconButton>
              </Flex>

              <Text color="gray.600" fontFamily="Poppins" fontSize="sm">
                {description}
              </Text>
              <Link
                color="blue.500"
                fontFamily="Poppins"
                fontSize="sm"
                href={descriptionUrl}
              >
                See Full Description
              </Link>

              <Flex justify="space-between" mt="16px" w="full">
                <Link display="flex" href={websiteUrl} alignItems="center">
                  <FiExternalLink fontSize="15px" />
                  <Text fontFamily="Poppins" ml="5px">
                    Website
                  </Text>
                </Link>
                <Flex cursor="pointer" display="flex" alignItems="center" onClick={() => console.log('Help clicked')}>
                  <FiHelpCircle fontSize="15px" />
                  <Text fontFamily="Poppins" ml="5px">
                    Help
                  </Text>
                </Flex>
                <Flex cursor="pointer" display="flex" alignItems="center" onClick={() => console.log('Report bug clicked')}>
                  <MdBugReport fontSize={20} />
                  <Text fontFamily="Poppins" ml="5px">
                    Report a Bug
                  </Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex bg="gray.300" h="1.5px" mt="10px" />

            <Accordion.Root>
              <Accordion.Item>
                <Accordion.ItemTrigger>
                  <Flex align="center" color="blue.600" display="flex" justify="space-between" px={0}>
                    <MdModeComment />
                    <Text
                      color={textColor}
                      fontFamily="Poppins"
                      fontSize="sm"
                      fontWeight="bold"
                      ml="5px"
                    >
                      Top Discussions
                    </Text>
                  </Flex>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent >
                  <Flex p={0} pb={4}>
                  {/* cSpell:disable */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                  {/* cSpell:enable */}
                  </Flex>
                </Accordion.ItemContent>
              </Accordion.Item>

              <Accordion.Item>
                <Accordion.ItemTrigger>
                  <Flex align="center" color="blue.600" justify="space-between" px={0}>
                    <IoMdBookmarks fontSize="15px" />
                    <Text
                      color={textColor}
                      fontWeight="bold"
                      fontFamily="Poppins"
                      fontSize="sm"
                      ml="5px"
                    >
                      Exchange Training
                    </Text>
                  </Flex>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Flex direction="column"  p={0} pb={4}>
                    <Flex direction="column">
                      <Text
                        color={textColor}
                        fontFamily="Poppins"
                        fontSize="12.5px"
                      >
                        Intro to App Title
                      </Text>
                      <Flex fontFamily="Poppins" fontSize="xs">
                        <Text color={grayText} fontSize="xs" fontWeight="bold">
                          129 Likes
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex direction="column" mt="10px">
                      <Text
                        color={textColor}
                        fontFamily="Poppins"
                        fontSize="12.5px"
                      >
                        Advanced Techniques for Facilitating App...
                      </Text>
                      <Flex fontFamily="Poppins" fontSize="xs">
                        <Text color={grayText} fontSize="xs" fontWeight="bold">
                          45 Likes
                        </Text>
                      </Flex>
                    </Flex>

                    <Flex direction="column" mt="10px">
                      <Text
                        color={textColor}
                        fontFamily="Poppins"
                        fontSize="12.5px"
                      >
                        How I use the app title to do a certain task...
                      </Text>
                      <Flex fontFamily="Poppins" fontSize="xs">
                        <Text color={grayText} fontSize="xs" fontWeight="bold">
                          100 Likes
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Accordion.Root>
          </Popover.Body>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

export default AppItemCardOptionsPopover
