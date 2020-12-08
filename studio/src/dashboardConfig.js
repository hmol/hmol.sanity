export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fcfe99c5a1c632cbec5c720',
                  title: 'Sanity Studio',
                  name: 'hmol-sanity-studio',
                  apiId: 'b03d0445-891a-4f03-9df0-bf384d93319c'
                },
                {
                  buildHookId: '5fcfe99cdf580b2a3ee37eb5',
                  title: 'Blog Website',
                  name: 'hmol-sanity',
                  apiId: 'c90352e6-e1a8-4ab2-977c-4fa7ee90eeec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hmol/hmol.sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://hmol-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
