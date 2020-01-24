module.exports = {
  plugins: [
    {
      // `gatsby-theme-material-ui`,
      resolve: "gatsby-theme-blog",
      options: {},
    },
  ],
  siteMetadata: {
    title: "Memoir Site",
    author: "Bekah Hawrot Weigel",
    description: "A site dedicated to my memoir and writings",
    siteUrl: "https://bekahhw.blog/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/bekahhw",
      },
      {
        name: "github",
        url: "https://github.com/bekahhw",
      },
    ],
  },
}
