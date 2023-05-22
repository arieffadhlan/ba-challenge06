import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { carSlice } from "@/store/reducers/carReducer";
import { driverTypeOptions, pickUpTimeOptions } from "@/constants/select-options";

import usersIcon from "@/assets/icons/forms/users.svg";

const formSchema = yup.object().shape({
  availableAt: yup.string().required("Tanggal wajib diisi."),
  capacity: yup.string().required("Jumlah penumpang wajib diisi."),
  driverType: yup.string().oneOf(driverTypeOptions, "Tipe driver wajib dipilih.").required(),
  pickUpTime: yup.string().oneOf(pickUpTimeOptions, "Waktu jemput wajib dipilih.").required()
})

const FindCarForm = () => {
  const dispatch = useDispatch();
  const { filterCars } = carSlice.actions;
  const [backdrop, setBackdrop] = useState(false);
  const backdropRef = useRef(null);
  const { register, handleSubmit, formState: { errors }} = useForm({ 
    resolver: yupResolver(formSchema),
    defaultValues: {
      availableAt: "",
      capacity: "",
      driverType: "default",
      pickUpTime: "default"
    }
  });

  useEffect(() => {
    const handler = (event) => {
      if (backdropRef.current && !backdropRef.current.contains(event.target)) {
        setBackdrop(false);
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  const handleBackdrop = () => {
    setBackdrop(true);
  } 

  const handleOnSubmit = (data) => {
    const {availableAt, pickUpTime, capacity} = data;
    const dateTime = new Date(`${availableAt} ${pickUpTime}`);
    const carCapacity = parseInt(capacity) < 0 ? 0 : parseInt(capacity);

    dispatch(filterCars({
      dateTime,
      capacity: carCapacity
    }));

    setBackdrop(false);
  }

  return (
    <>
      {backdrop && <div className="filter-backdrop"></div>}
      <div ref={backdropRef} onClick={handleBackdrop} className="car-search__container">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="form-container">
          <div className="form-field__container">
            <div className="form-field">
              <label htmlFor="driverType" className="form-input-label">Tipe Driver</label>
              <select {...register("driverType", { required: true })} name="driverType" id="driverType" className="form-select__field" >
                <option value="default" disabled>
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
              <input {...register("availableAt", { required: true })} type="date" name="availableAt" id="availableAt" className="form-input" />
            </div>
            <div className="form-field">
              <label htmlFor="pickUpTime" className="form-input-label">Waktu Jemput/Ambil</label>
              <div className="form-field__input">
                <select {...register("pickUpTime", { required: true })} name="pickUpTime" id="pickUpTime" className="form-select__field" >
                  <option value="default" disabled>
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
                <input {...register("capacity", { required: true })} type="number" name="capacity" id="capacity" className="form-input" placeholder="Jumlah Penumpang" />
                <img src={usersIcon} alt="pickUpTime" className="form-input__icon" />
              </div>
            </div>
            <button className="btn-cta align-self-end text-nowrap">Cari Mobil</button>
          </div>
          {Object.keys(errors).length !== 0 && (
            <div className="form-field__error-container">
              <span className="form-field__error">Terjadi kesalahan:</span>
              <ul className="form-field__error-list">
                {errors.driverType?.message && <li className="form-field__error">{errors.driverType.message}</li>}
                {errors.availableAt?.message && <li className="form-field__error">{errors.availableAt.message}</li>}
                {errors.pickUpTime?.message && <li className="form-field__error">{errors.pickUpTime.message}</li>}
                {errors.capacity?.message && <li className="form-field__error">{errors.capacity.message}</li>}
              </ul>
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default FindCarForm;