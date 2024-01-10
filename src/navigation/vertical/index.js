

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
        {
          title:"View",
          path:"/contracts/view"

        },
        {
          title:"Add",
          path:"/contracts/add"

        },
      ]
    },


  ]
}

export default navigation
