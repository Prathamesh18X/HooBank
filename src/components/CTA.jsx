import styles from '../style'


const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

const CTA = () => {
  return (
    <section className={`${styles.marginY} ${styles.flexCenter} ${styles.padding} bg-black-gradient-2 rounded-[20px] sm:flex-row flex-col bow-shadow`}>
      <div className={`flex flex-col flex-1 flex-center`}>
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business
        anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA