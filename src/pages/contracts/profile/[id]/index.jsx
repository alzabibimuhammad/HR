import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CoachInfo } from '../../store';
import Profiles from 'src/features/Contracts/list/Profile/componets/profile';
import View from '../../view/[id]';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;





  return (
    <div>
      {Data ? (
        <Profiles  />
        ) : (
          null
      )}
    </div>
  );
}
