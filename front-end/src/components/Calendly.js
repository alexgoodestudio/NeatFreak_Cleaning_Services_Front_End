import Iframe from 'react-iframe';

function CalendlyEmbed() {
  return (
    <Iframe url="https://calendly.com/getneatfreakclean/15min"
            width="100%"
            height="600px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allow="fullscreen"/>
  );
}

export default CalendlyEmbed;