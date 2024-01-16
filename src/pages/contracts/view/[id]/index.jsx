import { useRouter } from 'next/router'
import React from 'react'
import View from 'src/features/Contracts/view'

export default function ViewContracts() {


  const router = useRouter();
  const { id } = router.query;

  return (

<View id={id}/>
    )
}
