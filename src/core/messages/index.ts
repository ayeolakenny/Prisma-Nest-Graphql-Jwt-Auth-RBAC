export const UTIL = {
  INVALID_PHONE_NUMBER: 'The provided phone number is invalid',
};

const USER = {
  NOT_FOUND: 'The provided user was not found',
  CURRENT_ROLE: 'User is already this role',
  ROLE_MISMATCH: 'Role does not match',
  ROLE_INVALID: 'Role not allowed',
};

const AUTH = {
  MISSING_FIELDS: 'Missing required fields',
  OTP_SENT: 'The otp has already been sent',
  INVALID_OTP: 'The provided otp is invalid',
  EXPIRED_OTP: 'The provided otp has expired',
  INVALID_CREDENTIALS: 'Invalid credentials',
  INVALID_PIN: 'The provided pin is incorrect',
  PIN_MISMATCH: 'The provided pins do not match',
  INVALID_PASSWORD: 'The provided password is incorrect',
  PASSWORD_MISMATCH: 'The provided passwords do not match',
  PIN_ALREADY_CREATED: 'Pin already created. Please login',
  EMAIL_DOES_NOT_EXIST: 'The provided email is not registered',
  PHONE_DOES_NOT_EXIST: 'The provided phone number does not exist',
  PHONE_ALREADY_EXIST: 'The provided phone number already exist',
  VALIDATE_PHONE: 'Please validate your phone number and try again',
  PHONE_VALIDATED: 'The provided account has already been validated',
  EMAIL_CONFLICT: 'The provided email address is already registered',
  CREATE_NEW_PIN: 'You must create a pin before accessing your account',
  CREATE_PASSWORD: 'You must set a password before accessing your account',
  PHONE_NUMBER_CONFLICT: 'The provided phone number is already registered',
};

export const MESSAGES = { USER, AUTH, UTIL };
