<script setup lang="ts">
const metadata = useSiteMetadata();

useHead({
  titleTemplate: (title) => metadata.getPageTitle(title),
  htmlAttrs: {
    lang: "fr",
  },
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
  ],
});

useServerSeoMeta({
  title: metadata.getPageTitle(),
  ogTitle: metadata.getPageTitle(),
  description: metadata.description,
  ogDescription: metadata.description,
  ogImage: metadata.image,
  ogUrl: metadata.siteUrl,
  ogType: "website",
  ogSiteName: metadata.siteName,
  twitterCard: "summary_large_image",
  twitterTitle: metadata.getPageTitle(),
  twitterDescription: metadata.description,
  twitterImage: metadata.image,
  robots: "index, follow",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["Bakery", "Restaurant"],
        name: "KD Bakery",
        image: metadata.image,
        "@id": metadata.siteUrl,
        url: metadata.siteUrl,
        telephone: "+221 77 139 82 81",
        address: {
          "@type": "PostalAddress",
          streetAddress: "[Adresse à remplir]",
          addressLocality: "Dakar",
          addressRegion: "Dakar",
          postalCode: "[Code postal]",
          addressCountry: "SN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "[Latitude]",
          longitude: "[Longitude]",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "22:00",
        },
        servesCuisine: ["French", "Senegalese"],
        priceRange: "$$",
      }),
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
