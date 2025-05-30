import { Button, Flex } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/system";
import { Table } from "@chakra-ui/react";
import { FaSortUp as TriangleUpIcon, FaSortDown as TriangleDownIcon } from 'react-icons/fa';
import { useState } from "react";
import { SortingState, flexRender, useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, ColumnDef } from "@tanstack/react-table";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
}

function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const {
    getHeaderGroups,
    getRowModel,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    getState,
    setPageSize,
    setPageIndex,
    initialState: {
      pagination: { pageIndex, pageSize }
    }
  } = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0
      }
    },
    state: {
      sorting
    }
  });

  const { colorMode } = useColorMode();

  return (
    <Flex w="full">
      <Table.Root size="md"
        borderWidth="1px"
        borderRadius="md"
        overflow="hidden">
        <Table.Header
          bg={colorMode === 'light' ? 'bg.subtle' : 'bg.muted'}
          borderBottomWidth="2px"
          borderBottomColor={colorMode === 'light' ? 'border.subtle' : 'border.muted'}>          {getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id} h="52px">{headerGroup.headers.map((header) => (
                <Table.ColumnHeader
                  id={header.id}
                  key={header.id}
                  color={colorMode === 'light' ? 'fg.default' : 'fg.inverted'}
                  fontFamily="archivo-narrow"
                  fontWeight="400"
                  fontSize="sm"
                  letterSpacing="0"
                  borderRightWidth="2px"
                  borderRightColor={colorMode === 'light' ? 'border.subtle' : 'border.muted'}
                  cursor={header.column.getCanSort() ? 'pointer' : 'default'}
                  onClick={header.column.getToggleSortingHandler()}
                  textTransform="none"
                  _last={{ borderRight: 'none' }}
                >
                  <Flex align="center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <Flex fontSize="xs" color="fg.muted" ml="2px" w="5px">
                      <Flex flexDir="column" justify="center" w="20px">
                        <Flex
                          aria-label="Sort Asc"
                          cursor="pointer"
                          h="3px"
                          minW="5px"
                          p={0}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <TriangleUpIcon
                            fontSize="10px"
                            color={header.column.getIsSorted() === 'asc' ? '#2D3748' : '#A0AEC0'}
                          />
                        </Flex>
                        <Flex
                          aria-label="Sort Desc"
                          cursor="pointer"
                          h="3px"
                          minW="5px"
                          mt="5px"
                          p={0}
                          alignItems="center"
                          justifyContent="center"
                        >
                          <TriangleDownIcon
                            fontSize="10px"
                            color={header.column.getIsSorted() === 'desc' ? '#2D3748' : '#A0AEC0'}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                </Table.ColumnHeader>))}
            </Table.Row>
          ))}
        </Table.Header>
        <Table.Body>
          {getRowModel().rows.map((row, index) => (
            <Table.Row
              bg={colorMode === 'light' ? 'bg.canvas' : 'bg.subtle'}
              key={index}
              h="25px"
            >{row.getVisibleCells().map((cell, cellIndex) => (
                <Table.Cell
                  key={cellIndex}
                  color={colorMode === 'light' ? 'fg.default' : 'fg.inverted'}
                  h="25px"
                  py={0}
                  fontFamily="archivo-narrow"
                  fontWeight="400"
                  fontSize="xs"
                  borderBottomWidth="2px"
                  borderBottomColor={colorMode === 'light' ? 'border.subtle' : 'border.muted'}
                  borderRightWidth="2px"
                  borderRightColor={colorMode === 'light' ? 'border.subtle' : 'border.muted'}
                  _last={{ borderRight: 'none' }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
}

export default DataTable;
