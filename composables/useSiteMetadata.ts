export const useSiteMetadata = () => {
  const defaultMetadata = {
    siteName: "KD Bakery",
    siteUrl: "https://www.kdbakery.sn",
    description:
      "KD Bakery, une boulangerie-pâtisserie d'exception associée à un restaurant raffiné, offrant un mariage unique entre la tradition française et les saveurs sénégalaises.",
    image: "https://www.kdbakery.sn/images/og-image.jpg", // Make sure to create and add this image
  };

  return {
    ...defaultMetadata,
    getPageTitle: (pageTitle?: string) => {
      return pageTitle
        ? `${pageTitle} | ${defaultMetadata.siteName}`
        : `${defaultMetadata.siteName} - Boulangerie-Pâtisserie & Restaurant d'Exception au Sénégal`;
    },
  };
};
