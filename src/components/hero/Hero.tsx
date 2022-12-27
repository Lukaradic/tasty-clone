import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Hero.scss';
function Hero() {

    const [term, setTerm] = useState('');

    function submit(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
        e.preventDefault();
        setTerm('');
    }

    return (
        <div id="hero" className="hero">
            <form className="hero__form" onSubmit={submit}>
                <TextField id="outlined-basic" className="hero__form--input" label="Search a recepie" variant="filled" value={term} onChange={e => setTerm(e.target.value)} fullWidth />
            </form>
        </div>
    )
}

export default Hero;
