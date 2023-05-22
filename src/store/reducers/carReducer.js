import { createSlice } from "@reduxjs/toolkit";
import fetchCars from "@/store/actions/carAction";

const initialState = {
  cars: [],
  filteredCars: [],
  status: "idle",
  filteredCarsStatus: "idle"
}

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    filterCars: (state, action) => {
      const carFilterResult = state.cars.filter((car) => {
        const available = car.available;
        const dateFilter = new Date(car.availableAt).getTime() >= new Date(action.payload.dateTime).getTime();
        if (action.payload.capacity > 0) {
          const capacityFilter = car.capacity >= action.payload.capacity;
          return available && dateFilter && capacityFilter;
        } else {
          return available && dateFilter;
        }
      });

      if (carFilterResult.length === 0) state.filteredCarsStatus = "failed";
      state.filteredCarsStatus = "succeeded"
      state.filteredCars = carFilterResult;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cars = state.cars.concat(action.payload);
    });
    builder.addCase(fetchCars.rejected, (state) => {
      state.status = "failed";
    });
  }
});

export const getCars = (state) => state.cars.cars;
export const getCarsStatus = (state) => state.cars.status;
export const getFilteredCars = (state) => state.cars.filteredCars;
export const getFilteredCarsStatus = (state) => state.cars.filteredCarsStatus;

export default carSlice.reducer;