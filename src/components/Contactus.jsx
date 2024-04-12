import React from 'react';
import './style.css';
function Contactus() {
  return (
    <div style={{backgroundColor:'whitesmoke'}} >
      <h1 style={{ textAlign: 'center',paddingTop:'16px', fontFamily: 'cursive'}}>FREQUENTLY ASKED QUESTIONS</h1>
      <div style={{ margin: '66px 108px'  }} >
        <div class="accordion" id="accordionExample">
          <div class="accordion-item"  >
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor:'#444545',color:'white'}}>
                Q. What are the restrictions on entrance and exit of campus during event?
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Access to the campus starts at 7 AM</strong> for participants and visitors throughout the three days. Keep a lookout for event timings for more detail.
              </div>
            </div>
          </div>
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"  style={{ backgroundColor:'#444545',color:'white'}} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Q. Will the university be providing us accommodations?
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes! Your safe stay will be ensured if your event requires it by the university which will be payable by you at a fair cost.
              </div>
            </div>
          </div>
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed"  style={{ backgroundColor:'#444545',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               Q. Can I participate in multiple events?
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Yes! It is completely alright for you to participate in any number of events you'd like to, as long as their timelines don't crash. Be sure to get registered ASAP!
              </div>
            </div>
          </div>
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed"  style={{ backgroundColor:'#444545',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Q. What should I bring with me to the event?
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                You should bring your registration confirmation, identification, any necessary materials for your event, and enthusiasm!
              </div>
            </div>
          </div>
          <div class="accordion-item">
  <h2 class="accordion-header" id="headingFive">
    <button class="accordion-button collapsed"  style={{ backgroundColor:'#444545',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Q. Is parking available on campus?
    </button>
  </h2>
  <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      Yes, parking is available on campus. Please follow the instructions provided by the event organizers for designated parking areas.
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingSix">
    <button class="accordion-button collapsed"  style={{ backgroundColor:'#444545',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      Q. How can I pay the registration fee?

    </button>
  </h2>
  <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    The payment can be made through credit/debit card, UPI or Wallet , through the link mentioned in Unstop's description.
    </div>
  </div>
</div>
        </div>
      </div>

      <section className="contact">
        <div className="contact-container">
          <h1 style={{fontFamily:'cursive',fontSize:'48px'}} >Contact Us</h1>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Bennett University, Greater Noida, Uttar Pradesh, India</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <p>+1 234 567 890</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>info@buevents.com</p>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contactus