// API ROUTES
const host = process.env.API_HOST || 'localhost';
const port = process.env.API_PORT || 8080;
export const API_BASE_URL: string = `http://${host}:${port}/api/v1/`
export const API_RECRUITMENTS_EP: string = API_BASE_URL + "/recruitments"
export const API_CANDIDATES_EP: string = API_RECRUITMENTS_EP + "/candidates"
export const API_VOLUNTEERS_EP: string = API_RECRUITMENTS_EP + "/volunteers"

// GLOBAL CONFIGS
export const TOTAL_PER_PAGE: number = 6;