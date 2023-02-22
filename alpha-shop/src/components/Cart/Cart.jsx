import { cartItems } from "./data"
import { ReactComponent as Minus } from "../../assets/icon/minus.svg"
import { ReactComponent as Plus } from "../../assets/icon/plus.svg"
import styles from "./Cart.module.css"
import { useState } from "react"

function DisplayCartItems({
  name,
  img,
  quantity,
  price,
  shipFee,
  totalPrice,
  setTotalPrice,
  setFinalPrice,
}) {
  const [productCount, setProductCount] = useState(quantity)
  const [productPrice, setProductPrice] = useState(price * quantity)

  function handleOnclick(event) {
    const targetEvent = event.target
    let newQuantity = productCount
    let calcTotalPrice = totalPrice
    if (targetEvent.matches(".plus")) {
      newQuantity += 1
      calcTotalPrice += price
      setProductCount(newQuantity)
    } else if (targetEvent.matches(".minus")) {
      if (productCount > 0) {
        newQuantity -= 1
        calcTotalPrice -= price
        setProductCount(newQuantity)
      } else {
        return
      }
      // setProductCount(newQuantity)
    }
    setProductPrice(newQuantity * price)
    setTotalPrice(calcTotalPrice)
    setFinalPrice(calcTotalPrice + shipFee)
  }

  if (productCount === 0) {
    return
  } else {
    return (
      <>
        <div className={`${styles.productContainer} productContainer`}>
          <img className={styles.itemImg} src={img} alt={name + "照片"} />
          <div className={styles.productInfo}>
            <div className={styles.nameControl}>
              <div className={styles.productName}>{name}</div>
              <div className={styles.productControl}>
                <Minus
                  className={styles.controlButton}
                  onClick={handleOnclick}
                />
                <span className={styles.productCount}>{productCount}</span>
                <Plus
                  className={styles.controlButton}
                  onClick={handleOnclick}
                />
              </div>
            </div>
            <div className={styles.productPrice}>{productPrice}</div>
          </div>
        </div>
      </>
    )
  }
}

function DisplayCartInfo({ sectionClass, text, price }) {
  return (
    <section className={`${styles[sectionClass]} ${styles.cartInfo}`}>
      <div className={styles.infoText}>{text}</div>
      <div className={styles.productPrice}>{price}</div>
    </section>
  )
}
//
export default function Cart({
  shipFee,
  totalPrice,
  setTotalPrice,
  finalPrice,
  setFinalPrice,
}) {
  return (
    <>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className="productList">
        {cartItems.map((item) => (
          <DisplayCartItems
            key={item.id}
            {...item}
            shipFee={shipFee}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            finalPrice={finalPrice}
            setFinalPrice={setFinalPrice}
          />
        ))}
      </section>
      <DisplayCartInfo sectionClass="shipping" text="運費" price={shipFee} />
      <DisplayCartInfo sectionClass="total" text="小計" price={finalPrice} />
    </>
  )
}
