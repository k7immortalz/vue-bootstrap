export const mapPropertyData = (itemList) => {
  const propertiesListMapped = itemList.map((item, index) => {
    if(item && item.hasOwnProperty('property')) {
      item.marketing_title = item.property.marketing_title || "Property title not available";
      item.title = item.property.marketing_title || "Property title not available";
      item.property_id = item.property.property_id || item.property.id;
      item.id = item.property.id;
      if (index < 26) {
        item.marker_image = `/img/properties/prop${index + 1}.jpg`;
        item.image = `/img/properties/prop${index + 1}.jpg`;
      } else {
        item.marker_image = `/img/properties/prop25.jpg`;
        item.image = `/img/properties/prop25.jpg`;
      }
    } else if(item) {
      item.marketing_title = item.marketing_title || "Property title not available";
      item.title = item.marketing_title || "Property title not available";
      if (index < 26) {
        item.marker_image = `/img/properties/prop${index + 1}.jpg`;
        item.image = `/img/properties/prop${index + 1}.jpg`;
      } else {
        item.marker_image = `/img/properties/prop25.jpg`;
        item.image = `/img/properties/prop25.jpg`;
      }
    }
    return item;
  });
  return propertiesListMapped;
}

export const mapProjectData = (itemList) => {
  const projectsListMapped = itemList.map((item, index) => {
    const projectWithNoTitle = "Project title not available";
    if(item && item.hasOwnProperty('project')) {
      item.title = item.project.project_name || projectWithNoTitle;
      item.project_name = item.project.project_name || item.project.id;
      item.project_type = item.project.project_type || 'N/A';
      item.builder_name = item.project.builder_name || 'N/A';
      item.id = item.project.id;
      if (index < 26) {
        item.marker_image = `/img/properties/prop${index + 1}.jpg`;
        item.image = `/img/properties/prop${index + 1}.jpg`;
      } else {
        item.marker_image = `/img/properties/prop25.jpg`;
        item.image = `/img/properties/prop25.jpg`;
      }
    } else if(item) {
      item.title = item.project_name || projectWithNoTitle;
      if (index < 26) {
        item.marker_image = `/img/properties/prop${index + 1}.jpg`;
        item.image = `/img/properties/prop${index + 1}.jpg`;
      } else {
        item.marker_image = `/img/properties/prop25.jpg`;
        item.image = `/img/properties/prop25.jpg`;
      }
    }
    return item;
  });
  return projectsListMapped;
}
