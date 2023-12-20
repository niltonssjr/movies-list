import { Faker, fr, en } from "@faker-js/faker";

export const faker = new Faker({
  locale: [fr, en],
});
