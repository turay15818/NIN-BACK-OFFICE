import React from 'react'
import Pending from "../../auths/login/icons/pending.webp"
import Approved from "../../auths/login/icons/approved.png"
import Rejected from "../../auths/login/icons/reject.png"

const details = [{
  id: 1,
  type: "Approved",
  total: "234",
  src: Approved,
},

{
  id: 1,
  type: "Pending",
  total: "3",
  src: Pending,
},
{
  id: 1,
  type: "Rejected",
  total: "10",
  src: Rejected,
}
]


const Statistics = () => {
  return (
    <>
    <div className="p-3 flex gap-5 mt-5">
 
 {details.map( (detail) => (
<div key={detail.id} className="bg-gray-200 p-5 rounded-2xl shadow-md shadow-black/200 w-full max-h-[150px] min-w-[300px]">

  <div className='flex items-center justify-around'>
    <div>
     <img src={detail.src} alt="" className="w-14" />
    </div>
    <h1 className="text-2xl font-bold">{detail.type}</h1>
  </div>

<div className="h-1 bg-gray-300 rounded-full my-2" />

<h4 className='text-center text-4xl font-bold'>{detail.total}</h4>
</div>

 ) )}

</div>
</>
  )
}

export default Statistics