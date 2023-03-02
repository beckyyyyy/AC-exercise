import styles from "./Phases.module.css"
import { Input } from "./AddressPhase"
import { useContext } from "react"
import { CartContext } from "../../CartContext"

export default function CreditCardPhase() {
  const { creditCardInfo, setCreditCardInfo } = useContext(CartContext)

  function handleChange(e) {
    const targetEvent = e.target
    const targetValue = targetEvent.value
    if (targetEvent.matches(".cardHolder")) {
      setCreditCardInfo({ ...creditCardInfo, cardHolder: targetValue })
    } else if (targetEvent.matches(".cardNumber")) {
      setCreditCardInfo({ ...creditCardInfo, cardNo: targetValue })
    } else if (targetEvent.matches(".validDate")) {
      setCreditCardInfo({ ...creditCardInfo, validDate: targetValue })
    } else if (targetEvent.matches(".ccvNumber")) {
      setCreditCardInfo({ ...creditCardInfo, ccvNo: targetValue })
    }
  }

  return (
    <form id="creditCard">
      <h3 className={styles.formTitle}>付款資訊</h3>
      <section className={styles.formBody}>
        <div className={styles.cardName}>
          <Input
            className="cardHolder"
            label="持卡人姓名"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
          />
        </div>
        <div className={styles.cardNumber}>
          <Input
            className="cardNumber"
            label="卡號"
            type="text"
            placeholder="1111 2222 3333 4444"
            onChange={handleChange}
          />
        </div>
        <div className={styles.expDate}>
          <Input
            className="validDate"
            label="有效期限"
            type="text"
            placeholder="MM/YY"
            onChange={handleChange}
          />
        </div>
        <div className={styles.cvcNumber}>
          <Input
            className="ccvNumber"
            label="CCV/CVC"
            type="text"
            placeholder="123"
            onChange={handleChange}
          />
        </div>
      </section>
    </form>
  )
}
