import React from 'react';

const Registration = (props) => {
  const { formData } = props;
  return (
    <div className="attendee-form">
      <h2>Register Attendee</h2>
      <form>
        <label> First Name:
          <input type="text" value={formData.firstName} ></input>
        </label>
        <label> Last Name:
          <input type="text" value={formData.lastName} ></input>
        </label>
        <lable> email
          <input type="text" value={formData.email} ></input>
        </lable>
        <input type="submit" value="submit"></input>
        <select value={formData.shirt}>
          <option value=""></option>
          <option value="XS"></option>
          <option value="S"></option>
          <option value="M"></option>
          <option value="L"></option>
          <option value="XL"></option>
          <option value="XXL"></option>
        </select>
        <select value={formData.experience}>
          <option value=""></option>
          <option value="Beginner"></option>
          <option value="Intermediate"></option>
          <option value="Expert"></option>
        </select>

      </form>
    </div>
  );
}

export default Registration;