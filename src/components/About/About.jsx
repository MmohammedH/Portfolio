import React from 'react'
import './About.css'
import th_p from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={th_p} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className='about-right'>
                <div className="about-para">
                    <p>As a Full Stack Developer, I excel in creating seamless, scalable web applications with expertise in both front-end and back-end technologies.</p>
                    <p>I am passionate about continuous learning and delivering user-centric solutions that drive business success.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Express Js</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achievement">
                <h1>500+</h1>
                <p>DSA Questions solved on differnt platform</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Top 10%</h1>
                <p>on Leetcode</p>
            </div>
        </div>
    </div>
  )
}

export default About