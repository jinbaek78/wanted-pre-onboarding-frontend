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

  async getTodoList() {
    const result = await this.#httpClient.get('/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return result.data;
  }

  async addTodo(data) {
    return this.#httpClient.post(
      '/',
      { todo: data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
  }

  async updateTodo(data) {
    return await this.#httpClient.put(
      `/${data.id}`,
      { todo: data.todo, isCompleted: data.isCompleted },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
  }
}
