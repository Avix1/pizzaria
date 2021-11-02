import { Header } from '../../components/Header/index'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

import { Box, Flex, Text, Heading, Button, Icon, Checkbox, Table, Tr, Thead, Tbody, Th, Td } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
    return(
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.50" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>

                        <Button
                        as="a" 
                        size="sm" 
                        fontSize="sm" 
                        colorScheme="red" 
                        leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme="red"> 
                        <Thead>
                            <Tr>
                                <Th px="6" color="red" width="8">
                                    <Checkbox borderColor="red.300" colorScheme="red" />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                                <Th w="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox borderColor="red.300" colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" color="gray.700">Leonardo Deodato</Text>
                                        <Text fontWeight="bold" color="gray.600">contato.leonardo555@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td color="gray.800">
                                    30 de Outubro, 2021
                                </Td>
                                <Td>
                                <Button
                                    as="a" 
                                    size="sm" 
                                    fontSize="sm" 
                                    colorScheme="red" 
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Editar
                                </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox borderColor="red.300" colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" color="gray.700">Leonardo Deodato</Text>
                                        <Text fontWeight="bold" color="gray.600">contato.leonardo555@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td color="gray.800">
                                    30 de Outubro, 2021
                                </Td>
                                <Td>
                                <Button
                                    as="a" 
                                    size="sm" 
                                    fontSize="sm" 
                                    colorScheme="red" 
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Editar
                                </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox borderColor="red.300" colorScheme="red" />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold" color="gray.700">Leonardo Deodato</Text>
                                        <Text fontWeight="bold" color="gray.600">contato.leonardo555@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td color="gray.800">
                                    30 de Outubro, 2021
                                </Td>
                                <Td>
                                <Button
                                    as="a" 
                                    size="sm" 
                                    fontSize="sm" 
                                    colorScheme="red" 
                                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Editar
                                </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    
                    <Pagination />

                </Box>
            </Flex>
        </Box>
    )
}