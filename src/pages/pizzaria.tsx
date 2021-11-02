import { Flex, HStack, SimpleGrid, Text, Box } from '@chakra-ui/react'
import { Header } from '../components/Header/index'
import { Sidebar } from '../components/Sidebar/index'

export default function Pizzaria() {
    return(
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                    p="8"
                    bg="gray.50"
                    borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4" color="red.500">Pizza Calabresa</Text>
                    </Box>
                    <Box
                    p="8"
                    bg="gray.50"
                    borderRadius={8}
                    >
                        <Text fontSize="lg" mb="4" color="red.500">Pizza Queijo</Text>
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
        
    )
}