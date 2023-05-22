import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getRandomInt } from "@/utils/getRandomInt";

const API = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json";

const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  try {
    const response = await axios.get(API);
    const populateCars = await response.data.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));
      return {
        ...car,
        availableAt
      };
    });
    return populateCars;
  } catch (error) {
    return error.message;
  }
});

export default fetchCars;