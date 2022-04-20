import { useState } from "react";
import { userReuest } from "../requestMethod";
import "./newproduct.css";

export default function AdminUsercrete() {
  const [store, setStore] = useState([]);
  const [file, setFile] = useState();
  console.log(store);


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
      await userReuest.post("/users", newPost);
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
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="addProductForm">
        <div className="addProductItem">
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>username</label>
          <input
            type="text"
            placeholder="enter username"
            onChange={handleStore}
            name="username"
          />
        </div>

        <div className="addProductItem">
          <label>Email</label>
          <input
            type="text"
            placeholder="enter email"
            onChange={handleStore}
            name="email"
          />
        </div>
        <div className="addProductItem">
          <label>password</label>
          <input
            type="
            password"
            placeholder="enter password"
            onChange={handleStore}
            name="password"
          />
        </div>
        <button className="addProductButton" onClick={newProductHandler}>
          Create
        </button>
      </form>
    </div>
  );
}
