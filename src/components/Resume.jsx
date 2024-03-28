import React from 'react';
import passportImage from './../images/Dhananjay.jpeg';
import './../CSS/Resume.css';


const Resume = () => {
  return (
    <>  
       <body>
           <div className='main'>
                  <div className='top-section'>
                      <img src={passportImage} alt='profile' className='profile'/> 
                       <p className='p1'>Dhananjay Waghachaure</p>
                       <p className='p2'>Software Engineer</p>
                 </div>

                 <div className='clearit'></div>
                 
                
                      <div className='col-div-1'>
                            <div className='content-box'>
                                  <div className='head-main'>
                                      <p className='head'>My Contact</p>
                                      <p className='p3'><span className="material-symbols-outlined">
                                      mail</span>dhananjaycv1829@gmail.com</p>
                                      <p className='p3'><span className="material-symbols-outlined">call</span>+91 9867205980</p>
                                      <p className='p3'><span className="material-symbols-outlined">location_on</span>Airoli,Maharashtra,India</p>
                                     <p className='p3'><span className="material-symbols-outlined">calendar_month</span>Experienced</p>
                                  </div>
                  

                                 <div  className='head-main'><p className='head'>My Skills</p>
                                       <ul className='node'>
                                       <li><span className='p3'>Java</span></li>
                                      <li><span className='p3'>JavaScript</span></li>
                                      <li><span className='p3'>ReactJs</span></li>
                                     <li><span className='p3'>HTML,CSS</span></li>
                                     <li><span className='p3'>MySQL</span></li>
                                      </ul>
                                 </div> 
                         
                           
                                 <div className='head-main'><p className='head'>Personal Details</p>
                                       <ul className='node'>
                                      <li><span className='p3'>BirthDate: 24/06/1994</span></li>
                                     <li><span className='p3'>Gender: Male</span></li>
                                      <li><span className='p3'>Marital-Status: Single</span></li>
                                      <li><span className='p3'>Nationality: Indian</span></li>
                                     </ul>
                                </div>
                         

                          
                                <div className='head-main'><p className='head'>Languages</p>
                                      <ul className='node'>
                                     <li><span className='p3'>English</span></li>
                                    <li><span className='p3'>Marathi</span></li>
                                    <li><span className='p3'>Hindi</span></li>
                                    </ul>
                               </div>


                               <div className='head-main'><p className='head'>Education</p>
                               <div className='sub'>
                                    <p className='heading'>PG Diploma in Advanced Computing </p>
                                    <p className='educ'>Completed In 2023 76.63%</p>
                              </div>

                              <div className='sub'>
                                    <p className='heading'>MGM’s College Of Engineering kamothe, Navi
                                                            Mumbai. Bachelors in Civil Engineering </p>
                                    <p className='educ'>Completed In 2018 CGPA 6.14</p>
                              </div>

                              <div className='sub'>
                                    <p className='heading'>ALC Junior College Of Wada-Palghar </p>
                                    <p className='educ'>HSC Completed 2012.</p>
                              </div>

                               </div>


                         </div>
                   </div>

                  <div className='line'></div>

                 <div className='col-div-2'>
                        <div className='content-box'>
                                <div className='head-main'>
                                          <p className='head'>Profile</p>
                                           <p className='p3' id='prof'> Enthusiastic and motivated React Developer with a
                                                passion for front-end development and creating
                                                engaging user experiences. Recently graduated with
                                                a degree in PG-DAC, eager to leverage theoretical
                                                knowledge and practical skills. Possessing a solid
                                                foundation in Java-Script, HTML, and CSS, with a
                                                keen interest in learning and mastering modern web
                                                develop-ment technologies. Seeking an opportunity
                                                to grow and develop as a professional React
                                                Developer while making meaningful contributions to
                                                impactful projects.
                                                .</p>
                                </div>

                                <div className='head-main'>
                                          <p className='head'>Experience</p>
                                <div className='sub'>
                                        <p className='heading'>Junior Engineer (Sept- 2021 - July-2023)</p>
                                        <p className='sub-heading'>Water Supply Dept Zillah Parishad Palghar, Sub Division Wada (Govt.)</p>
                                        <p className='p-4'>Preparing & Sanctioning Estimate, Billing and Execution of Site Work As per
                                                       DPR, As Well as, Preparing Detail Project Reports, Co-ordination amoung the
                                                       Senior officers about new scheme proposed by State Gov. & Centeral Gov.,
                                                       Attending Meetings.

                                       </p>
                                </div>


                               

                                <div className='sub'>
                                        <p className='heading'>Site Engineer (Aug-2018 - Sep-2019)</p>
                                        <p className='sub-heading'>Jijau Constructions Road Builder PVT.LTD</p>
                                        <p className='p-4'>Dedicated and experienced Road Builder with a proven track record in
                                                         overseeing and managing the construction of roads and highways. Adept at
                                                         coordinating construction activities, ensuring adherence to safety standards,
                                                         and delivering projects within specified timelines. Possesses strong leadership
                                                         and technical skills to drive successful road construction projects from planning
                                                         through completion.
                                        </p>
                                </div>
                        </div>
                        
                        <div className='head-main'>
                               <p className='head'>Projects</p>
                               <div className='sub'>
                                    <p className='heading'>Readme Up! (2-Month) </p>
                                    <p className='educ'>Platform: MS.NET</p>
                              </div>
                              <div className='sub'>
                              <p className='p-4'>Dedicated and experienced Road Builder with a proven track record in
                                                         overseeing and managing the construction of roads and highways. Adept at
                                                         coordinating construction activities, ensuring adherence to safety standards,
                                                         and delivering projects within specified timelines. Possesses strong leadership
                                                         and technical skills to drive successful road construction projects from planning
                                                         through completion.
                                        </p>
                              </div>
                              <div className='sub'>
                                     <p className='heading'>Low Cost Housing (2-Month)</p>
                                     <p className='educ'>Platform: Internet</p>
                              </div>
                              <div className='sub'>
                              <p className='p-4'>Conducts site reconnaissance to examine field conditions drainage and
                                             erosion control needs as built conditions.Tasks will include activities
                                             focused on site specific design of Civil/Site and utility.
                                        </p>
                              </div>
                      </div>

                  </div>
                </div>
             
           </div>
            
        </body>
      
    </>
  )
}

export default Resume
































