import { validatorFunction } from "./validatorFunction";

export const nonEmptyArray: validatorFunction<unknown[]> = (value) => {
    return value.length ? null :{ nonEmptyArray: true };
};

export const requiredText: validatorFunction<string> = (value) => {
    return value.trim().length ? null :{ requiredText: true };
};

export const maxLength: (maxLenght: number) => validatorFunction<string> = (maxLenght) => {
    return (value) => {
        return value.length <= maxLenght ? null : { maxLenght:true };
    }
};