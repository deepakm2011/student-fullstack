function BrokenCounter(){
    let count=0;
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>{count++;console.log(count);}}>+1</button>
        </div>
    )
}
export default BrokenCounter;


// Architecture 
// browser(react App,port 5173)
//            | http request(json)
//         springBootApi(8080)
//              |
//           Mysql Database

//           cors