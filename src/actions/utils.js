export const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has("content-type") &&
      res.headers.get("content-type").startsWith("application/json")
    ) {
      // JSON error
      return res.json().then(err => Promise.reject(err));
    }
    // less informative error returned by express
    return Promise.reject({
      code: res.status,
      message: res.statusText
    });
  }
  return res;
};
