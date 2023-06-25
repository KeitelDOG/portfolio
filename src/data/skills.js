import {
  DiReact,
  DiNodejsSmall,
  DiJqueryLogo,
  DiAndroid,
  DiJava,
  DiHtml5,
} from 'react-icons/di';

import {
  SiPhp,
  SiLaravel,
  SiCsharp,
  SiExpress,
  SiTypescript,
  SiGit,
  SiCss3,
  SiCplusplus,
  SiMysql,
  SiSqlite,
  SiWebpack,
  SiBabel,
  SiMaterialdesign,
  SiBootstrap,
  SiStyledcomponents,
  SiSwagger,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiNeo4J,
  SiRedis,
  SiSequelize,
  SiAmazonaws,
  SiNpm,
  SiComposer,
  SiCircleci,
  SiDocker,
  SiNewrelic,
  SiOpenapiinitiative,
  SiJest,
  SiAirbnb,
  SiMocha,
  SiJasmine,
  SiApachejmeter,
} from 'react-icons/si';

import { TbBrandJavascript, TbBrandNextjs, TbSeo } from 'react-icons/tb';
import { BsFiletypeXml, BsDatabaseFill } from 'react-icons/bs';

const mapType = (arr, type) => arr.map((elem) => ({
  ...elem, type,
}));

let lgs = [
  {
    id: 1,
    name: 'Javascript',
    icon: TbBrandJavascript,
  },
  {
    id: 2,
    name: 'Java',
    icon: DiJava,
  },
  {
    id: 3,
    name: 'C#',
    icon: SiCsharp,
  },
  {
    id: 4,
    name: 'PHP',
    icon: SiPhp,
  },
  {
    id: 5,
    name: 'C++',
    icon: SiCplusplus,
  },
  {
    id: 6,
    name: 'React',
    icon: DiReact,
  },
  {
    id: 7,
    name: 'React Native',
    icon: DiReact,
  },
  {
    id: 8,
    name: 'NextJS',
    icon: TbBrandNextjs,
  },
  {
    id: 9,
    name: 'Node',
    icon: DiNodejsSmall,
  },
  {
    id: 10,
    name: 'jQuery',
    icon: DiJqueryLogo,
  },
  {
    id: 11,
    name: 'Express',
    icon: SiExpress,
  },
  {
    id: 12,
    name: 'Typescript',
    icon: SiTypescript,
  },
  {
    id: 13,
    name: 'Android',
    icon: DiAndroid,
  },
  {
    id: 14,
    name: 'Laravel',
    icon: SiLaravel,
  },
];

lgs = mapType(lgs, 'Language & Framework');

let uis = [
  {
    id: 101,
    name: 'HTML5',
    icon: DiHtml5,
  },
  {
    id: 102,
    name: 'CSS3',
    icon: SiCss3,
  },
  {
    id: 103,
    name: 'XML',
    icon: BsFiletypeXml,
  },
  {
    id: 104,
    name: 'Material UI',
    icon: SiMaterialdesign,
  },
  {
    id: 105,
    name: 'Bootstrap',
    icon: SiBootstrap,
  },
  {
    id: 106,
    name: 'Styled Component',
    icon: SiStyledcomponents,
  },
  {
    id: 107,
    name: 'React Native Paper',
    icon: SiMaterialdesign,
  },
  {
    id: 108,
    name: 'SEO',
    icon: TbSeo,
  },
  {
    id: 109,
    name: 'Swagger',
    icon: SiSwagger,
  },
];
uis = mapType(uis, 'UI & UX');

let dbs = [
  {
    id: 201,
    name: 'MySql',
    icon: SiMysql,
  },
  {
    id: 202,
    name: 'SQL Server',
    icon: SiMicrosoftsqlserver,
  },
  {
    id: 203,
    name: 'MongoDB',
    icon: SiMongodb,
  },
  {
    id: 204,
    name: 'Neo4j',
    icon: SiNeo4J,
  },
  {
    id: 205,
    name: 'Redis',
    icon: SiRedis,
  },
  {
    id: 206,
    name: 'Bookshelf',
    icon: BsDatabaseFill,
  },
  {
    id: 207,
    name: 'Knex',
    icon: BsDatabaseFill,
  },
  {
    id: 208,
    name: 'Sequelize',
    icon: SiSequelize,
  },
  {
    id: 209,
    name: 'Eloquent',
    icon: SiLaravel,
  },
  {
    id: 210,
    name: 'DBFlow',
    icon: BsDatabaseFill,
  },
  {
    id: 211,
    name: 'ActiveAndroid',
    icon: BsDatabaseFill,
  },
  {
    id: 212,
    name: 'SQLite',
    icon: SiSqlite,
  },
];
dbs = mapType(dbs, 'Database & ORM');

let tools = [
  {
    id: 301,
    name: 'Git',
    icon: SiGit,
  },
  {
    id: 302,
    name: 'Webpack',
    icon: SiWebpack,
  },
  {
    id: 303,
    name: 'Babel',
    icon: SiBabel,
  },
  {
    id: 304,
    name: 'NPM',
    icon: SiNpm,
  },
  {
    id: 305,
    name: 'Composer',
    icon: SiComposer,
  },
  {
    id: 306,
    name: 'Circle CI',
    icon: SiCircleci,
  },
  {
    id: 307,
    name: 'Docker',
    icon: SiDocker,
  },
  {
    id: 308,
    name: 'New Relic',
    icon: SiNewrelic,
  },
  {
    id: 309,
    name: 'Open API',
    icon: SiOpenapiinitiative,
  },
  {
    id: 310,
    name: 'AWS Elastic Beanstalk',
    icon: SiAmazonaws,
  },
];
tools = mapType(tools, 'Tools & DevOps');

let testings = [
  {
    id: 401,
    name: 'Jest',
    icon: SiJest,
  },
  {
    id: 402,
    name: 'Enzyme',
    icon: SiAirbnb,
  },
  {
    id: 403,
    name: 'Mocha',
    icon: SiMocha,
  },
  {
    id: 404,
    name: 'Chai',
    icon: DiNodejsSmall,
  },
  {
    id: 405,
    name: 'Jasmine',
    icon: SiJasmine,
  },
  {
    id: 406,
    name: 'PHPUnit',
    icon: SiPhp,
  },
  {
    id: 407,
    name: 'k6',
    icon: TbBrandJavascript,
  },
  {
    id: 408,
    name: 'JMeter',
    icon: SiApachejmeter,
  },

];

testings = mapType(testings, 'Testing');

export default lgs.concat(uis).concat(dbs).concat(tools).concat(testings);
