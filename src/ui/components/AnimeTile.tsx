import { GridItem, Text } from "@chakra-ui/react"
import Image from "next/image"

type Props = {
  coverImage: string;
  title: string;
}

export default function AnimeTile({
  coverImage,
  title,
}: Props) {
  return (
    <GridItem>
      <Image
        src={coverImage}
        alt={title}
        width={200}
        height={300}
      />
      <Text mt={2} fontSize="md" fontWeight="bold">
        {title}
      </Text>
    </GridItem>
  )
}
