export function getUserFromStorage() {
  try {
    if (typeof window === 'undefined') return null;
    const raw = window.localStorage.getItem('c2c_user');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveUserToStorage(user: any) {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('c2c_user', JSON.stringify(user));
  } catch {
    // ignore write errors
  }
}

export function clearUserFromStorage() {
  try {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem('c2c_user');
  } catch {
    // ignore
  }
}
