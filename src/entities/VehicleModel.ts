class VehicleModel {
  id?: string;
  model: string;
  brand: string;
  model_year: number;

  constructor(props: VehicleModel) {
    return Object.assign(this, props);
  }
}

export { VehicleModel };
