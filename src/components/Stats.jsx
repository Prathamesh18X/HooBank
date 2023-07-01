import {stats} from '../constants'
import styles from '../style'

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row sm:mb-6 mb-20 flex-wrap sm:divide-x sm: divide-gray-400  max-sm:divide-y `}>
      {stats.map((stats) => (
        <div className={`flex flex-1 justify-center items-center flex-row mx-3 py-2`}>
          <h4 className={`text-white font-poppins font-semibold xs:text-[40px] text-[28px] leading-5 `}>
            {stats.value}
          </h4>
          <p className={`${styles.paragraph} text-gradient m-2 xs:text-[20px] text-[16px] leading-4 uppercase` }>
            {stats.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats