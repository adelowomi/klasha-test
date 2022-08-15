/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Klasha",
  titleTemplate: "%s | Klasha",
  defaultTitle: "Klasha",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://Klasha.sznm.dev",
  openGraph: {
    url: "https://Klasha.sznm.dev",
    title: "Klasha",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.sznm.dev/**Klasha**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "Klasha.sznm.dev og-image",
      },
    ],
    site_name: "Klasha",
  },
  twitter: {
    handle: "@sozonome",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
