import React from 'react'
import './style.css'
import CountdownTimer from './CountdownTimer'
import { Link } from 'react-router-dom'
import Evcountdown from './Evcountdown'
function Homepage() {

    const Eventdate = "2024-04-30T06:59:59";
    // const Eventdate=Date.now().toString()
    const E1 = "2024-05-05T17:59:59";
    const E2 = "2024-04-15T19:59:59";
    const E3 = "2024-05-05T17:59:59";
    return (
        <>
            <section className="hero" style={{ textAlign: 'center',backgroundImage: `url("hero-background.jpg")` }}>
                <div className="hero-content">
                    <h1 style={{ fontFamily: 'cursive', width: '600px' }}>Welcome to <span style={{ color: 'orange' }}>Events@BU</span></h1>
                    <p>Explore the vibrant world of university events</p>
                    {/* <h1>Comming Soon</h1> */}
                    <div style={{ marginBottom: '24px' }}>
                        <CountdownTimer eventDate={Eventdate} />
                    </div>
                    <Link to="/Upcoming " className="btn" >Explore upcoming events</Link>
                </div>
            </section>
            <section className="about dark-theme">
                <div className="about-content">
                    <h2>About Events@BU</h2>
                    <p>Events@BU is the first centralized platform dedicated to serving all your event-related queries at Bennett University</p>
                    <p>Whether you're a student, faculty member, or visitor, Events@BU is here to streamline your event experience and keep you informed about all the exciting happenings on campus.</p>
                    <p>We aim to enhance the university experience by facilitating easy access to event details, schedules, and registrations.Join the Events@BU community today and unlock a world of exciting events and opportunities right at your fingertips.</p>
                    <Link to="/registration" className='btn'>Register Now!</Link>

                </div>
                <div className="about-image">
                    <img src="about-image.jpg" alt="About Image" />
                </div>
            </section>

            <section className="bu-events">
                <h2>The Last Countdown!</h2>
                <div className="event-items">
                    <div className="event-item">
                        <img src="event1.jpg" alt="event 1" />
                        <h3>Guest Lecture</h3>
                        <p>An insightful discussion on emerging technologies and their impact on society.Join us for a thought-provoking
                            session with industry experts.Prepare to be dazzled as we bring to life.</p>
                        <p><strong>Date:</strong> May 5, 2024</p>
                        <p><strong>Time:</strong> 6:00 PM - 10:00 PM</p>
                        <p><strong>Venue:</strong> Amphitheater</p>
                        <Evcountdown eventDate={E1} />
                        <button style={{
                            display: "inline-block",
                            backgroundColor: "lightblue",
                            // marginTop: '24px',
                            color: "#fff",
                            // padding: "15px 50px",
                            width: '100px',
                            height: '48px',
                            borderRadius: "5px",
                            border: "none",
                            textDecoration: "none",
                            fontWeight: "bold",
                            fontSize: "1.25rem",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}><Link to="/registration" style={{ textDecoration: 'none', padding: '12px' }}>Register</Link></button>
                    </div>
                    <div className="event-item">
                        <img src="event2.jpeg" alt="Event 2" />
                        <h3>Gaming Hackathon</h3>
                        <p>Unleash your creativity in Game Development .Join us for an exhilarating Gaming Hackathon event hosted by BU
                            Events, where innovation meets gaming!</p>
                        <p><strong>Date:</strong> April 15, 2024</p>
                        <p><strong>Time:</strong> 10:00 AM - 12:00 PM</p>
                        <p><strong>Venue:</strong> Lecture Hall A</p>
                        <Evcountdown eventDate={E2} />
                        <button style={{
                            display: "inline-block",
                            backgroundColor: "lightblue",
                            // marginTop: '24px',
                            color: "#fff",
                            // padding: "15px 50px",
                            width: '100px',
                            height: '48px',
                            borderRadius: "5px",
                            border: "none",
                            textDecoration: "none",
                            fontWeight: "bold",
                            fontSize: "1.25rem",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}><Link to="/registration" style={{ textDecoration: 'none', padding: '12px' }}>Register</Link></button>

                    </div>
                    <div className="event-item">
                        <img src="event3.jpg" alt="Event 3" />
                        <h3>UPHORIA</h3>
                        <p>This year, Uphoria 2024 is taking inspiration from the vibrant and joyous celebrations of Indian weddings
                            with our theme “Band Baaja Baraat.” Prepare to be dazzled as we bring to life .
                        </p>
                        <p><strong>Date:</strong> May 5, 2024</p>
                        <p><strong>Time:</strong> 6:00 PM - 10:00 PM</p>
                        <p><strong>Venue:</strong> Amphitheater</p>
                        <Evcountdown eventDate={E3} />
                        <button style={{
                            display: "inline-block",
                            backgroundColor: "lightblue",
                            // marginTop: '24px',
                            // color: "#fff",
                            // padding: "15px 50px",
                            width: '100px',
                            height: '48px',
                            borderRadius: "5px",
                            border: "none",
                            textDecoration: "none",
                            fontWeight: "bold",
                            fontSize: "1.25rem",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}><Link to="/registration" style={{ textDecoration: 'none', padding: '12px' }}>Register</Link></button>
                    </div>
                </div>
            </section>

            <section className="gallery">
                <div className='gallary_container'>
                    <h2>Gallery</h2>
                    <div className="image-grid">
                        <div className="image-item">
                            <img src="gallery1.jpg" alt="Image 1" />
                        </div>
                        <div className="image-item">
                            <img src="gallery2.jpg" alt="Image 2" />
                        </div>
                        <div className="image-item">
                            <img src="gallery3.jpg" alt="Image 3" />
                        </div>
                        <div className="image-item">
                            <img src="gallery4.jpg" alt="Image 4" />
                        </div>
                        <div className="image-item">
                            <img src="Orientation.png" alt="Image 4" />
                        </div>
                        <div className="image-item">
                            <img src="Cricket-Field.jpg" alt="Image 4" />
                        </div>
                        <div className="image-item">
                            <img src="hackathon.jpeg" alt="Image 4" />
                        </div>
                        <div className="image-item">
                            <img src="carrier.jpg" alt="Image 4" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage;