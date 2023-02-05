export function isValidate(type, value) {
  if (type === 'email') {
    return value.includes('@');
  }

  if (type === 'password') {
    return value.length > 0 && value.length > 7;
  }
}
