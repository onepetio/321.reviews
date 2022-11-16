import type { Document } from "./index"
import styles from './ProductPreview.module.scss';

export default function ({ name, image, maker }: Document['product']) {
  return (
    <div className={styles["product-preview"]}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.maker}>{maker}</div>
      </div>
    </div>
  )
}
