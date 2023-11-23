import { validatorResult } from "./validatorResult";

export interface validatorFunction<Value> {
    (value: Value): validatorResult;
}

export const nonEmptyArray: validatorFunction<unknown[]> = (value) => {
    return value.length ? null :{ nonEmptyArray: true };
};

export const requiredText: validatorFunction<string> = (value) => {
    return value.trim().length ? null :{ requiredText: true };
};