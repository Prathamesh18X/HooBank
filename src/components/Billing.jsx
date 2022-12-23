import styles , {layout} from '../style'
import {bill ,apple ,google} from '../assets'

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);



const CardDeal = () =>  (
  <section id="billings" className={layout.sectionReverse}>
    
    <div className={`${layout.sectionImg} flex-col`}>
      <img src={bill} alt="" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Easily control your <br className="sm:block hidden" />billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      An invoice or bill is an important written document that indicates the sale or supply by one business to another business or consumer.
      </p>

      <div className={`lex flex-wrap flex-row sm:mt-10 mt-6`}>
        <img src={apple} className={`mr-6 h-[42px] w-[128px] cursor-pointer`}/>
        <img src={google} className={`mr-6 h-[42px] w-[128px] cursor-pointer`}/>
      </div>
    </div>
  </section>
);

export default CardDeal;