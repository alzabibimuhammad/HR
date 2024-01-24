
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
  border-radius: 8px;
  display: inline-block;
  width:100px;
  border: 5px soild red;
  height:100px
  padding:20px
`;
const Ty = styled.p`
  font-size:11px
`;
const Imga = styled.img`
  border-radius:50px !important;
`;

  const TreeComponent = () => {

    return (
      <Stack>
        <Tree

          lineWidth={'3px'}
          lineColor={'#6AB2DF'}
          lineBorderRadius={'10px'}
          lineHeight={'10px'}
          nodePadding={'0px'}
          label={<StyledNode>
            <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty >Khaled alrahmoon</Ty>
            </Stack>
          </StyledNode>}
        >

          <TreeNode label={<StyledNode>
            <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Dani</Ty>
            </Stack>
          </StyledNode>}>


            <TreeNode label={<StyledNode>
              <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>muhammad</Ty>
            </Stack>
            </StyledNode>} />


          </TreeNode>

          <TreeNode label={<StyledNode>    <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack></StyledNode>}>
            <TreeNode label={<StyledNode>
               <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack></StyledNode>}>
              <TreeNode label={<StyledNode>    <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack></StyledNode>} />
              <TreeNode label={<StyledNode>    <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack></StyledNode>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<StyledNode>    <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack></StyledNode>}>
            <TreeNode label={<StyledNode>
              <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack>
            </StyledNode>} />
            <TreeNode label={<StyledNode>
              <Stack direction={'column'} >
            <Imga src='/images/avatars/3.png'/>
            <Ty>Khaled alrahmoon</Ty>
            </Stack>
            </StyledNode>} />
          </TreeNode>
        </Tree>
  </Stack>
    )
    }

export default TreeComponent


