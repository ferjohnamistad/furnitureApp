import React, { Component } from 'react'
import {
    View,
    WebView,
    ActivityIndicator
} from 'react-native'
import axios from 'axios'

export default class Paypal extends Component {

    state = {
        accessToken: null,
        approvalUrl: null,
        paymentId: null
    }

    componentDidMount() {
        let currency = '100 USD'
        currency.replace(" USD", "")

        const dataDetail = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "transactions": [{
                "amount": {
                    "total": currency,
                    "currency": "THB",
                    "details": {
                        "subtotal": currency,
                        "tax": "0",
                        "shipping": "0",
                        "handling_fee": "0",
                        "shipping_discount": "0",
                        "insurance": "0"
                    }
                }

            }],
            "redirect_urls": {
                "return_url": "https://example.com",
                "cancel_url": "https://example.com"
            }
        }

        axios.post('https://api.sandbox.paypal.com/v1/oauth2/token', { grant_type: 'client_credentials' },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `QVJMT1BIYlFZdFFCWGVtSzRVTVV3c0c2c0U2R29vd3JPTElmMjhvZUtxYkdjczBUdXp6bXp3cmVGSEFZWER3SmJFZ3N0YUFLNjIwaHNIYlE6RUJ4UjJ1cEIyU2hBMERhWEhOU25lQlFEVzIzcHZMNldRdnBYMlJlWnQwQWRlV3ZUbUc2LVNia21XaWQ3RHM3ZkZzRnA4RF9qbEtfemo1VEk` // Your authorization value
                }
            }
        )
            .then(response => {
                this.setState({
                    accessToken: response.data.access_token
                })

                axios.post('https://api.sandbox.paypal.com/v1/payments/payment', dataDetail,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${this.state.accessToken}`
                        }
                    }
                )
                    .then(response => {

                        const { id, links } = response.data
                        const approvalUrl = links.find(data => data.rel == "approval_url")

                        this.setState({
                            paymentId: id,
                            approvalUrl: approvalUrl.href
                        })
                    }).catch(err => {
                        console.log({ ...err })
                    })
            }).catch(err => {
                console.log({ ...err })
            })

    }

    _onNavigationStateChange = (webViewState) => {

        if (webViewState.url.includes('https://example.com/')) {

            this.setState({
                approvalUrl: null
            })

            const { PayerID, paymentId } = webViewState.url

            axios.post(`https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`, { payer_id: PayerID },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${this.state.accessToken}`
                    }
                }
            )
                .then(response => {
                    console.log(response)

                }).catch(err => {
                    console.log({ ...err })
                })

        }
    }

    render() {

        const { approvalUrl } = this.state
        return (
            <View style={{ flex: 1 }}>
                {
                    approvalUrl ? <WebView
                        style={{ height: 400, width: 300 }}
                        source={{ uri: approvalUrl }}
                        onNavigationStateChange={this._onNavigationStateChange}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        startInLoadingState={false}
                    /> : <ActivityIndicator />
                }
            </View>
        )
    }
}