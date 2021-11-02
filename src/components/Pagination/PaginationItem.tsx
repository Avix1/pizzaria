import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ isCurrent = false, number }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
            size="sm"
            fontSize='xs'
            w="4"
            colorScheme="red"
            disabled
            _disabled={{
                bg: 'red.500',
                cursor: 'default',
            }}
            >
               {number} 
            </Button>
        )
    }

    return (
        <Button
            size="sm"
            fontSize='xs'
            w="4"
            bg="gray.400"
            _hover={{ 
                bg: "gray.300",
            }}
            >
                {number}
            </Button>
    )
}