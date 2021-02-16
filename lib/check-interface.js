import { getOwnFunctionNames } from "./get-own-function-names";
import { isConstructor } from "./is-constructor";

export const checkInterface = (instance, contract = []) => {
  if (typeof instance != "object" || instance === null) {
    throw TypeError("instance must be an Object");
  }

  let names;

  if (
    Array.isArray(contract) &&
    contract.every((name) => typeof name === "string")
  ) {
    names = contract;
  } else if (isConstructor(contract)) {
    names = getOwnFunctionNames(contract.prototype);
  } else {
    throw new TypeError("contract must be an string[] or a constructor");
  }

  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (typeof instance[name] != "function") {
      return false;
    }
  }

  return true;
};
