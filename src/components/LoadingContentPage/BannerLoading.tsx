import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface BannerLoadingProps extends IContentLoaderProps {}

export function BannerLoading(props: BannerLoadingProps): JSX.Element {
  return (
    <ContentLoader viewBox="0 0 380 70" {...props}>
      {/* Only SVG shapes */}
      <rect x="0" y="0" width="100%" height="500px" />
    </ContentLoader>
  );
}
