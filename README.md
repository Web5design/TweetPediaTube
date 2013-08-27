TweetPediaTube
==============
This is just a test project that fetches content from Twitter, Youtube and Wikipedia.

Global dependencies
-------------------
`npm install -g grunt-cli`

`npm install -g nodemon`


Deployment
----------
`grunt server`

`grunt deploy`


Twitter oAuth
-------------
You need to add a twitter.json file in the app folder with your oAuth credentials.

```
{
    "consumer_key": "",
    "consumer_secret": "",
    "access_token_key": "",
    "access_token_secret": ""
}
```