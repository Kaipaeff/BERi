import React from 'react';
import styleFooter from './Footer.module.css';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function Footer(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className={styleFooter.mainFooterConteiner}>
      <div className={styleFooter.content}>
        <div className={styleFooter.columnName}>
          <h1>BERi</h1>
        </div>
        <div className={styleFooter.contentInfo}>
          <div className={styleFooter.columnShop}>
            <h3 className={styleFooter.titletext}>Покупателям</h3>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/login')}
            >
              Вход
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/myaccount')}
            >
              Моя страница
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/favorites')}
            >
              Избранное
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/cart')}
            >
              Корзина
            </p>
          </div>
          <div className={styleFooter.columnInfo}>
            <h3 className={styleFooter.titletext}>Информация</h3>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/shippingpolicy')}
            >
              Политика доставки
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/returnsAndRefunds')}
            >
              Возврат и возмещение
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/cookiesPolicy')}
            >
              Политика использования cookie
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/frequentlyAsked')}
            >
              Часто задаваемые вопросы
            </p>
          </div>
          <div className={styleFooter.columnCompany}>
            <h3 className={styleFooter.titletext}>Магазин</h3>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/aboutus')}
            >
              О нас
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/privacypolicy')}
            >
              Политика конфиденциальности
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/termsandconditions')}
            >
              Условия и положения
            </p>
            <p
              className={styleFooter.textlink}
              onClick={() => navigate('/contactus')}
            >
              Cвязаться с нами
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={styleFooter.bottomRow}>
          <div className={styleFooter.copyright}>©️ 2023 BERi</div>
          <div className={styleFooter.socialnet}>
            <svg
              onClick={() => navigate('/telegram')}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.33 2.43258C21.3117 2.40932 21.2919 2.38699 21.2706 2.36573C21.1428 2.23791 20.9762 2.16318 20.8028 2.14866C20.7578 2.14489 20.7123 2.14517 20.6669 2.14963C20.5995 2.15622 20.5327 2.17192 20.4687 2.19673L2.48557 8.69065C2.46601 8.69771 2.44676 8.70558 2.42786 8.71425C2.20156 8.81795 2.00979 8.98444 1.87535 9.19394C1.7409 9.40344 1.66943 9.64714 1.66943 9.89606C1.66943 10.145 1.7409 10.3887 1.87535 10.5982C2.00701 10.8034 2.19366 10.9673 2.41387 11.0714L9.18129 14.4551L12.565 21.2225C12.6691 21.4427 12.833 21.6294 13.0382 21.761C13.2477 21.8955 13.4914 21.9669 13.7403 21.9669C13.9892 21.9669 14.2329 21.8955 14.4424 21.761C14.6519 21.6266 14.8184 21.4348 14.9221 21.2085C14.9308 21.1896 14.9387 21.1704 14.9457 21.1508L21.4412 3.1634C21.4549 3.12735 21.4657 3.09045 21.4737 3.05305C21.519 2.84033 21.4711 2.61171 21.33 2.43258ZM17.8319 4.74372L3.4788 9.92679L9.59217 12.9835L17.8319 4.74372ZM10.6529 14.0441L18.8927 5.80422L13.7096 20.1576L10.6529 14.0441Z"
                fill="#121212"
              />
            </svg>

            <svg
              onClick={() => navigate('/mail')}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.07669 6.53081C4.23293 6.01864 4.70919 5.64606 5.27248 5.64606H19.2725C19.8358 5.64606 20.312 6.01864 20.4683 6.53081L12.2725 11.9947L4.07669 6.53081ZM2.52251 6.88232C2.52237 6.89032 2.52236 6.89832 2.52248 6.90631V16.8961C2.52248 18.4148 3.7537 19.6461 5.27248 19.6461H19.2725C20.7913 19.6461 22.0225 18.4148 22.0225 16.8961V6.90629M20.5225 8.29744V16.8961C20.5225 17.5864 19.9628 18.1461 19.2725 18.1461H5.27248C4.58212 18.1461 4.02248 17.5864 4.02248 16.8961V8.29744L11.8565 13.5201C12.1084 13.688 12.4366 13.688 12.6885 13.5201L20.5225 8.29744ZM22.0224 6.88235C22.0151 5.36987 20.7867 4.14606 19.2725 4.14606H5.27248C3.75828 4.14606 2.52991 5.36986 2.52251 6.88232"
                fill="#121212"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
