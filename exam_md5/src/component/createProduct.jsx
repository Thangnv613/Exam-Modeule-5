import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Formik, Form, input } from "formik";

export default function Create() {
  const [form, setForm] = useState({ name: "", price: "", stock: "" });
  console.log(form);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = () => {
    axios.post("http://localhost:3001/products", form);
  };

  return (
    <div>
      <div className="bg-stone text-stone-600">
        <div>
          <label>Tên sản phẩm: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="name"
            type="text"
          />
        </div>
        <div>
          <label>Giá sản phẩm: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="price"
            type="text"
          />
        </div>
        <div>
          <label>Tồn kho: </label>
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            name="stock"
            type="text"
          />
        </div>
      </div>
      <div className="w-40">

        <Link
            to="/"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            data-modal-toggle="authentication-modal"
          >
        <button onClick={handleSubmit} type="submit" className="bg-blue">
          Tạo mới
        </button>
        </Link>
        <Link
          to="/"
          class="block text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          data-modal-toggle="authentication-modal"
        >
          Quay lại
        </Link>
      </div>
    </div>
  );
}
