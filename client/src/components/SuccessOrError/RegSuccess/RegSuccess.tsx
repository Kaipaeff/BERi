import { observer } from 'mobx-react-lite';
import './RegSuccess.css';

const RegSuccess = ({
  modalSuccessActive,
  setModalSuccessActive,
}: {
  modalSuccessActive: boolean;
  setModalSuccessActive: any;
}) => {
  return (
    <div
      className={modalSuccessActive ? 'successModal active' : 'successModal'}
    >
      <div className="successModalContent">
        <p className="successHeader">Регистрация прошла успешно!</p>
        
        <div className="successMesage">
          Для завершения регистрации 
          пройдите по ссылке, отправленной <br /> на Вашу почту 
        </div>

        <button
          className="successBtn"
          onClick={() => setModalSuccessActive(false)}
        >
          Отлично!
        </button>
      </div>
    </div>
  );
};
export default observer(RegSuccess);
