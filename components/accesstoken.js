axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', { grant_type: 'client_credentials' },
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `QVJMT1BIYlFZdFFCWGVtSzRVTVV3c0c2c0U2R29vd3JPTElmMjhvZUtxYkdjczBUdXp6bXp3cmVGSEFZWER3SmJFZ3N0YUFLNjIwaHNIYlE6RUJ4UjJ1cEIyU2hBMERhWEhOU25lQlFEVzIzcHZMNldRdnBYMlJlWnQwQWRlV3ZUbUc2LVNia21XaWQ3RHM3ZkZzRnA4RF9qbEtfemo1VEk ` // your Authorization value you get from postman api hit
        }
    }
)
    .then(response => {
        console.log(response.data.access_token)
    }).catch(err => {
        console.log({ ...err })
    })