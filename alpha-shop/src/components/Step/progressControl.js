import styles from "./progressControl.module.css"
import { ReactComponent as LeftArrow } from "../icon/left-arrow.svg"
import { ReactComponent as RightArrow } from "../icon/right-arrow.svg"

export function PrevButton() {
  return (
    <>
      <button className={styles.prevBtn}>
        <LeftArrow />
        上一步
      </button>
    </>
  )
}

export function NextButton({ btnName }) {
  return (
    <>
      <button className={styles.nextBtn}>
        {btnName}
        <RightArrow />
      </button>
    </>
  )
}
