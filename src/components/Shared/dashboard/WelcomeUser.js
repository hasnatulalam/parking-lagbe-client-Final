import React, { useContext } from 'react';
import { UserContext } from '../../context/Context';

const WelcomeUser = () => {
    const [state, setState] = useContext(UserContext);
    const { isUser } = useContext(UserContext);

    return (
        <div className='h-96 flex justify-center items-center'>

            <h2 className='text-secondary text-2xl font-bold'>Welcome<span className=' ml-10 text-primary text-5xl font-bold'>{state?.isUser?.name}</span></h2>
        </div>
    );
};

export default WelcomeUser;