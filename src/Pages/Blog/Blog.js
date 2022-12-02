import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='mb-3 font-bold'>Q:1: Difrence between SQL And NoSQL</p>
            <span>Ans: SQL is the programming language used to interface with relational databases. <br></br>(Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL</span><br></br>

            <p className='mb-3 font-bold'>Q:2-What is JWT, and how does it work?</p>
            <span>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</span><br>
            </br>

            <p className='mb-3 font-bold'>Q:3-What is the difference between javascript and NodeJS</p>
            <span>Ans:JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</span><br></br>

            <p className='mb-3 font-bold'>Q-4:How does Node JS handle multiple requests at the same time?</p>
            <span className='mb-5'>Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</span>
        </div>
    );
};

export default Blog;