class VehicleModel {
  id?: string;
  model: string;
  brand: string;
  model_year: number;

  constructor(props: VehicleModel) {
    return Object.assign(this, props);
  }

  static create(props: VehicleModel) {
    return new VehicleModel(props);
  }
}

export { VehicleModel };
