import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (

        <div>
            {/* Question 1 */}
            <div>
                <h1>What is CONTEXT API</h1>
                <h3>
                    The Context API can be used to share data with multiple components, without having to pass data through props manually.To start with the Context API, the first thing  is create a context using the createContext function from React. The createContext function accepts an initial value, but this initial value is not required.

                    After creating your context, that context now has two React components that are going to be used: Provider and useContext hook.
                    The Provider component is going to be used to wrap the components that are going to have access to our context. The useContext hook receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data .The useContext hook receives a single argument, which is the context that we want to access .
                </h3>
            </div>
        </div>

    );
};

export default Blogs;