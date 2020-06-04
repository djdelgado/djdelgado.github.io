import React from 'react';

import demoImage1 from '../assets/images/brothers.jpg';
import demoImage2 from '../assets/images/backlot.jpg';
import bgMaster from '../assets/images/perot.jpg';

const PhotoSection = () => (
	<section id="photos" className="photo-section bg-light">
		<div className="container">
		<div className="col-lg-8 mx-auto">
      <h2 className="text-black text-center mb-5">Photography</h2>
		</div>
			<div className="row align-items-center no-gutters mb-4 mb-lg-5">
				<div className="col-xl-8 col-lg-7">
					<img className="img-fluid mb-3 mb-lg-0" src={bgMaster} alt="" />
				</div>
				<div className="col-xl-4 col-lg-5">
					<div className="featured-text text-center text-lg-left">
						<h4>Analog</h4>
						<p className="text-black-50 mb-0">
							It started when I found an old Yashica Electro 35 in a drawer of my
							grandparents house. I didn't know much about cameras at all, but I figured
							this would be a good place to start.
						</p>
					</div>
				</div>
			</div>

			<div className="row justify-content-center no-gutters mb-5 mb-lg-0">
				<div className="col-lg-6">
					<img className="img-fluid" src={demoImage1} alt="" />
				</div>
				<div className="col-lg-6">
					<div className="bg-black text-center h-100 project">
						<div className="d-flex h-100">
							<div className="photo-text w-100 my-auto text-center text-lg-left">
								<h4 className="text-white">Street</h4>
								<p className="mb-0 text-white-50">
									
								</p>
								<hr className="d-none d-lg-block mb-0 ml-0" />
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</section>
);

export default PhotoSection;
