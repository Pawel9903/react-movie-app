export const http = {
    get: (url) => fetch(url).then(resp => resp.json()),
};