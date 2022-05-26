import { Flex, Box, Image, Heading, Text, FlexProps } from "@chakra-ui/react";

type City = {
  city: string;
  country: string;
  banner: {
    src: string;
    alt: string;
  };
  flag: {
    src: string;
    alt: string;
  };
};

interface CardProps extends FlexProps {
  data: City;
}

export function Card({ data, ...rest }: CardProps): JSX.Element {
  const { city, country, banner, flag } = data;

  return (
    <Flex
      {...rest}
      minW="256px"
      flexDir="column"
      overflow="hidden"
      bgColor="white"
      border="1px"
      borderColor="yellow.350"
      borderRadius="4px"
    >
      <Box w="100%" h="173px">
        <Image
          src={banner.src}
          alt={banner.alt}
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>
      <Flex
        justifyContent="space-between"
        px="24px"
        pt="18px"
        pb="25"
        align="center"
      >
        <Box>
          <Heading
            fontSize="20px"
            fontWeight="semibold"
            mb="12px"
            fontFamily="card"
          >
            {city}
          </Heading>
          <Text fontFamily="card" fontSize="md">
            {country}
          </Text>
        </Box>
        <Image
          src={flag.src}
          alt={flag.alt}
          w="30px"
          h="30px"
          border="none"
          borderRadius="60px"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
}
