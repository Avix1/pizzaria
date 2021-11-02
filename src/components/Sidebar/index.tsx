import{ Box, Stack } from '@chakra-ui/react'
import { FaPizzaSlice } from 'react-icons/fa'
import { BiDrink } from 'react-icons/bi'


import{ NavLink } from './NavLink'
import{ NavSection } from './NavSection'

import React from 'react';


export function Sidebar() {
    return(
        <Box as="aside" w="100" mr="8">
            <Stack mt="4" spacing="12" align="flex-start">
                <NavSection title="PRODUTOS">
                    <NavLink icon={FaPizzaSlice}>Pizzas</NavLink>
                    <NavLink icon={BiDrink}>Bebidas</NavLink>
                </NavSection>
            </Stack>  
        </Box>
    )
}