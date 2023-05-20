import { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate, Link } from 'react-router-dom';

import style from './footer.module.css';

import emailIcon from '../../img/icons/email.svg';
import telegramIcon from '../../img/icons/telegram.svg';

import LogInModal from '../LogInModal/LogInModal';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

export default function Footer(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const [modalLoginActive, setModalLoginActive] = useState(false);
  const [modalRegActive, setModalRegActive] = useState<boolean>(false);

  // TODO: после готовности регистрации добавить функцию по изменению статуса userIsAdmin

  useEffect(() => {
    setUserIsAdmin(!userIsAdmin);
  }, []);

  // todo-------------------------------------------------------------------------------

  return (
    <div className={style.mainFooterConteiner}>
      <div className={style.content}>
        <Link to="/">
          <div className={style.columnName}>
            <h1>BERi</h1>
            <p>магазин детской одежды</p>
          </div>
        </Link>

        <div className={style.contentInfo}>
          <div className={style.columnShop}>
            <h3 className={style.titletext}>Покупателям</h3>
            <p
              className={style.textlink}
              onClick={() => setModalLoginActive(true)}
            >
              Вход
            </p>

            <p className={style.textlink} onClick={() => navigate('/account')}>
              Личный кабинет
            </p>

            <p
              className={style.textlink}
              onClick={() => navigate('/favorites')}
            >
              Избранное
            </p>

            <p className={style.textlink} onClick={() => navigate('/cart')}>
              Корзина
            </p>
          </div>

          <div className={style.columnInfo}>
            <h3 className={style.titletext}>Информация</h3>

            <p
              className={style.textlink}
              onClick={() => navigate('/shippingpolicy')}
            >
              Условия доставки
            </p>

            <p
              className={style.textlink}
              onClick={() => navigate('/returnspolicy')}
            >
              Условия возврата
            </p>

            <p
              className={style.textlink}
              onClick={() => navigate('/oferta')}
            >
              Публичная оферта
            </p>

            <p
              className={style.textlink}
              onClick={() => navigate('/privacypolicy')}
            >
              Политика конфиденциальности
            </p>
          </div>

          <div className={style.columnCompany}>
            <h3 className={style.titletext}>Магазин</h3>
            <p className={style.textlink} onClick={() => navigate('/about')}>
              О нас
            </p>

            <p
              className={style.textlink}
              onClick={() => navigate('/contactus')}
            >
              Контакты
            </p>
            {userIsAdmin && (
              <p
                className={style.textlink}
                onClick={() => navigate('/adminpage')}
              >
                Панель администратора
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className={style.bottomRow}>
          <div className={style.copyright}>
            ©️ 2023 BERi
            <div>developed by AVIDAgroup</div>
          </div>

          <div className={style.socialnet}>
            <img
              className={style.telegramIcon}
              onClick={() => window.open('https://t.me/Pofigor', '_blank')}
              src={telegramIcon}
              alt="telegramIcon"
            />
            <img
              className={style.emailIcon}
              onClick={() =>
                (window.location.href = 'mailto:kaipaeff@gmail.ru')
              }
              src={emailIcon}
              alt="emailIcon"
            />
          </div>
        </div>

        {modalLoginActive ? (<LogInModal
          activeLog={modalLoginActive}
          setActiveLog={setModalLoginActive}
          setActiveReg={setModalRegActive} 
          modalLoginErrorActive={false} 
          setModalLoginErrorActive={undefined} 
          modalLoginSuccessActive={false} 
          setModalLoginSuccessActive={undefined}    
          />) : null}

        {modalRegActive ? (<RegistrationModal
          activeReg={modalRegActive}
          setActiveReg={setModalRegActive}
          setActiveLog={setModalLoginActive} 
          setModalSuccessActive={undefined} 
          modalMailErrorActive={false} 
          setModalMailErrorActive={undefined}        
        />) : null}

      </div>
    </div>
  );
}
