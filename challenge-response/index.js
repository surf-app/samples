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
    console.log("Transaction ID: %o", surfParams.transaction_id);

    // localhost:3000/api/v1/challenge_transactions/:transaction_id/callback
    // giveaways.joinsurf-staging.com/api/v1/challenge_transactions/:transaction_id/callback
    // giveaways.joinsurf.com/api/v1/challenge_transactions/:transaction_id/callback

    //API Call
    fetch(`giveaways.joinsurf-staging.com/api/v1/challenge_transactions/:${surfParams.transaction_id}/callback`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("Api Callback: %o", json);
      })
      .catch((error) => {
        console.log("Error calling API: %o", error);
      });
  }

  getQueryParameters() {
    return JSON.parse(localStorage.getItem("surfParams"));
  }

  storeQueryParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const transactionId = urlParams.get("transaction_id");

    const params = {
      transaction_id: transactionId,
    };

    localStorage.setItem("surfParams", JSON.stringify(params));
  }
}

// Somewhere outside the above class, the
// site should call the following on page load
const giveawayActions = new GiveawayActions();
giveawayActions.init();
