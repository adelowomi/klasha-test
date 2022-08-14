import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  Text,
} from "@chakra-ui/react";
import { AppLayout } from "lib/components/appLayout";
import Pagination from "lib/components/Generic/Pagination/Pagination";
import { BiFilter } from "react-icons/bi";
import React from "react";

export default function index() {
  return (
    <AppLayout currentRoute="transactions" firstName={"AAa"} lastName={""}>
      <Box
        pl={"12"}
        pt={12}
        width={"full"}
        height={"full"}
        backgroundColor={"white"}
        overflowX={"auto"}
      >
        <Box
          border="1px"
          borderColor="brand.600"
          width="1096px"
          borderRadius={"lg"}
        >
          <Box h="60px" borderBottom={"1px"} borderColor={"brand.600"}>
            <Text fontSize="19px" fontWeight="medium" mt="2" ml="3">
              Transaction history
            </Text>
          </Box>
          <Box h="60px">
            <Flex
              width="1096px"
              justifyContent={"space-between"}
              justifyItems={"center"}
              alignItems={"center"}
              alignContent={"center"}
              px={"3"}
              py={"10px"}
              borderBottom="1px"
              borderColor="brand.600"
            >
              <Flex justifyContent={"space-between"} width="full">
                <InputGroup width="180px">
                  <Input placeholder="Search" />
                  <InputRightElement>
                    <SearchIcon name="search" />
                  </InputRightElement>
                </InputGroup>
                <Flex justifyContent={"space-between"}>
                  <Button
                    rightIcon={<BiFilter />}
                    colorScheme="brand"
                    variant="outline"
                    borderColor="brand.300"
                    color={"brand.300"}
                    fontSize="12px"
                    _hover={{
                      color: "white",
                      backgroundColor: "brand.200",
                      borderColor: "white",
                    }}
                  >
                    Filter
                  </Button>
                  <Button
                    colorScheme="brand"
                    ml={"3"}
                    variant="outline"
                    borderColor="brand.300"
                    color={"brand.300"}
                    fontSize="12px"
                    _hover={{
                      color: "white",
                      backgroundColor: "brand.200",
                      borderColor: "white",
                    }}
                  >
                    Export
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <TableContainer>
            <Table variant="unstyled">
              <Thead>
                <Tr>
                  <Th>Transaction ID</Th>
                  <Th>Source</Th>
                  <Th>Customer name</Th>
                  <Th>Customer email</Th>
                  <Th>Amount</Th>
                  <Th>Request date</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>GB124QWERTY12346</Td>
                  <Td>GTB</Td>
                  <Td>Mike Owen</Td>
                  <Td>0223337281</Td>
                  <Td>$230.00</Td>
                  <Td>24.08.2021</Td>
                  <Td>Pending</Td>
                </Tr>
                <Tr>
                  <Td>GB124QWERTY12346</Td>
                  <Td>GTB</Td>
                  <Td>Mike Owen</Td>
                  <Td>0223337281</Td>
                  <Td>$230.00</Td>
                  <Td>24.08.2021</Td>
                  <Td>Pending</Td>
                </Tr>
                <Tr>
                  <Td>GB124QWERTY12346</Td>
                  <Td>GTB</Td>
                  <Td>Mike Owen</Td>
                  <Td>0223337281</Td>
                  <Td>$230.00</Td>
                  <Td>24.08.2021</Td>
                  <Td>Pending</Td>
                </Tr>
                <Tr>
                  <Td>GB124QWERTY12346</Td>
                  <Td>GTB</Td>
                  <Td>Mike Owen</Td>
                  <Td>0223337281</Td>
                  <Td>$230.00</Td>
                  <Td>24.08.2021</Td>
                  <Td>Pending</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Flex
            justifyContent={"flex-end"}
            px={"3"}
            py={"15px"}
            border="1px"
            borderColor="brand.600"
          >
            <Box
              bgColor={"white"}
              width={"375px"}
              h={"38px"}
              borderRadius={"md"}
              border="1px"
              borderColor="brand.600"
            >
              <Pagination />
            </Box>
          </Flex>
        </Box>
      </Box>
    </AppLayout>
  );
}
