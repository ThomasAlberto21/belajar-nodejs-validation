import Joi from "joi";

describe("Joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      email: Joi.string().min(6).max(100).email().required(),
      password: Joi.string().min(6).max(100).required(),
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

  it("should can validate nested object", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().min(6).max(100).required(),
      name: Joi.string().min(6).max(100).required(),
      address: Joi.object({
        street: Joi.string().min(6).max(200).required(),
        city: Joi.string().min(6).max(100).required(),
        country: Joi.string().min(6).max(100).required(),
        zipCode: Joi.string().min(6).max(10).required(),
      }),
    });

    const request = {
      id: "123456",
      name: "Thomas",
      address: {
        street: "Jalan Surya Suci NO 13",
        city: "Pontianak , Kota",
        country: "Indonesia",
        zipCode: "12345679",
      },
    };

    const result = createUserSchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });
});
