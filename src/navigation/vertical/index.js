

import ComplaintsIcon from '../../../public/images/IconInput/complaints'
import HierarchyIcon from '../../../public/images/IconInput/hierarchy'
import HomeIcon from '../../../public/images/IconInput/home'
import EmployeeIcon from '../../../public/images/IconInput/employee'
import ContractIcon from '../../../public/images/IconInput/contract'
import  OrderLigthIcon from '../../../public/images/IconInput/Order_light'
import  ReviewsIcon from '../../../public/images/IconInput/reviews'
import  SalaryIcon from '../../../public/images/IconInput/Salary'
import  RequestsIcon from '../../../public/images/IconInput/Requests'
import  Calender from '../../../public/images/IconInput/Calender'
import  EmailIcon from '../../../public/images/IconInput/Emai'
import  ArachiveIcon from '../../../public/images/IconInput/Arachive'
import  System from '../../../public/images/IconInput/System'


const navigation = () => {
  return [
    {
      title: 'Home',
      icon:   <HomeIcon/>,
      path: '/dashboard'
    },
    {
      title: 'Employees',
      icon: <EmployeeIcon/> ,
      children:[
        {
          title:"List",
          path:"/employees/users"
        },
        {
          title:"Departments",
          path:"/employees/team"
        },
        {
          title: 'Registeration',
          path: '/employees/registeration'
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
      title: 'Absence',
      icon: <EmployeeIcon/> ,
      children:[
        {
          title:"Daily Absence",
          path:"/employees/absence"
        },

        {
          title:"Hourly Absence",
          path:"/employees/absencehourly"
        },
      ]
      },

    {
      title: 'Contracts',
      icon: <ContractIcon/>,
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
      icon: <OrderLigthIcon/>,
      path: '/report'
    },
    {
      title: 'Reviews',
      icon: <ReviewsIcon/>,
      path: '/review'
    },
    {
      title: 'Salaries',
      icon: <SalaryIcon/>,
      path: '/salary'
    },
    {
      title: 'Requests',
      icon: <RequestsIcon/>,
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
      icon: <ComplaintsIcon/>,
      path:"/complaints"
    },
    {
      title: 'Calendar',
      icon: <Calender/>,
      path: '/calendar'
    },
    {
      title: 'Hierarchy',
      icon: <HierarchyIcon/>,
      path: '/tree'
    },
    {
      title: 'Emails',
      icon: <EmailIcon/>,
      path: '/apps/email'
    },
    {
      title: 'Archive',
      icon: <ArachiveIcon/>,
      path: '/Archive',
      children:[
        {
          title:"Resigned",
          path:"/archive/resigned"
        },
      ]
    },
    {
      title: 'Policies',
      icon: <System/>,
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



  ];
};

export default navigation;
