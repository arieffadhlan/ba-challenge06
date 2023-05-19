import { createSlice } from "@reduxjs/toolkit";
import { getCarList } from "@/store/actions/carAction";

const initialState = {
  cars: [],
  filteredCars: [],
  status: "idle",
  statusFilter: "idle"
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

      if (carFilterResult.length === 0) state.statusFilter = "failed";
      state.statusFilter = "succeeded"
      state.filteredCars = carFilterResult;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCarList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getCarList.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.cars = state.cars.concat(action.payload);
    });
    builder.addCase(getCarList.rejected, (state, action) => {
      state.status = "failed";
      state.errorMessage = action.payload;
    });
  }
});

export const getCars = (state) => state.cars.cars;
export const getFilteredCars = (state) => state.cars.filteredCars;
export const getCarsStatus = (state) => state.cars.statusFilter;

export default carSlice.reducer;