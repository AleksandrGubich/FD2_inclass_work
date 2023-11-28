import { validatorResult } from "./validatorResult";

export interface validatorFunction<Value> {
    (value: Value): validatorResult;
};