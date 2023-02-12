import Header from "./components/header"
import StepProgress from "./components/Step/stepProgress"
import AddressPhase from "./components/Step/Phases/addressPhase"
import ShippingPhase from "./components/Step/Phases/shippingPhase"
import CreditCardPhase from "./components/Step/Phases/creditCartPhase"
import { PrevButton } from "./components/Step/progressControl"
import { NextButton } from "./components/Step/progressControl"
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
