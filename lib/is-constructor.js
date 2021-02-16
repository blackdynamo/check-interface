export const isConstructor = (input) => {
  return input instanceof Function && input.prototype != null;
};
