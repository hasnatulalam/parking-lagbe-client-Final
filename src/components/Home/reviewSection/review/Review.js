import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import reviewerPng from '../../../assets/images/reviewer.png';
import quotePng from '../../../assets/images/quote.png';
import Rating from '../Rating/Rating';



const Review = (props) => {


    const { name, rating, description } = props.collectreview
   
console.log(rating)

    return (
        <>
            <section id='reviews'>
                <div className="card max-w-xl bg-base-100 shadow-xl ">
                    <div className="card-body ">
                        <div>
                           
                            <div className='flex gap-2 lg:gap-x-7 mt-5'>
                                <div className="avatar">
                                    <div className="lg:w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={reviewerPng} alt="reviewer face" />
                                        <div className="fw-semi-bold text-center">{name} <span>({rating}/5)</span></div>
                       
                                       
                                    </div>
                                </div>
                                <div>
                                <Rating rating={rating}/>
            
                             
                                    <p className='text-md'>{description} </p>

                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <img src={quotePng} alt="" className='lg:h-10 block' />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Review;