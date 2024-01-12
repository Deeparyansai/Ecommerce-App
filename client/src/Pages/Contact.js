import React from 'react'
import Layout from '../Components/Layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";


const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contact-us.avif"
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <hr />
          <p className="text-justify mt-2">
            WE ARE (24X7) AVAILABLE
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help_in@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
