import { Button, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

interface ListPaginationProps {
    currentPage: number
    totalPages: number
    goToPage: (page: number) => void
    goToNextPage: () => void
    goToPreviousPage: () => void
    canGoToPreviousPage: () => boolean
    canGoToNextPage: () => boolean
}

const ListPagination = ({ 
    currentPage,
    totalPages,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    canGoToNextPage,
    canGoToPreviousPage
 }:ListPaginationProps) => {
    const [pagesArr, setPagesArr] = useState(new Array(totalPages).fill(0))

    useEffect(() => {
        setPagesArr(new Array(totalPages).fill(0))
    }, [totalPages])

    return (
        <Flex>
            <Button
                aria-label="Go to previous page"
                color='black'
                fontWeight='400'
                onClick={goToPreviousPage}
                isDisabled={!canGoToPreviousPage()}
                minW='30px'
                maxW='30px'>
                    {"<"}
            </Button>
            {pagesArr.map((page, index) => 
                <Button 
                    aria-label={`Go to page ${index + 1}`}
                    fontFamily='Poppins'
                    fontWeight='400'
                    fontSize='xs'
                    color='black'
                    bg={currentPage === index + 1? 'gray.300' : 'white'}
                    key={index}
                    minW='30px'
                    maxW='30px'
                    onClick={() => goToPage(index + 1)}>
                        {index + 1}
                </Button>
            )}
            <Button
                aria-label='Go to next page'
                onClick={goToNextPage}
                isDisabled={!canGoToNextPage()}
                color='black'
                minW='30px'
                maxW='30px'>
                    {">"}
            </Button>
        </Flex>
    )
}

export default ListPagination