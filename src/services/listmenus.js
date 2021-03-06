export const listmenus = [
  { _id: "15", name: "QuickLinks" },
  { _id: "16", name: "Home", link: "/homepage" },
  { _id: "17", name: "County Mission" },
  { _id: "18", name: "County Vision" },
  { _id: "19", name: "County Goals" },
  { _id: "20", name: "Projects" },
  { _id: "21", name: "Add Project" },
  { _id: "22", name: "Edit Project" },
  { _id: "23", name: "View Project" },
  { _id: "24", name: "Activities" },
  { _id: "25", name: "Add Activities" },
  { _id: "26", name: "Edit Activities" },
  { _id: "27", name: "View Activities" },
  { _id: "28", name: "Targets" },
  { _id: "29", name: "Add Targets" },
  { _id: "30", name: "Edit Targets" },
  { _id: "31", name: "View Targets" },
  { _id: "32", name: "FeedBack" },
  { _id: "33", name: "Add FeedBack" },
  { _id: "34", name: "Edit FeedBack" },
  { _id: "35", name: "View FeedBack" },
  { _id: "36", name: "Training" },
  { _id: "37", name: "Add Training" },
  { _id: "38", name: "Edit Training" },
  { _id: "39", name: "View Training" },
  { _id: "40", name: "Staff Appraisal" },
  { _id: "41", name: "Self Appraisal" },
  { _id: "42", name: "Supervisor Appraisal" },
  { _id: "43", name: "Committee Appraisal" },
  { _id: "44", name: "View Staff Appraisals" },
];

export function getListMenus() {
  return listmenus.filter((g) => g);
}
