import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
function Hero() {

    const [term, setTerm] = useState('');

    function submit(e: React.MouseEvent<HTMLFormElement, MouseEvent>) {
        e.preventDefault();
        console.log(term);
        setTerm('');
    }

    return (
        <div id="hero" className="hero">
            <div className="hero__image">
                Term is: {term}
            </div>
            <form className="hero__form" onSubmit={submit}>
                <TextField id="outlined-basic" label="Search a recepie" variant="outlined" value={term} onChange={e => setTerm(e.target.value)}  />
            </form>
        </div>
    )
}

export default Hero;

// https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80