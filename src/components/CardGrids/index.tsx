import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { Card } from "../Card";

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

interface CardGridsProps extends SimpleGridProps {
  cities: City[];
}

export function CardGrids({ cities, ...rest }: CardGridsProps): JSX.Element {
  return (
    <SimpleGrid {...rest}>
      {cities.map((city) => (
        <Card my="2px" data={city} key={city.city} />
      ))}
    </SimpleGrid>
  );
}
