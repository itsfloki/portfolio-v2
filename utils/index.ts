const GITHUB_USERNAME = 'prajnastra'

export const BRAND_NAME = 'Abhijit Paul'
export const BRAND_SUB_TEXT =
  'Full stack developer for Cardano & Ethereum Dapps'

export const NavLinks = ['Education', 'Projects', 'About']

export const project_lists = [
  {
    title: 'Shopyle',
    description:
      'Shopyle is an eCommerce store for selling t-shirts online. I have integrated Braintree Paypal Payment method in this app. It uses jwt user authentication and mongoDB for storing user data.',
    github_link: `https://github.com/${GITHUB_USERNAME}/shopyle.git`,
    live_link: 'https://shopyle.netlify.app/',
    image: `https://github.com/${GITHUB_USERNAME}/images/blob/main/proj1.jpg?raw=true`,
    tags: ['React', 'Node', 'Mongodb'],
  },
  {
    title: 'Indigram',
    description:
      'Indigram is a place where user can share images with followers. I have used redux for state management and firebase as a backend framework. I have used material ui for the design.',
    github_link: `https://github.com/${GITHUB_USERNAME}/indigram.git`,
    live_link: 'https://indigram.netlify.app',
    image: `https://github.com/${GITHUB_USERNAME}/images/blob/main/proj2.jpg?raw=true`,
    tags: ['react', 'redux', 'firebase'],
  },
  {
    title: 'Sunnyside',
    description:
      'Sunnyside agency landing page design with html, css and Javascript.',
    github_link: `https://github.com/${GITHUB_USERNAME}/sunnyside-agency-landing-page.git`,
    live_link: `https://${GITHUB_USERNAME}.github.io/sunnyside-agency-landing-page/`,
    image: `https://github.com/${GITHUB_USERNAME}/images/blob/main/proj3.jpg?raw=true`,
    tags: ['html', 'css', 'javascript'],
  },
]

export const aboutMe = `Hi there, I am Abhijit an aspiring Blockchain Developer. Now I am pursuing my bachelor's degree in CS. Since 3 years I have been experimenting with frontend, backend & blockchain development & built some cool projects. Currently, I am learning Haskell & Plutus.`

export const profileImage = `https://github.com/${GITHUB_USERNAME}/images/blob/main/abhijit.jpg?raw=true`
