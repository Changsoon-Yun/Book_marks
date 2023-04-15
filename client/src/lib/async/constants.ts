/**
 * 파람은 쿼리키중복 피하기위해
 *
 */

const bookmarkAPI = {
  getBookmarks: '/bookmark',
  check: (url?: string) => (url ? `/bookmark/check/${url}` : `/bookmark/check`),
  create: (url: string) => (url ? `/bookmark/check/${url}` : `/bookmark/create`),
};

const authAPI = {
  getUser: '/auth/get-user',
  login: '/auth/login',
  signup: '/auth/signup',
};

export { bookmarkAPI, authAPI };
