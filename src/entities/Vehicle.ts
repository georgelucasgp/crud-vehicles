class Vehicle {
  id?: string;
  license_plate: string;
  chassis: string;
  renavam: string;
  vehicles_model_id: string;

  constructor(props: Vehicle) {
    return Object.assign(this, props);
  }
}

export { Vehicle };
