import axios from 'axios';

export default class Todos {
  #httpClient;
  constructor() {
    this.#httpClient = axios.create({
      baseURL: 'https://pre-onboarding-selection-task.shop/todos',
      Headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async getTodos() {
    console.log('has token? ', localStorage.getItem('token'));
    const result = await this.#httpClient.get('/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    console.log('result: ', result);
    return result.data;
  }

  // async signin(data) {
  //   const result = await this.#httpClient.post('signin', data);
  //   const token = result?.data?.['access_token'];
  //   if (token) {
  //     localStorage.setItem('token', token);
  //   }
  //   return result.data;
  // }
}
