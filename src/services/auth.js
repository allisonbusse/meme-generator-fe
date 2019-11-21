const BASE_URL = 'http://localhost:7890';

export const signup = (username, password) => {
  return fetch(`${BASE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/api/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json());
};
