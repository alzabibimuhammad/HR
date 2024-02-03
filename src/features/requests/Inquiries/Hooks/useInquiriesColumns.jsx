// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, IconButton, Rating, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import PersonIcon from '@mui/icons-material/Person';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useDeleteRequest } from './useDeleteRequest';
import { useAccepteRequest } from './useAccepteRequest'; // Import the new hook
import { useRejectRequest } from './useRejectRequest';
import { Stack } from '@mui/system';


const ITEM_HEIGHT = 162;




const useInquiriesColumns = () => {

  const [openModal, setOpenModal] = useState(false);

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [showMoreMap, setShowMoreMap] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [rowData, setrowData] = React.useState(null);
  const open = Boolean(anchorEl);

  const deleteContractMutation = useDeleteRequest();
  const { mutate: AccepteRequest, isLoading } = useAccepteRequest();

  const { mutate: RejectRequest } = useRejectRequest();



  const handleApproveClick = (params) => {
     AccepteRequest(params?.row?.id)
  };

  const handleRejectClick = (params) => {
    RejectRequest(params?.row?.id)
  };






  const handleClick = (event,params) => {
    setrowData(params)
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation();


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };



  const handleClose = () => {
    setIsDeletePopupOpen(false)
  };

  const handleShowMoreClick = (params) => {
    const { id } = params.row;
    setShowMoreMap((prevMap) => ({
      ...prevMap,
      [id]: !prevMap[id],
    }));
  };

  const handleDeleteClick = () => {
    deleteContractMutation.mutate(rowData.id);
    handleCloseAnchor();
  };

//   const handleApproveClick = () => {
//     acceptRequestMutation.mutate(rowData?.id);

//     // handleCloseAnchor();


//     // handleDeleteClick()
//  }

 return useMemo(() => [

    {
      field: 'employee',
      headerName: t("Employee"),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return(
            <Box>
              <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.employee}
              </Typography>
              </Box>
        )
      }
    },
    {
      field: 'Date',
      headerName: t("Date"),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return(
          <Stack direction={'column'} >
            <Box>
              <Typography sx={{ fontSize:'14px' }} >

              {params?.row?.Date}
              </Typography>
              </Box>
            <Box>
              <Typography sx={{ color:'#8090A7',fontSize:'12px' }} >
                {params?.row?.time}
              </Typography>
              </Box>
          </Stack>
        )
      }
    },

    {
      field: 'Title',
      headerName: t("Title"),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return(
            <Box>
              <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.Title}
              </Typography>
              </Box>
        )
      }
    },
    {
      field: 'CONTENT',
      headerName: t("Content"),
      flex: 3,

      disableClickEventBubbling: true,
      renderCell: (params) => {
        const content = params.row.CONTENT;
        const id = params.row.id;
        const shouldShowMore = content.length > 40;

        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Typography sx={{ fontSize: '14px' }}>
              { content.slice(0, 40) + '...'}
            </Typography>
          </div>
          {showMoreMap[id] && (
                <div>

                  <Typography sx={{ fontSize: '14px' }}>
                  {content.slice(40)}
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
                  {showMoreMap[id] ? "Show Less" : "Show More"}
                </p>
              </Typography>


            </>
          )}
        </Box>


        );
      },
    },

    {
      field: 'actions',
      headerName: t("Actions"),
      headerAlign: 'center', // Align the header text to the center

      flex: 1,
      renderCell: (params) => {
        return (
          <Box sx={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
            <div style={{marginLeft:"100px"}}>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={(event) => handleClick(event, params.row)}
            >
              <MoreVertIcon />
          </IconButton>
<Menu
  params={params.row.id}
  id="long-menu"
  MenuListProps={{
    'aria-labelledby': 'long-button',
  }}
  anchorEl={anchorEl}
  open={open}
  onClose={handleCloseAnchor}
  PaperProps={{
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: '208px',
      boxShadow: "none",
    },
  }}
>
        <MenuItem sx={{ padding: "0",color:"#3F4458"  }} onClick={handleCloseAnchor}>
      <Link style={{textDecoration:"none"}} href={`/profile/${params.row.id}`}>
        <IconButton>
          <VisibilityIcon variant="contained" sx={{ color: '#3F4458' }} size='small'></VisibilityIcon>
        </IconButton>
<span style={{color:"#3F4458"}}>

        View Profile
</span>
      </Link>
    </MenuItem>

    <MenuItem sx={{ padding: "0",color:"#3F4458" }} onClick={handleOpenModal}>
        <Box style={{textDecoration:"none"}}>
          <IconButton>
            <PersonIcon variant="contained" sx={{ color: '#3F4458' }} size='small'></PersonIcon>
          </IconButton>
          <span style={{color:"#3F4458"}}>
            View Request
          </span>
        </Box>
      </MenuItem>

      <Dialog open={openModal} onClose={handleCloseModal}>
  <DialogTitle sx={{ fontSize: "20px", fontWeight: "600", color: "#3F4458", textAlign: "center" }}>Request</DialogTitle>
  <DialogContent sx={{ overflow: "hidden",width:"100vh",height:"100%" }}>
    <h3>Title Request</h3>
    <p style={{ fontWeight: "400", fontSize: "14px", color: "#3e4458" }}>{rowData?.Title}</p>
    <Divider component="" />
    <h3>Date Request</h3>
    <p style={{ fontWeight: "400", fontSize: "14px", color: "#3e4458" }}>{rowData?.Date}</p>
    <Divider component="" />
    <h3>Description Request</h3>
    <p style={{ fontWeight: "400", fontSize: "14px", color: "#3e4458" }}>{rowData?.CONTENT}</p>
  </DialogContent>
  <DialogActions>
    <Box sx={{ marginTop: "19px", display: "flex", gap: "19px" }}>
      {params.row.status === "waiting"?(
        <>
<Button sx={{ width: "100%", color: "#DF2E38", fontWeight: "500", fontSize: "12px", backgroundColor: "#F9D5D7", borderRadius: "4px" }} onClick={() => handleRejectClick(params)}>Decline</Button>
<Button sx={{ width: "100%", color: "#91C483", fontWeight: "500", fontSize: "12px", backgroundColor: "#DDE6DA", borderRadius: "4px" }} onClick={() => handleApproveClick(params)}>Approve</Button>
        </>
      ):params.row.status==="rejected"? (
        <>

        <Button
      sx={{ width: "100%", color: "#DF2E38", fontWeight: "500", fontSize: "12px", backgroundColor: "#F9D5D7", borderRadius: "4px" }}
      onClick={() => handleRejectClick(params)}
      disabled={true}
    >
      {t('Decline')}
    </Button>
      </>


      ):(
        <Button
        sx={{ width: "100%", color: "#91C483", fontWeight: "500", fontSize: "12px", backgroundColor: "#DDE6DA", borderRadius: "4px" }}
        onClick={() => handleApproveClick(params)}
        disabled={true}

      >
        {t('Approve')}
      </Button>
      )

      }

    </Box>
  </DialogActions>
</Dialog>


    <MenuItem sx={{ padding: "0" ,color:"#3F4458" }} onClick={handleCloseAnchor}>
      <Box style={{textDecoration:"none"}} >
        <IconButton>
          <DeleteIcon variant="contained" sx={{ color: '#3F4458' }} size='small'></DeleteIcon>
        </IconButton>
        <Button style={{color:"#3F4458"}} onClick={handleDeleteClick}>

        Delete
        </Button>
      </Box>
    </MenuItem>
      </Menu>
    </div>
    <Box

      sx={{marginTop:"19px",display:"flex",gap:"10px",justifyContent:'center',marginRight:'2px'}}
    >

      {params.row.status === 'waiting' ? (
  <>
    <Button sx={{ width: "100%", color: "#91C483", fontWeight: "500", fontSize: "14px", backgroundColor: "#DDE6DA", borderRadius: "4px" }} onClick={() => handleApproveClick(params)}>{t('Approve')}
 </Button>
    <Button sx={{ width: "100%", color: "#DF2E38", fontWeight: "500", fontSize: "14px", backgroundColor: "#F9D5D7", borderRadius: "4px" }}  onClick={() => handleRejectClick(params)} >{t('Decline')}
 </Button>
  </>
) : params.row.status === 'rejected' ? (

  <Box sx={{display:'flex', justifyContent:'center'}}>
 <Typography
      sx={{   fontWeight: "500", fontSize: "14px", color:'#DF2E38' }}
    >
      {t('Decline')}


    </Typography>
    </Box>

) : (
  <Box sx={{display:'flex', justifyContent:'center'}}>
  <Typography
       sx={{   fontWeight: "500", fontSize: "14px", color:'#91C483' }}
     >
       {t('Approve')}


     </Typography>
     </Box>

)}

    </Box>

          </Box>
        );
      },
    },
  ]);
};

export default useInquiriesColumns;
















