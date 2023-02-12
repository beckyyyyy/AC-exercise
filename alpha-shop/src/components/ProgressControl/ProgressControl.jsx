import styles from "./ProgressControl.module.css"
import { ReactComponent as LeftArrow } from "../../assets/icon/left-arrow.svg"
import { ReactComponent as RightArrow } from "../../assets/icon/right-arrow.svg"

export function PrevButton() {
  return (
      <button className={styles.prevBtn}>
        <LeftArrow />
        上一步
      </button>
  )
}

export function NextButton({ btnName }) {
  return (
      <button className={styles.nextBtn}>
        {btnName}
        <RightArrow />
      </button>
  )
}
