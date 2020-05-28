import React from 'react';
import PropTypes from 'prop-types';
import poaImg from '../assets/images/Excursion-Layout.jpg'

class InfoCard extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		subTitle: PropTypes.string,
		img: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  };
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }
	render() {
		const { title } = this.props;
		return (
			<div className="info-card col-md-4 mb-3 mx-auto">
				<div className="card py-4 h-100">
					<div className="card-body text-center">
					<h4 className="text-uppercase m-0">{title}</h4>
						<hr className="my-4" />
						<div className="small text-black-50">
							
							<img className="img-fluid" src={poaImg}></img>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default InfoCard;