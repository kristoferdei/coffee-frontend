import React from 'react'

const Author: React.FunctionComponent = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="container mx-auto max-w-sm rounded overflow-hidden shadow my-2 bg-white">
        <div className="relative z-10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw)' }}>
          <img className="w-full" src="https://i.postimg.cc/wvhh8qpF/me.jpg" alt="Author" />
        </div>
        <div className="pt-6 pb-8 text-gray-800 text-center text-xl">
          <h2>Erdei Kristóf</h2>
          <p className="text-sm text-gray-700">University of Debrecen</p>
          <p className="text-gray-700 text-sm text-justify pt-2 mx-8">
            I am Erdei Kristóf. I grow up in Mátészalka and here finished high school then I continue my studies at the University of Debrecen. I learn Computer
            Science in here.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Author
