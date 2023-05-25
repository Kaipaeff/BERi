import React, { useContext } from 'react';
import { Context } from '../../index';

export default function UserProfile() {
  const { storeContext } = useContext(Context);
  const userProfile = storeContext.user
  console.log("🚀🚀 ~ file: UserProfile.tsx:7 ~ UserProfile ~ userProfile~", userProfile);
  
  return (
    <div>
      <p>Здесь отображаются регистрационные данные пользователя.</p>
    </div>
  );
}
