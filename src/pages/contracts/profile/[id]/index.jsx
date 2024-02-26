import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Profiles from 'src/features/Contracts/list/Profile/componets/profile';

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
