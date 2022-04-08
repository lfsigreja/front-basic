import axios from "axios";

export default class FeedAppService {

  async getFeed() {
    let data = {
      response: [],
      error: [],
    }

    await axios.get('https://us-central1-squid-apis.cloudfunctions.net/test-front-bac')
      .then((res) => {
        this.data.response = res.data;
      })
      .catch((err) => {
        this.data.error = err
      });

    return this.data
  }
}