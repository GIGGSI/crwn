import React, { useState } from "react";
import { sections } from "./data";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const [allSections, setAllSections] = useState(sections);

  return (
    <div className="directory-menu">
      {allSections.map((section) => (
        <MenuItem key={section.id} {...section} />
      ))}
    </div>
  );
};

export default Directory;
