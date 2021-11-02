import { Flex, Button } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'

export default function Login() {
    return(
        <Flex w="100vw" h="100vh"  align="center" justify="center">
            <Flex
            as="form"
            w="100%"
            maxWidth={720}
            bg="gray.50"
            p="8"
            borderRadius={8}
            flexDir="column"
            >
                    
            <Input name="name" type="name" label="Usuário"/>
            <Input name="password" type="password" label="Senha"/>

            <Button type="submit" mt="6" colorScheme="red" size="lg">Entrar</Button>
            <Button type="submit" mt="6" colorScheme="red" size="lg">Cadastrar</Button>
            </Flex>
        </Flex>
    )
}