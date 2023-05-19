import React, { useEffect } from 'react';
import style from './returnsPolicy.module.css'

export default function ReturnsPolicy() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <p>
          УСЛОВИЯ ВОЗВРАТА
        </p>
        <hr />
        
        <b>
          ВОЗВРАТ И ОБМЕН ТОВАРА НАДЛЕЖАЩЕГО КАЧЕСТВА<br /><br />
        </b> 
        

        Список товаров, не подлежащих возврату и обмену В соответствии с Законом Российской Федерации "О защите прав потребителей" (Собрание законодательства Российской Федерации, 1996, N 3, ст. 140) приводим список товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар другого размера, формы, габарита, фасона, расцветки или комплектации:

        1	Швейные и трикотажные изделия (изделия швейные и трикотажные бельевые, изделия чулочно-носочные) – например, термобелье, носки.
        2	Изделия и материалы, контактирующие с пищевыми продуктами, из полимерных материалов, в том числе для разового использования (посуда и принадлежности столовые и кухонные, емкости и упаковочные материалы для хранения и транспортирования пищевых продуктов) – например, чашки, ложки, кастрюли, наборы посуды.
        3	Товары бытовой химии, пестициды и агрохимикаты (в ред. Постановления Правительства РФ от 20.10.1998 N 1222) – например, средства для стирки мембранных тканей и пуховиков, пропитки.<br /><br />
        
        <b>
          Если товар подлежит возврату, то<br />
        </b>

        Вы можете отказаться от заказанного товара в любое время ДО его получения.<br />
        
        Если товар не подошел Вам по какой-либо причине, Вы вправе вернуть или обменять его на аналогичный товар в течение 14 (четырнадцати) календарных дней с момента продажи товара.<br />

        Для этого Вам необходимо связаться с нами по телефону или по электронной почте, указанным в разделе "Контакты".<br/>

        Возврат товара производится по адресу: г.Грозный, ул.Маяковского, 13, ТЦ HOMERRY, 4-й этаж, шоурум №2.<br/><br/>
        
        <b>Возврат товара надлежащего качества</b> возможен в случае, если сохранены его товарный вид, потребительские свойства, а также документ, подтверждающий покупку указанного товара (кассовый или товарный чеки, накладная). При себе иметь паспорт!<br/>

        Стоимость доставки возврату не подлежит.<br/>

        Расходы по доставке и возврату товара несет Покупатель.<br/>

        В случае отказа от совершенного заказа после его отправки по причинам, не связанным с качеством товаров, доставка оплачивается покупателем.<br/><br/>

        <b>ВОЗВРАТ И ОБМЕН ТОВАРА НЕНАДЛЕЖАЩЕГО КАЧЕСТВА.</b><br/>
        Вы можете возвратить товар ненадлежащего качества в течение гарантийного срока, срока годности, либо, если такой срок не установлен, то в срок не превышающий 1 года.<br/>

        Если у Вас есть претензии по качеству товара, или к вам пришел товар, который вы не заказывали, то Вам необходимо связаться с нами по телефону или по электронной почте? указанным в разделе "Контакты"<br/>

        Мы рассмотрим Ваше обращение и после получения результатов экспертизы вернем Вам полную стоимость покупки.<br/>

        В случае возврата товара ненадлежащего качества, мы берем на себя расходы по пересылке товара обратно нам.<br/>
      </div>
    </div>
  )
}