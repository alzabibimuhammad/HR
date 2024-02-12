import React from 'react'
import ResignedTable from 'src/features/archive/resigned/componets/DataGrid'
import useGetAllResigned from 'src/features/archive/resigned/hooks/useGetAllResigned'

export default function Resigned() {
  const {data:rows} = useGetAllResigned()
  return (
    <ResignedTable rows={rows?.data?.data}/>
  )
}
