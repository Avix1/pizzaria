import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
    return(
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Leonardo Deodato</Text>
                <Text color="gray.50" fontSize="small">
                    contato.leonardo555@gmail.com
                </Text>
            </Box>

                <Avatar size="md" name="Leonardo Deodato" />
        </Flex>
    )
}