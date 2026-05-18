export default async function sitemap() {
  return [
    {
      url: 'https://ubuntuafrican.qwabi.co.za/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ubuntu african.qwabi.co.za/about-developer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://ubuntuafrican.qwabi.co.za/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs as needed
  ];
}
