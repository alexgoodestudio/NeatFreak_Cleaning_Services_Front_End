import Iframe from 'react-iframe';

function CalendlyEmbed() {
  return (
    <Iframe url="https://calendly.com/getneatfreakclean"
            width="100%"
            height="600px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
  );
}

export default CalendlyEmbed;