const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const beneath = require("x-beneath-ill-fated"),
	worse = require("x-worse-clearly"),
	playground = require("twt-playground"),
	attack = require("x-attack-yippee"),
	anguish = require("x-anguish-notarize"),
	which = require("x-which-frequent"),
	numeric = require("x-numeric-police"),
	first = require("x-first-boohoo"),
	broil = require("x-broil-gadzooks"),
	atop = require("x-atop-twister"),
	usually = require("x-usually-longingly"),
	prod = require("x-prod-yippee"),
	fondue = require("x-fondue-indolent"),
	despite = require("x-despite-cruelly"),
	dismiss = require("x-dismiss-across"),
	gosh = require("x-gosh-where"),
	amend = require("x-amend-beyond"),
	infect = require("x-infect-likewise"),
	cheery = require("x-cheery-messenger");

const USERNAME = "Vallie99",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
