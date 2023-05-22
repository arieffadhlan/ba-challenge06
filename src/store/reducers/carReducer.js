import { createSlice } from "@reduxjs/toolkit";
import fetchCars from "@/store/actions/carAction";

const initialState = {
  cars: [],
  filteredCars: [],
  fetchStatus: "idle",
  fetchFilteredCarsStatus: "idle"
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

      if (carFilterResult.length === 0) state.fetchFilteredCarsStatus = "failed";
      state.fetchFilteredCarsStatus = "succeeded"
      state.filteredCars = carFilterResult;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.fetchStatus = "loading";
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.fetchStatus = "succeeded";
      state.cars = [...action.payload];
    });
    builder.addCase(fetchCars.rejected, (state) => {
      state.fetchStatus = "failed";
    });
  }
});

export const getCars = (state) => state.cars.cars;
export const getCarsStatus = (state) => state.cars.fetchStatus;
export const getFilteredCars = (state) => state.cars.filteredCars;
export const getFilteredCarsStatus = (state) => state.cars.fetchFilteredCarsStatus;

export default carSlice.reducer;