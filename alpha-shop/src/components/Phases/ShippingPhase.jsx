import styles from "./Phases.module.css"
import { CartContext } from "../../CartContext"
import { useContext } from "react"

function ShippingMethod({ shipFee, shippingId, shipMethod, shippingPeriod }) {
  const { setShipFee } = useContext(CartContext)

  function handleClick(event) {
    if (event.target.id === "shippingStandard") {
      setShipFee(0)
    } else if (event.target.id === "shippingDhl") {
      setShipFee(500)
    }
  }

  return (
    <label className={styles.radioGroup}>
      <input
        id={shippingId}
        type="radio"
        name="shipping"
        defaultChecked
        onClick={handleClick}
      />
      <div className={styles.radioInfo}>
        <div className={styles.shipInfoContainer}>
          <div className="text">{shipMethod}</div>
          <div className="price">{shipFee}</div>
        </div>
        <div className="period">{shippingPeriod}</div>
      </div>
    </label>
  )
}

export default function ShippingPhase() {
  return (
    <form id="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody}>
        <ShippingMethod
          shipFee="免費"
          shippingId="shippingStandard"
          shipMethod="標準運送"
          shippingPeriod="約 3~7 個工作天"
        />
        <ShippingMethod
          shipFee="500"
          shippingId="shippingDhl"
          shipMethod="DHL 貨運"
          shippingPeriod="48小時內抵達"
        />
      </section>
    </form>
  )
}
