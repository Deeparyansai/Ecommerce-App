import React from 'react'
import Layout from '../Components/Layout/Layout'

const Policy = () => {
  return (
    <Layout title={'Policies'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/privacy-policy.avif"
            alt="contactus"
            style={{ width: "75%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Information We Collect</p>
          <p>How We Use Your Information</p>
          <p>Data Security</p>
          <p>Cookies and Tracking Technologies</p>
          <p>Third-Party Disclosure</p>
          <p>Your Rights</p>
          <p>Changes to This Privacy Policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;