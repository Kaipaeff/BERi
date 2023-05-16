import React from 'react';
import styleOneAddressCard from './OneAddressCard.module.css';

export default function OneAddressCard() {
  return (
    <div className={styleOneAddressCard.conteiner}>
      <div className={styleOneAddressCard.title}>
        <div className={styleOneAddressCard.titleText}>
          <h4>Адрес доставки:</h4>
        </div>
        <div className={styleOneAddressCard.btnblock}>
          <span
            onClick={() => console.log('Нажата кнопка удалить адрес')}
            title="Изменить адрес"
            aria-label="done"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 3.92157C15.5509 3.92157 14.6408 4.29858 13.9697 4.96967L12.9697 5.96967L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16V20C3.25 20.4142 3.58579 20.75 4 20.75H8C8.19891 20.75 8.38968 20.671 8.53033 20.5303L18.0289 11.0318C18.0294 11.0313 18.0299 11.0308 18.0303 11.0303C18.0308 11.0299 18.0313 11.0294 18.0318 11.0289L19.0303 10.0303C19.7014 9.35924 20.0784 8.44905 20.0784 7.5C20.0784 6.55094 19.7014 5.64075 19.0303 4.96967C18.3592 4.29858 17.4491 3.92157 16.5 3.92157ZM17.5 9.43934L17.9697 8.96967C18.3595 8.57989 18.5784 8.05123 18.5784 7.5C18.5784 6.94876 18.3595 6.42011 17.9697 6.03033C17.5799 5.64055 17.0512 5.42157 16.5 5.42157C15.9488 5.42157 15.4201 5.64055 15.0303 6.03033L14.5607 6.5L17.5 9.43934ZM13.5 7.56066L4.75 16.3107V19.25H7.68934L16.4393 10.5L13.5 7.56066Z"
                fill="#121212"
              />
            </svg>
          </span>
          <span title="Удалить адрес" aria-label="delete">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 17H30"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 21V27"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 21V27"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 17L16 29C16 29.5304 16.2107 30.0391 16.5858 30.4142C16.9609 30.7893 17.4696 31 18 31H26C26.5304 31 27.0391 30.7893 27.4142 30.4142C27.7893 30.0391 28 29.5304 28 29L29 17"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 17V14C19 13.7348 19.1054 13.4804 19.2929 13.2929C19.4804 13.1054 19.7348 13 20 13H24C24.2652 13 24.5196 13.1054 24.7071 13.2929C24.8946 13.4804 25 13.7348 25 14V17"
                stroke="#121212"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </div>
        <p></p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
    </div>
  );
}
