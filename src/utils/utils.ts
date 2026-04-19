import type { IInputValidity } from "../interfaces/userInput.interface";

export function validateUserInputs(uname: string, pwd: string): IInputValidity {
    const unameRegex = '^[A-Za-z0-9._-]+@[A-Za-z]+(\.[A-Za-z]+){1,}$';
    const pwdRegex = '[A-Za-z0-9\.!@#$%^&*()-=]{10,15}'; // password with min 15 chars and amx 20 chars

    const validity: IInputValidity = {
        validEmail: false,
        validPwd: false
    }

    validity.validEmail = RegExp(unameRegex).test(uname);
    validity.validPwd = RegExp(pwdRegex).test(pwd);

    return validity;
}