import {
  Box,
  HStack,
  Flex,
  Heading,
  Text,
  Image,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRef } from "react";
import { RichText } from "prismic-dom";

import { CardGrids } from "../../components/CardGrids";
import { getPrismicClient } from "../../services/prismic";
import { PopUp } from "../../components/PopUp";

type ImageData = {
  src: string;
  alt: string;
};

type City = {
  city: string;
  country: string;
  banner: ImageData;
  flag: ImageData;
};

type Continent = {
  title: string;
  text: string;
  banner: ImageData;
  cities: City[];
  amount_contries: number;
  total: number;
  cities_in_rank: number;
};

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps): JSX.Element {
  const initialFocusRef = useRef();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&display=swap"
          rel="stylesheet"
        />

        <title>Worldtrip | {continent.title}</title>
      </Head>
      <Box w="100%" h="500px" overflow="hidden" position="relative">
        <Box w="100%" h="100%" zIndex="3" position="absolute">
          <Box
            display="flex"
            alignItems="flex-end"
            maxW="1160px"
            h="100%"
            mx="auto"
          >
            <Heading
              color="white"
              marginBottom="76px"
              fontWeight="semibold"
              fontSize="5xl"
            >
              {continent.title}
            </Heading>
          </Box>
        </Box>
        <Box
          w="100%"
          height="100%"
          bgColor="rgba(28, 20, 1, 0.35)"
          position="absolute"
        ></Box>
        <Image
          w="100%"
          height="100%"
          src="https://source.unsplash.com/random?europe"
          objectFit="cover"
        />
      </Box>
      <Flex mx="auto" maxW="1192px" py="80px" justifyContent="space-between">
        <Text maxW="600" fontWeight="normal" fontSize="2xl" textAlign="justify">
          {continent.text}
        </Text>

        <HStack
          display="flex"
          spacing="42px"
          align="center"
          justifyContent="center"
        >
          <Box textAlign="center">
            <Heading fontWeight="semibold" fontSize="5xl" color="yellow.900">
              {continent.amount_contries}
            </Heading>
            <Text fontWeight="semibold" fontSize="2xl">
              países
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading fontWeight="semibold" fontSize="5xl" color="yellow.900">
              {continent.total}
            </Heading>
            <Text fontWeight="semibold" fontSize="2xl">
              línguas
            </Text>
          </Box>
          <Box display="flex" alignItems="flex-end" textAlign="center">
            <Box mr="2">
              <Heading fontWeight="semibold" fontSize="5xl" color="yellow.900">
                {continent.cities_in_rank}
              </Heading>
              <Text fontWeight="semibold" fontSize="2xl">
                cidades +100
              </Text>
            </Box>
            <PopUp
              initialFocusRef={initialFocusRef}
              header="Info"
              body="Quantidade de cidades por continente entre as 100 mais
                  visitadas no mundo."
            >
              <Image src="/images/Info.svg" fontSize="md" marginBottom="10px" />
            </PopUp>
          </Box>
        </HStack>
      </Flex>
      <Flex mx="auto" maxW="1192px" flexDir="column" mb="35px">
        <Heading fontSize="4xl" fontWeight="medium" mb="10">
          Cidades +100
        </Heading>
        <CardGrids
          minChildWidth="256px"
          spacing="45px"
          cities={continent.cities}
        />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { continent: "europe" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent: uuid } = params;

  const prismic = getPrismicClient();

  const { data } = await prismic.getByUID<any>("continent", String(uuid), {});

  const continent = {
    title: RichText.asText(data.title),
    text: RichText.asText(data.text),
    banner: {
      src: data.banner.url,
      alt: data.banner.alt,
    },
    cities: data.cities.map((city) => {
      return {
        city: city.city,
        country: city.country,
        banner: {
          src: city.banner.url,
          alt: city.banner.alt,
        },
        flag: {
          src: city.flag.url,
          alt: city.flag.alt,
        },
      };
    }),
    amount_contries: data.amount_contries,
    total: data.total,
    cities_in_rank: data.cities_in_rack,
  };

  return {
    props: {
      continent,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
