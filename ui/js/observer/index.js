import { Dep } from "./dep.js";
export function ref(data) {
    let dep = new Dep();
    let value = data;
    const refObj = { value };
    Object.defineProperty(refObj, 'value', {
      get: function reactiveGetter() {
        dep.depend();
        return value;
      },
      set: function reactiveSetter(newValue) {
        value = newValue;
        dep.notify();
      },
    });
    return refObj;
  }