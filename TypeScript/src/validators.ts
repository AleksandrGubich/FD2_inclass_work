import { validatorFunction } from "./validatorFunction";

export const requiredText: validatorFunction<string> = (value) => {
    return value.trim().length ? null :{ requiredText: true };
};

export const maxLength: (maxLenght: number) => validatorFunction<string> = (maxLenght) => {
    return (value) => {
        return value.length <= maxLenght ? null : { maxLenght:true };
    }
};