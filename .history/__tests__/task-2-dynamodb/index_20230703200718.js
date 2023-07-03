const AWS = require('aws-sdk');
const AWSMock = require('aws-sdk-mock');
const insertData = require('../../src/task-2-dynamodb/insertData');
const queryData = require('../../src/task-2dynamodb/queryData');

describe('DynamoDB operations', () => {
    beforeAll(() => {
        AWSMock.setSDKInstance(AWS);
    });

    afterEach(() => {
        AWSMock.restore('DynamoDB.DocumentClient');
    });

    it('should insert data into DynamoDB', async () => {
        AWSMock.mock('DynamoDB.DocumentClient', 'put', function (params, callback){
            callback(null, "successfully put item in the database");
        });

        const response = await insertData();
        expect(response).toEqual("successfully put item in the database");
    });

    it('should query data from DynamoDB', async () => {
        const dataMock = {
            Items: [
                { 'URL': 'https://www.example.com', 'DateCrawled': '2023-07-01', 'PageTitle': 'Example Page', 'WordCount': 200, 'MetaTags': { 'description': 'This is an example page', 'keywords': 'example, web page'} },
                // Add more items as needed for the test
            ]
        };

        AWSMock.mock('DynamoDB.DocumentClient', 'query', function (params, callback){
            callback(null, dataMock);
        });

        const response = await queryData();
        expect(response).toEqual(dataMock.Items);
    });
});
