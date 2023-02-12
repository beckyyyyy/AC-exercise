import styles from "./phases.module.css"
import { InputLabel } from "./addressPhase"
import { Input } from "./addressPhase"

export default function CreditCardPhase() {
  return (
    <>
      <form dataPhase="creditCard">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBody}>
          <div className={styles.cardName}>
            <InputLabel label="持卡人姓名" />
            <Input type="text" placeholder="John Doe" />
          </div>
          <div className={styles.cardNumber}>
            <InputLabel label="卡號" />
            <Input type="text" placeholder="1111 2222 3333 4444" />
          </div>
          <div className={styles.expDate}>
            <InputLabel label="有效期限" />
            <Input type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.cvcNumber}>
            <InputLabel label="CVC / CCV" />
            <Input type="text" placeholder="123" />
          </div>
        </section>
      </form>
    </>
  )
}
