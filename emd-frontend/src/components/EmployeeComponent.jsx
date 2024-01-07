import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [departmentId, setDepartmentId] = useState('')
    const [managerId, setManagerId] = useState('')

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        departmentId: '',
        managerId: ''
    })

    const navigator = useNavigate();

    function handleName(e) {
        setName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleDepartmentId(e) {
        setDepartmentId(e.target.value);
    }

    function handleManagerId(e) {
        setManagerId(e.target.value);
    }

    function saveEmployee(e) {
        e.preventDefault();

        if (validateFrom()) {
            const employee = {name, email, departmentId, managerId}
            console.log(employee)

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/company')
            })
        }
    }

    function validateFrom() {
        let valid = true;

        const errorsCopy = {... errors}

        if (name.trim()) {
            errorsCopy.name = '';
        } else {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        if (departmentId.trim()) {
            errorsCopy.departmentId = '';
        } else {
            errorsCopy.departmentId = 'DepartmentId is required';
            valid = false;
        }

        if (managerId.trim()) {
            errorsCopy.managerId = '';
        } else {
            errorsCopy.managerId = 'ManagerId is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

  return (
    <div className='container'>
        <br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Name'
                                name='name'
                                value={name}
                                className={`form-control ${ errors.name ? 'is-invalid': '' }`}
                                onChange={handleName}
                            >
                            </input>
                            { errors.name && <div className='invalid-feedback'> { errors.name } </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                                onChange={handleEmail}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'> { errors.email } </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>DepartmentId:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee DepartmentId'
                                name='departmentId'
                                value={departmentId}
                                className={`form-control ${ errors.departmentId ? 'is-invalid': '' }`}
                                onChange={handleDepartmentId}
                            >
                            </input>
                            { errors.departmentId && <div className='invalid-feedback'> { errors.departmentId } </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>ManagerId:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee ManagerId'
                                name='managerId'
                                value={managerId}
                                className={`form-control ${ errors.managerId ? 'is-invalid': '' }`}
                                onChange={handleManagerId}
                            >
                            </input>
                            { errors.managerId && <div className='invalid-feedback'> { errors.managerId } </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent