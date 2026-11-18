// BASE_URL is "/" (site is served from the custom domain root).
export const pageUrl = (path = "") => `${import.meta.env.BASE_URL}${path}`;
