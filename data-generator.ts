import { faker } from '@faker-js/faker';

export interface Truck {
  id: number;
  truck: string;
  driver: string;
  country: string;
  mileage: number;
  selected: boolean;
}

function generateTruck(): Truck {
  const id = faker.datatype.number();
  const truck = faker.vehicle.type();
  const driver = faker.name.fullName();
  const country = faker.address.country();
  const mileage = faker.datatype.number({ min: 1, max: 1000000 });
  const selected = faker.datatype.boolean();

  return {
    id,
    truck,
    driver,
    country,
    mileage,
    selected,
  };
}

export function generateDummyData(count = 700): Truck[] {
  const entries = [];
  for (let i = 0; i < count; i++) {
    entries.push(generateTruck());
  }

  return entries;
}
