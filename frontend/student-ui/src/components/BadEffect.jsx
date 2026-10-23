import { useEffect,useState } from "react";
function BadEffect(){
    const[calls,setcalls]=useState(0);
    useEffect(()=>{
        if(calls>=20)
            return;
            console.log("Fake Api calls",calls+1);
            setcalls(calls+1);
    },[]);
return <p>Execute Successfully:{calls}</p>
}
export default BadEffect;
