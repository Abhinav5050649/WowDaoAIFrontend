import React from 'react';
import axios from 'axios';
import {NavBar} from '../components/NavBar';

export const Home = () => {
    return(
        <>
            <NavBar/>
            <br/>
            <div className='mainhomeclass'>
                <div className='content1'>
                    <blockquote class="blockquote">
                        <p class="mb-0">A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className='content2'>
                    <p>An example of the input and output:</p>
                    <img src="..." class="rounded float-left" alt="..."></img>
                    <img src="..." class="rounded float-right" alt="..."></img>
                </div>
                <div className='content3'>
                <blockquote class="blockquote text-center">
                    <p class="mb-0">Made By:</p>
                    <footer class="blockquote-footer">Team <cite title="Source Title">Byte Hogs</cite></footer>
                </blockquote>
                </div>
            </div>
        </>
    )
}

export default Home;