import './App.css'
import DepartmentComponent from './components/DepartmentComponent'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListDepartmentComponent from './components/ListDepartmentComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent'
import UpdateDepartmentComponent from './components/UpdateDepartmentComponent'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
          <Routes>
            {/* // https://localhost:3000 */}
            <Route path='/' element = {<><ListEmployeeComponent /><ListDepartmentComponent /></>}></Route>
            {/* // https://localhost:3000/company */}
            <Route path='/company' element = {<><ListEmployeeComponent /><ListDepartmentComponent /></>}></Route>
            {/* // https://localhost:3000/add-employee */}
            <Route path='/add-employee' element = {<><EmployeeComponent /></>}></Route>
            {/* // https://localhost:3000/add-department */}
            <Route path='/add-department' element = {<><DepartmentComponent /></>}></Route>
            {/* // https://localhost:3000/edit-employee */}
            <Route path='/edit-employee/:pageId' element = {<><UpdateEmployeeComponent /></>}></Route>
            {/* // https://localhost:3000/edit-department */}
            <Route path='/edit-department/:pageId' element = {<><UpdateDepartmentComponent /></>}></Route>
          </Routes>
          <br /><br />
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
