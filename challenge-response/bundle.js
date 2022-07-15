//test url
//http://127.0.0.1:5500/challenge-response/index.html?transaction_id=testtid&challenge_id=testcid&nonce=testnonce
class GiveawayActions {
  init() {
    // set localstorage with params
    this.storeQueryParameters();
  }

  actionCompleted() {
    // Retrieve and log localstorage values
    const surfParams = this.getQueryParameters();
    console.log("Surf Params: %o", surfParams); // eventually call API
  }

  getQueryParameters = () => {
    return JSON.parse(localStorage.getItem("surfParams"));
  };
  storeQueryParameters = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const transactionId = urlParams.get("transaction_id");
    const challengeId = urlParams.get("challenge_id");
    const nonce = urlParams.get("nonce");
    const params = {
      transaction_id: transactionId,
      challenge_id: challengeId,
      nonce: nonce
    };
    localStorage.setItem("surfParams", JSON.stringify(params));
  };
} // Somewhere outside the above class, the
// site should call the following on page load


const giveawayActions = new GiveawayActions();
giveawayActions.init();
