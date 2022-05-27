import { Box } from "@chakra-ui/react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface AboutLoadingProps extends IContentLoaderProps {}

export function AboutLoading(props: AboutLoadingProps): JSX.Element {
  return (
    <Box maxW="600px" w="100%">
      <ContentLoader viewBox="0 0 778 116" {...props}>
        <rect x="37" y="34" rx="5" ry="5" width="0" height="0" />
        <rect x="28" y="29" rx="5" ry="5" width="258" height="32" />
        <rect x="28" y="71" rx="5" ry="5" width="465" height="32" />
        <rect x="434" y="94" rx="5" ry="5" width="0" height="0" />
        <rect x="29" y="116" rx="5" ry="5" width="749" height="32" />
      </ContentLoader>
    </Box>
  );
}
