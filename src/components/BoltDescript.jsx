
// import React from "react";
// import Button from "./shared/Button";
// import Image from "./shared/Image";

// function SectionOne() {
//   return (
//     <div className="w-100 text-center">
//       <h1>Earn money with Bolt</h1>
//       <Button text={"Driver"} />
//       <Button text={"Courier"} />
//       <Button text={"Restaurant or Store Owner"} />
//       <Button text={"Fleet Owner"} />

//       <div className="d-flex">
//         <div>hdhdbdbcd</div>

//         <img
//           src="https://bolt.eu/static/dbd8bd233040ef350fbe8692cbec3475/1e482/feature-car.webp"
//           alt="Feature car"
//         />
//       </div>
//     </div>
//   );
// }

// export default SectionOne;
import React from "react"

const BoltDescript =({number, title, words})=>{
    return(
        <div className="d-flex gap-3">
            <p className="p-2 rounded-circle text-light d-flex justify-content-center mt-2 align-items-center"
             style={{backgroundColor:"#32bb78", width:"20px", height:"20px"}}>
                {number}
                
            </p>
             
             <div>
                <h3>{title}</h3>
                <p style={{with:"25rem"}}>{words}</p>

             </div>

        </div>

    )
}
export default BoltDescript
