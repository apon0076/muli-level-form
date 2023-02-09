import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const HomePage = () => {
  const [formStatus, setFormStatus] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [addAddress, setAddAddress] = useState([
    {
      address: "",
    },
  ]);

  //Handle Input Value onChange
  const handleChange = (val, label, addressIndex) => {
    if (label === "Name") {
      setName(val);
    } else if (label === "Email") {
      setEmail(val);
    } else if (label === "Age") {
      setAge(val);
    } else {
      const temp = [...addAddress];
      temp[addressIndex].address = val;
      setAddAddress(temp);
    }
  };

  //Handle Click on Button
  const handleBtnClick = (label, addressIndex) => {
    if (label === "Previous") {
      setFormStatus(formStatus - 1);
    } else if (label === "Next") {
      setFormStatus(formStatus + 1);
    } else if (label === "Add") {
      setAddAddress([
        ...addAddress,
        {
          address: "",
        },
      ]);
    } else {
      const list = [...addAddress];
      list.splice(addressIndex, 1);
      setAddAddress(list);
    }
  };
  return (
    <div className="form__section">
      {formStatus === 1 ? (
        <>
          <Input
            label="Name"
            type="text"
            formValue={name}
            handleChange={handleChange}
            formPlaceholder="Please Enter Name"
          />
          <Input
            label="Email"
            type="email"
            formValue={email}
            handleChange={handleChange}
            formPlaceholder="Please Enter Email"
          />
        </>
      ) : null}
      {formStatus === 2 ? (
        <>
          <Input
            label="Age"
            type="number"
            formValue={age}
            handleChange={handleChange}
            formPlaceholder="Please Enter Age"
          />
          {addAddress.map((data, index) => (
            <div className="multiple-address__section" key={index}>
              <Input
                label={`Address ${index + 1}`}
                type="text"
                formPlaceholder="Please Enter Address"
                addressIndex={index}
                handleChange={handleChange}
                formValue={addAddress[index].address}
              />
              {addAddress.length === index + 1 ? (
                <Button label="Add" handleBtnClick={handleBtnClick} />
              ) : null}
              {addAddress.length > 1 ? (
                <Button
                  label="Remove"
                  handleBtnClick={handleBtnClick}
                  addressIndex={index}
                />
              ) : null}
            </div>
          ))}
        </>
      ) : null}
      {formStatus === 3 ? (
        <>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          {addAddress.map((data, index) => (
            <div key={index}>
              <p>
                Address-{index + 1}: {data.address}
              </p>
            </div>
          ))}
        </>
      ) : null}
      <div className="form-btn__section">
        {formStatus === 1 ? null : (
          <Button label="Previous" handleBtnClick={handleBtnClick} />
        )}
        {formStatus === 3 ? (
          <Button label="Submit" />
        ) : (
          <Button
            label="Next"
            handleBtnClick={handleBtnClick}
            isDisabled={
              formStatus === 1
                ? name.length === 0 || email.length === 0
                  ? true
                  : false
                : formStatus === 2
                ? age.length === 0 || addAddress[0]?.address?.length === 0
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
