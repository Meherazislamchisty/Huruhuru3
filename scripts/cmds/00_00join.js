const axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
	config: {
		name: "join",
		version: "2.0",
		author: "Meheraz",
		countDown: 5,
		role: 2,
		shortDescription: "Join the group that bot is in",
		longDescription: "",
		category: "Admin",
		guide: {
			en: "{p}{n}",
		},
	},


