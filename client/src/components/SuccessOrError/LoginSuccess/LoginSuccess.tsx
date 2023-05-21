import { observer } from 'mobx-react-lite';
import success from '../../../img/icons/success.svg';
import './LoginSuccess.css';

const LoginSuccess = ({
  modalLoginSuccessActive,
  setModalLoginSuccessActive,
}: {
  modalLoginSuccessActive: boolean;
  setModalLoginSuccessActive: any;
}) => {
  return (
    <div
      className={modalLoginSuccessActive ? 'logSucModal active' : 'logSucModal'}
    >
      <div className="logSucModalContent">
        <div className="logSucHeader">
          <img src={success} alt="success" /> <p>Авторизация прошла успешно!</p>
        </div>
        <br />
        <div className="logSucMesage">
          Удачных покупок!
        </div>
        <button
          className="logSucBtn"
          onClick={() => setModalLoginSuccessActive(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
export default observer(LoginSuccess);
