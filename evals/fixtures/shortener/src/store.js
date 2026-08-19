const links = new Map();
export const put = (code, url) => links.set(code, url);
export const get = (code) => links.get(code);
