import styles from "./step.module.css"
import { ReactComponent as CompleteIcon } from "../icon/pg-complete.svg"

function OnProgress({ dataPhase, stepNo, progressLabel }) {
  return (
    <>
      <span className={styles.progressGroup} dataPhase={dataPhase}>
        <span className={`${styles.OnProgressIcon} ${styles.progressIcon}`}>
          <span className={styles.stepText}>{stepNo}</span>
        </span>
        <span className={`${styles.progressLabel} ${styles.onProgressLabel}`}>
          {progressLabel}
        </span>
      </span>
    </>
  )
}

function UnDoneProgress({ dataPhase, stepNo, progressLabel }) {
  return (
    <>
      <span className={styles.progressGroup} dataPhase={dataPhase}>
        <span className={`${styles.unDoneProgressIcon} ${styles.progressIcon}`}>
          <span className={styles.stepText}>{stepNo}</span>
        </span>
        <span
          className={`${styles.progressLabel} ${styles.unDoneProgressLabel}`}
        >
          {progressLabel}
        </span>
      </span>
    </>
  )
}

export default function StepProgress() {
  return (
    <>
      <h2>結帳</h2>
      <section className={styles.progressContainer}>
        <OnProgress dataPhase="address" stepNo="1" progressLabel="寄送地址" />
        <span className={styles.progressBar1} data-order="1"></span>
        <UnDoneProgress
          dataPhase="shipping"
          stepNo="2"
          progressLabel="運送方式"
        />
        <span className={styles.progressBar2} data-order="2"></span>
        <UnDoneProgress
          dataPhase="credit-card"
          stepNo="3"
          progressLabel="付款資訊"
        />
      </section>
    </>
  )
}
