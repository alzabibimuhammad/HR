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
          title: 'Registration',
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
          title:"List",
          path:"/contracts/list"
        },
        {
          title:"Add",
          path:"/contracts/add"
        },
      ]
    },
    {
      title: 'Report',
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
          title:"Inquiries",
          path:"/requests/Inquiries"
        },
      ]
    },
    {
      title: 'Complaints',
      icon: 'tabler:alert-circle',
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
      icon: 'tabler:file-text',
      path: '/Archive',
      children:[
        {
          title:"Resigned",
          path:"/archive/resigned"
        },
      ]
    },

    {
      title: 'Settings',
      icon: 'tabler:settings',
      path: '/Settings'
    },
  ];
};

export default navigation;
