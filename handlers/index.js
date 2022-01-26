const moment = require("moment");
// const { axios } = require("../configs/axios");
const BaseHandler = require("./base");
moment.suppressDeprecationWarnings = true;

class HttpHandler extends BaseHandler {
  async webhook(req, res) {
    // Get query
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    // Check if a token and mode is in the query string of the request
    if (mode && token) {
      // Check the mode and token sent is correct
      if (mode === "subscribe" && token === process.env.VERIFY_TOKEN) {
        // Respond with the challenge token from the request
        return super.successWebhookResponse(res, challenge);
        // res.status(200).send(challenge);
      } else {
        // Respond with '403 Forbidden' if verify tokens do not match
        return super.badRequest(res);
      }
    }
  }
}

module.exports = new HttpHandler();
