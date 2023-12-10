import Button from "../Button";
import styles from "./ProductRow.module.css";
import { ProductType } from "./types";

type ProductRowProps = Omit<ProductType, "id">;

const ProductRow = (props: ProductRowProps) => {
  return (
    <div className={styles.container}>
      <img src={props.images[0]} alt="Product" className={styles.img} />
      <div className={styles["container-details"]}>
        <div className={styles.information}>
          <div>{props.title}</div>
          <div>{props.price} USD</div>
        </div>
        <Button text="View Details" />
      </div>
    </div>
  );
};

export default ProductRow;
