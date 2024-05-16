export const ErrorMessages = {
  required: (value: string) => `${value} is required`,
  invalidEmail: `Invalid Email Address`,
  passwordMismatch: `Passwords do not match`,
  invalidType: (value: string) => `Please input only ${value}`,
  length: (fieldName: string, length: number) =>
    `${fieldName} must be at least ${length} characters`,
};
