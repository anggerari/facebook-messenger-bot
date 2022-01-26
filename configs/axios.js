const axios = require("axios").create({
  baseURL: process.env.FACEBOOK_GRAPH_API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

module.exports = {
  axios,
};
