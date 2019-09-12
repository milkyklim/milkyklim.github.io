---
layout: null
permalink: /tellor
title: 'Tellor 0x'
description: 'Easy way to buy tellor using 0x.'
---

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% if page.title %}{{ page.title }}{% else %}{{ site.title }}{% endif %}</title>
    <script src="https://instant.0x.org/instant.js" ></script>
    <style>
        .zeroExInstantOverlayCloseButton {
            display: none !important;
        }
    </style>
    {% seo %}
</head>
<body>
    <script type='text/javascript'>

const erc20TokenAddress = '0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5'
const erc20TokenAssetData = zeroExInstant.assetDataForERC20TokenAddress(erc20TokenAddress)
const orders = [
{"senderAddress":"0x0000000000000000000000000000000000000000","makerAddress":"0x9dd390ad113c2a48a3ebe3ac6d1da61f447fc6b1","takerAddress":"0x0000000000000000000000000000000000000000","makerFee":"0","takerFee":"0","makerAssetAmount":"4535000000000000000000","takerAssetAmount":"68025000000000000000","makerAssetData":"0xf47261b00000000000000000000000000ba45a8b5d5575935b8158a88c631e9f9c95a2e5","takerAssetData":"0xf47261b0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","expirationTimeSeconds":"1568826000","feeRecipientAddress":"0x0000000000000000000000000000000000000000","salt":"25102149833508973095923398289288121889993629767573413240271959674642566389340","signature":"0x1c84fc7eee0492ac253bf4d8bd508a2a51acdead20004c658bdf17c32e2a28adb70773bccf09affb9f05f8ebf2635e42e086a70191851ac31d424be42c1d08200503","exchangeAddress":"0x080bf510fcbf18b91105470639e9561022937712"},
]

zeroExInstant.render(
{
// replace with orders
orderSource: orders,
availableAssetDatas: [erc20TokenAssetData],
defaultSelectedAssetData: erc20TokenAssetData,
defaultAssetBuyAmount: 1000,
shouldDisableAnalyticsTracking: true,
additionalAssetMetaDataMap: {
[erc20TokenAssetData]: {
assetProxyId: zeroExInstant.ERC20_PROXY_ID,
decimals: 18,
symbol: 'TT',
name: 'Tellor Tributes',
primaryColor: 'rgb(1, 205, 107)',
// iconUrl: 'https://cdn.icons.com/my_icon.svg', // Optional
},
},
},
'body',
)

    </script>

</body>
</html>
