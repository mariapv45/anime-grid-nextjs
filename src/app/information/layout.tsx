import { Flex } from "@chakra-ui/react";
import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

type Props = {
  children: React.ReactNode;
}

export default function layout({ children }: Props) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      {children}
      <Footer />
    </Flex>
  )
}
