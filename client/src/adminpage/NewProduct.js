import { useState } from "react";
import { userReuest } from "../requestMethod";
import "./newproduct.css";

export default function NewProduct() {
  const [store, setStore] = useState([]);
	const [file, setFile] = useState();
console.log(store)
  const newProductHandler = async (e) => {
    e.preventDefault();

		const newPost = { ...store };

    if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			newPost.img = filename;

			try {
				await userReuest.post("/upload", data);
			} catch (err) {}
		}

    try {
      await userReuest.post("/products", newPost );
      window.location.replace("/adminproductlist")
    } catch (err) {
      console.log(err);
    }
  };

  const handleStore = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      {file && (<img className="writeImg" src={URL.createObjectURL(file)} alt="" />)}
      <form className="addProductForm">
        <div className="addProductItem">

        <input type="file" id="file"  onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="enter title"
            onChange={handleStore}
            name="title"
          />
        </div>

        <div className="addProductItem">
          <label>Decription</label>
          <input
            type="text"
            placeholder="enter decs"
            onChange={handleStore}
            name="decs"
          />
        </div>
        <div className="addProductItem">
          <label>price</label>
          <input
            type="number"
            placeholder="enter decs"
            onChange={handleStore}
            name="price"
          />
        </div>

        <div className="addProductItem">
        <label>categories</label>
        <input
          type="text"
          placeholder="enter decs"
          onChange={handleStore}
          name="categories"
        />
      </div>

        <div className="addProductItem">
          <label>color</label>
          <select onChange={handleStore} name="color">
            <option>color</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Size</label>
          <select onChange={handleStore} name="size">
            <option>size</option>
            <option>m</option>
            <option>l</option>
            <option>xl</option>
            <option>xxl</option>
          </select>
        </div>

        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleStore}>
            <option value="true">Yes</option>
            <option value="false">no</option>
          </select>
        </div>

        <button className="addProductButton" onClick={newProductHandler}>
          Create
        </button>
      </form>
    </div>
  );
}
