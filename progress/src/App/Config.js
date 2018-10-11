let config;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  config = {
    app_client_id: 'eb7e04c40717c3c9597a78467cec08d6',
    api_url: "https://accounts.livechatinc.com/",
    serverUrl: 'https://us-central1-livechat-experiments.cloudfunctions.net/restApi',
  }
} else {
  // production code
  config = {
    app_client_id: 'eb7e04c40717c3c9597a78467cec08d6',
    api_url: "https://accounts.livechatinc.com/",
    serverUrl: 'https://us-central1-livechat-experiments.cloudfunctions.net/restApi',
  }
}

export default config;
