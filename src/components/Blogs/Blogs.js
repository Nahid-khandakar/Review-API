import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (

        <div className=' p-10'>
            {/* Question 1 */}
            <div className='outline outline-offset-2 outline-2 outline-red-300 p-8 rounded-md text-justify mt-4'>

                <h1 className=" text-xl lg:text-2xl mb-4 font-medium text-red-500 ">What is CONTEXT API</h1>
                <h3 className='text-xl'>
                    The Context API can be used to share data with multiple components, without having to pass data through props manually.To start with the Context API, the first thing  is create a context using the createContext function from React. The createContext function accepts an initial value, but this initial value is not required.

                    After creating your context, that context now has two React components that are going to be used: Provider and useContext hook.
                    The Provider component is going to be used to wrap the components that are going to have access to our context. The useContext hook receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data .The useContext hook receives a single argument, which is the context that we want to access .
                </h3>
            </div>


            {/* Question 2 */}

            <div className='outline outline-offset-2 outline-2 outline-red-300 p-8 rounded-md text-justify mt-10'>
                <h1 className=" text-xl lg:text-2xl mb-4 font-medium text-red-500 ">Different between inline,block and inline block</h1>
                <h3 className='text-xl'>

                    <span className='text-2xl text-red-400 mr-5'>Inline:</span>
                    The element doesn't start on a new line and only occupy just the width it requires .Inline element allow other elements to sit to their left and right.Inline elements accept only left and right margins and do not accept top and bottom margins.
                    <br />
                    <br />

                    <span className='text-2xl text-red-400 mr-5'>Block:</span>
                    The element will start on a new line and occupy the full width available .Block element accept all the margins including left,right ,top and bottom margins .Examples: div, p, li, main, etc.
                    <br />
                    <br />

                    <span className='text-2xl text-red-400 mr-5'>Inline-block:</span>
                    It's formatted just like the inline element .it doesn't start on a new line , but height and width value can be set.
                </h3>
            </div>


            {/* Question 3 */}

            <div className='outline outline-offset-2 outline-2 outline-red-300 p-8 rounded-md text-justify mt-10'>
                <h1 className=" text-xl lg:text-2xl mb-4 font-medium text-red-500 ">What is HTML Semantic Elements</h1>
                <h3 className='text-xl'>
                    Semantic HTML tags allow  to add meaning in markup so that search engines, screen readers, and web browsers can make sense of it. By default, when a user agent reads your content it does not understand the context and meaning. Semantic HTML tags  serve  a structured content to users, which is especially important for on-page SEO and accessibility.

                    'article' for self-contained blocks such as blog posts and articles,
                    'aside' for sidebars,
                    'nav' for navigation blocks,
                    'section' for thematic content blocks.
                </h3>
            </div>
        </div>



    );
};

export default Blogs;