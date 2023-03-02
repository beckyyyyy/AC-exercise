import styles from "./ProgressControl.module.css"
import { ReactComponent as LeftArrow } from "../../assets/icon/left-arrow.svg"
import { ReactComponent as RightArrow } from "../../assets/icon/right-arrow.svg"

export function PrevButton({ onClick, btnStyle }) {
  return (
    <button
      className={`${styles.prevBtn} ${styles[btnStyle]}`}
      onClick={onClick}
    >
      <LeftArrow />
      上一步
    </button>
  )
}

export function NextButton({ onClick, btnName }) {
  return (
    <button className={styles.nextBtn} onClick={onClick}>
      {btnName}
      {btnName === "下一步" && <RightArrow />}
    </button>
  )
}
