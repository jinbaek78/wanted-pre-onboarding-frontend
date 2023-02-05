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
    const result = await this.#httpClient.get('/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return result.data;
  }

  async addTodo(data) {
    const result = await this.#httpClient.post('/', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: { todo: data },
    });
    return result.data;
  }
}
