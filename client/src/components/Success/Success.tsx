import React, { FC, useContext, useState } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
import './Success.css';

const SuccessModal = ({
  modalSuccessActive,
  setModalSuccessActive,
}: {
  modalSuccessActive: boolean;
  setModalSuccessActive: any;
}) => {
  return (
    <div
      className={modalSuccessActive ? 'regModal active' : 'regModal'}
      onClick={() => setModalSuccessActive(false)}
    >
      <div className="regModalContent">
        <div>
            
        </div>
        
        </div>
      
    </div>
  );
};
export default observer(SuccessModal);
