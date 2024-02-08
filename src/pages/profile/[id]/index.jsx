import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux';
import Profiles from 'src/features/profile/componets';
import { setUserId } from 'src/store/apps/user';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch=useDispatch()
  dispatch(setUserId(id));
 
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
