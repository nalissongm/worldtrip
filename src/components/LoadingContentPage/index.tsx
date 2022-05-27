import { Box, HStack, Flex, Heading, Text, Image } from "@chakra-ui/react";
import ContentLoader, { Code } from "react-content-loader";
import { AboutLoading } from "./AboutLoading";
import { BannerLoading } from "./BannerLoading";
import { InfoLoading } from "./InfoLoading";

interface LoadingContentPageProps {
  backgroundColor: string;
  foregroundColor: string;
}

export function LoadingContentPage({
  backgroundColor,
  foregroundColor,
}: LoadingContentPageProps) {
  return (
    <Box>
      <BannerLoading
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
      />
      <Flex
        mx="auto"
        maxW="1192px"
        py="78px"
        justifyContent="space-between"
        align="center"
        wrap="wrap"
      >
        <AboutLoading
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
        />
        <InfoLoading
          backgroundColor={backgroundColor}
          foregroundColor={foregroundColor}
        />
      </Flex>
    </Box>
  );
}
