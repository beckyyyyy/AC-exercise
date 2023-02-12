import { genders } from "./data"
import { cities } from "./data"
import styles from "./phases.module.css"

export function InputLabel({ label }) {
  return <div className={styles.inputLabel}>{label}</div>
}

export function Input({ type, placeholder }) {
  return (
    <input className={styles.inputBox} type={type} placeholder={placeholder} />
  )
}

function GenderSelect() {
  const genderOptions = genders.map((g) => {
    return <option value={g.value}>{g.valueName}</option>
  })
  return <select className={styles.selectBox}>{genderOptions}</select>
}

function CitySelect() {
  const cityOptions = cities.map((c) => {
    return <option value="c.value">{c.cityName}</option>
  })
  return (
    <>
      <select className={styles.selectBox}>
        <option value="">請選擇縣市</option>
        {cityOptions}
      </select>
    </>
  )
}

export default function AddressPhase() {
  return (
    <form dataPhase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={styles.formBody}>
        <div className={styles.genderInput}>
          <InputLabel label="稱謂" />
          <div className={styles.selectContainer}>
            <GenderSelect />
          </div>
        </div>
        <div className={styles.nameInput}>
          <InputLabel label="姓名" />
          <Input type="text" placeholder="請輸入姓名" />
        </div>
        <div className={styles.telInput}>
          <InputLabel label="電話" />
          <Input type="tel" placeholder="請輸入行動電話" />
        </div>
        <div className={styles.emailInput}>
          <InputLabel label="Email" />
          <Input type="email" placeholder="請輸入電子郵件" />
        </div>
        <div className={styles.cityInput}>
          <InputLabel label="縣市" />
          <div className={styles.selectContainer}>
            <CitySelect />
          </div>
        </div>
        <div className={styles.addressInput}>
          <InputLabel label="地址" />
          <Input type="text" placeholder="請輸入地址" />
        </div>
      </section>
    </form>
  )
}
