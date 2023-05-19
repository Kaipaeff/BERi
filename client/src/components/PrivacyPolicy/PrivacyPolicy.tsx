import React, { useContext } from 'react';
import { Context } from '../../index';

export default function PrivacyPolicy() {
  const { storeContext } = useContext(Context);
  console.log('🚀🚀🚀🚀🚀 ~ storeContext:', storeContext);
  // const email = storeContext.user.email



  return (
    <>
      <div>{storeContext.user.email}</div>
      <div>{storeContext.user.id}</div>
    </>
  );
}
