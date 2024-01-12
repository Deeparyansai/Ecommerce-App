import React from 'react'
import Layout from '../Components/Layout/Layout'

const About = () => {
  return (
    <Layout title={'About Us '}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about-us.avif"
            alt="contactus"
            style={{ width: "65%", padding : '5%' }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          "E-commerce" stands for electronic commerce, and it refers to the buying and selling of goods or services over the internet. In other words, it involves conducting business transactions through electronic means, primarily the internet. E-commerce has become a significant aspect of modern business, offering a convenient way for consumers to shop and businesses to reach a global audience.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About