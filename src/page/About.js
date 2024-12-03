import React from 'react';
import Sectiononeabout from '../component/About/Sectiononeabout';
import Sectiontwoabout from '../component/About/Sectiontwoabout';
import Sectionthree from '../component/About/Sectionthree';
import Footer from '../component/Footer';
import dataSectioTwo from '../data/About/sectiontwodataabout';
import data from '../data/About/sectionthreedataabout';
import dataSectionFour from '../data/About/sectionfourdataabout';

function About() {
  

  return (
 <div>
  <Sectiononeabout/>
  <Sectiontwoabout data={dataSectioTwo}/>
  <Sectionthree data={data}  />
  <Sectiontwoabout data={dataSectionFour}/>
 </div>
  )
}

export default About
