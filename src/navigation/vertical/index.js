

const navigation = () => {

  return [
    {
      title: 'Dashboard',
      icon: 'tabler:home',

      path: '/dashboard'
    },
    {
      title: 'Contracts',
      icon: 'tabler:file-pencil',


      children:[
        {
          title:"List",
          path:"/contracts/list"

        },

        // {
        //   title:"View",
        //   path:"/contracts/view"

        // },
        {
          title:"Add",
          path:"/contracts/add"

        },
      ]
    },
    {
      title: 'Email',
      icon: 'tabler:mail',
      path: '/apps/email'
    },
    {
      title: 'Report',
      icon: 'tabler:report',
      path: '/report'
    },
    {
      title: 'Calendar',
      icon: 'tabler:report',
      path: '/calendar'
    },
    {
      title: 'Employees',
      icon: 'tabler:file-pencil',

      children:[
        {
          title:"All Users",
          path:"/employees/users"

        },
        {
          title:"Team",
          path:"/employees/team"

        },
        {
          title:"Absence",
          path:"/employees/absence"

        },
        {
          title:"Add",
          path:"/employees/add"

        },

      ]
    },
    {
      title: 'Requests',
      icon: 'tabler:file-pencil',

      children:[
        {
          title:"Inquiries",
          path:"/requests/Inquiries"

        },

      ]
    },
  ]

}

export default navigation
