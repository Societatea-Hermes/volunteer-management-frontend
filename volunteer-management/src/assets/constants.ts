// we want to make the requests relative to the host
// so we don't run into CORS issues
export const API_BASE_URL: string = '/api/v1';
export const API_RECRUITMENTS_EP: string = API_BASE_URL + "/recruitments";
export const API_CANDIDATES_EP: string = API_BASE_URL + "/candidates";
export const API_VOLUNTEERS_EP: string = API_RECRUITMENTS_EP + "/volunteers";

// GLOBAL CONFIGS
export const TOTAL_PER_PAGE: number = 6;

export const STUDIES_TYPES = ["Bachelor", "Master", "PhD"];
export const SPECIALIZATIONS = [
  "Mathematics",
  "Computer-Science",
  "Mathematics Computer Science",
  "Information Engineering",
  "Artificial Intelligence",
  "Advanced Computer Science Systems: Modeling, Design and Development",
  "Advanced Mathematics",
  "Applied Computational Intelligence",
  "Cyber Security",
  "Computational Mathematics",
  "Data Analysis and Modelling",
  "Data Science for Industry and Society",
  "Distributed Systems in Internet",
  "Software Engineering",
  "Enterprise Software Design and Development",
  "High Performance Computing and Big Data Analytics",
  "Modern Methods in Teaching Computer Science",
  "Modern Methods in Teaching Mathematics",
  "Modern Methods in Teaching Computer Science (in Hungarian)",
  "Modern Methods in Teaching Mathematics (in Hungarian)",
];

export const STUDY_LANGUAGE = ["Romanian", "English", "German", "Hungarian"];

export const RECRUITMENT_STATUS = ["Pending", "Accepted", "Rejected"];
