import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createDepartment } from '../services/DepartmentService'

const DepartmentComponent = () => {

    const [description, setDescription] = useState('')
    const [parentId, setParentId] = useState('')

    const [errors, setErrors] = useState({
        description: '',
        parentId: ''
    })

    const navigator = useNavigate();

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handleParentId(e) {
        setParentId(e.target.value);
    }

    function saveDepartment(e) {
        e.preventDefault();

        if (validateFrom()) {
            const department = {description, parentId}
            console.log(department)

            createDepartment(department).then((response) => {
                console.log(response.data);
                navigator('/company')
            })
        }
    }

    function validateFrom() {
        let valid = true;

        const errorsCopy = {... errors}

        if (description.trim()) {
            errorsCopy.description = '';
        } else {
            errorsCopy.description = 'Description is required';
            valid = false;
        }

        if (parentId.trim()) {
            errorsCopy.parentId = '';
        } else {
            errorsCopy.parentId = 'ParentId is required';
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
                            <label className='form-label'>Description:</label>
                            <input
                                type='text'
                                placeholder='Enter Department Description'
                                name='description'
                                value={description}
                                className={`form-control ${ errors.description ? 'is-invalid': '' }`}
                                onChange={handleDescription}
                            >
                            </input>
                            { errors.description && <div className='invalid-feedback'> { errors.description } </div>}
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>ParentId:</label>
                            <input
                                type='text'
                                placeholder='Enter Department ParentId'
                                name='parentId'
                                value={parentId}
                                className={`form-control ${ errors.parentId ? 'is-invalid': '' }`}
                                onChange={handleParentId}
                            >
                            </input>
                            { errors.parentId && <div className='invalid-feedback'> { errors.parentId } </div>}
                        </div>

                        <button className='btn btn-success' onClick={saveDepartment}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DepartmentComponent