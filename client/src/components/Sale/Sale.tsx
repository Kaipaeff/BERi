import React, { useContext } from 'react';
import style from './sale.module.css'
import { Context } from '../../index';

export function Sale() {
  const { storeContext } = useContext(Context);
  console.log('🚀🚀🚀🚀🚀 ~ storeContext:', storeContext);
  // const email = storeContext.user.email
  return (
    <>
    <div>{storeContext.user.email}</div>
    <div>{storeContext.user.id}</div>
  </>
  )
}
