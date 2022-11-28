// import { Vehicle } from '../../entities/Vehicle';
// import { VehicleRepositoryInMemory } from '../../infra/repositories/in-memory/VehicleRepositoryInMemory';
// import { UpdateVehicleUseCase } from './UpdateVehicleUseCase';

// let vehicleRepositoryInMemory: VehicleRepositoryInMemory;
// let updateVehicleUseCase: UpdateVehicleUseCase;

// let vehicleData: Vehicle;

// beforeAll(() => {
//   vehicleRepositoryInMemory = new VehicleRepositoryInMemory();
//   updateVehicleUseCase = new UpdateVehicleUseCase(vehicleRepositoryInMemory);
// });
// describe('Update Vehicle', () => {
//   it('should be able to update a vehicle', async () => {
//     vehicleData = {
//       license_plate: 'AAA-2222',
//       chassis: '9BWZZZ377',
//       renavam: '123456789',
//       vehicles_model_id: '1',
//     };

//     const vehicle = await updateVehicleUseCase.execute(vehicleData);

//     vehicleData = {
//       id: vehicle.id,
//       license_plate: 'AAA-3333',
//       chassis: '9BWZZZ377',
//       renavam: '123456789',
//       vehicles_model_id: '1',
//     };

//     await updateVehicleUseCase.update(vehicleUpdate);

//     const vehicleUpdated = await updateVehicleUseCase.show(vehicle.id);

//     expect(vehicleUpdated.license_plate).toBe('AAA-3333');
//   });

//   it('should not be able to update a vehicle with license plate already exists', async () => {
//     vehicleData = {
//       license_plate: 'AAA-4444',
//       chassis: '9BWZZZ377',
//       renavam: '123456789',
//       vehicles_model_id: '1',
//     };

//     const vehicle = await updateVehicleUseCase.execute(vehicleData);

//     vehicleData = {
//       id: vehicle.id,
//       license_plate: 'AAA-5555',
//       chassis: '9BWZZZ377',
//       renavam: '123456789',
//       vehicles_model_id: '1',
//     };

//     await updateVehicleUseCase.execute(vehicleUpdate);

//     await expect(updateVehicleUseCase.update(vehicleUpdate)).rejects.toEqual(
//       new AppError('Vehicle already Exists', 400),
//     );
//   });

//   it('should not be able to update a vehicle with id not exists', async () => {
//     vehicleData = {
//       id: '1',
//       license_plate: 'AAA-6666',
//       chassis: '9BWZZZ377',
//       renavam: '123456789',
//       vehicles_model_id: '1',
//     };

//     await expect(updateVehicleUseCase.update(vehicleUpdate)).rejects.toEqual(
//       new AppError('Vehicle does not exist', 400),
//     );
//   });
// });
