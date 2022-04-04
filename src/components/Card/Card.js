import React from 'react';

const Card = (props) => {
    //console.log(props.review)
    const { name, image, review } = props.review
    return (

        <div className="px-2 py-10 mx-auto bg-slate-200 drop-shadow-2xl rounded-2xl   ">

            <div className="text-center ">
                <img src={image} className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" alt="" />

                <p className="leading-relaxed">{review}</p>

                <div className=''>
                    <span className="inline-block h-1 w-24 rounded bg-red-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-medium tracking-wider text-sm">{name}</h2>
                    <p className="text-gray-500">Senior Product Designer</p>
                </div>

            </div>

        </div>

    );
};

export default Card;