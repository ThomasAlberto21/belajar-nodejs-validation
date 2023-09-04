import Joi from "joi";

describe("Joi", () => {
  it("should return validation error", () => {
    const emailSchema = Joi.string().min(5).email().required();

    const result = emailSchema.validate("ups", {
      abortEarly: false, // If true, stops validation on the first error, otherwise returns all the errors found. Defaults to true.
    });
    console.info(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});
