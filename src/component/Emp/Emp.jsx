import React from "react";
import "./Emp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmp } from "../../Store/Slice/EmpSlice";

const Emp = () => {
  const navigate = useNavigate();

  const empList = useSelector((state) => {
    return state.employee;
  });

  const dispatch = useDispatch();

  let deleteEmployee=(id)=>{
dispatch(deleteEmp(id))
  }

  let updateEmp=(obj)=>{
   navigate("/edituser/"+obj?.empId)
  }

  return (
    <div>
      <div className="head-container">
        <h2>Employee Management System</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/adduser")}
        >
          Add User
        </button>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">EmpName</th>
            <th scope="col">EmpAddress</th>
            <th scope="col">EmpEmail</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((e) => (
            <tr key={e?.id}>
              <th scope="row">{e?.empName}</th>
              <td>{e?.empAddress}</td>
              <td>{e?.empEmail}</td>
              <td>
                <button className="btn btn-success" onClick={()=>updateEmp(e)}>Update</button>{" "}
                <button className="btn btn-danger" onClick={()=>deleteEmployee(e?.empId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Emp;
