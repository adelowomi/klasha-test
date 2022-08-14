import { ArrowDownIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { salesCardData } from "data/DashboardData";
import { AppLayout } from "lib/components/appLayout";
import SalesCard from "lib/components/DashBoard/SalesCard/SalesCard";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Area,
} from "recharts";

const data = [
  {
    name: "20 Aug",
    uv: 4000,
    pv: 2400,
    amt: "1,000",
  },
  {
    name: "21 Aug",
    uv: 3000,
    pv: 1398,
    amt: "2,000",
  },
  {
    name: "22 Aug",
    uv: 2000,
    pv: 9800,
    amt: "3,000",
  },
  {
    name: "23 Aug",
    uv: 2780,
    pv: 3908,
    amt: "4,000",
  },
  {
    name: "24 Aug",
    uv: 1890,
    pv: 4800,
    amt: "5,000",
  },
  {
    name: "25 Aug",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export default function Dashboard() {
  return (
    <>
      <AppLayout currentRoute="" firstName={"AAa"} lastName={""}>
        <Box
          pl={"12"}
          pt={12}
          width={"full"}
          height={"full"}
          backgroundColor={"white"}
          alignItems={{ base: "center", md: "center", lg: "space-between" }}
        >
          <Flex
            alignItems={"center"}
            height={"14"}
            width={"full"}
            marginBottom={"4"}
            align={{ base: "center", md: "center", lg: "center" }}
          >
            <Text as={"span"} fontSize={"2xl"} fontWeight={"semibold"}>
              Sales Overview
            </Text>
          </Flex>
          <Flex
            direction={["column", "column", "row", "row"]}
            width={{ base: "full", md: "full", lg: "1096px" }}
            justifyContent={"space-between"}
            alignItems={{ base: "center", md: "center", lg: "space-between" }}
          >
            <Box
              border={"1px"}
              borderColor={"black"}
              borderRadius={"lg"}
              height={"240px"}
              // width={"256px"}
              width={["304px", "256px", "256px", "256px"]}
              mb={{ base: 4, md: 0 }}
            >
              <Stat pt={4} pl={"4"}>
                <StatLabel fontSize={"sm"}>Today's Sales</StatLabel>
                <StatNumber fontSize={"lg"} fontWeight="medium">
                  ₦1,652.50
                </StatNumber>
                {/* <StatHelpText>Feb 12 - Feb 28</StatHelpText> */}
              </Stat>
            </Box>
            {salesCardData.map((item, index) => (
              <SalesCard
                key={index}
                icon={item.icon}
                date={item.date}
                amount={item.amount}
                time={item.time}
                theme={item.theme}
              />
            ))}
          </Flex>
          <Flex
            direction={["column", "column", "row", "row"]}
            alignItems={{ base: "center", md: "center", lg: "space-between" }}
          >
            <Box display={{ base: "none", md: "block" }}>
              <Flex
                width={"768px"}
                mt={6}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width="300px"
                  fontWeight="bold"
                >
                  <Flex
                    width={"312px"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Text as="span" fontSize={"20px"} fontWeight="bold">
                      Sales |
                    </Text>
                    <Text
                      as="span"
                      fontSize={"14px"}
                      color={"brand.200"}
                      cursor={"pointer"}
                    >
                      7 days
                    </Text>
                    <Text as="span" fontSize={"14px"} cursor={"pointer"}>
                      30 days
                    </Text>
                    <Menu>
                      <MenuButton
                        px={4}
                        py={2}
                        transition="all 0.2s"
                        borderRadius="md"
                        borderWidth="1px"
                        _hover={{ bg: "transparent" }}
                        _expanded={{
                          bg: "transparent",
                        }}
                        _focus={{ boxShadow: "none" }}
                      >
                        USD <ChevronDownIcon />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>NGN</MenuItem>
                      </MenuList>
                    </Menu>
                  </Flex>
                </Flex>
                <Button
                  leftIcon={<ArrowDownIcon />}
                  colorScheme="brand"
                  width="148px"
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
                  Download report
                </Button>
              </Flex>
              <Box
                border={"1px"}
                borderColor={"black"}
                borderRadius={"lg"}
                height={"284px"}
                width={"768px"}
                mt={6}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 30,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <defs>
                      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#EF2C5A"
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FFFFFF"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="0"
                      vertical={false}
                      strokeWidth={0.5}
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="name"
                      hide={false}
                      axisLine={false}
                      tickLine={false}
                      padding={{ right: 20 }}
                      interval={"preserveStart"}
                    />
                    <YAxis
                      hide={false}
                      axisLine={false}
                      tickLine={false}
                      // tick={{ stroke: "red", strokeWidth: 2 }}
                      // padding={{ bottom: 20 }}
                      interval={"preserveStart"}
                    />
                    {/* <Tooltip />
                                    <Legend /> */}
                    {/* <Line
                                        type="monotone"
                                        dataKey="pv"
                                        stroke="#8884d8"
                                        activeDot={{ r: 8 }}
                                    /> */}
                    <Line
                      type="monotone"
                      dataKey="uv"
                      stroke="#EF2C5A"
                      strokeWidth={2}
                      dot={false}
                      // style={{ strokeDasharray: `40% 60%` }}
                    />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stroke={"false"}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorUv)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </Box>
            </Box>
            <Box
              mt={{ md: "89px", base: "10px" }}
              bg={"brand.200"}
              height={"284px"}
              width={"304px"}
              borderRadius={"lg"}
              ml={{ base: 0, md: 8 }}
              position={"relative"}
            >
              <Image src={"./lines.svg"} position="absolute" />
              <Flex flexDirection="column" justifyContent={"space-between"}>
                <Text
                  mt={8}
                  ml={8}
                  fontSize={"20px"}
                  width={"192px"}
                  color="white"
                  fontWeight="medium"
                >
                  KlashaWire - send money to businesses globally from Africa
                </Text>
                <Button
                  mt={16}
                  ml={8}
                  bg={"brand.300"}
                  width={"130px"}
                  height={"48px"}
                  color={"white"}
                >
                  Send a wire
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </AppLayout>
    </>
  );
}
