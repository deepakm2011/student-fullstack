import { useEffect,useState } from "react";
function Sample(){
const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    console.log("Component loaded");
  }, []);
  useEffect(() => {
    console.log("Seconds changed to", seconds);
  }, [seconds]);

  return <button onClick={() => setSeconds(seconds + 1)}>{seconds}</button>;
}
export default Sample;