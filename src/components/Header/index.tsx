import { useRouter } from "next/router";
import {
  Box,
  Flex,
  Icon,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { IoChevronBack } from "react-icons/io5";

import { IfPassRender } from "../IfPassRender";
import Link from "next/link";

export function Header(): JSX.Element {
  const { asPath } = useRouter();
  const isHome = asPath === "/";

  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      w="100%"
      py={["3", "6"]}
      bgColor="gray.100"
      position="relative"
    >
      <IfPassRender check={!isHome}>
        <Link href="/">
          <ChakraLink position="absolute" left="150px" marginTop="5px">
            <Icon as={IoChevronBack} fontSize="28px"></Icon>
          </ChakraLink>
        </Link>
      </IfPassRender>
      <Flex bgColor="gray.100" justifyContent="center" mx="auto">
        <Image src="/images/logo.svg" w={["81px", "184px"]} />
      </Flex>
    </Box>
  );
}
