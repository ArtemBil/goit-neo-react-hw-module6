import React from 'react';
import User from '../Icons/User';
import PhoneCall from '../Icons/PhoneCall';

const Contact = ({ id, name, number, deleteContact }) => (
  <li className="card flex items-center justify-between gap-2 max-w-md">
    <div className="info flex flex-col gap-2">
      <div className="row flex gap-2">
        <User classes="max-w-5 max-h-5"/>
        <p>{name}</p>
      </div>
      <div className="row flex gap-2">
        <PhoneCall classes="max-w-5 max-h-5"/>
        {number}
      </div>
    </div>
    <div className="actions">
      <button onClick={deleteContact(id)} className="btn">Delete</button>
    </div>
  </li>
);

export default Contact;
