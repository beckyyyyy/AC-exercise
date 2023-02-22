import styles from "./Phases.module.css"

function ShippingMethod({
  dataPrice,
  shippingId,
  shipMethod,
  shippingPeriod,
  setShipFee,
  totalPrice,
  setFinalPrice,
}) {
  function handleClick(event) {
    if (event.target.id === "shippingStandard") {
      setShipFee(0)
      console.log(totalPrice)
      setFinalPrice(totalPrice)
    } else if (event.target.id === "shippingDhl") {
      setShipFee(500)
      console.log(totalPrice)
      setFinalPrice(totalPrice + 500)
    }
  }

  return (
    <label className={styles.radioGroup} dataPrice={dataPrice}>
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
          <div className="price">{dataPrice}</div>
        </div>
        <div className="period">{shippingPeriod}</div>
      </div>
    </label>
  )
}

export default function ShippingPhase({
  shipFee,
  setShipFee,
  totalPrice,
  setFinalPrice,
}) {
  return (
    <form id="shipping">
      <h3 className={styles.formTitle}>運送方式</h3>
      <section className={styles.formBody}>
        <ShippingMethod
          dataPrice="免費"
          shippingId="shippingStandard"
          shipMethod="標準運送"
          shippingPeriod="約 3~7 個工作天"
          shipFee={shipFee}
          setShipFee={setShipFee}
          totalPrice={totalPrice}
          setFinalPrice={setFinalPrice}
        />
        <ShippingMethod
          dataPrice="500"
          shippingId="shippingDhl"
          shipMethod="DHL 貨運"
          shippingPeriod="48小時內抵達"
          shipFee={shipFee}
          setShipFee={setShipFee}
          totalPrice={totalPrice}
          setFinalPrice={setFinalPrice}
        />
      </section>
    </form>
  )
}
