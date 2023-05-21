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
        <div className="mailErrHeader">
          <img src={error} alt="success" /> <p>Зарегестрироваться не удалось</p>
        </div>
        <br />
        <div className="mailErrMesage">
          Введены некорректные данные или пользователь с такой почтой уже зарегестрирован
        </div>
        <button className="mailErrBtn" onClick={errorFunc}>
          Еще раз
        </button>
      </div>
    </div>
  );
};
export default observer(MailError);
