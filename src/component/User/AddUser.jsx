import React, { useEffect, useState } from "react";
import "./AddUser.css";
import { addEmp, updateEmp } from "../../Store/Slice/EmpSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

const AddUser = () => {
  let [user, setUser] = useState({
    empId: uuidv4(),
    empName: "",
    empAddress: "",
    empEmail: "",
  });

  const {t} = useTranslation("Employee");
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const emplist = useSelector((state) => state.employee);
  let obj = emplist.find((e) => e.empId === params.empId)

  useEffect(() => {
    setUser(obj);
  }, [params.empId]);

  let addEmpData = () => {
    if (params?.empId) {
      dispatch(updateEmp(user));
      navigate("/emp")
    } else {
      dispatch(addEmp(user));
      navigate("/emp");
      setUser("");
    }
  };

  return (
    <div className="col-md-6 m-auto mt-4">
      <div className="mb-3">
        <label className="form-label">{t("employeeName")}:</label>
        <input
          type="text"
          className="form-control"
          value={user?.empName}
          onChange={(e) => setUser({ ...user, empName: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{t("address")} :</label>
        <input
          type="text"
          className="form-control"
          value={user?.empAddress}
          onChange={(e) => setUser({ ...user, empAddress: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">{t("email")} :</label>
        <input
          type="text"
          className="form-control"
          value={user?.empEmail}
          onChange={(e) => setUser({ ...user, empEmail: e.target.value })}
        />
      </div>

      <button class="btn btn-primary addbtn" onClick={addEmpData}>
        {params?.empId ? "Update User" : "Add User"}
      </button>
    </div>
  );
};

export default AddUser;
