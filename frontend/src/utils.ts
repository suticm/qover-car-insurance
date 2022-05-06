export function getAccessToken() {
  return window.localStorage.getItem('user')!;
}

export function setAccessToken(token: string) {
  return window.localStorage.setItem('user', token)!;
}

export function authHeader() {
  return {
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  };
}
