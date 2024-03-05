

const navigation = () => {
  return [
    {
      icon: 'tabler:layout-grid-add',
      title: 'Apps',
      children: [
        {
          title: 'Email',
          icon: '/image/image.svg',
          path: '/apps/email'
        },
      ]
      },
      {
        icon: 'tabler:layout-grid-add',
        title: 'Profile',
        path:'/profile/[id]'
      },

      {
        title: 'Settings',
        icon: 'tabler:settings',
        path: '/Settings'
      },
      {
        title:"Edit",
        path:"/policies/edit"
      },
  ]
}

export default navigation
