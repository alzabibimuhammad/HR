import React from 'react';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography'

const TreeNode = ({ employee, level }) => {
  const renderChildren = (children, level) => {
    if (!children || children.length === 0) return null;

    return (

      <div
        style={{
          display: 'flex',
          flexDirection: level === 1 ? 'row' : 'column',
          marginLeft: level === 1 ? '-68px' : '0px',
        }}
        >
        {children.map((child, index) => (
          <React.Fragment key={index}>
            <div style={{ position: 'relative', marginLeft: level === 1 ? '70px' : '0' }}>

              <TreeNode employee={child} level={level + 1} />
            </div>
          </React.Fragment>
        ))}
      </div>


    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:"center",
        alignItems: 'center',
        marginTop:"50px",
        gap:"12px"
      }}
    >
      <Card sx={{display:"flex"}}>
      <CardContent sx={{display:"flex",alignItems:"center",gap:"10px",padding:"16px ,24px ,16px ,24px",height:"84px",width:"268px",borderRadius:"12px"}}>
      <Box>

      <img
        src={employee.image}
        alt={employee.name}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
        }}
        />
        </Box>
        <Box sx={{lineHeight:"25px",padding:"5px"}}>

      <Typography sx={{color:"#3f4458",fontWeight:"500",fontSize:"13px"}}>{employee.name}</Typography>
      <Typography sx={{fontSize:"10px",fontWeight:"400",color:"7b8794"}}>{employee.position}</Typography>
      <Typography sx={{fontSize:"10px",fontWeight:"400",color:"7b8794"}}>{employee.specialization}</Typography>
        </Box>
          </CardContent>

      </Card>
      {renderChildren(employee.children, level)}


    </div>
  );
};

const CompanyTree = () => (

  <div>
    <TreeNode employee={employees} level={1} />
  </div>
);

const employees = {
  name: 'Abd Alrahman khd',
  image: 'https://via.placeholder.com/50',
  position:"Team Leader",
  specialization:"Front-End Developer",
  children: [
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/50',
      position:"Team Leader",
      specialization:"Front-End Developer",
      children: [
        {
          name: 'Alice Johnson',
          image: 'https://via.placeholder.com/50',
          position:"Team Leader",
          specialization:"Front-End Developer",
          children: [
            {
              name: 'Carol Williams',
              image: 'https://via.placeholder.com/50',
              position:"Team Leader",
              specialization:"Front-End Developer",
            },
            {
              name: 'Carol Williams',
              image: 'https://via.placeholder.com/50',
              position:"Team Leader",
              specialization:"Front-End Developer",
            },


            {
              name: 'Carol Williams',
              image: 'https://via.placeholder.com/50',
              position:"Team Leader",
              specialization:"Front-End Developer",
            },
            {
              name: 'Carol Williams',
              image: 'https://via.placeholder.com/50',
            },

          ],
        },
        {
          name: 'Bob Brown',
          image: 'https://via.placeholder.com/50',
          position:"Team Leader",
          specialization:"Front-End Developer",
        },
      ],
    },
    {
      name: 'Alex Johnson',
      image: 'https://via.placeholder.com/50',
      position:"Team Leader",
      specialization:"Front-End Developer",
      children: [
        {
          name: 'David Wilson',
          image: 'https://via.placeholder.com/50',
          position:"Team Leader",
          specialization:"Front-End Developer",
        },
      ],
    },
    {
      name: 'Emily Davis',
      image: 'https://via.placeholder.com/50',
      position:"Team Leader",
      specialization:"Front-End Developer",
      children: [
        {
          name: 'Frank Miller',
          image: 'https://via.placeholder.com/50',
          position:"Team Leader",
          specialization:"Front-End Developer",
        },
        {
          name: 'Grace Martinez',
          image: 'https://via.placeholder.com/50',
          position:"Team Leader",
          specialization:"Front-End Developer",
        },
      ],
    },
  ],
};

export default CompanyTree;
