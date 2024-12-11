import { Button, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text } from "@chakra-ui/react"

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
                    size='xs'>Items per page:</Text>
                <NumberInput 
                    value={pageSize}
                    defaultValue={pageSize} 
                    clampValueOnBlur={false}
                    onChange={(s, n) => onChangePageSize(s)}
                    aria-label="Page Index"
                    min={minPageSize} 
                    max={maxPageSize}
                    size='xs'
                    w='64px'>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper data-testid="increment-page-size-btn" onClick={() => onIncrementPageSize()} />
                            <NumberDecrementStepper data-testid="decrement-page-size-btn" onClick={() => onDecrementPageSize()} />
                        </NumberInputStepper>
                </NumberInput>
                <Flex alignItems='center' ml='25px' w='50px'>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='400'
                        size='xs'>
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
                        isDisabled={!canPreviousPage()}>
                        {'<<'}
                    </Button>
                    <Button
                        aria-label="Go to previous page"
                        data-testid="goto-previous-page-btn"
                        color='black'
                        minW='30px'
                        ml='5px'
                        onClick={goToPreviousPage}
                        isDisabled={!canPreviousPage()}>
                        {'<'}
                    </Button>
                    <Button
                        aria-label="Go to next page"
                        color='black'
                        minW='30px'
                        ml='5px'
                        data-testid="goto-next-page-btn"
                        onClick={goToNextPage}
                        isDisabled={!canNextPage()}>
                        {'>'}
                    </Button>
                    <Button
                        aria-label="Go to last page"
                        color='black'
                        minW='30px'
                        ml='5px'
                        data-testid="goto-last-page-btn"
                        onClick={goToLastPage}
                        isDisabled={!canNextPage()}>
                        {'>>'}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default TablePagination