import { useMemo, useState } from 'react'
import { Avatar, Button, Chip, IconButton, Rating, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Box, Stack } from '@mui/system'
import Link from 'next/link'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import AlertDialogDelete from '../components/delete'
import Show from '../components/show'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DeleteIcon from '../../../../public/images/IconInput/delete'
import EditIcon from '../../../../public/images/IconInput/edit'
import ViewIcon from '../../../../public/images/IconInput/view'
const useComplaintsColumn = () => {
  const { t } = useTranslation()
  const [showMoreMap, setShowMoreMap] = useState({});
  const [isDeletePopupOpen,setIsDeletePopupOpen]=useState(false)
  const [isShow,setIsShow]=useState(false)

  const [showData,setShowData] = useState()
  const [deleteID,setdeleteID] = useState()

  const handleClickOpen = (params) => {
    setIsDeletePopupOpen(true);
    setdeleteID(params)
  };

  const handleShowMoreClick = params => {
    const { id } = params.row
    setShowMoreMap(prevMap => ({
      ...prevMap,
      [id]: !prevMap[id]
    }))
  }

  const handleClose=_=>{
    setIsDeletePopupOpen(false)
  }

  const handleClickShow=params=>{
    setIsShow(true)
    setShowData(params.row)
  }

  const handleCloseShow=_=>{
    setIsShow(false)
  }

  return useMemo(() => [
    {
      field: 'first_name',
      headerName: t('Employee'),
      flex: 2.5,
      renderCell: params => {
        return (

            <Link  style={{ display:'flex',textDecoration:'none',alignItems:'center' }} href={`profile/${params?.row?.user_id}`}>
            <Box>
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/'+params?.row?.user_info} alt='' />
            </Box>
            <Stack ml={1} spacing={1} direction={'column'}>
              <Typography className='custome-data-grid-font' >{params.row?.first_name} {params.row?.last_name}</Typography>
              <Typography className='custome-data-grid-font2' > {params.row?.department}</Typography>
            </Stack>
            </Link>
        )
      }
    },
    {
      field: 'date',
      headerName: t('Date'),
      flex: 2,
      renderCell: params => (
        <Stack ml={1} spacing={1} direction={'column'}>
          <Typography className='custome-data-grid-font' >{params?.row?.date}</Typography>
        <Typography>{params?.row?.time}</Typography>
      </Stack>
     
      )
    },

    {

      field: 'content',
      headerName: t("Content"),
      flex: 3,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const content = params?.row?.description;
        const id = params.row.id;
        const shouldShowMore = content?.length > 40;

        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography className='custome-data-grid-font'>
              { content?.slice(0,40) }
            </Typography>
          </div>
          {showMoreMap[id] && (
                <div>

                  <Typography className='custome-data-grid-font'>
                  {content?.slice(40)}
            </Typography>
                </div>
              )}

          {shouldShowMore && (
            <>
              <Typography
                variant="span"
                sx={{ cursor: "pointer", width: "10px" }}
                color="#8090A7"
                onClick={() => handleShowMoreClick(params)}
              >
                     <p>
                    {showMoreMap[id] ? (
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography fontSize={'12px'} fontWeight={500} lineHeight={'25px'} color={'#8090A7'}>
                          {t('See Less')}
                        </Typography>
                        <KeyboardArrowUpIcon style={{ cursor: 'pointer', marginLeft: '8px' }} fontSize='10px' />{' '}
                      </Box>
                    ) : (
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography fontSize={'12px'} fontWeight={500} lineHeight={'25px'} color={'#8090A7'}>
                          {t('See More')}
                        </Typography>
                        <KeyboardArrowDownIcon style={{ cursor: 'pointer', marginLeft: '8px' }} fontSize='10px' />{' '}
                      </Box>
                    )}
                  </p>
              </Typography>


            </>
          )}
        </Box>


        );
      },
    },
    {
      field: 'action',
      headerName: t('Action'),
      flex: 2,
      renderCell:(params)=>{
          return (
            <Stack direction={{ sm:'row' }}  >

            <IconButton onClick={()=>  handleClickShow(params)} >
            <ViewIcon />
            </IconButton>

              <IconButton onClick={()=>  handleClickOpen(params?.row?.id)}>
              <DeleteIcon />  
              </IconButton>

            {isDeletePopupOpen && <AlertDialogDelete id={deleteID}  open={isDeletePopupOpen} handleClose={handleClose} />}

            {isShow && <Show data={showData} open={isShow} handleClose={handleCloseShow} />}


        </Stack>
          )
      }
    }
  ])
}

export default useComplaintsColumn
