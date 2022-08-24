
import axios from 'axios';
import http from '../http-common';

class JobsDataService {
  getAll(page) {
    return http.get(`Jobs?page=${page}`);
  }

  get(id) {
    return http.get(`/Jobs?id=${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`Jobs?${by}=${query}&page=${page}`);
  } 

}

export default new JobsDataService();