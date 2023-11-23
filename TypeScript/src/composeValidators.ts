import { requiredText, validatorFunction } from "./validatorFunction";
import { validatorResult } from "./validatorResult";

export function composeValidators<T> (...validators: validatorFunction<T>[]): validatorFunction<T> {
    return (value: T): validatorResult => {
        for (const validator of validators) {
            const result = validator(value);

            if (result) {
                return result;
            }
        }

        return null;
    };
}

const requiredFio = composeValidators(
    requiredText,
    (value) => value.length <= 50 ? null : {maxLength: true},
);