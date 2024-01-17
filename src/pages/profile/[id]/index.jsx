import { useRouter } from 'next/router';
import React from 'react'
import Profiles from 'src/features/profile/componets';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

 const  Data = {

  "success": true,
  "message": "success",
  "data": [
      {
          "id": 1,
          "name": "muhammad",
      },

    ]


  }
  return (
    <div>
      {Data ? (
        <Profiles data={Data} />
        ) : (
          null
      )}
    </div>
  );
}
