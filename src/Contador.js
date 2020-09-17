import React , {useState} from 'react';

function Example() {
    const [count,setCount] = useState(0);
    return(
        <div>
            <p>has hecho click {count} veces</p>
            <button onClick={()=>setCount(count + 1)}>click me</button>
        </div>
    );
}
export default Example;