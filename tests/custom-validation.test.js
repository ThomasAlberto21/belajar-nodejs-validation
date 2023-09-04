import Joi from "joi";
describe("Joi", () => {
  it("should can custom validation", () => {
    const registerSchema = Joi.object({
      email: Joi.string().min(6).max(100).email().required(),
      password: Joi.string()
        .min(6)
        .max(100)
        .required()
        .custom((value, helpers) => {
          if (value.startsWith("thomas")) {
            return helpers.error("password.wrong");
          }
          return value;
        })
        .messages({
          "password.wrong": "Password can not start with thomas",
        }),
      confirmPassword: Joi.string().min(6).max(100).required(),
    })
      .custom((value, helpers) => {
        if (value.password !== value.confirmPassword) {
          return helpers.error("register.password.different");
        }
        return value;
      })
      .messages({
        "register.password.different":
          "Password and confirm password must be the same",
      });

    const request = {
      email: "thomas@gmail.com",
      password: "keren123",
      confirmPassword: "keren123",
    };

    const result = registerSchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });
});
