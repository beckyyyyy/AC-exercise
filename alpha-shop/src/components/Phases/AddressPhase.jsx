import { genders } from "./data"
import { cities } from "./data"
import styles from "./Phases.module.css"

export function Input({label, type, placeholder}){
  return (
    <>
    <div className={styles.inputLabel}>{label}</div>
    <input className={styles.inputBox} type={type} placeholder={placeholder} />
    </>
  )
}

function GenderSelect() {
  const genderOptions = genders.map((g) => {
    return <option value={g.value}>{g.valueName}</option>
  })
  return (
    <div className={styles.selectContainer}>
      <div className={styles.inputLabel}>稱謂</div>
      <select className={styles.selectBox}>{genderOptions}</select>
    </div>  
  )
  
}

function CitySelect() {
  const cityOptions = cities.map((c) => {
    return <option value="c.value">{c.cityName}</option>
  })
  return (
    <div className={styles.selectContainer}>
      <div className={styles.inputLabel}>縣市</div>
      <select className={styles.selectBox}>
        <option value="">請選擇縣市</option>
        {cityOptions}
      </select>
    </div>
  )
}

export default function AddressPhase() {
  return (
    <form dataPhase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={styles.formBody}>
        <div className={styles.genderInput}>
            <GenderSelect />
        </div>
        <div className={styles.nameInput}>
          <Input label="姓名" type="text" placeholder="請輸入姓名" />
        </div>
        <div className={styles.telInput}>
          <Input label="電話" type="tel" placeholder="請輸入行動電話" />
        </div>
        <div className={styles.emailInput}>
          <Input label="Email" type="email" placeholder="請輸入電子郵件" />
        </div>
        <div className={styles.cityInput}>
            <CitySelect />
        </div>
        <div className={styles.addressInput}>
          <Input label="地址" type="text" placeholder="請輸入地址" />
        </div>
      </section>
    </form>
  )
}
