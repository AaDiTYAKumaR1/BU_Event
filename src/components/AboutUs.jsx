import React from 'react';

const AboutUs = () => {
  return (
    <>
    <div style={{minHeight:'70vh',backgroundColor:'grey',padding:'36px',backgroundColor:'white',}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%'}}>
      <div  style={{maxWidth:'70%' }}>
        <h1  style={{textAlign:'center',fontWeight:'bolder',fontSize:'44px'}}>About Events@BU</h1>
        <div style={{fontFamily:'sans-serif',fontSize:'28px'}}>
          <p  style={{marginBottom:'12px'}}>
            Welcome to Events@BU, your go-to destination for exploring the vibrant world of university events at Bennet University (BU). Whether you're a student, faculty member, alumni, or visitor, our platform provides you with access to a diverse range of events happening on campus.
          </p>
          <p className="mb-4"style={{marginBottom:'12px'}}>
            Our mission is to foster a sense of community, learning, and engagement by showcasing the wide array of events hosted by various departments, clubs, and organizations within the BU community. From academic lectures and workshops to cultural celebrations and recreational activities, there's something for everyone at BU.
          </p>
          <p style={{marginBottom:'12px'}}>
            At Events@BU, we strive to make it easy for you to discover and participate in events that align with your interests and passions. With our user-friendly interface and comprehensive event listings, you'll never miss out on the exciting happenings around campus.
          </p>
          <p>
            Whether you're looking to expand your knowledge, connect with like-minded individuals, or simply have fun, Events@BU is here to enrich your university experience. Join us in exploring all that BU has to offer!
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutUs;
