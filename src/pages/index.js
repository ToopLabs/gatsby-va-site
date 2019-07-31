import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Portfolio from '../components/portfolio'
import Clients from '../components/clients'
import Bio from '../components/bio'
import Banner from '../components/banner'
import Enquire from '../components/enquire'
import protestShot from '../images/protest_shot.jpg'
import showreelThumb from '../images/showreel_thumb.png'
import showreelVideo from '../videos/showreel.mp4'


const HomePage = () => (
<Layout>
<SEO />
<header className="n-person-header" style={{'height':'70vh','min-height':'610px'}}>
		<div className="d-flex h-100 n-header-wrapped-container align-items-start justify-content-center flex-column position-relative">
            <div className="position-relative" style={{'padding':'0 15px','z-index':'3'}}>
                <h1 className="n-header-wrapped-title n-wh-text">Suzannah Toop</h1>
                <p className="n-header-wrapped-p n-wh-text" style={{'max-width':'460px'}}>Pellentesque quis eros eget eros mollis molestie auctor at tortor. Proin lobortis iaculis dolor, at viverra fermentum.</p>
                <div className="n-header-wrapped-btn" style={{'margin-bottom':'50px'}}>
                    <a onclick="revealVideo('video','youtube')" role="button" className="btn btn-primary text-white btn-blue-fix btn-fcvalifc btn-ryil"><i className="fal fa-play-circle"></i>&nbsp;Watch Video</a>
					<a href="#learn-about-fix" className="btn btn-outline-info btn-white-outline btn-ryil">Learn more&nbsp;&nbsp;<i className="fal fa-long-arrow-right position-relative" style={{'top':'1.5px'}}></i></a>
                </div>
            </div>
        </div>
        <div className="video-con-ovl"></div>
    </header>
	<section>
		<div className="container-fluid n-product-spacer">
			<div className="row">
				<div className="col-12 n-product-spacer">
					<div className="n-container-mw">
					<div className="d-flex flex-column-mob">
						<div className="n-person-quote n-mw-person-snippets d-flex align-items-start">
							<p className="n-person-quote-copy n-product-subtext text-dgrey position-relative mb-0">Vestibulum tempor arcu eget tellus maximus vehicula. Sed tortor risus, dapibus a odio nec, tempus condimentum libero.</p>
						</div>
						<div className="n-person-bio n-mw-person-snippets">
							<p className="text-lgrey">Jen has worked in real estate for over 18 years and has a wealth of experience in both the sales and property investment departments. These skills and experience enable Jen to provide outstanding results for her clients.</p>
							<p className="text-lgrey">Passionate about the real estate industry and assisting her clients in finding the right tenant for the right property. She has an exceptional work ethic and a keen eye, she knows what tenants are looking for and can help point out the features that will add value to your home.</p>
							<p className="text-lgrey mb-0">Jen's strong negotiating skills, combined with Toop&Toop's award-winning innovative tools and service support is a powerful combination that is proven to achieve fantastic results.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="col-12">
					<div className="n-video-container">
						<div className="position-relative">
							<a className="play-testimonial-link position-relative d-flex" role="button" onclick="revealVideo('video','youtube')">
								<div className="play-testimonial-btn d-flex position-absolute align-self-center">
									<i className="fas fa-play"></i>
								</div>
								<img className="img-fluid" src="~/Images/testimonial-video-poster.jpg" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
<div id="video" className="lightbox" onclick="hideVideo('video','youtube')">
	<button onclick="hideVideo('video','youtube')" className="lightbox-close">
		<i className="fal fa-times"></i>
	</button>
  <div className="lightbox-container">
    <div className="lightbox-content">
      <div className="video-container">
        <iframe id="youtube" width="960" height="540" src="https://www.youtube.com/embed/pyd5FQFajKE?showinfo=0" frameborder="0" allowfullscreen></iframe>
      </div>

    </div>
  </div>
</div>

	<section>
		<div className="container-fluid n-product-spacer animatedParent animateOnce">
			<div className="row animated fadeIn">
				<div className="col-12">
					<div className="n-container-mw">
						<div className="n-pu-grid">
							<div>
								<p className="lh-normal"><i className="fas fa-quote-left"></i></p>
								<p className="lh-normal text-dgrey"><i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>
								</p>
								<p className="lh-normal text-lgrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
								<p className="lh-normal text-lgrey">Ernest Nichols</p>
								<p className="lh-normal text-lgrey">Trade</p>
							</div>
							<div>
								<p className="lh-normal"><i className="fas fa-quote-left"></i></p>
								<p className="lh-normal text-dgrey"><i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>
								</p>
								<p className="lh-normal text-lgrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
								<p className="lh-normal text-lgrey">Ernest Nichols</p>
								<p className="lh-normal text-lgrey">Trade</p>
							</div>
							<div>
								<p className="lh-normal"><i className="fas fa-quote-left"></i></p>
								<p className="lh-normal text-dgrey"><i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>
								</p>
								<p className="lh-normal text-lgrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
								<p className="lh-normal text-lgrey">Ernest Nichols</p>
								<p className="lh-normal text-lgrey">Trade</p>
							</div>
							<div>
								<p className="lh-normal"><i className="fas fa-quote-left"></i></p>
								<p className="lh-normal text-dgrey"><i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>
								</p>
								<p className="lh-normal text-lgrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
								<p className="lh-normal text-lgrey">Ernest Nichols</p>
								<p className="lh-normal text-lgrey">Trade</p>
							</div>
							<div>
								<p className="lh-normal"><i className="fas fa-quote-left"></i></p>
								<p className="lh-normal text-dgrey"><i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>
								</p>
								<p className="lh-normal text-lgrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
								<p className="lh-normal text-lgrey">Ernest Nichols</p>
								<p className="lh-normal text-lgrey">Trade</p>
							</div>
							<div>
								<p className="lh-normal"><i className="fas fa-quote-left"></i></p>
								<p className="lh-normal text-dgrey"><i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>&nbsp;
								   <i className="fas fa-star"></i>
								</p>
								<p className="lh-normal text-lgrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut </p>
								<p className="lh-normal text-lgrey">Ernest Nichols</p>
								<p className="lh-normal text-lgrey">Trade</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>



    <div id="enquire-for-a-demo" className="row row-margin n-product-spacer rm-cta-container va-enq-panel">
        <div className="container animatedParent animateOnce">
            <div className="col-xl-12 container-title text-center text-white animated fadeIn">
                <h2 className="text-center n-product-title text-white">Get Started</h2>
            </div>

            <div className="col-xl-12 va-cov-panel text-center animated fadeIn">
                <ul>
                    <li><img src="~/Images/mcconnell-bourn-logo-white-thumb.png" alt="McConnell Bourn Real Estate" title="McConnell Bourn Real Estate" /></li>
                    <li><img src="~/Images/leahjay-logo.png" alt="LeahJay Real Estate" title="LeahJay Real Estate" height="17" /></li>
                    <li><img src="~/Images/toopandtoop-logo-white-thumb.png" alt="Toop&Toop Real Estate" title="Toop&Toop Real Estate" /></li>
                    <li><img src="~/Images/jelliscraig-logo-white-thumb.png?v=2" alt="JellisCraig Real Estate" title="JellisCraig Real Estate" /></li>
                    <br />
                    <li><img src="~/Images/professionals-logo.png" alt="Professionals Real Estate" title="Professionals Real Estate" height="17" /></li>
                    <li><img src="~/Images/prudential-logo.png" alt="Prudential Real Estate" title="Prudential Real Estate" height="17" /></li>
                    <li><img src="~/Images/realmark-logo-white-thumb.png?v=2" alt="Realmark Real Estate" title="Realmark Real Estate" style={{'position':'relative','top':'-2px','height':'16px'}}/></li>
                </ul>
            </div>

            <div className="col-xl-12 animated fadeIn">
				<div style={{'margin':'0 auto','max-width':'550px'}}>
					<div className="form-row">
						<div className="col">
							<input className="form-control n-form-s" type="text" placeholder="Your Name" tabindex="1" id="vaFixName" />
						</div>
						<div className="col">
							<input className="form-control n-form-s" type="tel" placeholder="Phone Number" tabindex="2" id="vaFixPhone" maxlength="10" onkeypress="checkPhoneNumber()" />
						</div>
					</div>
					<div className="form-row">
						<div className="col">
							<input className="form-control n-form-s" type="email" placeholder="Email Address" tabindex="3" id="vaFixEmail" />
						</div>
					</div>
					<div className="mt-15 text-center">
						<button type="button" className="btn btn-primary btn-wrapped-enq btn-blue-fix" id="vaFixEnquire">Enquire now! <i className="w-loader-toggle far fa-circle-notch fa-spin d-none"></i></button>
					</div>
				</div>
            </div>
            <div className="col-xl-12 va-enq-panel-success text-center invisible-display" id="vaFixSubmitFeedback">
                <h3>Our Chief Connector Deb, will be in contact with you shortly!</h3>
            </div>
        </div>
    </div>
    <footer>
        <div className="row row-margin container-spacer">
            <div className="container">
                <div className="row row-margin">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 foot-panel-sections">
                        <img src="https://www.virtualagent.com.au/Images/b-virtual-agent-logo.png" width="64px" />
                        <p className="mt-3" style={{'max-width':'200px'}}>Created by Real Estate Agents for Real Estate Agents.</p>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 foot-panel-sections">
                        <h6>Products</h6>
                        <ul>
                            <li><a href="/products/vafix">vaFIX</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 foot-panel-sections">
                        <h6>About</h6>
                        <ul>
                            <li><a href="/about">Our Story</a></li>
                            <li><a href="/about#timeline">Timeline</a></li>
                            <li><a href="/about#meet-the-team">Meet the Team</a></li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 foot-panel-sections">
                        <h6>Contact</h6>
                        <ul>
                            <li><a href="/contact">Contact Virtual Agent</a></li>
                            <li><a href="/contact">Product Training</a></li>
                            <li><a href="/contact">Enquire about our Platform</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row row-margin footer-end">
                    <div className="col-xl-4 col-xs-12 foot-panel-tcsec">
                        <p><i className="fal fa-copyright"></i> Virtual Agent. All rights reserved.</p>
                    </div>
                    <div className="col-xl-8 col-xs-12 text-right foot-panel-tcsec">

                    </div>
                </div>
            </div>
        </div>
    </footer>
</Layout>
)

export default HomePage


