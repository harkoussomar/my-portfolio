import { useState } from "react";
import { projectsData, projectsNav } from "./data";
import WorksItems from "./WorksItems";
import CategorySelected from "./CategorySelected";

export default function Works() {
  const [categorySelected, setCategorySelected] = useState("all");

  // Filter the projects based on the selected category
  const filteredProjects =
    categorySelected === "all"
      ? projectsData // Show all projects if "all" is selected
      : projectsData.filter((item) => item.category === categorySelected); // Filter by category

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <CategorySelected
            key={index}
            name={item.name}
            categorySelected={categorySelected}
            onCategorySelected={setCategorySelected}
          />
        ))}
      </div>

      {/* Filtered Projects */}
      <div className="work__container grid">
        {filteredProjects.map((worksItem) => (
          <WorksItems key={worksItem.id} worksItem={worksItem} />
        ))}
      </div>
    </div>
  );
}
