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
  description: 'A website that allows people to opine on most Web Pages, like Article, Blog, Services and Media pages. Built with React Native, React Native Web and NextJS with Responsive Design in mind.',
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
  skillIds: [1, 8, 6, 7, 9, 11, 101, 102, 107, 108, 201, 206, 207, 301, 302, 303, 304],
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
    '/images/projects/3/matchstick-eq-1.png',
    '/images/projects/3/matchstick-eq-2.png',
    '/images/projects/3/matchstick-eq-3.png',
    '/images/projects/3/matchstick-eq-4.png',
    '/images/projects/3/matchstick-eq-5.png',
    '/images/projects/3/matchstick-eq-6.png',
    '/images/projects/3/matchstick-eq-7.png',
    '/images/projects/3/matchstick-eq-8.png',
    '/images/projects/3/matchstick-eq-9.png',
    '/images/projects/3/matchstick-eq-10.png',
    '/images/projects/3/matchstick-eq-11.png',
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

projects.push(megalobiz);
projects.push(opine);
projects.push(matchstick);
projects.push(nqueen);

// fill skills
for (let i = 0; i < projects.length; i++) {
  const proj = projects[i];
  proj.skills = proj.skillIds.map(id => skillIds[id]);
  proj.stack = proj.stack.map(id => skillIds[id]);
}

export default projects;
