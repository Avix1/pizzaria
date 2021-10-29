import { Flex, Button } from '@chakra-ui/react'
import { Input } from '../components/Form/Input'

export default function Home() {
    return(
        <>
        <Flex
        width="100vw"
        fontSize="100"
        justify="center"
        alignItems="center"
        >
            <h1>Pizzaria Guarucity</h1>
        </Flex>
        <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        >
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

            <Button type="submit" mt="6" colorScheme="red" size="lg">Ver unidade mais próxima</Button>
            </Flex>
        </Flex>
        </>
    )
}