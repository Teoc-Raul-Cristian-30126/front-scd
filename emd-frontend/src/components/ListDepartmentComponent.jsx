import React, {useEffect, useState} from 'react'
import { deleteDepartment, listDepartments } from '../services/DepartmentService'
import { useNavigate } from 'react-router-dom'

const ListDepartmentComponent = () => {

    const [departments, setDepartments] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listDepartments().then((response) => {
            setDepartments(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewDepartment() {
        navigator('/add-department')
    }

    function updateDepartment(pageId) {
        navigator(`/edit-department/${pageId}`)
    }

    function removeDepartment(id) {
        deleteDepartment(id).then((response) => {
            refreshPage();
        }).catch(error => {
            console.error(error);
        })
    }

    function refreshPage() {
        window.location.reload(true)
    }

  return (
    <div className='container'>

        <h2 className='text-center'>List of Departments</h2>
        <button className='btn btn-primary mb-2' onClick={addNewDepartment}>Add Department</button>
        <table className='table table-strip table-bordered'>
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Description</th>
                    <th>Department ParentId</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map(department =>
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.description}</td>
                            <td>{department.parentId}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateDepartment(department.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeDepartment(department.id)}>Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent