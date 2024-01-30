
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import useGetMembersHierarchy from '../../hooks/useGetMembersHierarchy';

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
  const { data, isloading } = useGetMembersHierarchy()
  console.log("🚀 ~ TreeComponent ~ data:", data)

  return (
    <Stack>
    <Tree
      lineWidth={'3px'}
      lineColor={'#6AB2DF'}
      lineBorderRadius={'10px'}
      lineHeight={'10px'}
      nodePadding={'0px'}
      label={
        <StyledNode>
          <Stack direction={'column'}>
            <Imga src='/images/avatars/3.png' />
            <Ty>{data?.data?.data[0]?.CEO?.first_name + ' ' + data?.data?.data[0]?.CEO?.last_name}</Ty>
          </Stack>
        </StyledNode>
      }
    >
       
      {data?.data?.data[0]?.Level1.map((level1Item, level1Index) => (
        <TreeNode key={level1Index} label={
          <StyledNode>
            <Stack direction={'column'}>
              <Imga src='/images/avatars/3.png' />
              <Ty>{level1Item.first_name} </Ty>
            </Stack>
          </StyledNode>
        }>
          {/* Check if Level2 array exists and has items before mapping */}
          {data?.data?.data[0]?.level2 && data?.data?.data[0]?.level2.length > 0 && (
            <>
              {data?.data?.data[0]?.level2.map((level2Item, level2Index) => (
                <TreeNode key={level2Index} label={
                  <StyledNode>
                    <Stack direction={'column'}>
                      <Imga src='/images/avatars/3.png' />
                      <Ty>{level2Item.leader?.first_name} {level2Item.leader?.last_name}</Ty>
                    </Stack>
                  </StyledNode>
                }>
                  {/* Check if Level3 array exists and has items before mapping */}
                  {
                    <>
                      {level2Item?.level3?.map((level3Item, level3Index) => (
                        <TreeNode key={level3Index} label={
                          <StyledNode>
                            <Stack direction={'column'}>
                              <Imga src='/images/avatars/3.png' />
                              <Ty>{level3Item.member?.first_name} {level3Item.member?.last_name}</Ty>
                            </Stack>
                          </StyledNode>
                        }>
                        </TreeNode>
                      ))}
                    </>
                  }
                </TreeNode>
              ))}
            </>
          )}
        </TreeNode>
      ))}
    </Tree>
  </Stack>
  
  )
}

export default TreeComponent


