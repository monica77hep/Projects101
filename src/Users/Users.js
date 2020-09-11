import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    salary: ""
    
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">id : {user.id}</li>
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">salary: {user.salary}</li>
      
      </ul>
    </div>
  );
};

export default Users;