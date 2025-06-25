"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { ApolloProvider } from "@apollo/client";

import { client } from "@/lib/apolloClient";

export function Providers({children}: {children: React.ReactNode} ) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider value={defaultSystem}>
        {children}
      </ChakraProvider>
    </ApolloProvider>
  )
}
