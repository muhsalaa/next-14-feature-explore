import React from "react";

export default function PrivateFolderORRoute() {
  return (
    <div>
      Private folder is started with _ (underscore)
      <h2>use case</h2>
      <ul>
        <li>separete ui logic with routing logic</li>
        <li>consistently organizing internal files</li>
        <li>sorting or grouping files in code editor</li>
        <li>avoid potential naming conflict for future nextjs release</li>
        <li>to have page with initial _ use %5F, like this one</li>
      </ul>
    </div>
  );
}
