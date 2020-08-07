export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2db19dd4b6d54744acbeda',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ezhvfbrf',
                  apiId: '11b8ca1a-f7b7-4606-bfbb-b2d6377ffa4a'
                },
                {
                  buildHookId: '5f2db19ed88d1f84f12c02e0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7b9qoimj',
                  apiId: 'ecf70c20-f81f-4cc4-acb3-79554d08c03c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vishaag/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7b9qoimj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
