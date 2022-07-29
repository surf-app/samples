# Challenge Response Shopify Integration

## Step 1
Go to **Online Store -> Themes -> Edit code**

![Component 13 (3)](https://user-images.githubusercontent.com/65671141/181827307-3e5e58a4-ed26-4006-bee7-41ee7fb952ee.png)

Next, go to **theme.liquid ->** scroll down to **<script> ->** Add **code snippet** right below

#### Code Snippet:

```
const urlParams = new URLSearchParams(window.location.search);
      const transactionId = urlParams.get("transaction_id");

      const params = {
        transaction_id: transactionId,
      };

      if(params.transaction_id) {
        localStorage.setItem("surfParams", JSON.stringify(params));
      }
```

![Screen Shot 2022-07-29 at 2 43 1](https://user-images.githubusercontent.com/65671141/181827403-2f1d77cf-cf29-4a94-b5c5-2996db43d7ff.png)

## Step 2
Go to **Settings** by clicking on the settings button in the bottom left of the home page

![Component 14 (2) 1 (1)](https://user-images.githubusercontent.com/65671141/181829646-ff6f23fe-820e-45df-9936-2f6393fe99c6.png)

Then select **Checkout**

![Component 15 1 (1)](https://user-images.githubusercontent.com/65671141/181829659-5dade242-e67c-4e38-89d3-2351b16292d1.png)

Next, scroll down to **Order status page ->** Add **second code snippet**

#### Second Code Snippet:

```
{% if first_time_accessed %}
<script>
const transactionID = JSON.parse(localStorage.getItem("surfParams")).transaction_id;

if(transactionID) {
fetch(`https://giveaways.joinsurf-staging.com/api/v1/entries/challenge_transactions/${transactionID}/callback`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
          window.open('https://giveaways.joinsurf-staging.com' + json.redirect_url, '_blank').focus()
      })
      .catch((error) => {
        console.log("Error calling surd API: %o", error);
      });

       localStorage.setItem("surfParams", {});
}
</script>
{% endif %}
```
![Component 17](https://user-images.githubusercontent.com/65671141/181830642-1dd83e15-105a-488c-9f86-0f625d2a3efb.png)
