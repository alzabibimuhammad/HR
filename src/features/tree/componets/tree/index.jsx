import { Card, CardContent, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart'
import styled from 'styled-components'
import useGetMembersHierarchy from '../../hooks/useGetMembersHierarchy'

const StyledNode = styled.div`
  border-radius: 8px;
  display: inline-block;
  width:100px;
  border: 5px soild red;
  height:100px
  padding:20px
`

const Ty = styled.p`
  font-size: 14px;
  color: #3f4458;
  font-weight: 500;
  font-style: normal;
`
const TS = styled.p`
  color: #7b8794;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`
const Imga = styled.img`
  height: 52px;
  width: 52px;
  border-radius: 52px !important;
`

const TreeComponent = () => {
  const { data, isloading } = useGetMembersHierarchy()

  return (
    <Stack sx={{ overflowY:'scroll',overflowX:'hidden' }} >
      <StyledNode style={{ margin: '0px auto 0px 40%' }}>
        <Stack
          borderRadius={'12px'}
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={6}
          height={'84px'}
          width={'258px'}
          sx={{ backgroundColor: 'white' }}
        >
          <Imga src='/images/avatars/3.png' />

          <Stack direction={'column'} padding={0} margin={0} lineHeight={'0px'}>
            <Ty>{data?.data?.data[0]?.CEO?.first_name + ' ' + data?.data?.data[0]?.CEO?.last_name}</Ty>
            <TS>{data?.data?.data[0]?.CEO?.role}</TS>
          </Stack>
        </Stack>
      </StyledNode>
      <Tree  lineWidth={'3px'} lineColor={'#8090A7'} lineBorderRadius={'10px'} lineHeight={'10px'} nodePadding={'0px'}>
        {data?.data?.data[0]?.Level1.map((level1Item, level1Index) => (
          <TreeNode
            key={level1Index}
            label={
              <StyledNode>
                {/* <Stack direction={'column'}>
                  <Imga src='/images/avatars/3.png' />
                  <Ty>{level1Item.first_name + ' ' + level1Item.last_name} </Ty>
                </Stack> */}
                <Stack
                  borderRadius={'12px'}
                  direction={'row'}
                  marginLeft={'-40%'}

                  justifyContent={'center'}
                  alignItems={'center'}
                  spacing={6}
                  height={'84px'}
                  width={'258px'}
                  sx={{ backgroundColor: 'white' }}
                >
                  <Imga src='/images/avatars/3.png' />

                  <Stack direction={'column'} padding={0} margin={0} lineHeight={'0px'}>
                    <Ty>{level1Item.first_name + ' ' + level1Item.last_name} </Ty>
                    <TS>{level1Item.role}</TS>
                  </Stack>
                </Stack>
              </StyledNode>
            }
          >
            {/* Check if Level2 array exists and has items before mapping */}
            {data?.data?.data[0]?.level2 && data?.data?.data[0]?.level2.length > 0 && (
              <>
                {data?.data?.data[0]?.level2.map((level2Item, level2Index) => (
                  <TreeNode
                    key={level2Index}
                    label={
                      <StyledNode>
                        <Stack
                          marginLeft={'-40%'}
                          borderRadius={'12px'}
                          direction={'row'}
                          justifyContent={'center'}
                          alignItems={'center'}
                          spacing={6}
                          height={'84px'}
                          width={'258px'}
                          sx={{ backgroundColor: 'white' }}
                        >
                          <Imga src='/images/avatars/3.png' />

                          <Stack direction={'column'} padding={0} margin={0} lineHeight={'0px'}>
                            {level2Item.leader?.first_name} {level2Item.leader?.last_name}
                            <TS>{level2Item?.leader?.role}</TS>
                          </Stack>
                        </Stack>
                      </StyledNode>
                    }
                  >
                    {/* Check if Level3 array exists and has items before mapping */}
                    {
                      <>
                        {level2Item?.level3?.map((level3Item, level3Index) => (
                          <TreeNode
                            key={level3Index}
                            label={
                              <StyledNode>
                                <Stack
                                  borderRadius={'12px'}
                                  direction={'row'}
                                  justifyContent={'center'}
                                  alignItems={'center'}
                                  spacing={6}
                                  height={'84px'}
                                  width={'258px'}
                                  sx={{ backgroundColor: 'white' }}
                                >
                                  <Imga src='/images/avatars/3.png' />

                                  <Stack direction={'column'} padding={0} margin={0} lineHeight={'0px'}>
                                    {level3Item.member?.first_name} {level3Item.member?.last_name}
                                    <TS>{level3Item.member.role}</TS>
                                  </Stack>
                                </Stack>
                              </StyledNode>
                            }
                          ></TreeNode>
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
