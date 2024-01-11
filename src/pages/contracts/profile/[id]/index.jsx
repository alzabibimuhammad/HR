import React, { useEffect, useState } from 'react';
import Profiles from '../../../../features/Coach/CoachProfile/componets/profile'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CoachInfo } from '../../store';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;

  const store = useSelector(state => state.CoachStore);
  const [Data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CoachInfo(id));
  }, [id]);

  useEffect(() => {
      setData(store.coachInfo.data);
  }, [dispatch, store.coachInfo]);


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
