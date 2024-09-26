import React from "react";
import "./Emp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmp } from "../../Store/Slice/EmpSlice";
import { useTranslation } from "react-i18next";

const Emp = () => {
  const {t} = useTranslation("Employee");
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
        <h2>{t("employeeManagemenySystem")}</h2>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/adduser")}
        >
          {t("addUser")}
        </button>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">{t("employeeName")}</th>
            <th scope="col">{t("employeeAddress")}</th>
            <th scope="col">{t("employeeEmail")}</th>
            <th scope="col">{t("action")}</th>
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
