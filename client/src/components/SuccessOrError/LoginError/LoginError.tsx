import { observer } from 'mobx-react-lite';
import error from '../../../img/icons/error.svg';
import './LoginError.css';

const LoginError = ({
    modalLoginErrorActive,
    setModalLoginErrorActive,
    setActiveLog,
}: {
    modalLoginErrorActive: boolean;
    setModalLoginErrorActive: any;
    setActiveLog: any;
}) => {
  const errorFunc = () => {
    setActiveLog(true);
    setModalLoginErrorActive(false);
  };
  return (
    <div
      className={modalLoginErrorActive ? 'successModal active' : 'successModal'}
    >
      <div className="successModalContent">
        <div className="successHeader">
          <img src={error} alt="success" /> <p>Войти не удалось</p>
        </div>
        <br />
        <div className="successMesage">
          Проверьте корректность почты и пароля
        </div>
        <button className="successBtn" onClick={errorFunc}>
          Еще раз
        </button>
      </div>
    </div>
  );
};
export default observer(LoginError);