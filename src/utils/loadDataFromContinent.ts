import { RichText } from "prismic-dom";
import { getPrismicClient } from "../services/prismic";

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

type LoadDataFromContinentResponse = {
  title: string;
  text: string;
  banner: ImageData;
  cities: City[];
  amount_contries: number;
  total: number;
  cities_in_rank: number;
}

export async function loadDataFromContinent (
  uuidOfTheContinent: string
): Promise<LoadDataFromContinentResponse> {
  const prismic = getPrismicClient();

  const { data } = await prismic.getByUID<any>("continent", uuidOfTheContinent, {});

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

  return continent;
}