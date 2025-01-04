import React, { useState } from "react";
import Header from "./components/Header";
import SortingFilter from "./components/SortingFilter";
import Categories from "./components/Categories";
import Footer from "./components/Footer"; // Import the Footer component
import toolsData from "./data/toolsData";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState(null);

  const filteredTools = toolsData
    .filter((tool) => category === "All" || tool.category === category)
    .sort((a, b) => {
      if (sort === "asc") return a.name.localeCompare(b.name);
      if (sort === "desc") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div>
      <Header />
      <SortingFilter setCategory={setCategory} setSort={setSort} />
      <Categories tools={filteredTools} />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
