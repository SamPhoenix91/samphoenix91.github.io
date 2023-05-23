fetch("folderNames.json")
  .then((response) => response.json())
  .then((data) => {
    const folderNames = data.folderNames;
    generateGrid(folderNames);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function generateGrid(folderNames) {
  const folderGrid = document.getElementById("folderGrid");

  folderNames.forEach((folder) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    const image = document.createElement("img");
    image.src = `projects/${folder.folderName}/images/coverimage.jpg`;
    image.onerror = function () {
      // If coverimage.png is not found, display a default image
      image.src = "/assets/projects/default-image.jpg";
    };
    gridItem.appendChild(image);

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const header = document.createElement("h3");
    header.textContent = folder.folderName;
    header.className = "overlaytext";
    overlay.appendChild(header);

    const description = document.createElement("p");
    description.textContent = folder.description;
    description.className = "overlaytext";
    overlay.appendChild(description);

    gridItem.appendChild(overlay);

    const link = document.createElement("a");
    link.href = `projects/${folder.folderName}/index.html`;
    link.appendChild(gridItem);

    folderGrid.appendChild(link);
  });
}
