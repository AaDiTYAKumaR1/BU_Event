import React from 'react';
import './Upcoming.css'
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  // Sample data for upcoming events
  const events = [
    {
      id: 1,
      title: 'Uphoria',
      date: '2024-04-15',
      location: 'Auditorium',
      description: 'A festival that will ignite your senses and excite you. Uphoria is an annual cultural fest held annually at Bennett University. It is inspired by the term “euphoric” which is our way of spreading happiness and creating unforgettable memories for every one of you .This year, Uphoria 2024 is taking inspiration from the vibrant and joyous celebrations of Indian weddings with our theme “Band Baaja Baraat.” Prepare to be dazzled as we bring to life the colorful traditions and energetic spirit of these festivities through a visually stunning brand kit that captures the essence of our theme. Get ready to immerse yourself in a whirlwind of captivating events spanning music, art, theatre, dance, and more. Our festival is designed to rejuvenate and uplift your spirits, leaving you with a pure bliss that will stay long after the festivities.',
      img: "../../public/event3.jpg"
    },
    {
      id: 2,
      title: 'Zenivia',
      date: '2024-05-10',
      location: 'Football Ground',
      description: 'Bennet University organized its most awaited three-day annual cultural tech fest, Zenevia-Uphoria, 2022, at the campus, which was all about a festive and high-octane musical treat to Bennettians. The event at one of the top universities in Delhi had some spectacular moments for the students and by the students, from comedians to star performers, and made a kick start to the new academic year of the students with pomp and frolic.',
      img: '../../public/UXZ-2.jpg'
    },
    {
      id: 3,
      title: 'Blue Moon',
      date: '2024-06-20',
      location: 'Cricket Ground',
      description: 'Yes, you heard it right; Bluemoon 8.0 is back with extravagant buzz this year to celebrate the arrival of freshers! While embarking on a varsity journey, the platform is meant for showcasing freshers passionate talents and set the stage upright with beaming zeal. The intense event also crowns motivating titles, Ms Freshers, Mr. Fresher and myriad other titles to make the sundowner event a memoir of a lifetime.It is an opportunity for new students to get acquainted with the universitys culture, facilities, and resources, as well as to meet their fellow classmates and faculties. Bluemoon will create a sense of belonging, provide information and guidance to newcomers, and make them feel comfortable and welcomed at their new academic transformational journey.',
      img: '../../public/fullmoon.jpg'

    },
    {
      id:4,
      title:'Bennovate 3.0',
      date: '2024-10-05',
      location:'Amphitheater',
      description:'Centre for Innovation & Entrepreneurship and Bennett Hatchery are thrilled to announce Bennovate 3.0, a celebration of the spirit of Entrepreneurship. Set to take place in Nov-Dec 2024 on the vibrant Bennett University campus, Bennovate 3.0 is not just an event; its  a convergence of innovative minds, trailblazing ideas, and limitless possibilities.',
      img:'Bennovate.jpg',
    }
  ];
  const slideKeyframes = {
    '0%': {
      transform: 'translateX(100%)'
    },
    '100%': {
      transform: 'translateX(-100%)'
    }
  };
  //   style={{ 
  //     whiteSpace: 'nowrap',
  //     animationName: slideKeyframes,
  //     animationDuration: '5s',
  //     animationTimingFunction: 'linear',
  //     animationIterationCount: 'infinite'
  //   }}
  return (
    <div style={{
      margin: '0 auto',
      padding: '32px 16px',
      maxWidth: '100%',
      boxSizing: 'border-box',

      // backgroundColor:'#333121'
    }}>
      <h2 className='moving-text' style={{
        fontSize: '5.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
        fontFamily: 'cursive',
        fontSize: '5.5rem',
        position: 'relative',
        //    animationDirection:'

        //   fontWeight: 'bold',
        //   marginBottom: '1rem',
        //   textAlign: 'center',
        //   fontFamily: 'cursive',


      }}>Upcoming Events</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem',
        '@media (min-width: 640px)': {
          gridTemplateColumns: 'repeat(2, 1fr)'
        },
        '@media (min-width: 768px)': {
          gridTemplateColumns: 'repeat(3, 1fr)'
        }
      }}>
        {events.map(event => (
          <div key={event.id} style={{
            backgroundColor: '#fff',
            display: 'flex',
            borderRadius: '1.5rem',
            boxShadow: '6px 12px 7px rgba(0, 0, 0, 0.5)',
            padding: '1.5rem',
            justifyContent: 'space-between',
            backgroundColor: '#121333',
            color: 'white',
          }}>
            <div><h3 style={{
              fontSize: '3rem',
              fontWeight: '600',
              marginBottom: '0.5rem'
            }}>{event.title}</h3>
              <p style={{
                fontSize: '2rem',
                color: '#6b7280',
                marginBottom: '0.5rem',
                color: 'white',
                marginRight: "12px"
              }}>
                Date: {new Date(event.date).toLocaleDateString()} | Location: {event.location}
              </p>
              <p style={{
                color: 'white',
                fontWeight: 'bold',
                // display:'flex',
                // flexWrap:'wrap',
                fontSize: '22px'
              }}>{event.description}</p>
              <button style={{
                display: "inline-block",
                backgroundColor: "lightgreen",
                marginTop:'24px',
                color: "#fff",
                // padding: "15px 50px",
                width: '100px',
                height:'48px',
                borderRadius: "5px",
                border: "none",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1.25rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}><Link to="/registration" style={{textDecoration:'none',padding:'12px'}}>Register</Link></button>
            </div>
            <img src={event.img} alt="Event" style={{ minWidth: '860px', height: '420px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
