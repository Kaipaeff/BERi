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
        <p className="logSucHeader">Авторизация прошла успешно!</p>

        <button
          className="logSucBtn"
          onClick={() => setModalLoginSuccessActive(false)}
        >
          Отлично!
        </button>
      </div>
    </div>
  );
};
export default observer(LoginSuccess);
