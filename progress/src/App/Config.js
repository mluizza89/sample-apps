let config;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  config = {
    app_client_id: 'a46171a4d02cb22abf60cadf70a31fa3',
    api_url: "https://accounts.livechatinc.com/",
    serverUrl: 'https://us-central1-livechat-experiments.cloudfunctions.net/restApi',
  }
} else {
  // production code
  config = {
    app_client_id: 'a46171a4d02cb22abf60cadf70a31fa3',
    api_url: "https://accounts.livechatinc.com/",
    serverUrl: 'https://us-central1-livechat-experiments.cloudfunctions.net/restApi',
  }
}

export default config;
