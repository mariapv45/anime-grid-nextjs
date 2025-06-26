import { SimpleGrid, Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ITEMS_PER_PAGE } from "@/lib/constants";

export default function LoadingSkeleton() {
  return (
    <Box maxW="6xl" w="100%" mx="auto" px={{ base: 4, md: 6 }} py={8}>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} gap={{ base: 4, md: 6 }}>
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
          <Box key={i} borderRadius="md" overflow="hidden" p={2}>
            <Skeleton height="230px" borderRadius="md" />
            <SkeletonText mt="4" noOfLines={1} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}