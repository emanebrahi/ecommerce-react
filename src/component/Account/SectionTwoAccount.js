import React, { useState } from "react";

function SectionTwoAccount() {
  const [formData, setFormData] = useState({
    firstName: localStorage.getItem("firstName") || "",
    lastName: localStorage.getItem("lastName") || "",
    email: localStorage.getItem("email") || "",
    address: localStorage.getItem("address") || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match!");
      return;
    }

    localStorage.setItem("firstName", formData.firstName);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("address", formData.address);

    if (formData.newPassword) {
      localStorage.setItem("password", formData.newPassword);
    }

    alert("User information updated successfully!");
  };

  const handleCancel = () => {
    setFormData({
      firstName: localStorage.getItem("firstName") || "",
      lastName: localStorage.getItem("lastName") || "",
      email: localStorage.getItem("email") || "",
      address: localStorage.getItem("address") || "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container">
      <form className="form-control account-form" noValidate>
        <h6 className="text-danger">Edit your profile</h6>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <label htmlFor="currentPassword" className="form-label">
            Password change
          </label>
          <input
            type="password"
            className="form-control"
            id="currentPassword"
            placeholder="Current password"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control"
            id="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
          />
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3 d-flex justify-content-end">
       
        <button
          type="button"
          className="btn"
          onClick={handleCancel}
        >
          Cancel
        </button>

        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>
      </form>

      
    </div>
  );
}

export default SectionTwoAccount;
