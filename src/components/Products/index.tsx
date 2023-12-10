import ProductRow from "../ProductRow";
import styles from "./Products.module.css";
import { ProductType } from "../ProductRow/types";

type ProductsProps = {
  data: ProductType[];
  loading: boolean;
};

const Products = ({ data, loading }: ProductsProps) => {
  console.log("debug log data", data);
  return (
    <div className={styles.container}>
      {data.length > 0 ? (
        data.map((product) => {
          return (
            <ProductRow
              key={product.id}
              images={product.images}
              title={product.title}
              price={product.price}
            />
          );
        })
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Products;
