import { Flex, Button } from '@chakra-ui/react'
import { Input } from '../../components/Form/Input'

export default function Cadastrar() {
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
                
            <Input name="email" type="email" label="E-mail"/>    
            <Input name="name" type="name" label="Usuário"/>
            <Input name="password" type="password" label="Senha"/>
            <Input name="password_confirmation" type="password" label="Confirmação de senha"/>

            <Button type="submit" mt="6" colorScheme="red" size="lg">Cadastrar</Button>
            </Flex>
        </Flex>
    )
}