require("dotenv").config();

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";

console.log(API_BASE_URL);
