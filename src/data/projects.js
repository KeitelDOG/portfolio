import skills from './skills';

const skillIds = skills.reduce((acc, skill) => {
  acc[skill.id] = skill;
  return acc;
}, {});

const projects = [];

const megalobiz = {
  id: 1,
  name: 'Megalobiz - Music and LRC',
  description: 'A website around music.\nOne part is for listening to Haitian musics by artists and albums.\nThe other part is for synchronizing Lyrics with Musics (LRC) around the world.',
  thumbnail: '/images/projects/1/thumbnail.png',
  images: [
    '/images/projects/1/megalobiz-home.png',
    '/images/projects/1/megalobiz-lrc-maker.png',
    '/images/projects/1/megalobiz-lrc-search.png',
    '/images/projects/1/megalobiz-ed-sheeran-photograph-lrc.png',
    '/images/projects/1/megalobiz-lrc-sample.png',
    '/images/projects/1/megalobiz-lrc-music-playing.png',
    '/images/projects/1/megalobiz-top-visits.png',
  ],
  stack: [4, 14, 10, 201],
  skillIds: [4, 14, 1, 10, 101, 102, 108, 201, 205, 209, 301, 305, 308, 406],
  features: [
    'Listen to Music',
    'Download Music',
    'Register and Login',
    'Watch Video Clip',
    'Synchronize Lyrics with Music (LRC Maker): https://www.megalobiz.com/lrc/maker',
    'Download LRC files',
  ],
  source: 'private',
  link: 'https://www.megalobiz.com',
  year: 2016,
  side: 'Full Stack',
  type: 'project',
};

const opine = {
  id: 2,
  name: 'Opine - Boundless Opinion',
  description: '[Project in development]\nA website that allows people to opine on most Web Pages, like Articles, Blogs, Services and Media pages. Built with React Native, React Native Web and NextJS with Responsive Design in mind.',
  thumbnail: '/images/projects/2/thumbnail.png',
  images: [
    '/images/projects/2/opine-home.png',
    '/images/projects/2/opine-link-page.png',
    '/images/projects/2/opine-link-comments.png',
    '/images/projects/2/opine-notifications.png',
    '/images/projects/2/opine-mobile-link.png',
    '/images/projects/2/opine-mobile-reply.png',
    '/images/projects/2/opine-mobile-drawer.png',
    '/images/projects/2/opine-dashboard.png',
    '/images/projects/2/opine-mobile-sharing.png',
    '/images/projects/2/opine-live-seeding.png',
  ],
  stack: [7, 8, 9, 11, 201],
  skillIds: [1, 8, 6, 7, 9, 11, 101, 102, 107, 108, 201, 206, 207, 301, 302, 303, 304, 309, 109],
  features: [
    'Submit and crawl URL to create a unique page for each Link',
    'URL can be submitted with "Share" option on mobile App.',
    'Search existing Links with keywords',
    'Sign Up and Sign In',
    'Like or Dislike a Link',
    'Comment on a Link',
    'Mention people who already commented',
    'Add emojis in your comment',
    'Browse recent History',
    'Consume Link Feeds',
  ],
  source: 'private',
  link: 'https://comon.megalobiz-staging.com',
  year: 2023,
  side: 'Full Stack',
  type: 'project',
};

const matchstick = {
  id: 3,
  name: 'Matchstick Equation Solver',
  description: 'A Web App challenge where you enter an equation string like:\n3 + 9 = 5\nand that calculates all solutions with Move, Add or Remove operations.\n(moving 1 stick):\n3 + 3 = 6',
  thumbnail: '/images/projects/3/thumbnail.png',
  images: [
    '/images/projects/3/matchstick-equation-1.png',
    '/images/projects/3/matchstick-equation-2.png',
    '/images/projects/3/matchstick-equation-3.png',
    '/images/projects/3/matchstick-equation-4.png',
    '/images/projects/3/matchstick-equation-5.png',
    '/images/projects/3/matchstick-equation-6.png',
    '/images/projects/3/matchstick-equation-7.png',
    '/images/projects/3/matchstick-equation-8.png',
    '/images/projects/3/matchstick-equation-9.png',
    '/images/projects/3/matchstick-equation-10.png',
    '/images/projects/3/matchstick-equation-11.png',
  ],
  stack: [12, 8, 6, 101, 102],
  skillIds: [1, 12, 8, 6, 101, 102, 108, 301],
  features: [
    'Algorithm: ES6 OOP pattern, Recursion, Permutation with Brute Force',
    'Enter Equation String like 3 + 9 = 5',
    'Select between Move, Add and Remove sticks',
    'Select qty (1, 2, or 3) sticks to move',
    'Matchstick can be moved in Digits and Symbols',
    'Equal Symbol can turn into minus in the Algorithm',
    'Calculate and display all possible Solutions',
    'Group Solutions by equation result value',
    'Highlight removed stick in red dotted rectangle',
    'Highlight added stick in green dotted rectangle',
  ],
  source: 'https://github.com/KeitelDOG/matchstick-equation',
  link: 'https://matchstick.megalobiz-staging.com',
  year: 2023,
  side: 'Frontend',
  type: 'challenge',
};

const nqueen = {
  id: 4,
  name: 'N-Queens Visualization Solver',
  description: 'N-Queens solver and visualization of permutation process to find solutions. This code uses 8 x 8 Board, but can be used with any number from 2 to 8 or more. Be careful of Time Complexity for n > 8.',
  thumbnail: '/images/projects/4/thumbnail.gif',
  images: [
    '/images/projects/4/n-queens-8x8-visualization.gif',
    '/images/projects/4/n-queens-8x8-solution.png',
    '/images/projects/4/n-queens-8x8.png',
    '/images/projects/4/n-queens-5x5-solution.png',
    '/images/projects/4/n-queens-5x5.png',
  ],
  stack: [1, 101, 102],
  skillIds: [1, 101, 102, 301],
  features: [
    'Algorithm: Pseudoclassical pattern, Recursion, Permutation with Backtracking',
    'Show a preview of each permuation during some milliseconds',
    'Show a preview of solution with green pawn',
    'Pause down a couple of seconds when a solution is found',
  ],
  source: 'https://github.com/KeitelDOG/n-queens',
  link: 'https://matchstick.megalobiz-staging.com',
  year: 2020,
  side: 'Frontend',
  type: 'challenge',
};

const connection = {
  id: 5,
  name: 'Royers Connection - Point of Sale System',
  description: 'A Web Application Dashboard and API that allows configuration, products and stocks management for a Point OF Sale. Built with React, and NodeJS. I build the Dashboard and collaborate on API. A private project, only some Dev screenshots available.',
  thumbnail: '/images/projects/5/thumbnail.png',
  images: [
    '/images/projects/5/connection-home.png',
    '/images/projects/5/connection-pos.png',
    '/images/projects/5/connection-pos-2.png',
    '/images/projects/5/connection-pos-orders-list.png',
    '/images/projects/5/connection-pos-stats.png',
    '/images/projects/5/connection-product.png',
  ],
  stack: [6, 9, 11, 201],
  skillIds: [1, 6, 9, 11, 101, 102, 104, 107, 201, 206, 207, 301, 302, 303, 304, 309, 109],
  features: [
    'Sign Up for approbation and Sign In',
    'Get Global reports and statistics',
    'Manage Categories',
    'Manage Products',
    'Manage Users',
    'Place Order and proceed to payment',
    'A mobile App was created by another team',
  ],
  source: 'private',
  link: 'private',
  year: 2020,
  side: 'Full Stack',
  type: 'project',
};

// Givepower
const givepower = {
  id: 6,
  name: 'Givepower - La Gonâve island Watermaker',
  description: 'A Server API that collects data for a System that makes water with Spectra device. The project was at La Gonâve island in Haiti, under the command of some US Engineers. I had to get data from:\n- 2 Spectra Watermakers\n- 10 Tesla Powerwall2\n- 6 SMA inverters.',
  thumbnail: '/images/projects/6/thumbnail.png',
  images: [
    '/images/projects/6/givepower-spectra.png',
    '/images/projects/6/givepower-syncing.png',
    '/images/projects/6/givepower-schedule-code.png',
    '/images/projects/6/givepower-db-sma.png',
    '/images/projects/6/givepower-sma-endpoints-code.png',
    '/images/projects/6/givepower-devices-1.jpg',
    '/images/projects/6/givepower-devices-2.jpg',
    '/images/projects/6/givepower-devices-3.jpg',
    '/images/projects/6/givepower-devices-4.jpg',
    '/images/projects/6/givepower-devices-5.jpg',
    '/images/projects/6/givepower-devices-6.jpg',
    '/images/projects/6/givepower-la-gonâve-island-haiti.jpg',
  ],
  stack: [9, 11, 201],
  skillIds: [1, 9, 11, 201, 206, 207, 301, 302, 303, 304],
  features: [
    'Local API is installed on local computer to collect data from LAN Devices',
    'Online API is installed on Cloud Server to receive data and make it available to Givepower applications',
    'Schedule system to fetch and push data from devices at a certain unique period for each type of device.',
    'Special Achievement: Only Tesla devices had documented API. I had to hack web interface to find authentication and data endpoints, and Codes for each measurement in SMA which were not documented anywhere over the internet.',
  ],
  source: 'private',
  link: 'private',
  year: 2020,
  side: 'Backend',
  type: 'project',
};

// SxC
const sxc = {
  id: 7,
  name: 'SxC - Saving by Consumption',
  description: 'A commercial system getting and offering foods at lower cost and sharing the savings with all parties, owners, sellers and buyers. The Application is used as a POS. I was responsible for Backend, and also the Offline selling and Online synchronization.',
  thumbnail: '/images/projects/7/thumbnail.jpg',
  images: [
    '/images/projects/7/sxc-home.jpg',
    '/images/projects/7/sxc-login.jpg',
    '/images/projects/7/sxc-menu-drawer.jpg',
    '/images/projects/7/sxc-member-qualification.jpg',
    '/images/projects/7/sxc-member-details.jpg',
    '/images/projects/7/sxc-members-list.jpg',
    '/images/projects/7/sxc-stock-adding.jpg',
    '/images/projects/7/sxc-swagger-codes.jpg',
  ],
  stack: [13, 4, 14, 10, 201, 212],
  skillIds: [13, 2, 4, 14, 201, 209, 211, 212, 301, 305, 308, 309, 109, 406],
  features: [
    'Database and API was first on Backendless, and featured Backendless Server Code',
    'Server with Laravel/PHP and MySQL with Swagger API Documentation',
    'Offline selling for a Seller and synchronization any time later',
    'Qualification process with Questions/Answers for Member',
    'Login with phone and password',
  ],
  source: 'private',
  link: 'private',
  year: 2018,
  side: 'Full Stack',
  type: 'project',
};

// Portfolio
const portfolio = {
  id: 8,
  project_id: 8,
  name: 'Portfolio - Keitel Jovin',
  description: 'A portfolio that I am using to present myself and the projects I have worked in a direct and visual way, with related skills, features and pictures.',
  thumbnail: '/images/projects/8/thumbnail.png',
  images: [
    '/images/projects/8/portfolio-hero.png',
    '/images/projects/8/portfolio-projects.png',
    '/images/projects/8/portfolio-project-opine.png',
    '/images/projects/8/portfolio-skills.png',
    '/images/projects/8/portfolio-timeline.png',
  ],
  stack: [12, 8, 6, 101, 102],
  skillIds: [1, 12, 8, 6, 101, 102, 301],
  features: [
    'A Summary about myself',
    'Projects, skills, achievements and accomplishments data are hardcoded',
    'Page listing for Projects and Skills',
    'Page for specific Project and specific Skill',
    'Each Project is related to multiple skills used in it',
    'Social Network link for additional informations',
    'Contact informations to keep in touch any time',
    'Template used and modified for my needs: https://reactjsexample.com/a-portfolio-built-in-react-and-nextjs/',
  ],
  source: 'https://github.com/KeitelDOG/portfolio',
  link: 'https://portfolio-keiteldog.vercel.app/',
  year: 2023,
  side: 'Frontend',
  type: 'portfolio',
};

// DGB - Bidje Peyim
const dgb = {
  id: 9,
  name: 'DGB - Direction Générale du Budget',
  description: 'An Application that aims at presenting Budgets for some Haitian governmental projects to show transparency. I was responsible for the Web App.',
  thumbnail: '/images/projects/9/thumbnail.png',
  images: [
    '/images/projects/9/dgb-home.png',
    '/images/projects/9/dbg-home-collapsed.png',
    '/images/projects/9/dgb-mobile.png',
    '/images/projects/9/dgb-stats.png',
  ],
  stack: [8, 6, 101, 102],
  skillIds: [1, 12, 8, 6, 101, 102, 301],
  features: [
    'A Home page that show global statistics and latest articles on budget',
    'Manage and show budget related articles with picture upload',
    'Budgets Documents are showed and can be downloaded',
    'Report section provide many kind of statistics data and vizualizations',
  ],
  source: 'private',
  link: 'private',
  year: 2020,
  side: 'Frontend',
  type: 'project',
};

// SusT
const sust = {
  id: 10,
  name: 'SusT - Sustainable Search Engine',
  description: 'A website that provides ideas, solutions and activities that aim to promote projects related to a natural and organic environment. People can post their individual project, organization or business as link.',
  thumbnail: '/images/projects/10/thumbnail.png',
  images: [
    '/images/projects/10/sust-home.png',
    '/images/projects/10/sust-home-2.png',
    '/images/projects/10/sust-home-3.png',
    '/images/projects/10/sust-home-4.png',
    '/images/projects/10/sust-search-results.png',
    '/images/projects/10/sust-login.png',
    '/images/projects/10/sust-register.png',
    '/images/projects/10/sust-new-post-category.png',
    '/images/projects/10/sust-new-post-info.png',
    '/images/projects/10/sust-new-post-plan.png',
    '/images/projects/10/sust-new-post-billing.png',
    '/images/projects/10/sust-new-post-billing-confirmation.png',
    '/images/projects/10/sust-new-post-trial.png',
    '/images/projects/10/sust-posts-management.png',
    '/images/projects/10/sust-post-invoice.png',
    '/images/projects/10/sust-post-chart.png',
    '/images/projects/10/sust-deployment.png',
  ],
  stack: [6, 8, 9, 11, 201],
  skillIds: [1, 8, 6, 9, 11, 101, 102, 108, 201, 206, 207, 301, 302, 303, 304, 309, 109],
  features: [
    'Home page have search input and is similar to landing page',
    'Can display search results on posted links',
    'User can post a new link by entering info and chose a paid or trial plan to promote it',
    'Search existing Links with keywords',
    'Register and Login',
    'User can see Campaign informations, Statistics chart and Invoice from posted links',
  ],
  source: 'private',
  link: 'private',
  year: 2020,
  side: 'Full Stack',
  type: 'project',
};

// Pronap Mobile

// Vision

projects.push(megalobiz);
projects.push(opine);
projects.push(givepower);
projects.push(matchstick);
projects.push(nqueen);
projects.push(sxc);
projects.push(connection);
projects.push(dgb);
projects.push(sust);
projects.push(portfolio);

// fill skills
for (let i = 0; i < projects.length; i++) {
  const proj = projects[i];
  proj.skills = proj.skillIds.map(id => skillIds[id]);
  proj.stack = proj.stack.map(id => skillIds[id]);
}

export default projects;
