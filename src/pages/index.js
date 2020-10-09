//Importing from node-modules
import React, { useState, useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css";

//Import Shape Components
import Circle from '../components/Circle'
import Square from '../components/Square';
import Bread from '../components/Bread';
import Tongue from '../components/Tongue';

//Define Color Constants
const Yellow = '#FFE81A';
const Green = '#1AFF68';
const Cyan = '#2EFAFA';
const White = '#FFF';

//Initialize AOS
const IndexPage = () => {
  useEffect(()=> {
    Aos.init({duration: 1000});
  }, []);

//Actual Meat of the Project in JSX
  return  (
    <div className="grid">
      <h1 class="header"><a href="https://github.com/hwlee40/react-puzzle">View on Github</a> </h1>
      <div data-aos="fade-up" data-aos-delay="0"><Bread color={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Tongue color={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Bread color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Circle color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Tongue color= {White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Tongue color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Bread color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Bread color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Tongue color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Tongue color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Square color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Bread color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Square color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Bread color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Circle color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Bread color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Tongue color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Tongue color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Bread color={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Tongue color={White} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Bread color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Circle color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Tongue color= {White} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Tongue color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Bread color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Circle color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Bread color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Tongue color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Tongue color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Bread color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Square color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Bread color= {Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Circle color= {Green} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Bread color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Square color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Bread color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Tongue color ={Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Tongue color ={Cyan} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="0"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="50"><Tongue color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="100"><Circle color= {Yellow} /></div>
      <div data-aos="fade-up" data-aos-delay="150"><Square color ={White} /></div>
      <div data-aos="fade-up" data-aos-delay="200"><Circle color ={Green} /></div>
      <div data-aos="fade-up" data-aos-delay="250"><Tongue color ={Green} /></div>
    </div>
  );
};
//Export
export default IndexPage
