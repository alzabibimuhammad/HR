const navigation = () => {
  return [
    {
      title: 'Home',
      icon: 'tabler:home',
      path: '/dashboard'
    },
    {
      title: 'Employees',
      icon: 'tabler:users',
      children:[
        {
          title:"List",
          path:"/employees/users"
        },
        {
          title:"Teams",
          path:"/employees/team"
        },
        {
          title: 'Registeration',
          path: '/employees/registeration'
        },
        {
          title:"Absence",
          path:"/employees/absence"
        },
        {
          title:"Secretariats",
          path:"/employees/secretariats"
        },
        {
          title:"Add",
          path:"/employees/add"
        },
      ]
    },

    {
      title: 'Contracts',
      icon: 'tabler:file-text',
      children:[

        {
          title:"Employees",
          path:"/contracts/list"
        },
        {
          title:"Add",
          path:"/contracts/add"
        },
      ]
    },
    {
      title: 'Reports',
      icon: 'tabler:file-report',
      path: '/report'
    },
    {
      title: 'Reviews',
      icon: 'tabler:stars',
      path: '/review'
    },
    {
      title: 'Salaries',
      icon: 'tabler:coin',
      path: '/salary'
    },
    {
      title: 'Requests',
      icon: 'tabler:alert-circle',
      children:[
        {
          title:"Employees",
          path:"/requests/Inquiries"
        },
        {
          title:"System",
          path:"/requests/system"
        },
      ]
    },
    {
      title: 'Complaints',
      icon: 'tabler:alert-square',
      path:"/complaints"
    },
    {
      title: 'Calendar',
      icon: 'tabler:calendar',
      path: '/calendar'
    },
    {
      title: 'Hierarchy',
      icon: 'tabler:tree',
      path: '/tree'
    },
    {
      title: 'Emails',
      icon: 'tabler:mail',
      path: '/apps/email'
    },
    {
      title: 'Policies',
      icon: 'tabler:file-text',
      path: '/policies',
      children:[
        {
          title:"Add",
          path:"/policies/add"
        },
        {
          title:"View",
          path:"/policies/view"
        },
      ]
    },
    {
      title: 'Archive',
      icon: 'tabler:archive',
      path: '/Archive',
      children:[
        {
          title:"Resigned",
          path:"/archive/resigned"
        },
      ]
    },


  ];
};

export default navigation;
