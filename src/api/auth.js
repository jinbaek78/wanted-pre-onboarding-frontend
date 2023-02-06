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
    let result;
    try {
      result = await this.#httpClient.post('signup', data);
    } catch (err) {
      if (err.response.data.statusCode === 400) {
        return { errorMessage: '이미 가입한 계정이에요' };
      } else {
        return { errorMessage: '서버문제나 다른 문제가 발생했어요.' };
      }
    }
    return { token: result.data['access_token'] };
  }

  async signin(data) {
    let result;
    try {
      result = await this.#httpClient.post('signin', data);
    } catch (err) {
      if (err.response.data.statusCode === 404) {
        return { errorMessage: '아이디 또는 비밀번호가 일치하지 않아요' };
      } else {
        return { errorMessage: '서버문제나 다른 문제가 발생했어요.' };
      }
    }

    const token = result?.data?.['access_token'];
    if (token) {
      localStorage.setItem('token', token);
    }
    return { token: result.data['access_token'] };
  }
}
