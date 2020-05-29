import React from 'react';
import PropTypes from 'prop-types';


class InfoCard extends React.Component {
	static propTypes = {
		title: PropTypes.string,
		subTitle: PropTypes.string,
		imgUrl: PropTypes.string,
    onClick: PropTypes.func,
  };
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
  }
	render() {
		const { title, imgUrl } = this.props;

		return (
			<div className="info-card col-md-4 mb-5 mx-auto" onClick={this.props.onClick}>
				<div className="card py-4 h-100">
					<div className="card-body text-center">
					<h4 className="text-uppercase m-0">{title}</h4>
						<hr className="my-4" />
						<div className="small text-black-50">
							<img className="img-fluid" src={imgUrl} ></img>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default InfoCard;