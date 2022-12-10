class Vehicle {
  id?: string;
  license_plate: string;
  chassis: string;
  renavam: string;
  vehicles_model_id: string;

  constructor(props: Vehicle) {
    return Object.assign(this, props);
  }

  static create(props: Vehicle) {
    return new Vehicle(props);
  }
}

export { Vehicle };
