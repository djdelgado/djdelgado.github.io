module.exports = {
  siteTitle: 'David Delgado', // <title>
  manifestName: 'Portfolio',
  manifestShortName: 'Landing', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/portfolio-site`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'David Delgado',
  subHeading: 'Full-Stack Software Developer',

  //projects
  projects: [
    {
      id: 1,
      name: 'POA',
      title: 'Plant Operations Advisor',
      imgUrl: '/images/Excursion-Layout.jpg',
      description: 'TODO'
    },
    {
      id: 2,
      name: 'TravelPack',
      title: 'TravelPack',
      imgUrl: '/images/travelpack.jpeg',
      description: 'TODO'
    }
  ],

  // social
  socialLinks: [
    {
      icon: 'fab fa-github',
      name: 'Github',
      url: 'https://github.com/djdelgado',
    },
    {
      icon: 'fab fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://linkedin.com/in/david-j-delgado/',
    },
    {
      icon: 'fab fa-instagram',
      name: 'Instagram',
      url: 'https://www.instagram.com/bigdaytoday/',
    },
    {
      icon: 'fas fa-envelope',
      name: 'Email',
      url: 'mailto:djd9062@gmail.com',
    },
  ]
};
