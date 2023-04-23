import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card-container font-montserrat'>
        <div className="card w-60 bg-base-100 bg-primary p-3 border-2 border-b-4 border-r-4 border-black rounded-xl">
            <figure><img src={require('../assets/Cardimage.png')} alt="img" className=' rounded-xl border-2 border-black-500' /></figure>
            <div className="card-body ">
                <div className="title-row flex justify-between items-center py-2">
                <h2 className="card-title font-bold text-senary text-xl">Flower!</h2>
                <button className="btn btn-primary bg-quaternary rounded-3xl p-2 border-2 border-black-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                </svg>
                </button>
                </div>
                
                <p className="text-senary text-xs py-2">Everyone wants to know what's happening in the world, but not everyone has the time or patience to sit down.</p>
                <div className="card-actions justify-end">
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card