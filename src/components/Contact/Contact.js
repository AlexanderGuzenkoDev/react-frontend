import React from 'react'
import Form from "../common/Form";

function Contact() {
  return (
    <div className="container">
        <img src="/img/background.png" alt="" className="w-100" style={{marginTop: '88px'}} />

        <div className="row mt-5">
            <div className="col-lg-8">
                <h1>Contact American Window Systems, Inc.</h1>
                <h2>Come and visit us in our showroom!</h2>
                
                <h4>Address</h4>
                <div>
                    <p>American Window Systems, Inc.</p>
                    <p>1729 Action Ave Suite B</p>
                    <p>Napa, CA 94559</p>
                    <p>See Map below</p>
                </div>
            
                <h4>Hours</h4>
                <div>
                    <p>Monday – Friday 8:00am to 5:00pm</p>
                    <p>Closed Saturday-Sunday</p>
                </div>
            
                <h4>Phone and Fax</h4>
                <div>
                    <p>Ph: (707) 258-0880</p>
                    <p>Fax: (707) 258-9916</p>
                </div>

                <h4>For General Inquiries</h4>
                <div>
                    <p><b>info@amwinsys.com</b></p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
                <Form />
            </div>
        </div>

        {/* <div className="mt-5 mb-5 pb-5"><MapComponent /></div> */}
    </div>
  )
}

export default Contact