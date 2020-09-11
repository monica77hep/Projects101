import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Home = () => {
    const [users, setUser] = useState([]);

        useEffect(() => {
        loadUsers();
        }, []);

        const loadUsers = async () => {
        const result = await axios.get('http://localhost:3003/users');
        setUser(result.data);
        };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
        };
        return (
            <div className='container'>
                <div className='py-4'>
                   
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>

                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                               {users.map((user, id) => (
                                    <tr>
                                        <th scope="row">{user.id}</th>
                                        {/* <td>{user.id}</td> */}
                                        <td>{user.employee_name}</td>
                                        <td>{user.employee_age}</td>
                                        <td>{user.employee_salary}</td>
                                        <td>
                                            <Link className='btn btn-primary mr-2' to={`/users/${user.id}`}>View</Link>
                                            <Link className='btn btn-outline-primary mr-2 ' to={`/users/edit/${user.id}`}>Edit</Link>
                                            <Link className='btn btn-danger mr-2' onClick={() => deleteUser(user.id)}>Delete</Link>
                                        </td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>


                </div>

            </div>
        );
        
    };
 
 
export default Home;