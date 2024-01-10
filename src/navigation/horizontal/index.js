const navigation = () => {
  return [
    {
      icon: 'tabler:layout-grid-add',
      title: 'Apps',
      children: [
        {
          title: 'Email',
          icon: 'tabler:mail',
          path: '/apps/email'
        },
      ]
      }


  ]
}

export default navigation
