import React from 'react'

const Program: React.FunctionComponent = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="mx-auto px-4 py-8 max-w-xl my-20 bg-transparent">
        <div className="bg-white rounded shadow mb-6 tracking-wide">
          <div className="md:flex-shrink-0">
            <img src="https://i.postimg.cc/CMsjcxJx/program.jpg" alt="program" className="w-full h-64 rounded-lg rounded-b-none" />
          </div>
          <div className="px-4 py-2 mt-2">
            <h2 className="font-bold text-2xl text-gray-800 pb-2 tracking-normal">About the program</h2>
            <p className="text-sm text-gray-700 px-2 mr-1 pb-2">
              On the client page I used HTML5, CSS3, JavaScript technologies with React. The TailwindCSS is responsible for the appearance of the web page. I
              use NodeJS on the server side and PostgreSQL technology on the database side. I used PostgreSQL with a framework called NestJS.
            </p>
            <div className="flex items-center justify-between mt-2 mx-6">
              <a href="/https://github.com/kristoferdei" className="text-yellow-600 hover:text-yellow-800 hover:underline text-base -ml-6 ">
                Github
              </a>
            </div>
            <div className="author flex items-center -ml-3 my-3">
              <div>
                <img className="w-12 h-12 object-cover rounded-full mx-4  shadow" src="https://i.postimg.cc/wvhh8qpF/me.jpg" alt="me" />
              </div>
              <h2 className="text-base tracking-tighter text-gray-900">
                <a href="/aboutMe" className="pr-2 text-gray-800 hover:text-gray-900 hover:underline">
                  Erdei Kristóf
                </a>
                <span className="text-gray-600">2020</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Program
