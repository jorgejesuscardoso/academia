
export const SetLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const RemoveLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};