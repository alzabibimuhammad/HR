import React, { Children } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import useGetMembersHierarchy from '../../hooks/useGetMembersHierarchy';

const renderChildren = (children, level) => {
  if (!children || children.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
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

const TreeNode = ({ employee, level }) => {
  const renderChildren = (children, level) => {
    if (!children || children.length === 0) return null;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
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
              <Typography sx={{ color: '#3f4458', fontWeight: '500', fontSize: '13px' }}>{employee?.first_name}   {employee?.middle_name}  </Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '400', color: '7b8794' }}>{employee?.role}</Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '400', color: '7b8794' }}>{employee?.leader?.specialization || employee?.leader?.member?.specialization}</Typography>
            </Box>
          </CardContent>
        </Card>
        {renderChildren(employee?.Level3, level,"70px")}
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
        <TreeNode employee={data?.data?.data?.[0]?.CEO} level={1} />
      </div>

      <div>
        {data?.data?.data?.[0]?.Level1?.map((val, i) => (
          <div key={i}>
            <TreeNode employee={val} level={1} />
            {renderChildren(val?.level2, 1)}
          </div>
        ))}
      </div>

      <div >
        {data?.data?.data?.[0]?.level2?.map((val, i) => (
          <div  key={i}>
            <TreeNode employee={val.leader} level={1} />

            <div style={{marginLeft:"100%"}}>
              {val?.Level3?.map((item, j) => (
                <div key={j}>
                  <TreeNode  employee={item.member} level={1} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyTree;
