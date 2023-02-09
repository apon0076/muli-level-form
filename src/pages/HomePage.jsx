import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const HomePage = () => {
  const [formStatus, setFormStatus] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div className="form__section">
      {formStatus === 1 ? (
        <>
          <Input
            label="Name"
            type="text"
            setter={setName}
            formValue={name}
            formPlaceholder="Please Enter Name"
          />
          <Input
            label="Email"
            type="email"
            setter={setEmail}
            formValue={email}
            formPlaceholder="Please Enter Email"
          />
        </>
      ) : null}
      {formStatus === 2 ? (
        <>
          <Input
            label="Age"
            type="number"
            setter={setAge}
            formValue={age}
            formPlaceholder="Please Enter Age"
          />
          <Input
            label="Address"
            type="text"
            setter={setAddress}
            formValue={address}
            formPlaceholder="Please Enter Address"
          />
        </>
      ) : null}
      {formStatus === 3 ? (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          <p>Address: {address}</p>
        </>
      ) : null}
      <div className="form-btn__section">
        {formStatus === 1 ? null : (
          <Button
            label="Previous"
            setFormStatus={setFormStatus}
            formStatus={formStatus}
          />
        )}
        {formStatus === 3 ? (
          <Button label="Submit" />
        ) : (
          <Button
            label="Next"
            setFormStatus={setFormStatus}
            formStatus={formStatus}
            isDisabled={
              formStatus === 1
                ? name.length === 0 || email.length === 0
                  ? true
                  : false
                : formStatus === 2
                ? age.length === 0 || address.length === 0
                  ? true
                  : false
                : null
            }
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
