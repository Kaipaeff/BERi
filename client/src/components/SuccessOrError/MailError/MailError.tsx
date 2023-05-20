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
      className={modalMailErrorActive ? 'successModal active' : 'successModal'}
    >
      <div className="successModalContent">
        <div className="successHeader">
          <img src={error} alt="success" /> <p>Зарегестрироваться не удалось</p>
        </div>
        <br />
        <div className="successMesage">
          Пользователь с такой почтой уже зарегестрирован
        </div>
        <button className="successBtn" onClick={errorFunc}>
          Еще раз
        </button>
      </div>
    </div>
  );
};
export default observer(MailError);
