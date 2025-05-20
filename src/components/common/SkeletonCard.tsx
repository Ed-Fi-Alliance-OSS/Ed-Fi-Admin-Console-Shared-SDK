import { Card, Flex } from "@chakra-ui/react"
import { keyframes, useColorModeValue } from "@chakra-ui/system"
import { BsThreeDotsVertical } from "react-icons/bs"
import SkeletonText from "./SkeletonText"

const SkeletonCard = () => {
    const bg = useColorModeValue("white", "blue.600")
    const skeletonKeyframe = keyframes`
         0% {
            background-color: hsl(200, 20%, 70%);
        }

        100% {
            background-color: hsl(200, 20%, 95%);
        }
    `

    const skeletonAnimation = `${skeletonKeyframe} 1s linear infinite alternate`
    const lines = new Array(4).fill(0)

    return (
        <Card.Root
            display='flex'
            flexDir='row'
            bg={bg}
            marginTop='15px'
            marginRight='15px'
            shadow='lg'
            borderRadius='10px'
            opacity='0.7'
            h='102px'
            w='303px'>
                <Flex
                    animation={skeletonAnimation}
                    borderRadius='10px 0 0 10px'
                    h='full'
                    w='102px' />
                <Flex
                    flexDir='row'
                    alignItems='center'
                    padding='10px 10px'
                    h='full'
                    w='201px'>
                        <Flex
                            flexDir='column'
                            justifyContent='center'
                            padding='5px 5px'
                            h='full'
                            w='full'>
                                {lines.map((line, index) =>
                                    <SkeletonText
                                        key={index}
                                        height={6} />
                                )}
                        </Flex>
                        <BsThreeDotsVertical
                            cursor='pointer'
                            fontSize='20px' />
                </Flex>
        </Card.Root>
    )
}

export default SkeletonCard
