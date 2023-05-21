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
      className={modalLoginErrorActive ? 'logErrModal active' : 'logErrModal'}
    >
      <div className="logErrModalContent">
        <div className="logErrHeader">
          <img src={error} alt="error" /> <p>Войти не удалось</p>
        </div>
        <br />
        <div className="logErrMesage">
          Проверьте корректность почты и пароля
        </div>
        <button className="logErrBtn" onClick={errorFunc}>
          Еще раз
        </button>
      </div>
    </div>
  );
};
export default observer(LoginError);