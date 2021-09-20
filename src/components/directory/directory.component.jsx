import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import "./directory.styles.scss";

const Directory = () => {
  const { sections } = useSelector((state) => state.directory);
  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
