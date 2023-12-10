import Button from "../Button";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type a product"
        className={styles["input-text"]}
        name="searchText"
      />
      <Button text="Search" />
    </form>
  );
};

export default SearchBar;
