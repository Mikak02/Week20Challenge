import React from 'react';

const About = () => {
    return(
        <div className='bg-light row'>
            <div className='col-2'></div>
            <div className='container col-4'>
                <div className='card p-3'>
                <h4 className='text-center'>About Mika</h4>
                <p>My name is Mika and I currently make coffees for thirsty customers at Target. When I'm not at work
                    I like to cry over React. Like really cry. I have been frantically referring back to the module, watching many
                    of the millions of React tutorials on Youtube, and asking friends for help all day, but I am now out of time
                    and will be turning in an project that doesn't meet the full requirements.</p>
                
                </div>
                <div className='card p-3'>
                <h6 className='text-center'>What I've Learned From this Project</h6>
                <ul>
                    <li>The components folder needs to be in the src directory</li>
                    <li>You have to make sure you're in the root directory before npm install or attempting to start
                        the server because if you're in the folder above it won't work. And you'll feel really stupid
                        3 hours later when you realize what's wrong.</li>
                </ul>
                </div>
                <div className='card p-3'>
                    <h6>What I Still Need to Learn</h6>
                    <ul>
                        <li>Hooks, I thought I knew how to use them, but React disagrees.
                        </li>
                        <li>Navigation Bars, I used almost the exact same template from the module and it wouldn't compile.</li>
                    </ul>
                </div>
            </div>
            <div className='col-2'></div>
        </div>
    )
}

export default About;