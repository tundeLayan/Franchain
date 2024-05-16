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
  workEmail: z
    .string({
      required_error: ErrorMessages.required("Work Email"),
    })
    .email({ message: ErrorMessages.invalidEmail }),
  password: z
    .string({
      required_error: ErrorMessages.required("First Name"),
    })
    .min(12, { message: ErrorMessages.length("Password", 12) }),
});
