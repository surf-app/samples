"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//test url
//http://127.0.0.1:5500/index.html?transaction_id=testtid&challenge_id=testcid&nonce=testnonce
var GiveawayActions = /*#__PURE__*/function () {
  function GiveawayActions() {
    _classCallCheck(this, GiveawayActions);

    _defineProperty(this, "getQueryParameters", function () {
      return JSON.parse(localStorage.getItem("surfParams"));
    });

    _defineProperty(this, "storeQueryParameters", function () {
      var queryString = window.location.search;
      var urlParams = new URLSearchParams(queryString);
      var transactionId = urlParams.get("transaction_id");
      var challengeId = urlParams.get("challenge_id");
      var nonce = urlParams.get("nonce");
      var params = {
        transaction_id: transactionId,
        challenge_id: challengeId,
        nonce: nonce
      };
      localStorage.setItem("surfParams", JSON.stringify(params));
    });
  }

  _createClass(GiveawayActions, [{
    key: "init",
    value: function init() {
      // set localstorage with params
      storeQueryParameters();
    }
  }, {
    key: "actionCompleted",
    value: function actionCompleted() {
      // Retrieve and log localstorage values
      var surfParams = getQueryParameters();
      console.log("Surf Params: %o", surfParams); // eventually call API
    }
  }]);

  return GiveawayActions;
}(); // Somewhere outside the above class, the
// site should call the following on page load


var giveawayActions = new GiveawayActions();
giveawayActions.init(); // Then on the button click event, call:

giveawayActions.actionCompleted();
