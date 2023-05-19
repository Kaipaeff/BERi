import style from './mainBrandsBlock.module.css'
import moonstar from '../../img/images/brandsBlock/moonstar.png'
import HM from '../../img/images/brandsBlock/H&M.png'
import monnarosa from '../../img/images/brandsBlock/monnarosa.png'
import pierlone from '../../img/images/brandsBlock/pierlone.png'
import wanex from '../../img/images/brandsBlock/wanex.png'
import zara from '../../img/images/brandsBlock/zara.png'

import arrowRight from '../../img/icons/arrowRight.svg'

export default function MainBrandsBlock() {
  return (
    <div className={style.wrapper}>

      <div className={style.brandsText}>
        <h2>Популярные бренды нашего магазина</h2>

        <button className={style.brandsTextBtn}>
          Смотреть каталог
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
      
      <div className={style.logotypes}>
        <img src={moonstar} alt="moonstar" />
        <img src={HM} alt="HM" />
        <img src={monnarosa} alt="monnarosa" />
        <img src={pierlone} alt="pierlone" />
        <img src={wanex} alt="wanex" />
        <img src={zara} alt="zara" />
      </div>

    </div>
  )
}
