import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Edit() {
  const [form, setForm] = useState({});
  const [product,setProduct] = useState([]);

  const {id} = useParams();
  console.log(id);
  useEffect(() => {
        axios.get(`http://localhost:3001/products/${id}`).then((res)=>{setForm(res.data)});
    
  }, []);
  const handleSubmit = ()=>{
    axios.put(`http://localhost:3001/products/${id}`,product)
  }
  const handleChange = (e) => {
    setProduct( {...product,[e.target.name]: e.target.value })
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
            value={form.name}
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
            value={form.price}
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
            value={form.stock}
          />
        </div>
      </div>
      <div className="w-40">
        <Link
          to="/"
          class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          data-modal-toggle="authentication-modal"
        >
          <button 
          onClick={()=>handleSubmit} type="submit" className="bg-blue">
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
