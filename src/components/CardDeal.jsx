import styles , {layout} from '../style'
import {card} from '../assets'

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);



const CardDeal = () =>  (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      We have filtered out some of the best credit deals offers for you which will help narrow down your search and get your hands on the right one.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      <img src={card} alt="" />
    </div>
  </section>
);

export default CardDeal;