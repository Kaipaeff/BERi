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
      className={modalLoginSuccessActive ? 'successModal active' : 'successModal'}
    >
      <div className="successModalContent">
        <div className="successHeader">
          <img src={success} alt="success" /> <p>Авторизация прошла успешно!</p>
        </div>
        <br />
        <div className="successMesage">
          Удачных покупок!
        </div>
        <button
          className="successBtn"
          onClick={() => setModalLoginSuccessActive(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
export default observer(LoginSuccess);
