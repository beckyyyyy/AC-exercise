import Header from "./components/Header/Header"
import StepProgress from "./components/Step/StepProgress"
import AddressPhase from "./components/Phases/AddressPhase"
import ShippingPhase from "./components/Phases/ShippingPhase"
import CreditCardPhase from "./components/Phases/CreditCartPhase"
import Cart from "./components/Cart/Cart"
import {
  PrevButton,
  NextButton,
} from "./components/ProgressControl/ProgressControl"
import styles from "./App.module.css"
import { useState } from "react"
import { CartContext } from "./CartContext"

function App() {
  //商品總金額
  const [totalPrice, setTotalPrice] = useState(400)
  //運費
  const [shipFee, setShipFee] = useState(500)
  //商品總金額加上運費
  const finalPrice = totalPrice + shipFee
  // 付款資訊
  const creditCardInfoForm = {
    cardHolder: "",
    cardNo: "",
    validDate: "",
    ccvNo: "",
  }
  const [creditCardInfo, setCreditCardInfo] = useState(creditCardInfoForm)

  //切換步驟
  const phases = [<AddressPhase />, <ShippingPhase />, <CreditCardPhase />]
  const [phaseIndex, setPhaseIndex] = useState(0)
  const currentPhase = phases[phaseIndex]
  const [btnText, setBtnText] = useState("下一步")

  function handlePrevClick() {
    setPhaseIndex(phaseIndex - 1)
    setBtnText("下一步")
  }
  function handleNextClick() {
    if (phaseIndex === phases.length - 2) {
      setBtnText("確定訂單")
    } else if (phaseIndex >= phases.length - 1) {
      // 點擊確認訂單
      console.log(`
      購物車總金額：${finalPrice}
      持卡人姓名：${creditCardInfo.cardHolder}
      卡號：${creditCardInfo.cardNo}
      有效期限：${creditCardInfo.validDate}
      CCV：${creditCardInfo.ccvNo}
      `)
      return
    }
    setPhaseIndex(phaseIndex + 1)
  }

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        setTotalPrice,
        shipFee,
        setShipFee,
        finalPrice,
        phaseIndex,
        creditCardInfo,
        setCreditCardInfo,
      }}
    >
      <Header />
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepProgress phaseIndex={phaseIndex} />
          <section className={styles.formContainer}>{currentPhase}</section>
        </div>
        <div className={styles.buttonGroup}>
          {phaseIndex !== 0 && <PrevButton onClick={handlePrevClick} />}
          <NextButton btnName={btnText} onClick={handleNextClick} />
        </div>
        <div className={styles.cartContainer}>
          <Cart />
        </div>
      </main>
    </CartContext.Provider>
  )
}

export default App
