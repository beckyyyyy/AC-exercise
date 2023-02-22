import styles from "./Step.module.css"
// import { ReactComponent as CompleteIcon } from "../assets/icon/pg-complete.svg"

function Progress({ stepNo, progressLabel, iconStyle, labelStyle }) {
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

export default function StepProgress({ icon, label, bar }) {
  return (
    <>
      <h2>結帳</h2>
      <section className={styles.progressContainer}>
        <Progress
          stepNo="1"
          progressLabel="寄送地址"
          iconStyle={icon[0]}
          labelStyle={label[0]}
        />
        <span
          className={`${styles.progressBar} ${styles.left} ${styles[bar[0]]}`}
        ></span>
        <Progress
          stepNo="2"
          progressLabel="運送方式"
          iconStyle={icon[1]}
          labelStyle={label[1]}
        />
        <span
          className={`${styles.progressBar} ${styles.right} ${styles[bar[1]]}`}
        ></span>
        <Progress
          stepNo="3"
          progressLabel="付款資訊"
          iconStyle={icon[2]}
          labelStyle={label[2]}
        />
      </section>
    </>
  )
}
