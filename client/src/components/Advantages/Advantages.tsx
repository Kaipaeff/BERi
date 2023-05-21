import style from './advantages.module.css';

import shipping from '../../img/icons/shipping.svg';
import clock from '../../img/icons/clock.svg';
import phone from '../../img/icons/phone.svg';
import money from '../../img/icons/money.svg';



export default function Advantages() {
  return (
    <div className={style.wrapper}>

      <div className={style.shipping}>
        <img src={shipping} alt="shipping" />
        <h2>Доставка</h2>
        <span>Доставляем товар до Вашей двери <br />без ограничения по сумме</span>
      </div>

      <div className={style.delimiter} />

      <div className={style.moneyBack}>
        <img src={clock} alt="clock" />
        <h2>Примерка</h2>
        <span>Даем время на примерку товара <br />до его оплаты</span>
      </div>

      <div className={style.delimiter} />
      
      <div className={style.support}>
        <img src={phone} alt="phone" />
        <h2>Консультация</h2>
        <span>Информационная поддержка клиентов <br />по телефону и в мессенджерах</span>
      </div>

      <div className={style.delimiter} />

      <div className={style.payment}>
        <img src={money} alt="money" />
        <h2>Оплата</h2>
        <span>Оплата только после получения <br />товара и примерки</span>
      </div>

    </div>
  )
}
