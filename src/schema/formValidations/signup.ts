import { z } from "zod";

import { ErrorMessages } from "../../constants/errors";

export const editProviderSchema = z.object({
  firstName: z.string({
    required_error: ErrorMessages.required("First Name"),
  }),
  lastName: z.string({
    required_error: ErrorMessages.required("Last Name"),
  }),
  businessName: z.string({
    required_error: ErrorMessages.required("Business Name"),
  }),
  hqLocation: z.string({
    required_error: ErrorMessages.required("HQ Location"),
  }),
  workEmail: z
    .string({
      required_error: ErrorMessages.required("Work Email"),
    })
    .email({ message: ErrorMessages.invalidEmail }),
  password: z
    .string({
      required_error: ErrorMessages.required("Password"),
    })
    .min(12, { message: ErrorMessages.length("Password", 12) }),
});

export const loginProviderSchema = z.object({
  email: z
    .string({
      required_error: ErrorMessages.required("Work Email"),
    })
    .email({ message: ErrorMessages.invalidEmail }),
  password: z
    .string({
      required_error: ErrorMessages.required("Password"),
    })
    .min(12, { message: ErrorMessages.length("Password", 12) }),
});

export const checkEmailSchema = z.object({
  code: z
    .string({
      required_error: ErrorMessages.required("Code"),
    })
    .min(1, ErrorMessages.required("Code")),
});

export const ResetPasswordSchema = z.object({
  email: z
    .string({
      required_error: ErrorMessages.required("Email"),
    })
    .email({ message: ErrorMessages.invalidEmail }),
});
