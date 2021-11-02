import { Flex, Button, Heading, Box, Text, Icon } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'
import { AiOutlineLogin, AiOutlineSearch } from "react-icons/ai"

export default function Home() {
    return(
        <>
        <Flex p="6" align="center" justify="end">
            
            <Button leftIcon={<Icon as={AiOutlineLogin} fontSize="30"  />} type="button" colorScheme="block" size="lg">Entrar</Button>
           
        </Flex>

        <Box p="6" width="100%" align="center">
            <Text as="h1" fontSize="100" isTruncated>
                Pizzaria Guarucity
            </Text>
        </Box>
        <Flex w="100vw" h="100vh"  align="center" justify="center">
            <Flex
            as="form"
            width="100%"
            maxWidth={720}
            bg="gray.50"
            p="8"
            borderRadius={8}
            flexDir="column"
            >
                
            <Input name="name" type="name" label="Em qual endereço você está?"/>
        
            <Button type="submit" mt="6" colorScheme="red" size="lg">
                Ver unidade mais próxima
            </Button>
            </Flex>
        </Flex>
        </>
    )
}