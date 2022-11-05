import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  //   console.log(title);
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.first.value} ${form.last.value}`;
    const email = user?.email || "unregisteered";
    const phone = form.phone.value;
    const message = form.message.value;
    const order = {
      service: _id,
      servicName: title,
      price,
      customer: name,
      email,
      phone,
      message,
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order place success fully");
          form.reset("");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handlePlaceOrder}>
      <h3 className="text-4xl">{title}</h3>
      <h4 className="text-3xl">Price: ${price}</h4>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap4-4">
        <input
          type="text"
          name="first"
          placeholder="First Name"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="last"
          placeholder="Last name"
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          defaultValue={user?.email}
          className="input input-bordered input-bordered w-full max-w-xs"
          readOnly
        />
      </div>
      <textarea
        name="message"
        required
        className="textarea textarea-bordered h-24 w-full"
        placeholder="Bio"
      ></textarea>
      <input className="btn" type="submit" value="Plase your order" />
    </form>
  );
};

export default CheckOut;
