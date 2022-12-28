import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Form from "../common/Form";

function About() {
  return (
    <div className="container">
        <img src="/img/background.png" className="w-100" alt="" style={{marginTop: '88px'}} />
        
        <div className="mt-5">
            <h1>About American Window Systems, Inc.</h1>
            <div>
                <p>
                    American Window Systems, Inc. is a local family-owned and operated business. We strive to provide our customers with the highest quality products, the finest craftsmanship, and everyday low prices that consistently beat our competitors’ sale prices. From beginning to end, we strive to make sure that each customer is completely satisfied. We are proud of our business and we are dedicated to preserving our excellent reputation built over our 40+ years in business.
                </p>
                <p>
                    We specialize in replacement windows and doors for homes and businesses in Vacaville, Fairfield, Vallejo, Benicia, Martinez, Concord, Pleasant Hill, Walnut Creek, Napa, Sonoma, Mill Valley, Greenbrae, Corte Madera, San Rafael, Novato, Petaluma, Rohnert Park, Santa Rosa and surrounding cities. Call us today at (707) 258-0880 for a free in – home consultation today.
                </p>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-8 col-10 mx-auto px-0"><Form /></div>
        </div>

        <div className="mt-5 bg-light p-5">
            <h3 className="text-center">Some additional reasons to choose American Window Systems, Inc.:</h3>

            <div className="row pt-5">
                <div className="col-md-4 text-center py-5">
                    <img src="/img/example.png" alt="" style={{maxWidth: '50%', height: 'auto'}}/>
                    <h4>Diamond Certified</h4>
                    <div>250 Surveys Reveal: We are "Rated Highest in Quality and Helpful Expertise" with 96% Customer Loyalty and 99% Helpful Expertise.</div>
                </div>
                <div className="col-md-4 text-center py-5">
                    <img src="/img/example.png" alt="" style={{maxWidth: '50%', height: 'auto'}}/>
                    <h4>Diamond Certified</h4>
                    <div>250 Surveys Reveal: We are "Rated Highest in Quality and Helpful Expertise" with 96% Customer Loyalty and 99% Helpful Expertise.</div>
                </div>
                <div className="col-md-4 text-center py-5">
                    <img src="/img/example.png" alt="" style={{maxWidth: '50%', height: 'auto'}}/>
                    <h4>Diamond Certified</h4>
                    <div>250 Surveys Reveal: We are "Rated Highest in Quality and Helpful Expertise" with 96% Customer Loyalty and 99% Helpful Expertise.</div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 text-center py-5">
                    <FontAwesomeIcon icon="fas fa-recycle" size="4x" />
                    <h4>Earth-Friendly</h4>
                    <div>We recycle all old windows, doors, and other recyclable waste.</div>
                </div>
                <div className="col-md-3 text-center py-5">
                    <FontAwesomeIcon icon="fas fa-check-square" size="4x" />
                    <h4>Earth-Friendly</h4>
                    <div>We recycle all old windows, doors, and other recyclable waste.</div>
                </div>
                <div className="col-md-3 text-center py-5">
                    <FontAwesomeIcon icon="fas fa-check-square" size="4x" />
                    <h4>Earth-Friendly</h4>
                    <div>We recycle all old windows, doors, and other recyclable waste.</div>
                </div>
                <div className="col-md-3 text-center py-5">
                    <FontAwesomeIcon icon="fas fa-check-square" size="4x" />
                    <h4>Earth-Friendly</h4>
                    <div>We recycle all old windows, doors, and other recyclable waste.</div>
                </div>
            </div>
        </div>

        <div style={{backgroundImage: "url('/img/background.png')", backgroundSize: 'cover'}} className="p-5 mt-5">
            <div className="text-center text-white p-5">
                <h4>We are proud to serve the following areas in Northern California</h4>
                <div>Napa Valley, Contra Costa County, Marin County, Solano County, and Sonoma County.</div>
            </div>
        </div>

    </div>
  )
}

export default About