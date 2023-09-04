import Joi from "joi";

describe("Joi", () => {
  it("Should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const result = schema.validate("Thomas");
    if (result.error) {
      console.info(result.error);
    }
  });

  it("Should can validate basic data type", () => {
    const usernameScheme = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number()
      .required()
      .min(1000)
      .max(1000000)
      .required();

    const resultUsername = usernameScheme.validate("thomas@gmail.com");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate(true);
    console.info(resultIsAdmin);

    const resultPrice = priceSchema.validate(10000);
    console.info(resultPrice);
  });
});
