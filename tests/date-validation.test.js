import Joi from "joi";

describe("Joi", () => {
  it("Should can validate date", () => {
    const dateSchema = Joi.date().min("1-1-1990").max("now").required();

    // * Success
    const result = dateSchema.validate("1-1-1991");
    console.info(result);

    // ! Error
    const result2 = dateSchema.validate("1-1-1989");
    console.info(result2);
  });
});
