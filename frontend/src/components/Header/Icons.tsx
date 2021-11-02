import { Flex, HStack, Icon } from '@chakra-ui/react'
import{ RiHandCoinLine } from 'react-icons/ri'
import { ImExit } from 'react-icons/im'
import { MdAddShoppingCart } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'


export function Icons() {
    return(
            <HStack spacing="2" 
                mx="8"
                pr="8"
                py="1"
                color="gray.50"
                borderRightWidth={1}
                borderColor="red.500"
            >
                <Icon as={CgProfile} fontSize="35" />
                <Icon as={MdAddShoppingCart} fontSize="35" />
                <Icon as={RiHandCoinLine} fontSize="40"/>
                <Icon as={ImExit} fontSize="35"/>
            </HStack>
    )
}