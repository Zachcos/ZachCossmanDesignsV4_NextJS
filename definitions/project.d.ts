interface FeaturedItemProps {
  id: number;
  title: string;
  description: string[];
  slug: string;
  liveUrl: string;
  portImg: string;
  nextProj: {
    title: string;
    slug: string;
  };
  assets: string[];
}

interface OtherItemProps {
  id: number;
  thumbImg: string;
  behanceUrl: string;
}
