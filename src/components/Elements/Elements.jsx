import React, { useState } from "react";
import { getElements } from "../Util";
import E from "./E";
import ElementSideBar from "./ElementSideBar";

const Elements = () => {
  // Get all elements data
  const data = getElements(); // Returns an array of categories with elements

  // Initial state: Display all "button" category components
  const initialCategory = data.find(item => item.category === "button");
  const [components, setComponents] = useState(initialCategory?.elements || []);
  const [heading, setHeading] = useState("Browse All Components");


  // Handle sidebar item click
  const onSidebarItemClickHandle = (item) => {

    console.log(item);
    if (item === "All") {
      window.location.reload();
      setComponents(components);
      setHeading("All Components");
    } else {
      // Filter components by category
      const selectedCategory = data.find(category => category.category === item.toLowerCase());
      setComponents(selectedCategory?.elements || []);
      setHeading(`${item} Components`);
    }
    
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <ElementSideBar onSidebarItemClick={onSidebarItemClickHandle} />

      {/* Main Content */}
      
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4 text-neutral-300">{heading}</h1>
        <div className="flex flex-wrap justify-start items-center">
          {components.length === 0 ? (
            <p className="text-neutral-400">No components found for this category.</p>
          ) : (
            components.map((d, index) => (
              <div key={index} className="p-4">
                <E data={d} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Elements;
