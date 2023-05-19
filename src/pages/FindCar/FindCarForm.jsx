import { useState } from "react";
import { carSlice } from "@/store/reducers/carReducer";
import usersIcon from "@/assets/icons/forms/users.svg";
import { useDispatch } from "react-redux";

const FindCarForm = () => {
  const dispatch = useDispatch();
  const { filterCars } = carSlice.actions;
  const [formData, setFormData] = useState({
    driverType: "",
    availableAt: "",
    pickUpTime: "",
    capacity: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.driverType || !formData.availableAt || !formData.pickUpTime) {
      alert("Anda diharapkan mengisi semua form!");
      return;
    }

    const dateTime = new Date(`${formData.availableAt} ${formData.pickUpTime}`);
    const capacity = isNaN(parseInt(formData.capacity)) ? 0 : parseInt(formData.capacity);

    dispatch(filterCars({
      ...formData,
      dateTime,
      capacity
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-field">
        <label htmlFor="driverType" className="form-input-label">Tipe Driver</label>
        <select onChange={handleChange} value={formData.driverType} name="driverType" id="driverType" className="form-select__field" >
          <option>
            Pilih Tipe Driver
          </option>
          <option value="Dengan Sopir">
            Dengan Sopir
          </option>
          <option value="Tanpa Sopir (Lepas Kunci)">
            Tanpa Sopir (Lepas Kunci)
          </option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="availableAt" className="form-input-label">Tanggal</label>
        <input type="date" onChange={handleChange} value={formData.availableAt} name="availableAt" id="availableAt" className="form-input" />
      </div>
      <div className="form-field">
        <label htmlFor="pickUpTime" className="form-input-label">Waktu Jemput/Ambil</label>
        <div className="form-field__input">
          <select onChange={handleChange} value={formData.pickUpTime} name="pickUpTime" id="pickUpTime" className="form-select__field" >
            <option>
              Pilih Waktu
            </option>
            <option value="08:00">
              08.00 WIB
            </option>
            <option value="09:00">
              09.00 WIB
            </option>
            <option value="10:00">
              10.00 WIB
            </option>
            <option value="11:00">
              11.00 WIB
            </option>
            <option value="12:00">
              12.00 WIB
            </option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="capacity" className="form-input-label">Jumlah Penumpang (optional)</label>
        <div className="form-field__input">
          <input type="text" onChange={handleChange} value={formData.capacity} name="capacity" id="capacity" className="form-input" placeholder="Jumlah Penumpang" />
          <img src={usersIcon} alt="pickUpTime" className="form-input__icon" />
        </div>
      </div>
      <button className="btn-cta align-self-end text-nowrap">Cari Mobil</button>
    </form>
  )
}

export default FindCarForm;