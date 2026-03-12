
import React from 'react';

import Slider from "./Slider";
import AboutCBIP from "./AboutCBIP";
import VisionMission from "./VisionMision";
import UpcomingEvents from './UpcomingEvents';
import CBIPAnnouncement from "./CBIPAnnouncement";
import AssociatedBodies from './AssociatedBodies';

const HomeMain = () => {
  return (
    <div>
      <Slider />
      <AboutCBIP/>
      <VisionMission />
      <UpcomingEvents/>
      <CBIPAnnouncement/>
      <AssociatedBodies/>
      
    </div>
  );
};

export default HomeMain;