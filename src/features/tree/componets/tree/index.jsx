import React, { Children } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import useGetMembersHierarchy from '../../hooks/useGetMembersHierarchy';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, ListSubheader } from '@mui/material';

const renderChildren = (children, level) => {


  if (!children || children.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginLeft: level === 1 ? '-68px' : '0px',
      }}
    >
      {children.map((child, index) => (
        <React.Fragment key={index}>
          <div style={{ position: 'relative', marginLeft: '70px' }}>
            <TreeNode employee={child} level={level + 1} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const renderChildrenTeamLeader = (children, level) => {

  if (!children || children.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        gap:"35px"
      }}
    >
      {children.map((child, index) => (
        <React.Fragment key={index}>
          <div style={{ position: 'relative' }}>
            <TreeNodeTeamLeader employee={child} level={level + 1} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const renderChildrenMembers = (children, level) => {

  if (!children || children.length === 0) return null;

  return (
    <div>
      {children.map((child, index) => (
        <React.Fragment key={index}>
          <div>
            <TreeNodeTeamMemmbers employee={child} level={level + 1} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const TreeNode = ({ employee, level }) => {

  const employees = employee?.user;

  const sortEmployeesByRole = (employees) => {
    const teamLeaders = employees?.filter(employee => employee.role === 'team_leader');
    const nonTeamLeaders = employees?.filter(employee => employee.role !== 'team_leader');
    
 
    if (teamLeaders?.length > 0) {
      return [...teamLeaders, ...nonTeamLeaders];
    } else {
      return nonTeamLeaders; 
    }
  }
  
  // Sort employees based on role
  const sortedEmployees = sortEmployeesByRole(employees);


  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          gap: '12px',
        }}
      >
        <Card sx={{ display: 'flex' ,width:'224px',borderRadius: "12px" }}>
      

        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <>
        <div style={{ display: "flex",justifyContent: 'center',paddingTop: '12px',paddingBottom:'12px'}}>
       <Typography sx={{ color: '#3f4458', fontWeight: '600', fontSize: '14px' }}>{employee?.name}  </Typography>
       </div>
       <Divider/>
        </>
        
      }
    >
        {sortedEmployees?.map((employee, index) => (
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
        
          primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {employee?.first_name} {employee?.middle_name} {employee?.last_name}
              </Typography>
        
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontSize:'12px',color:'#7B8794',fontWeight:'400' }}
              
              >
                {employee?.role} 
              </Typography>
        
            </React.Fragment>
          }
        />
        
      </ListItem>
        ))}
      </List>




          
        </Card>
        {renderChildren(employee?.child, level,"70px")}
      </div>
    </>
  );
};

const TreeNodeTeamLeader = ({ employee, level }) => {



  return (

    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          gap: '12px',
        }}
      >
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 24px', height: '84px', width: '268px', borderRadius: '12px' }}>
            <Box>
              <img
                src={process.env.NEXT_PUBLIC_IMAGES + employee?.user_info?.image || 'https://via.placeholder.com/50'}
                alt={""}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Box sx={{ lineHeight: '25px', padding: '5px' }}>
              <Typography sx={{ color: '#3f4458', fontWeight: '500', fontSize: '13px' }}>{employee?.leader?.first_name} {employee?.leader?.middle_name}   {employee?.leader?.last_name}  </Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '400', color: '7b8794' }}>{employee?.leader?.role}</Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '400', color: '7b8794' }}>{employee?.leader?.specialization }</Typography>
            </Box>
          </CardContent>
        </Card>
        {renderChildrenMembers(employee?.Level3, level,"70px")}
      </div>
    </>
  );
};

const TreeNodeTeamMemmbers = ({ employee, level }) => {



  return (

    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '50px',
          gap: '12px',
        }}
      >
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 24px', height: '84px', width: '268px', borderRadius: '12px' }}>
            <Box>
              <img
                src={employee?.user_info?.image || 'https://via.placeholder.com/50'}
                alt={""}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Box sx={{ lineHeight: '25px', padding: '5px' }}>
              <Typography sx={{ color: '#3f4458', fontWeight: '500', fontSize: '13px' }}>{employee?.member?.first_name}  {employee?.member?.middle_name}  {employee?.member?.last_name}  </Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '400', color: '7b8794' }}>{employee?.member?.role}</Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '400', color: '7b8794' }}>{employee?.member?.specialization }</Typography>
            </Box>
          </CardContent>
        </Card>
        {renderChildrenMembers(employee?.Level3, level,)}
      </div>
    </>
  );
};

const CompanyTree = () => {
  const { data } = useGetMembersHierarchy();
   console.log("🚀 ~ CompanyTree ~ data:", data)


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <TreeNode employee={data?.data?.data?.[0]} level={1} />
      </div>

      {/* <div>
        {data?.data?.data?.[0]?.Level1?.map((val, i) => (
          <div key={i}>
            <TreeNode employee={val} level={1} />
            {renderChildrenTeamLeader(data?.data?.data?.[0]?.level2, 2)}
          </div>
        ))}
      </div> */}


    </div>
  );
};

export default CompanyTree;
