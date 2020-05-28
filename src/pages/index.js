import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Header from '../components/Header';
import PhotoSection from '../components/PhotoSection';


import profilePic from '../assets/images/profile.jpg';
import ProjectSection from '../components/ProjectSection';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="mb-4">
              <img className="profile-pic" src={profilePic}></img>
            </div>
            <p className="text-white-50">
              I am a Software Engineer with experience in developing full-stack enterprise level applications
            </p>
          </div>
        </div>
      </div>
    </section>


    <ProjectSection />
    <PhotoSection />
    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
