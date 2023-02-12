import styles from "./Phases.module.css"
import { Input } from "./AddressPhase"

export default function CreditCardPhase() {
  return (
      <form dataPhase="creditCard">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBody}>
          <div className={styles.cardName}>
            <Input label="持卡人姓名" type="text" placeholder="John Doe" />
          </div>
          <div className={styles.cardNumber}>
            <Input label="卡號" type="text" placeholder="1111 2222 3333 4444" />
          </div>
          <div className={styles.expDate}>
            <Input label="有效期限" type="text" placeholder="MM/YY" />
          </div>
          <div className={styles.cvcNumber}>
            <Input label="CVC / CCV" type="text" placeholder="123" />
          </div>
        </section>
      </form>
  )
}
