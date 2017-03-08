/* ==========================================================================
 * ./config/helmet.js
 *
 * Helmet Config
 * ========================================================================== */

export function updateHelmetProps(url, title, description) {
  return {
    title,
    meta: [
      {
        name: 'description',
        content: description
      },
      {
        itemprop: 'description',
        content: description
      },
      // Twitter
      {
        name: 'twitter:title',
        content: title
      },
      {
        name: 'twitter:description',
        content: description
      },
      // Facebook
      {
        property: 'og:url',
        content: url
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:description',
        content: description
      },
    ]
  };
}

export const HelmetBaseConfig = {
  title: 'Jason Zheng',
  meta: [
    {
      name: 'description',
      content: 'Jason Zheng | Software Engineer and Photographer | GitHub: cle1994 | Berkeley Computer Science'
    },
    {
      name: 'author',
      content: 'Jason Zheng (cle1994)'
    },
    {
      itemprop: 'name',
      content: 'Jason Zheng (cle1994)'
    },
    {
      itemprop: 'description',
      content: 'Jason Zheng | Software Engineer and Photographer | GitHub: cle1994 | Berkeley Computer Science'
    },
    {
      itemprop: 'image',
      content: '/favicon/apple-icon-180x180.png'
    },
    // Twitter
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@jasonsuzheng'
    },
    {
      name: 'twitter:title',
      content: 'Jason Zheng'
    },
    {
      name: 'twitter:description',
      content: 'Jason Zheng | Software Engineer and Photographer | GitHub: cle1994 | Berkeley Computer Science'
    },
    {
      name: 'twitter:image:src',
      content: '/favicon/apple-icon-180x180.png'
    },
    // Facebook/Open Graph
    {
      property: 'og:url',
      content: 'http://jasonsuzheng.com'
    },
    {
      property: 'og:title',
      content: 'Jason Zheng'
    },
    {
      property: 'og:description',
      content: 'Jason Zheng | Software Engineer and Photographer | GitHub: cle1994 | Berkeley Computer Science'
    },
    {
      property: 'og:site_name',
      content: 'Jason Zheng'
    },
    {
      property: 'og:image',
      content: 'http://jasonsuzheng.com/favicon/facebook.png'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
};
