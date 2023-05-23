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
        <p className="logErrHeader">Войти не удалось</p>

        <div className="logErrMesage">
          Проверьте корректность указываемых данных и повторите попытку
        </div>

        <button className="logErrBtn" onClick={errorFunc}>
          ОК
        </button>
      </div>
    </div>
  );
};
export default observer(LoginError);
