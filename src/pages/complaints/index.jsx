import React from 'react'
import useGetAllComplaints from 'src/features/complaints/Hook/useGetAllComplaints'
import ComplaintsTable from 'src/features/complaints/components/DataGrid'

export default function Complaints() {
  const {data} = useGetAllComplaints()
  return (
    <ComplaintsTable Data={data?.data?.data}/>
  )
}
