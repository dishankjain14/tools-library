import React from "react";
import ToolCard from "./ToolCard";
import "./../styles/categories.css";

const Categories = ({ tools }) => {
  return (
    <section className="categories">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </section>
  );
};

export default Categories;
