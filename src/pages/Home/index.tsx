import { useEffect, useState } from "react";
import Products from "../../components/Products";
import SearchBar from "../../components/SearchBar";
import styles from "./Home.module.css";
import { ProductType } from "../../components/ProductRow/types";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ProductType[]>([]);
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // extract data from the form
    const formData = new FormData(event.currentTarget);
    const searchText = formData.get("searchText");

    // filter data
    if (typeof searchText === "string") {
      const searchTextParsed = searchText.trim();

      if (!searchTextParsed) {
        setFilteredData(data);
        return;
      }

      const filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(searchTextParsed.toLowerCase())
      );
      setFilteredData(filteredData);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((json) => {
        const data = json.slice(0, 20);
        setData(data);
        setFilteredData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <SearchBar onSubmit={handleSubmit} />
      <Products data={filteredData} loading={loading} />
    </div>
  );
};

export default Home;
