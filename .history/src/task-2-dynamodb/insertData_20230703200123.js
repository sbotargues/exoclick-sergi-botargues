var AWS = require("aws-sdk");
AWS.config.update({region: "us-west-2"});
var docClient = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: 'WebPageMetadata',
    Item: {
        'URL': 'https://www.example.com',
        'DateCrawled': '2023-07-01',
        'PageTitle': 'Example Page',
        'WordCount': 200,
        'MetaTags': {
            'description': 'This is an example page',
            'keywords': 'example, web page'
        }
    }
};

docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
