import React from 'react'
import useShowAllReviews from 'src/features/review/reviewMain/Hook/useGetAll'
import ReviewFeature from 'src/features/review/reviewMain/components/DataGrid'

export default function Review() {
  const {data}=useShowAllReviews()

  return (
    <ReviewFeature Data={data}/>
  )
}

