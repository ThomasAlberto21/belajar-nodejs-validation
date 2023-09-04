import Joi from "joi";
describe("Joi", () => {
  it("should can validate array", () => {
    const hobbiesSchema = Joi.array()
      .items(Joi.string().min(3).max(100).required())
      .min(1)
      .unique();

    const hobbies = ["Reading", "Coding", "Gaming", "study"];
    const result = hobbiesSchema.validate(hobbies, {
      abortEarly: false,
    });

    console.info(result);
  });

  it("should can validate array of object", () => {
    const addressSchema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().min(6).max(200).required(),
          city: Joi.string().min(6).max(100).required(),
          country: Joi.string().min(6).max(100).required(),
        }),
      );

    const address = [
      {
        street: "Jalan Surya Suci NO 13",
        city: "Pontianak , Kota",
        country: "Indonesia",
      },
    ];

    const result = addressSchema.validate(address, {
      abortEarly: false,
    });

    console.info(result);
  });
});
