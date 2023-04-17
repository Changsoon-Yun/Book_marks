/**
 * 파람은 쿼리키중복 피하기위해
 *
 */

const bookmarkAPI = {
  getBookmarks: (userName?: string | string[]) => `/bookmark/${userName}`,
  check: (url?: string) => (url ? `/bookmark/check/${url}` : `/bookmark/check`),
  create: (url?: string) => (url ? `/bookmark/check/${url}` : `/bookmark/create`),
};

const folderAPI = {
  getFolders: (userName: string | string[]) => `folder/${userName}`,
  create: '/folder/create',
};

const authAPI = {
  getUser: '/auth/get-user',
  login: '/auth/login',
  signup: '/auth/signup',
};

export { bookmarkAPI, authAPI, folderAPI };
