import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { changeDepartment } from '../services/DepartmentService'

const UpdateDepartmentComponent = () => {

    const [id, setId] = useState('')
    const [departmentId, setDepartmentId] = useState('')

    const {pageId} = useParams();

    const [errors, setErrors] = useState({
        id: '',
        departmentId: ''
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

    function handleDepartmentId(e) {
        setDepartmentId(e.target.value);
    }

    function updateDepartment(e) {
        e.preventDefault();

        if (validateFrom()) {
            const department = {id, departmentId}
            console.log(department)

            changeDepartment(department).then((response) => {
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

        if (departmentId.trim()) {
            errorsCopy.departmentId = '';
        } else {
            errorsCopy.departmentId = 'DepartmentId is required';
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
                <h2 className='text-center'>Add Department</h2>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Id:</label>
                            <input
                                type='text'
                                placeholder='Enter Department Id'
                                name='id'
                                value={id}
                                className={`form-control ${ errors.id ? 'is-invalid': '' }`}
                                onChange={handleId}
                            >
                            </input>
                            { errors.id && <div className='invalid-feedback'> { errors.id } </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>DepartmentId:</label>
                            <input
                                type='text'
                                placeholder='Enter Department DepartmentId'
                                name='departmentId'
                                value={departmentId}
                                className={`form-control ${ errors.departmentId ? 'is-invalid': '' }`}
                                onChange={handleDepartmentId}
                            >
                            </input>
                            { errors.departmentId && <div className='invalid-feedback'> { errors.departmentId } </div>}
                        </div>

                        <button className='btn btn-success' onClick={updateDepartment}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateDepartmentComponent