import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    AvatarGroup,
    Text,
    Icon,
    IconButton,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Divider,
    Link,
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
} from '@chakra-ui/react'
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
    FiBell,
    FiServer,
} from 'react-icons/fi'
import MyChart from './component/MyChart'
const DashBoard = () => {
    const [display, changeDisplay] = useState('hide')
    const [value, changeValue] = useState(1)
    return (
        <Flex
            h={[null, null, '100vh']}
            flexDir={['column', 'column', 'row']}
            overflow="hidden"
            maxW="2000px"
        >
            {/* Column 1 */}
            <Flex
                w={['100%', '100%', '15%']}
                direction="column"
                align="center"
                bg="#020202"
                color="#fff"
                justify="space-between"
                h={[null, null, '100vh']}
            >
                {/* Navbar */}
                <Flex direction="column" as="nav">
                    <Heading
                        mt={50}
                        mb={100}
                        fontSize="4xl"
                        alignSelf="center"
                        letterSpacing="tight"
                    >
                        Rise.
                    </Heading>
                    <Flex
                        direction="column"
                        align="flex-start"
                        justifyContent="center"
                    >
                        <Flex className="sidebar-items">
                            <Link
                                href="/home"
                                display={['center', 'flex-start', 'flex-start']}
                            >
                                <Icon
                                    display={['none', 'none', 'flex', 'flex']}
                                    as={FiHome}
                                    fontSize="2xl"
                                    className="active-icon"
                                />
                            </Link>
                            <Link ml="1em" _hover={{ textDecoration: 'none' }}>
                                <Text className="active">Home</Text>
                            </Link>
                        </Flex>

                        <Flex className="sidebar-items">
                            <Link
                                display={['center', 'flex-start', 'flex-start']}
                            >
                                <Icon
                                    display={['none', 'none', 'flex', 'flex']}
                                    as={FiPieChart}
                                    fontSize="2xl"
                                />
                            </Link>
                            <Link ml="1em" _hover={{ textDecoration: 'none' }}>
                                <Text>Credit</Text>
                            </Link>
                        </Flex>

                        <Flex className="sidebar-items">
                            <Link
                                display={['center', 'flex-start', 'flex-start']}
                            >
                                <Icon
                                    display={['none', 'none', 'flex', 'flex']}
                                    as={FiCreditCard}
                                    fontSize="2xl"
                                />
                            </Link>
                            <Link ml="1em" _hover={{ textDecoration: 'none' }}>
                                <Text>Wallet</Text>
                            </Link>
                        </Flex>

                        <Flex className="sidebar-items">
                            <Link
                                display={['center', 'flex-start', 'flex-start']}
                            >
                                <Icon
                                    display={['none', 'none', 'flex', 'flex']}
                                    as={FiBox}
                                    fontSize="2xl"
                                />
                            </Link>
                            <Link ml="1em" _hover={{ textDecoration: 'none' }}>
                                <Text>Services</Text>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
                {/* Avatar */}
                <Flex direction="column" align="center" mb={10}>
                    <Avatar my={2} src="avatar.png"></Avatar>
                    <Text>Calvin West</Text>
                </Flex>
            </Flex>
            {/* {Column 2} */}
            <Flex
                w={['100%', '100', '55%']}
                p="3%"
                direction="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading fontWeight="normal" mb="50">
                    Welcome back,{' '}
                    <Flex display="inline-flex" fontWeight="bold">
                        Calvin
                    </Flex>
                </Heading>
                <Text color="gray" fontSize="sm">
                    My Balance
                </Text>
                <Text fontWeight="bold" fontSize="2xl">
                    $5.6345.4
                </Text>
                <MyChart />
                <Flex justify="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">
                            Transaction
                        </Heading>
                        <Text fontSize="small" ml={4} color="gray">
                            Apr 2021
                        </Text>
                    </Flex>
                    <IconButton icon={<FiCalendar />} />
                </Flex>
                <Flex direction="column">
                    <Flex overflow="auto">
                        <Table variant="unstyled" mt={4}>
                            <Thead>
                                <Tr color="gray">
                                    <Th
                                        style={{
                                            wordBreak: 'normal',
                                        }}
                                    >
                                        Name of translation
                                    </Th>
                                    <Th>Category</Th>
                                    <Th isNumeric>Name of translation</Th>
                                    <Th isNumeric>Name of translation</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar
                                                size="sm"
                                                mr={2}
                                                src="amazon.jpeg"
                                            />
                                            <Flex direction="column">
                                                <Heading
                                                    size="sm"
                                                    letterSpacing="tight"
                                                >
                                                    Amazon
                                                </Heading>
                                                <Text
                                                    fontSize="sm"
                                                    color="gray"
                                                >
                                                    Apr 24, 2021 at 1:40pm
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Electronic Devices</Td>
                                    <Td isNumeric>+$2</Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight="bold"
                                            display="inline-table"
                                        >
                                            -$242
                                        </Text>
                                        .00
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar
                                                size="sm"
                                                mr={2}
                                                src="starbucks.png"
                                            />
                                            <Flex direction="column">
                                                <Heading
                                                    size="sm"
                                                    letterSpacing="tight"
                                                >
                                                    Starbucks
                                                </Heading>
                                                <Text
                                                    fontSize="sm"
                                                    color="gray"
                                                >
                                                    Apr 22, 2021 at 2:43pm
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Cage And Restaurant</Td>
                                    <Td isNumeric>+$2</Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight="bold"
                                            display="inline-table"
                                        >
                                            -$242
                                        </Text>
                                        .00
                                    </Td>
                                </Tr>

                                <Tr>
                                    <Td>
                                        <Flex align="center">
                                            <Avatar
                                                size="sm"
                                                mr={2}
                                                src="youtube.png"
                                            />
                                            <Flex direction="column">
                                                <Heading
                                                    size="sm"
                                                    letterSpacing="tight"
                                                >
                                                    Youtube
                                                </Heading>
                                                <Text
                                                    fontSize="sm"
                                                    color="gray"
                                                >
                                                    Apr 13, 2021 at 11:40pm
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    </Td>
                                    <Td>Social Media</Td>
                                    <Td isNumeric>+$2</Td>
                                    <Td isNumeric>
                                        <Text
                                            fontWeight="bold"
                                            display="inline-table"
                                        >
                                            -$242
                                        </Text>
                                        .00
                                    </Td>
                                </Tr>
                                {/* Start show */}
                                {display == 'show' && (
                                    <>
                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar
                                                        size="sm"
                                                        mr={2}
                                                        src="youtube.png"
                                                    />
                                                    <Flex direction="column">
                                                        <Heading
                                                            size="sm"
                                                            letterSpacing="tight"
                                                        >
                                                            Youtube
                                                        </Heading>
                                                        <Text
                                                            fontSize="sm"
                                                            color="gray"
                                                        >
                                                            Apr 13, 2021 at
                                                            11:40pm
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Social Media</Td>
                                            <Td isNumeric>+$2</Td>
                                            <Td isNumeric>
                                                <Text
                                                    fontWeight="bold"
                                                    display="inline-table"
                                                >
                                                    -$242
                                                </Text>
                                                .00
                                            </Td>
                                        </Tr>

                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar
                                                        size="sm"
                                                        mr={2}
                                                        src="youtube.png"
                                                    />
                                                    <Flex direction="column">
                                                        <Heading
                                                            size="sm"
                                                            letterSpacing="tight"
                                                        >
                                                            Youtube
                                                        </Heading>
                                                        <Text
                                                            fontSize="sm"
                                                            color="gray"
                                                        >
                                                            Apr 13, 2021 at
                                                            11:40pm
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Social Media</Td>
                                            <Td isNumeric>+$2</Td>
                                            <Td isNumeric>
                                                <Text
                                                    fontWeight="bold"
                                                    display="inline-table"
                                                >
                                                    -$242
                                                </Text>
                                                .00
                                            </Td>
                                        </Tr>

                                        <Tr>
                                            <Td>
                                                <Flex align="center">
                                                    <Avatar
                                                        size="sm"
                                                        mr={2}
                                                        src="youtube.png"
                                                    />
                                                    <Flex direction="column">
                                                        <Heading
                                                            size="sm"
                                                            letterSpacing="tight"
                                                        >
                                                            Youtube
                                                        </Heading>
                                                        <Text
                                                            fontSize="sm"
                                                            color="gray"
                                                        >
                                                            Apr 13, 2021 at
                                                            11:40pm
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            </Td>
                                            <Td>Social Media</Td>
                                            <Td isNumeric>+$2</Td>
                                            <Td isNumeric>
                                                <Text
                                                    fontWeight="bold"
                                                    display="inline-table"
                                                >
                                                    -$242
                                                </Text>
                                                .00
                                            </Td>
                                        </Tr>
                                        {/* End show */}
                                    </>
                                )}
                            </Tbody>
                        </Table>
                    </Flex>
                    <Flex align="center">
                        <Divider />
                        <IconButton
                            icon={
                                display == 'show' ? (
                                    <FiChevronUp />
                                ) : (
                                    <FiChevronDown />
                                )
                            }
                            onClick={() => {
                                if (display == 'show') {
                                    changeDisplay('none')
                                } else {
                                    changeDisplay('show')
                                }
                            }}
                        />
                        <Divider />
                    </Flex>
                </Flex>
            </Flex>

            {/* {Column 3} */}
            <Flex
                w={['100%', '100%', '35%']}
                minW={[null, null, '300px', '300px', '400px']}
                bgColor="#F5F5F5"
                p="3%"
                direction="column"
                overflow="auto"
                minH="100vh"
            >
                <Flex alignConte="center">
                    <InputGroup
                        bgColor="#FFFFFF"
                        mb={4}
                        border="none"
                        borderColor="#FFFFFF"
                        borderRadius="10px"
                        mr={2}
                    >
                        <InputLeftElement pointerEvents="none">
                            <FiSearch color="gray" />
                        </InputLeftElement>
                        <Input
                            type="number"
                            placeholder="Search"
                            borderRadius="10px"
                        />
                    </InputGroup>
                    <IconButton
                        icon={<FiBell />}
                        fontSize="sm"
                        bgcolor="#fff"
                        borderRadius="50%"
                        p="10px"
                    />
                    <Flex
                        w={30}
                        h={25}
                        bgColor="#B57295"
                        borderRadius="50%"
                        color="#fff"
                        align="center"
                        justify="center"
                        ml={-3}
                        mt={-2}
                        zIndex="100"
                        fontSize="xs"
                    >
                        2
                    </Flex>
                </Flex>
                <Heading>My Cards</Heading>

                <Box
                    borderRadius="25px"
                    mt={4}
                    w="100%"
                    h="200px"
                    bgGradient={
                        value == 1
                            ? 'linear(to-t, #C45396,#5F47C9)'
                            : value == 2
                            ? 'linear(to-l, #fff,#5F47C9)'
                            : 'linear(to-r, #5F47C9,yellow.400)'
                    }
                >
                    <Flex
                        p="1em"
                        color="#fff"
                        direction="column"
                        h="100%"
                        justify="space-between"
                    >
                        <Flex
                            justify="space-between"
                            w="100%"
                            align="flex-start"
                        >
                            <Flex direction="column">
                                <Text color="gray.400">Current Balance</Text>
                                <Text fontWeight="bold" fontSize="xl">
                                    $5,750.20
                                </Text>
                            </Flex>
                            <Flex align="center">
                                <Icon mr={2} as={FiCreditCard} />
                                <Text>Rise.</Text>
                            </Flex>
                        </Flex>
                        <Text mb={4}>**** **** **** **** 1289 </Text>
                        <Flex align="flex-end" justify="space-between">
                            <Flex>
                                <Flex direction="column" mr={4}>
                                    <Text
                                        textTransform="uppercase"
                                        fontSize="xs"
                                    >
                                        Valid Thru
                                    </Text>
                                    <Text fontSize="lg">12/23</Text>
                                </Flex>

                                <Flex direction="column">
                                    <Text
                                        textTransform="uppercase"
                                        fontSize="xs"
                                    >
                                        CVV
                                    </Text>
                                    <Text fontSize="lg">***</Text>
                                </Flex>
                            </Flex>
                            <Icon
                                as={FiCreditCard}
                                fontSize="40px"
                                color="#ED692B"
                            />
                        </Flex>
                    </Flex>
                </Box>

                <Flex justify="center" mt={2}>
                    <Button
                        bgColor={value == 1 ? 'gray.600' : 'gray.400'}
                        onClick={() => {
                            changeValue(1)
                        }}
                        size="xs"
                        mx={1}
                    ></Button>
                    <Button
                        bgColor={value == 2 ? 'gray.600' : 'gray.400'}
                        onClick={() => {
                            changeValue(2)
                        }}
                        size="xs"
                        mx={1}
                    ></Button>
                    <Button
                        bgColor={value == 3 ? 'gray.600' : 'gray.400'}
                        onClick={() => {
                            changeValue(3)
                        }}
                        size="xs"
                        mx={1}
                    ></Button>
                </Flex>
                <Flex direction="column" my={4}>
                    <Flex justify="space-between">
                        <Text>Balance</Text>
                        <Text fontWeight="bold">$13.3443</Text>
                    </Flex>
                    <Flex justify="space-between">
                        <Text>Credit Limit</Text>
                        <Text fontWeight="bold">$150.3443</Text>
                    </Flex>
                </Flex>
                <Heading letterSpacing="tight" size="md" my={4}>
                    Send money to
                </Heading>
                <Flex>
                    <AvatarGroup size="md" max={3}>
                        <Avatar src="avatar.png"></Avatar>
                        <Avatar src="avatar1.png"></Avatar>
                        <Avatar src="avatar2.png"></Avatar>
                        <Avatar src="avatar3.png"></Avatar>
                        <Avatar src="avatar3.png"></Avatar>
                    </AvatarGroup>
                    <Avatar
                        icon={<FiPlus />}
                        ml={2}
                        color="#fff"
                        bgColor="gray.300"
                    />
                </Flex>
                <Text color="gray" mt={10} mb={2}>
                    Card Number
                </Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiCreditCard color="gay.600" />}
                    />
                    <Input type="number" placeholder="xxxx xxxx xxxx xxxx" />
                </InputGroup>

                <Text color="gray" mt={10} mb={2}>
                    Sum
                </Text>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<FiDollarSign color="gay.600" />}
                    />
                    <Input type="number" placeholder="130.00" />
                </InputGroup>
                <Button
                    p={7}
                    mt={4}
                    bgColor="blackAlpha.900"
                    color="#fff"
                    borderRadius={15}
                >
                    Send money
                </Button>
            </Flex>
        </Flex>
    )
}

export default DashBoard
