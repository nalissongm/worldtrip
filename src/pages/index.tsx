import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Carousel from "../components/Carousel";
import { GetStaticProps } from "next";
import { getPrismicClient } from "../services/prismic";
import { RichText } from "prismic-dom";
import Head from "next/head";

type Slider = {
  uid: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

type Continents = {
  uid: string;
  slugs: string[];
  data: {
    title: string;
    subtitle: string;
    banner: string;
  };
};

interface HomeProps {
  continents: Continents[];
}

export default function Home({ continents }: HomeProps) {
  const sliders: Slider[] = continents.map((continent) => ({
    uid: continent.uid,
    title: continent.data.title,
    subtitle: continent.data.subtitle,
    image: continent.data.banner,
    link: `/continents/${continent.uid}`,
  }));

  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Flex
        w="100%"
        h="335"
        bgImage="url('/images/background.png')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          flex="1"
          maxW={1160}
          position="relative"
          justifyContent="space-between"
          px="4"
        >
          <Box width={524} alignSelf="center">
            <Heading
              fontSize="4xl"
              fontWeight="medium"
              color="gray.100"
              lineHeight="54px"
              mb="5"
            >
              5 Continentes,
              <br /> infinitas possibilidades.
            </Heading>
            <Text
              fontSize="xl"
              fontWeight="normal"
              color="gray.300"
              lineHeight="30px"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>
          <Image
            src="/images/airplane.svg"
            alt="yellow plane with many white clouds around it"
            w={417}
            mt={115}
          />
        </Flex>
      </Flex>
      <Flex
        maxW={1160}
        justifyContent="center"
        alignItems="flex-end"
        my="20"
        mx="auto"
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image src="/images/cocktail.svg" w="80px" mb="6" />
          <Text fontSize="2xl" fontWeight="semibold">
            vida noturna
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" ml={130}>
          <Image src="/images/surf.svg" w="84px" mb="6" />
          <Text fontSize="2xl" fontWeight="semibold">
            praia
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" ml={135}>
          <Image src="/images/building.svg" w="55.9px" mb="6" />
          <Text fontSize="2xl" fontWeight="semibold">
            moderno
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" ml={171}>
          <Image src="/images/museum.svg" w="85px" mb="6" />
          <Text fontSize="2xl" fontWeight="semibold">
            clássico
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" ml={155}>
          <Image src="/images/earth.svg" w="85px" mb="6" />
          <Text fontSize="2xl" fontWeight="semibold">
            e mais
          </Text>
        </Box>
      </Flex>
      <Divider
        w={90}
        borderTopWidth="2px"
        borderBottomWidth="0px"
        borderTopColor="gray.700"
        opacity="0.8"
        mx="auto"
        mb="52px"
      />
      <Flex
        alignItems="center"
        flexDirection="column"
        maxW={1240}
        mx="auto"
        mb="52px"
      >
        <Heading
          fontSize="4xl"
          textAlign="center"
          fontWeight="medium"
          lineHeight="54px"
          mb="52px"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>
        <Carousel sliders={sliders} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType<any>("continent", {
    fetch: ["continent.title", "continent.subtitle", "continent.banner"],
    pageSize: 6,
  });

  const continents = response.map((continent) => {
    return {
      uid: continent.uid,
      slugs: continent.slugs,
      data: {
        title: RichText.asText(continent.data.title),
        subtitle: RichText.asText(continent.data.subtitle),
        banner: continent.data.banner.url,
      },
    };
  });

  return {
    props: {
      continents,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
