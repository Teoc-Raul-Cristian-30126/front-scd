import axios from "axios";

const REST_API_GET = 'http://localhost:8080/department/getAllDepartments';
const REST_API_ADD = 'http://localhost:8080/department/addDepartment';
const REST_API_UPDATE = 'http://localhost:8080/department/updateDepartment';
const REST_API_DELETE = 'http://localhost:8080/department/deleteDepartment';

export const listDepartments = () => axios.get(REST_API_GET);

export const createDepartment = (department) => axios.post(REST_API_ADD, department);

export const changeDepartment = (department) => axios.put(REST_API_UPDATE, department);

export const deleteDepartment = (departmentId) => axios.delete(REST_API_DELETE + '/' + departmentId);