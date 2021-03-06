import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
    let history = useHistory();
    const { Id } = useParams();
    const [user, setUser] = useState({
        id: "",
        name: "",
        age: "",
        salary: ""

    });

    const { id, name, age, salary, } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3003/users", user);
        history.push("/");
    };

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container style=color:black">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Id"
                            name="id"
                            value={id}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Age"
                            name="age"
                            value={age}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Salary"
                            name="salary"
                            value={salary}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-success btn-block">Update user</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;