import styles from "./phases.module.css"

function ShippingMethod({ dataPrice, shippingId, shipMethod, shippingPeriod }) {
  let shipPrice = 0
  if (Number(dataPrice) === 0) {
    shipPrice = "免費"
  } else {
    shipPrice = dataPrice
  }

  return (
    <>
      <label className={styles.radioGroup} dataPrice={dataPrice}>
        <input id={shippingId} type="radio" name="shipping" checked />
        <div className={styles.radioInfo}>
          <div className={styles.shipInfoContainer}>
            <div className="text">{shipMethod}</div>
            <div className="price">{shipPrice}</div>
          </div>
          <div className="period">{shippingPeriod}</div>
        </div>
      </label>
    </>
  )
}

export default function ShippingPhase() {
  return (
    <>
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody}>
        <ShippingMethod
          dataPrice="0"
          shippingId="shippingStandard"
          shipMethod="標準運送"
          shippingPeriod="約 3~7 個工作天"
        />
        <ShippingMethod
          dataPrice="500"
          shippingId="shippingDhl"
          shipMethod="DHL 貨運"
          shippingPeriod="48小時內抵達"
        />
      </section>
    </>
  )
}
