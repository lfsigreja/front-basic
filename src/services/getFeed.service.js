import axios from "axios";

export default class FeedAppService {

  async getFeed() {
    let response

    await axios.get('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
      .then((res) => {
        this.response = res.data;
      })
      .catch((err) => {
        this.response = err
      });

    return this.response
  }
}