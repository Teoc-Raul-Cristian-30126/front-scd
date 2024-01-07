import axios from "axios";

const REST_API_GET = 'http://localhost:8080/employee/getAllEmployees';
const REST_API_ADD = 'http://localhost:8080/employee/addEmployee';
const REST_API_UPDATE = 'http://localhost:8080/employee/updateEmployee';
const REST_API_DELETE = 'http://localhost:8080/employee/deleteEmployee';

export const listEmployees = () => axios.get(REST_API_GET);

export const createEmployee = (employee) => axios.post(REST_API_ADD, employee);

export const changeEmployee = (employee) => axios.put(REST_API_UPDATE, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_DELETE + '/' + employeeId);

