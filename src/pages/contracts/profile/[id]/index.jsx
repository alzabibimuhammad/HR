import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CoachInfo } from '../../store';
import Profiles from 'src/features/Contracts/list/Profile/componets/profile';
import View from '../../view/[id]';
=======
import Profiles from '../../../../features/Coach/CoachProfile/componets/profile'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CoachInfo } from '../../store';
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;

<<<<<<< HEAD


=======
  const store = useSelector(state => state.CoachStore);
  const [Data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CoachInfo(id));
  }, [id]);

  useEffect(() => {
      setData(store.coachInfo.data);
  }, [dispatch, store.coachInfo]);
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c


  return (
    <div>
<<<<<<< HEAD
        <View  />

=======
      {Data ? (
        <Profiles data={Data} />
        ) : (
          null
      )}
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    </div>
  );
}
