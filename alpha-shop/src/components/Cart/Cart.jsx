import {cartItems} from "./data"
import {ReactComponent as Minus} from "../../assets/icon/minus.svg"
import {ReactComponent as Plus} from "../../assets/icon/plus.svg"
import Styles from "./Cart.module.css"

function DisplayCartItems ({name, img, price, quantity}){
  let subTotal = 0
  subTotal = price * quantity
    return (
      <>
        <img className={Styles.itemImg} src={img} alt={name + '照片'} />
        <div className={Styles.productInfo}>
          <div className={Styles.nameControl}>
            <div className={Styles.productName}>{name}</div>
            <div className={Styles.productControl}>
              <Minus />
              <span className={Styles.productCount}>{quantity}</span>
              <Plus />
            </div>
          </div>
          <div className={Styles.productPrice}>{'$' + subTotal}</div>
        </div>
        
      </>
    )
}

function DisplayCartInfo({sectionClass, text, price}){
  return(
    <section className={`${Styles[sectionClass]} ${Styles.cartInfo}`}>
      <div className={Styles.infoText}>{text}</div>
      <div className={Styles.productPrice}>{price}</div>
    </section>
  )
}

export default function Cart(){
    return(
        <>
            <h3 className={Styles.cartTitle}>購物籃</h3>
            <section className="priductList">
              {cartItems.map(item => {
                return(
                   <div key={item.id} className={Styles.productContainer} dataCount={item} dataPrice={item.price}>
                      <DisplayCartItems{...item}/>
                   </div>
                )
              })}
            </section>
            <DisplayCartInfo sectionClass="shipping" text="運費" price="免費" />
            <DisplayCartInfo sectionClass="total" text="小計" price="$400" />
        </>
    )
}