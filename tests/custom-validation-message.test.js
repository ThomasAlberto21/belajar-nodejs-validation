import Joi from "joi";
describe("Joi", () => {
  it("should can use custom validation message in object", () => {
    const loginSchema = Joi.object({
      email: Joi.string().min(6).max(100).email().required().messages({
        "string.email": "Email must be a valid email",
        "string.min": "Email must be at least 6 characters long",
        "string.max": "Email must be at most 100 characters long",
        "string.empty": "Email cannot be empty",
        "any.required": "Email is required",
      }),
      password: Joi.string().min(6).max(100).required().messages({
        "string.min": "Password must be at least 6 characters long",
        "string.max": "Password must be at most 100 characters long",
        "string.empty": "Password cannot be empty",
        "any.required": "Password is required",
      }),
    });

    const request = {
      email: "thomas@gmail.com",
      password: "Thomas@1235689",
    };

    const result = loginSchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });
});
