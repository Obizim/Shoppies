import React from 'react'

function Footer() {
    

    return (
        <div className="border-t bg-gray-900 text-gray-100 flex items-center justify-between lg:p-12 py-6 px-4 font-quicksand">
             <div><h1 className="text-xl text-red-600">Shopify
             </h1>
             <p>&copy; all rights reserved</p>
             </div>
            <div className="space-x-4 lg:text-2xl text-xl">
            <a href="https://twitter.com/Obizim_" target="_blank" rel="noreferrer"><i className="fab fa-twitter transition hover:text-blue-400" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/Obizim" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/obizim/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in hover:text-blue-500"></i></a>
            </div>
        </div>
    )
}

export default Footer