import React from 'react';

function Google() {

    const searchResult = [
        {
            link: "https://www.websecurity.digicert.com/security-topics/what-is-ssl-tls-https",
            url: "https://www.websecurity.digicert.com",
            title: "What is SSL, TLS and HTTPS? - SSL Certificates",
            description: "SSL stands for Secure Sockets Layer and, in short, it's the standard technology for keeping an internet connection secure and safeguarding any sensitive."
        },
        {
            link: "https://techterms.com/definition/ssl",
            url: "https://techterms.com",
            title: "SSL (Secure Sockets Layer) Definition - TechTerms",
            description: "Secure Socket Layer (SSL) and Transport Layer security are security protocols used to establish a secure connection between Server and Client. A Study of the."
        },
        {
            link: "https://www.abbreviations.com/SSL",
            url: "https://www.abbreviations.com",
            title: "What does SSL stand for? - Abbreviations.com",
            description: "Looking for the definition of SSL? Find out what is the full meaning of SSL on Abbreviations.com! 'Secure Sockets Layer' is one option -- get in to view."
        },
    ]

    return (
        <div>
            {
                searchResult.map((search, index) => {
                   return(
                    <div  className="container">
                    <a className="main-a" href={search.link}>
                        <h3 className="h3">{search.url}</h3>
                        <h1 className="h1">{search.title}</h1>
                    </a>
                    <p className="p">{search.description}</p>
                </div>
                   )
                })
            }
        </div>
    )
}

export default Google;

