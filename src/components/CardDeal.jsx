import {card} from '../assets';
import styles,{layout} from '../style';
import Button from './Button';

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Choose a card that complements your spending habits. If you frequently dine out or travel, a rewards card for dining and travel expenses might be ideal. On the other hand, if you carry a balance, focus on finding a card with a low-interest rate.</p>
           <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>

      </div>
      

    </section>
  )


export default CardDeal
