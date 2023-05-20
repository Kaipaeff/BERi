import { observer } from 'mobx-react-lite';
import success from '../../../img/icons/success.svg';
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
        <div className="successHeader">
          <img src={success} alt="success" /> <p>Регистрация прошла успешно!</p>
        </div>
        <br />
        <div className="successMesage">
          Проверьте вашу почту и пройдите по ссылке, что бы закончить процесс
          регистрации
        </div>
        <button
          className="successBtn"
          onClick={() => setModalSuccessActive(false)}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
};
export default observer(RegSuccess);
