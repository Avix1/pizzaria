import { HStack, Button, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
    return(
        <HStack
        mt="8"
        justify="space-between"
        align="center"
        >
            <Box color="red.500">
                <strong>0</strong> - <strong>10</strong> até <strong>100</strong>
            </Box>
            <HStack
            spacing="2"
            >
            <PaginationItem number={1} isCurrent />
            <PaginationItem number={2} />
            <PaginationItem number={3} />
            <PaginationItem number={4} />
            </HStack>
        </HStack>
    )
}