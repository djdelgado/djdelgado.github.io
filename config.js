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
      imgUrl: 'images/Excursion-Layout.jpg',
      description: 'POA is a cloud-based advanced analytics solution developed for BP by Baker Hughes. \
      We developed multiple micro applications to monitor and analyze data from oil & gas plants around the world to optimize equipment and plant reliability. \
      Leveraging HighCharts.js library we were able to display millions of streaming time-series data points. \
      I created and styled custom modules to render key performance metrics and \
      reduced network traffic by implementing GraphQL queries and mutations',
      newsUrl: 'https://www.bp.com/en/global/corporate/news-and-insights/press-releases/bp-deploys-plant-operations-advisor-on-gulf-of-mexico-platforms.html' 
    },
    {
      id: 2,
      name: 'TravelPack',
      title: 'TravelPack',
      imgUrl: 'images/travelpack.jpeg',
      description: 'Travelpack is a cross-platform application that allows users to communicate \
        in real time as they plan their trips. The app was created as part of our thesis project for the bootcamp I attended.\n\
        Users can search through tourist attractions and \ add items to the group (pack) itinerary. \
        Travelpack comes with a built in budget calculator that helps packs estimate the cost of their trip as well as a packing list. \
        During the trip, users can utilize Travelpack’s Find My Pack feature to pinpoint real time \
        locations of pack members and upload photos to the pack photo album to keeps all of their memories in one place!',
      link: 'https://github.com/three-stacks/travelpack'
    }
  ],

  skills: [ 'JavaScript', 'TypeScript', 'React.js', 'Angular', 'Sass', 'Apollo', 'CSS', 'Redux', 'Java', 'Spring', 'REST', 'GraphQL', 'Node.js', 'Docker', 'Chai', 'Mocha', 'Jest', 'SQL', 'PostgreSQL', 'Git', 'AWS', 'CICD', 'Jenkins', 'Rally' ],

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
