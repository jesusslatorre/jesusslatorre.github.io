import IConfig from './src/interfaces/IConfig';

export default {
  services: {
    github: {
      configuration: {
        nickname: 'jesusslatorre',
        sort: {
          repositories: [
            { attr: 'created_at', sortByDesc: true },
            { attr: 'forks_count', sortByDesc: true },
            { attr: 'stargazers_count', sortByDesc: true },
          ],
        },
        filter: {
          repositories: [
            [
              { attr: 'owner.login', values: ['jesusslatorre', 'GPortfolio'] },
              { attr: 'name', values: ['awesome-vue', 'merge-conflict', 'github-pages-with-jekyll', 'markdown-portfolio'], revert: true },
              { attr: 'fork', values: false },
            ],
          ],
        },
      },
    },
  },
  data: {
    position: 'Desarrollador fullStack [ Javascript | Angular | PHP | SQL | Kotlin ]',
    links: [
      { name: 'github', url: 'https://github.com/jesusslatorre' }
    ],
  },
  templates: {
    default: {
      configuration: {
        background: () => require('./public/background.jpg'),
      },
    },
  },
} as IConfig;
