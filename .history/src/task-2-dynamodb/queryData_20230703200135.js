var params = {
    TableName: 'WebPageMetadata',
    KeyConditionExpression: '#url = :urlVal and #dateCrawled between :startDate and :endDate',
    ExpressionAttributeNames: {
        '#url': 'URL',
        '#dateCrawled': 'DateCrawled'
    },
    ExpressionAttributeValues: {
        ':urlVal': 'https://www.example.com',
        ':startDate': '2023-07-01',
        ':endDate': '2023-07-30'
    }
};

docClient.query(params, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");
        data.Items.forEach(function(item) {
            console.log(" -", item.URL + ": " + item.DateCrawled);
        });
    }
});
