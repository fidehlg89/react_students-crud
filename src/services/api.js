import axios from 'axios';
import config from '../config';

const axiosBase = axios.create({
  baseURL: config.api.baseUrl,
});

export default {
  student: {
    create: (data) => axiosBase({
      url: '/students',
      method: 'post',
      data,
    }),

    update: (id, data) => axiosBase({
      url: `/students/${id}`,
      method: 'put',
      data,
    }),

    delete: (id) => axiosBase({
      url: `/students/${id}`,
      method: 'delete',
    }),

    patch: (id, data) => axiosBase({
      url: `/todos/${id}`,
      method: 'patch',
      data,
    }),

    get: (id) => axiosBase({
      url: `/todos/${id}`,
      method: 'get',
    }),

    getAll: () => axiosBase({
      url: '/todos',
      method: 'get',
    }),
  },
};
