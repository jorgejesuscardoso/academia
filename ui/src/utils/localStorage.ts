
export const SetLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const RemoveLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const GetLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};