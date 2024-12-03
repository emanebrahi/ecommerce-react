import React, { useState } from "react";

function CheckoutSectionOne() {
  const [billingData, setBillingData] = useState({
    firstName: "",
    company: "",
    street: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const handelchange = (event) => {
    const { name, value } = event.target;
    setBillingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem(name, value);
  };

  return (
    <div>
      <form className="needs-validation" noValidate>
        <label htmlFor="validationCustom01" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="validationCustom01"
          name="firstName"
          value={billingData.firstName}
          onChange={handelchange}
          required
        />
        <div className="valid-feedback">Looks good!</div>

        <label htmlFor="validationCustom02" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="validationCustom02"
          name="company"
          value={billingData.company}
          onChange={handelchange}
          required
        />
        <div className="valid-feedback">Looks good!</div>

        <label htmlFor="validationCustom03" className="form-label">
          Street Address
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="validationCustom03"
          name="street"
          value={billingData.street}
          onChange={handelchange}
          required
        />
        <div className="valid-feedback">Looks good!</div>

        <label htmlFor="validationCustom04" className="form-label">
          Apartment, Floor, etc (optional)
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="validationCustom04"
          name="apartment"
          value={billingData.apartment}
          onChange={handelchange}
        />
        <div className="valid-feedback">Looks good!</div>

        <label htmlFor="validationCustom05" className="form-label">
          Town/City
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="validationCustom05"
          name="city"
          value={billingData.city}
          onChange={handelchange}
          required
        />
        <div className="valid-feedback">Looks good!</div>

        <label htmlFor="validationCustom06" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control mb-3"
          id="validationCustom06"
          name="phone"
          value={billingData.phone}
          onChange={handelchange}
          required
        />
        <div className="valid-feedback">Looks good!</div>

        <label htmlFor="validationCustom07" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control mb-3"
          id="validationCustom07"
          name="email"
          value={billingData.email}
          onChange={handelchange}
          required
        />
        <div className="valid-feedback">Looks good!</div>

        <div className="form-check mt-3 mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck">
            Save this information for faster check-out next time
          </label>
          <div className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutSectionOne;
