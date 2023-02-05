import axios from 'axios';

export default class Auth {
  #httpClient;
  constructor() {
    this.#httpClient = axios.create({
      baseURL: 'https://pre-onboarding-selection-task.shop/auth',
      Headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async signup(data) {
    const result = await this.#httpClient.post('signup', data);
    return result.data;
  }
}
