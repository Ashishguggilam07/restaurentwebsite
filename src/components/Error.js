import { useRouteError } from "react-router-dom";

const Error=()=>{

    const {data,status,statusText}=useRouteError();
    
    return (
        

        <>
        <h1>Oops!!</h1>
      <h1>Something went wrong</h1>
      <h2>{data}</h2>
      <h2>{`${status} ${statusText}`}</h2>
        </>
    )
};
export default Error;