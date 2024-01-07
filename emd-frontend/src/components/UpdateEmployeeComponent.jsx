import React, { useEffect, useState } from 'react'
import { changeEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateEmployeeComponent = () => {

    const [id, setId] = useState('')
    const [managerId, setManagerId] = useState('')

    const {pageId} = useParams();

    const [errors, setErrors] = useState({
        id: '',
        managerId: ''
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (pageId) {
            setId(pageId);
        }
    }, [pageId]);

    function handleId(e) {
        setId(e.target.value);
    }

    function handleManagerId(e) {
        setManagerId(e.target.value);
    }

    function updateEmployee(e) {
        e.preventDefault();

        if (validateFrom()) {
            const employee = {id, managerId}
            console.log(employee)

            changeEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/company')
            })
        }
    }

    function validateFrom() {
        let valid = true;

        const errorsCopy = {... errors}

        if (id.trim()) {
            errorsCopy.id = '';
        } else {
            errorsCopy.id = 'Id is required';
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
                <h2 className='text-center'>Update Employee</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Id:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Id'
                                name='id'
                                value={id}
                                className={`form-control ${ errors.id ? 'is-invalid': '' }`}
                                onChange={handleId}
                            >
                            </input>
                            { errors.id && <div className='invalid-feedback'> { errors.id } </div>}
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

                        <button className='btn btn-success' onClick={updateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateEmployeeComponent