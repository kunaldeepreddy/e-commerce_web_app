
export const PASSWORD_RULE = {
  isRequired: true,
  minLength: 8
};
export const NAME_RULE = {
  isRequired: true,
  minLength: 3
};
export const PHONE_RULE = {
  isRequired: true,
  maxLength: 10,
  minLength: 10
};
export const EMAIL_RULE = {
  isRequired: true,
  isEmail: true
};