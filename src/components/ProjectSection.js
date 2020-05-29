import React from 'react';
import Modal from 'react-modal';
import { graphql } from 'gatsby';

import InfoCard from "./InfoCard"

import config from '../../config';

Modal.setAppElement('body');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class ProjectSection extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      project: {}
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal (proj) {
    this.setState({ 
      showModal: true,
      project: proj
     });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <section id="projects" className="project-section text-center">
        <div className="container">
          <h2 className="text-white mb-5">Projects</h2>
          <div className="row">
            {
              config.projects.map((proj, i) => 
                <InfoCard
                  key={proj.id} 
                  title={proj.name} 
                  imgUrl={proj.imgUrl} 
                  onClick={() => this.handleOpenModal(proj)}
                />)
            }
          </div>
        </div>
  
        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          className="modal-content"
          contentLabel="Example Modal"
        >
          <div className="info-modal" onClick={this.props.onClick}>
            <div className="card py-4">
              <div className="card-body text-center">
              <h4 className="text-uppercase m-0">{this.state.project?.title}</h4>
                <hr className="my-4" />
                <div className="info-img small text-black-50">
                  <img src={this.state.project?.imgUrl} ></img>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
export default ProjectSection;
