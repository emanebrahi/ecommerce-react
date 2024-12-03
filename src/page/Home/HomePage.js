import React from 'react'
import Sliderproducts from '../../component/Home/TimerComponent/Sliderproducts'
import Sectiontwoabout from '../../component/About/Sectiontwoabout'
import Thismonth from '../../component/Home/Thismonth'
import Homesectionone from '../../component/Home/SectionOne/Homesectionone'
import Bestselling from '../../component/Home/BestSelling/Bestselling'
import Categories from '../../component/Home/Ctegories/Categories'
import dataSectionFour from '../../data/About/sectionfourdataabout'
import Explorecomponent from '../../component/Home/Explore/Explorecomponent'
import NewarrivalSection from '../../component/Home/NewArrival/NewarrivalSection'

function HomePage() {
  return (
    <div>
      <Homesectionone/>
      <Sliderproducts/>
      <Categories/>
      <Thismonth/>
      <Bestselling/>
      <div>
      <Explorecomponent/>

      </div>
      <div>
      <NewarrivalSection/>

      </div>
      <Sectiontwoabout data={dataSectionFour}/>

    </div>
  )
}

export default HomePage
