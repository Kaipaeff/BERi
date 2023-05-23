import { observer } from 'mobx-react-lite';
import error from '../../../img/icons/error.svg';
import './MailError.css';

const MailError = ({
  modalMailErrorActive,
  setModalMailErrorActive,
  setActiveReg,
}: {
  modalMailErrorActive: boolean;
  setModalMailErrorActive: any;
  setActiveReg: any;
}) => {
  const errorFunc = () => {
    setActiveReg(true);
    setModalMailErrorActive(false);
  };
  return (
    <div
      className={modalMailErrorActive ? 'mailErrModal active' : 'mailErrModal'}
    >
      <div className="mailErrModalContent">
        <p className="mailErrHeader">Зарегистрироваться не удалось</p>
    
        <div className="mailErrMesage">
          Введены некорректные данные или пользователь с такой почтой уже зарегистрирован
        </div>

        <button className="mailErrBtn" onClick={errorFunc}>
          ОК
        </button>
      </div>
    </div>
  );
};
export default observer(MailError);
