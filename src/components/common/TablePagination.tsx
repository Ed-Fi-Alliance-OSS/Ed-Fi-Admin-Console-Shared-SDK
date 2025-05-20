import { Button, Flex, NumberInput, Text } from "@chakra-ui/react"
import CustomNumberInput from "./CustomNumberInput"

interface TablePaginationProps {
    pageSize: number
    currentPage: number
    totalPages: number
    minPageSize: number,
    maxPageSize: number
    canNextPage: () => boolean
    canPreviousPage: () => boolean
    goToInitialPage: () => void
    goToLastPage: () => void
    goToPreviousPage: () => void
    goToNextPage: () => void
    onIncrementPageSize: () => void
    onDecrementPageSize: () => void
    onChangePageSize: (valueString: string | null | undefined) => void
}

const TablePagination = ({
    canPreviousPage,
    canNextPage,
    currentPage,
    totalPages,
    onIncrementPageSize,
    onDecrementPageSize,
    onChangePageSize,
    goToNextPage,
    goToPreviousPage,
    pageSize,
    minPageSize,
    maxPageSize,
    goToInitialPage,
    goToLastPage }: TablePaginationProps) => {

    return (
        <Flex justifyContent='center' alignItems='center' w='full'>
            <Flex alignItems='center'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='400'
                    mr='10px'
                    fontSize='xs'>Items per page:</Text>
                <CustomNumberInput
                    id="table-pagination-page-size"
                    value={pageSize}
                    defaultValue={pageSize}
                    min={minPageSize}
                    max={maxPageSize}
                    onChange={(valueString: string | null | undefined) => onChangePageSize(valueString)}
                    disabled={false}
                />
                <Flex alignItems='center' ml='25px' w='50px'>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='400'
                        fontSize='xs'>
                            {currentPage} of{' '} {totalPages}
                    </Text>
                </Flex>
                <Flex alignItems='center'>
                    <Button
                        aria-label="Go to initial page"
                        color='black'
                        minW='30px'
                        data-testid="goto-initial-page-btn"
                        onClick={goToInitialPage}
                        disabled={!canPreviousPage()}>
                        {'<<'}
                    </Button>
                    <Button
                        aria-label="Go to previous page"
                        data-testid="goto-previous-page-btn"
                        color='black'
                        minW='30px'
                        ml='5px'
                        onClick={goToPreviousPage}
                        disabled={!canPreviousPage()}>
                        {'<'}
                    </Button>
                    <Button
                        aria-label="Go to next page"
                        color='black'
                        minW='30px'
                        ml='5px'
                        data-testid="goto-next-page-btn"
                        onClick={goToNextPage}
                        disabled={!canNextPage()}>
                        {'>'}
                    </Button>
                    <Button
                        aria-label="Go to last page"
                        color='black'
                        minW='30px'
                        ml='5px'
                        data-testid="goto-last-page-btn"
                        onClick={goToLastPage}
                        disabled={!canNextPage()}>
                        {'>>'}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TablePagination
