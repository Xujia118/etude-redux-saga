import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCatsFetch } from "./catSlice";

export default function CatList() {
  const { cats, isLoading } = useSelector((state) => state.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>CatList</h1>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>
            <h3>{cat.name}</h3>
            <p>{cat.temperament}</p>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
