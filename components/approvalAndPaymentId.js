axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', { grant_type: 'client_credentials' },
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `QVJMT1BIYlFZdFFCWGVtSzRVTVV3c0c2c0U2R29vd3JPTElmMjhvZUtxYkdjczBUdXp6bXp3cmVGSEFZWER3SmJFZ3N0YUFLNjIwaHNIYlE6RUJ4UjJ1cEIyU2hBMERhWEhOU25lQlFEVzIzcHZMNldRdnBYMlJlWnQwQWRlV3ZUbUc2LVNia21XaWQ3RHM3ZkZzRnA4RF9qbEtfemo1VEk  ` // Your Authorization Value
        }
    }
)
    .then(response => {
        console.log(response.data.access_token)

        axios.post('https://api.sandbox.paypal.com/v1/payments/payment', { Details }, // you can get data details from https://developer.paypal.com/docs/api/payments/v1/
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${response.data.access_token}`
                }
            }
        )
            .then(response => {

                const { id, links } = response.data
                const approvalUrl = links.find(data => data.rel == "approval_url")

                console.log(id)
                console.log(approvalUrl)
            }).catch(err => {
                console.log({ ...err })
            })
    }).catch(err => {
        console.log({ ...err })
    })