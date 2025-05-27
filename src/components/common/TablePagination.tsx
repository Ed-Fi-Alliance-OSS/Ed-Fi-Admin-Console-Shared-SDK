import { Button, Flex, Text, Box } from "@chakra-ui/react"
import { FaAngleLeft, FaAngleRight, FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import CustomNumberInput from "./CustomNumberInput"

interface TablePaginationProps {
    pageSize: number
    currentPage: number
    totalPages: number
    minPageSize: number
    maxPageSize: number
    canNextPage: () => boolean
    canPreviousPage: () => boolean
    goToInitialPage: () => void
    goToLastPage: () => void
    goToPreviousPage: () => void
    goToNextPage: () => void
    onChangePageSize: (valueString: string | null | undefined) => void
}

const TablePagination = ({
    canPreviousPage,
    canNextPage,
    currentPage,
    totalPages,
    onChangePageSize,
    goToNextPage,
    goToPreviousPage,
    pageSize,
    minPageSize,
    maxPageSize,
    goToInitialPage,
    goToLastPage }: TablePaginationProps) => {

    return (
        <Flex
            justifyContent='center'
            alignItems='center'
            w='full'
            fontFamily='Poppins'
            py="3"
            borderTopWidth="1px"
            borderTopColor="gray.100"
            bg="white"
            position="relative"
        >
            <Flex
                alignItems='center'
                justifyContent="center"
                gap="4"
                px="4"
                py="2"
                borderRadius="md"
                boxShadow="xs"
                bg="gray.50"
                mx="auto"
                width="auto"
            >
                <Flex alignItems='center' gap="2">
                    <Text
                        fontFamily='Poppins'
                        fontWeight='500'
                        color="gray.600"
                        fontSize='xs'>Items per page</Text>
                    <CustomNumberInput
                        id="table-pagination-page-size"
                        value={pageSize}
                        defaultValue={pageSize}
                        min={minPageSize}
                        max={maxPageSize}
                        onChange={(valueString) => onChangePageSize(valueString)}
                        disabled={false}
                    />
                </Flex>

                <Box
                    h="20px"
                    w="1px"
                    bg="gray.200"
                />

                <Flex alignItems='center' minW='75px'>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='500'
                        color="gray.600"
                        fontSize='xs'>
                            {currentPage} of {totalPages}
                    </Text>
                </Flex>

                <Box
                    h="20px"
                    w="1px"
                    bg="gray.200"
                />

                <Flex alignItems='center' gap="1">
                    <Button
                        aria-label="Go to first page"
                        color='blue.600'
                        minW='30px'
                        h="30px"
                        data-testid="goto-initial-page-btn"
                        onClick={goToInitialPage}
                        disabled={!canPreviousPage()}
                        _disabled={{ color: 'gray.300', cursor: 'not-allowed' }}
                        variant="ghost"
                        borderRadius="md"
                    >
                        <FaAngleDoubleLeft />
                    </Button>
                    <Button
                        aria-label="Go to previous page"
                        data-testid="goto-previous-page-btn"
                        color='blue.600'
                        minW='30px'
                        h="30px"
                        onClick={goToPreviousPage}
                        disabled={!canPreviousPage()}
                        _disabled={{ color: 'gray.300', cursor: 'not-allowed' }}
                        variant="ghost"
                        borderRadius="md"
                    >
                        <FaAngleLeft />
                    </Button>
                    <Button
                        aria-label="Go to next page"
                        color='blue.600'
                        minW='30px'
                        h="30px"
                        data-testid="goto-next-page-btn"
                        onClick={goToNextPage}
                        disabled={!canNextPage()}
                        _disabled={{ color: 'gray.300', cursor: 'not-allowed' }}
                        variant="ghost"
                        borderRadius="md"
                    >
                        <FaAngleRight />
                    </Button>
                    <Button
                        aria-label="Go to last page"
                        color='blue.600'
                        minW='30px'
                        h="30px"
                        data-testid="goto-last-page-btn"
                        onClick={goToLastPage}
                        disabled={!canNextPage()}
                        _disabled={{ color: 'gray.300', cursor: 'not-allowed' }}
                        variant="ghost"
                        borderRadius="md"
                    >
                        <FaAngleDoubleRight />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TablePagination
