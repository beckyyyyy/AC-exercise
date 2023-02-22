import Header from "./components/Header/Header"
import StepProgress from "./components/Step/StepProgress"
import AddressPhase from "./components/Phases/AddressPhase"
import ShippingPhase from "./components/Phases/ShippingPhase"
import CreditCardPhase from "./components/Phases/CreditCartPhase"
import Cart from "./components/Cart/Cart"
import { PrevButton } from "./components/ProgressControl/ProgressControl"
import { NextButton } from "./components/ProgressControl/ProgressControl"
import styles from "./App.module.css"
import { useState } from "react"

function App() {
  //商品總金額
  const [totalPrice, setTotalPrice] = useState(400)
  //運費
  const [shipFee, setShipFee] = useState(500)
  //商品總金額加上運費
  const [finalPrice, setFinalPrice] = useState(400 + shipFee)

  //切換步驟
  const phases = [
    <AddressPhase />,
    <ShippingPhase
      shipFee={shipFee}
      setShipFee={setShipFee}
      totalPrice={totalPrice}
      setFinalPrice={setFinalPrice}
    />,
    <CreditCardPhase />,
  ]
  const [phaseIndex, setPhaseIndex] = useState(0)
  const [phase, setPhase] = useState(phases[phaseIndex])
  const [btnStyle, setBtnStyle] = useState("hidden")
  const [btnText, setBtnText] = useState("下一步")
  const [arrowStyle, setArrowStyle] = useState("block")
  const [icon, setIcon] = useState(["onProgressIcon"])
  const [label, setLabel] = useState(["onProgressLabel"])
  const [bar, setBar] = useState([])

  function handlePrevClick(event) {
    setPhaseIndex(phaseIndex - 1)
    setPhase(phases[phaseIndex - 1])
    setBtnText("下一步")
    setArrowStyle("block")
    setIcon(icon.slice(1))
    setLabel(label.slice(0, label.length - 1))
    setBar(bar.slice(0, bar.length - 1))
    if (phaseIndex === 1) {
      setBtnStyle("hidden")
    } else {
      setBtnText("下一步")
    }
  }
  function handleNextClick() {
    if (phaseIndex === phases.length - 2) {
      setBtnText("確定訂單")
      setArrowStyle("none")
    } else if (phaseIndex >= phases.length - 1) {
      return
    }
    setPhaseIndex(phaseIndex + 1)
    setPhase(phases[phaseIndex + 1])
    setBtnStyle("visible")
    setIcon(["doneProgressIcon", ...icon])
    setLabel([...label, "onProgressLabel"])
    setBar([...bar, "onProgressBar"])
  }

  return (
    <div>
      <Header />
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepProgress icon={icon} label={label} bar={bar} />
          <section className={styles.formContainer}>{phase}</section>
        </div>
        <div className={styles.buttonGroup}>
          <PrevButton btnStyle={btnStyle} onClick={handlePrevClick} />
          <NextButton
            btnName={btnText}
            arrowStyle={arrowStyle}
            onClick={handleNextClick}
          />
        </div>
        <div className={styles.cartContainer}>
          <Cart
            shipFee={shipFee}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            finalPrice={finalPrice}
            setFinalPrice={setFinalPrice}
          />
        </div>
      </main>
    </div>
  )
}

export default App
