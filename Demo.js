export const runCallback = (callback) => {
  return callback();
}

export const createObject = (classItem) => {
  new classItem();
}