import axios from "axios";

export default {
    // Gets all articles
    getEmail: function () {
        return axios.get("/api/email/");
    },
    // post
    saveEmail: function (articleData) {
        return axios.post("/api/email/", articleData);
    }
};
