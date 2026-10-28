// BASE_URL is "/" in dev and "/atelier-macek-concept/" in the Pages build.
export const pageUrl = (path = "") => `${import.meta.env.BASE_URL}${path}`;
