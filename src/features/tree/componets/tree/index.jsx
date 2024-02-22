import React from 'react';

const TreeNode = ({ employee, level }) => {
  const renderChildren = (children, level) => {
    if (!children || children.length === 0) return null;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: level === 1 ? 'row' : 'column',
          position: 'relative',
          marginLeft: level === 1 ? '-20px' : '20px',
        }}
      >
        {children.map((child, index) => (
          <React.Fragment key={index}>
            <div style={{ position: 'relative', marginLeft: level === 1 ? '20px' : '0' }}>
         
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
        alignItems: 'center',
        position: 'relative',
        margin: '10px',
      }}
    >
      <img
        src={employee.image}
        alt={employee.name}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          marginBottom: '5px',
        }}
      />
      <p>{employee.name}</p>
      {renderChildren(employee.children, level)}
    </div>
  );
};

const CompanyTree = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <TreeNode employee={employees} level={1} />
  </div>
);

const employees = {
  name: 'John Doe',
  image: 'https://via.placeholder.com/50',
  children: [
    {
      name: 'Jane Smith',
      image: 'https://via.placeholder.com/50',
      children: [
        {
          name: 'Alice Johnson',
          image: 'https://via.placeholder.com/50',
          children: [
            {
              name: 'Carol Williams',
              image: 'https://via.placeholder.com/50',
            },
          ],
        },
        {
          name: 'Bob Brown',
          image: 'https://via.placeholder.com/50',
        },
      ],
    },
    {
      name: 'Alex Johnson',
      image: 'https://via.placeholder.com/50',
      children: [
        {
          name: 'David Wilson',
          image: 'https://via.placeholder.com/50',
        },
      ],
    },
    {
      name: 'Emily Davis',
      image: 'https://via.placeholder.com/50',
      children: [
        {
          name: 'Frank Miller',
          image: 'https://via.placeholder.com/50',
        },
        {
          name: 'Grace Martinez',
          image: 'https://via.placeholder.com/50',
        },
      ],
    },
  ],
};

export default CompanyTree;
