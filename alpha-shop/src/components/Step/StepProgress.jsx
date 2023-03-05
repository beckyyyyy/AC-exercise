import styles from "./Step.module.css"
import { useContext } from "react"
import { CartContext } from "CartContext"

function Progress({ stepNo, progressLabel }) {
  const { phaseIndex } = useContext(CartContext)
  let progressStyle = displayProgressStyle(stepNo, phaseIndex)
  let iconStyle = progressStyle[0]
  let labelStyle = progressStyle[1]
  return (
    <span className={styles.progressGroup}>
      <span className={`${styles.progressIcon} ${styles[iconStyle]}`}>
        <span>{stepNo}</span>
      </span>
      <span className={`${styles.progressLabel} ${styles[labelStyle]}`}>
        {progressLabel}
      </span>
    </span>
  )
}

function displayProgressStyle(step, index) {
  let iconStyle = ""
  let labelStyle = ""
  let stepIndex = Number(step) - 1
  if (stepIndex === index) {
    iconStyle = "onProgressIcon"
    labelStyle = "onProgressLabel"
    return [iconStyle, labelStyle]
  } else if (index > stepIndex) {
    iconStyle = "doneProgressIcon"
    labelStyle = "onProgressLabel"
    return [iconStyle, labelStyle]
  } else {
    iconStyle = ""
    labelStyle = ""
    return [iconStyle, labelStyle]
  }
}

export default function StepProgress({ phaseIndex }) {
  return (
    <>
      <h2>結帳</h2>
      <section className={styles.progressContainer}>
        <Progress stepNo="1" progressLabel="寄送地址" />
        {phaseIndex === 0 ? (
          <span className={`${styles.progressBar} ${styles.left}`}></span>
        ) : (
          <span
            className={`${styles.progressBar} ${styles.left} ${styles.onProgressBar}`}
          ></span>
        )}
        <Progress stepNo="2" progressLabel="運送方式" />
        {phaseIndex === 2 ? (
          <span
            className={`${styles.progressBar} ${styles.right} ${styles.onProgressBar}`}
          ></span>
        ) : (
          <span className={`${styles.progressBar} ${styles.right}`}></span>
        )}
        <Progress stepNo="3" progressLabel="付款資訊" />
      </section>
    </>
  )
}
