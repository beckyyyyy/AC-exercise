import { cartItems } from "./data"
import { ReactComponent as Minus } from "../../assets/icon/minus.svg"
import { ReactComponent as Plus } from "../../assets/icon/plus.svg"
import styles from "./Cart.module.css"
import { useState, useContext } from "react"
import { CartContext } from "../../CartContext"

function DisplayCartItems({ name, img, quantity, price }) {
  const [productCount, setProductCount] = useState(quantity)
  const [productPrice, setProductPrice] = useState(price * quantity)
  const { totalPrice, setTotalPrice } = useContext(CartContext)

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
    }
    setProductPrice(newQuantity * price)
    setTotalPrice(calcTotalPrice)
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

export default function Cart() {
  const { shipFee, finalPrice } = useContext(CartContext)
  return (
    <>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className="productList">
        {cartItems.map((item) => (
          <DisplayCartItems key={item.id} {...item} />
        ))}
      </section>
      <DisplayCartInfo sectionClass="shipping" text="運費" price={shipFee} />
      <DisplayCartInfo sectionClass="total" text="小計" price={finalPrice} />
    </>
  )
}
