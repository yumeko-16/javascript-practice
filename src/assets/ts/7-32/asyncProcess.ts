export const AsyncProcess = (value: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value) {
        resolve(`入力値：${value}`);
      } else {
        reject(`入力は空です`);
      }
    }, 500);
  });
};
