import { useEffect, useState } from 'react';
import { isValidate } from '../validation/validate';

let timeoutIdForDebounce;
export default function useValidation(type, value) {
  const [isTypeValidate, setIsTypeValidate] = useState(false);
  const [message, setMessage] = useState(
    type === 'email' ? DEFAULT_MESSAGE.email : DEFAULT_MESSAGE.password
  );

  useEffect(() => {
    timeoutIdForDebounce = setTimeout(() => {
      const isValidateValue = isValidate(type, value);
      const resultMessage = getMessage(type, value, isValidateValue);
      setIsTypeValidate(isValidateValue);
      setMessage(resultMessage);
    }, 500);
    return () => {
      clearTimeout(timeoutIdForDebounce);
    };
  }, [type, value]);
  return [isTypeValidate, message];
}

function getMessage(type, value, isValidate) {
  if (isValidate) {
    return SUCCESS_MESSAGE[type];
  }

  if (value === '') {
    return DEFAULT_MESSAGE[type];
  }

  return ERROR_MESSAGE[type];
}

export const DEFAULT_MESSAGE = {
  email: '이메일은 @을 포함해야 해요',
  password: '비밀번호는 8자 이상 입력해 주셔야 해요',
};
export const ERROR_MESSAGE = {
  email: '@가 포함된 올바른 이메일 형식을 지켜주세요',
  password: '안전한 사용을 위해 8자 이상 입력해주셔야 해요',
};
export const SUCCESS_MESSAGE = {
  email: '사용 가능한 이메일이에요',
  password: '사용 가능한 비밀번호에요',
};
