import Header from "./components/Header/Header"
import StepProgress from "./components/Step/StepProgress"
import AddressPhase from "./components/Phases/AddressPhase"
import ShippingPhase from "./components/Phases/ShippingPhase"
import CreditCardPhase from "./components/Phases/CreditCartPhase"
import { PrevButton } from "./components/ProgressControl/ProgressControl"
import { NextButton } from "./components/ProgressControl/ProgressControl"
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <Header />
      <main className={styles.siteMain}>
        <div className={styles.mainContainer}>
          <StepProgress />
          <section className={styles.formContainer}>
            <AddressPhase />
            {/* <ShippingPhase /> */}
            {/* <CreditCardPhase /> */}
          </section>
          <div className={styles.buttonGroup}>
            <PrevButton />
            <NextButton btnName="下一步" />
          </div>
        </div>
        <div className={styles.cartContainer}>未來購物籃區塊</div>
      </main>
    </div>
  )
}

export default App
