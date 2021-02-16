export const getOwnFunctionNames = (object) => {
  return Object.getOwnPropertyNames(object).filter(
    (name) => typeof object[name] === "function",
  );
};
