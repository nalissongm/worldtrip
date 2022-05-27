import { SimpleGrid } from "@chakra-ui/react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface InfoLoadingProps extends IContentLoaderProps {}

export function InfoLoading(props: IContentLoaderProps): JSX.Element {
  return (
    <SimpleGrid
      minChildWidth="150px"
      spacingX="45px"
      spacingY="25px"
      maxW="550px"
      alignContent="center"
    >
      <ContentLoader viewBox="0 0 110 10" {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="10px" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 110 10" {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="10px" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 110 10" {...props}>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="10px" />
      </ContentLoader>
    </SimpleGrid>
  );
}
