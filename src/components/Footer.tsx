import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer bg-gray-700 relative pt-1">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span id="rf" className="font-bold text-xl text-yellow-600 uppercase pb-2 cursor-default">
                About
              </span>
              <span className="my-2">
                <a href="/about" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  About us
                </a>
              </span>
              <span className="my-2">
                <a href="/aboutMe" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  About the author
                </a>
              </span>
              <span className="my-2 pb-4">
                <a href="/aboutProgram" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  About the program
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span id="rf" className="font-bold text-yellow-600 text-xl uppercase mt-4 md:mt-0 pb-2 cursor-default">
                Socials
              </span>
              <span className="my-2">
                <a href="https://www.instagram.com/kristof_erdei/" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  <FontAwesomeIcon icon={faInstagram} /> Instagram
                </a>
              </span>
              <span className="my-2">
                <a href="https://www.facebook.com/erdeikristof98/" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  <FontAwesomeIcon icon={faFacebook} /> Facebook
                </a>
              </span>
              <span className="my-2">
                <a href="https://twitter.com/KristofErdei" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  <FontAwesomeIcon icon={faTwitter} /> Twitter
                </a>
              </span>
              <span className="my-2 pb-4">
                <a href="https://github.com/kristoferdei" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  <FontAwesomeIcon icon={faGithub} /> Github
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span id="rf" className="font-bold text-xl text-yellow-600 uppercase mt-4 md:mt-0 pb-2 cursor-default">
                Information
              </span>
              <span className="my-2">
                <a href="/faq" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  FAQ
                </a>
              </span>
              <span className="my-2">
                <a href="/places" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  Places
                </a>
              </span>
              <span className="my-2">
                <a href="/contact" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  Contact
                </a>
              </span>
              <span className="my-2">
                <a href="tel: +36 30 123 4567" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  <FontAwesomeIcon icon={faPhone} /> +36 1 301 80443
                </a>
              </span>
              <span className="my-2">
                <a href="mailto: erdeikristof@t-online.hu" className="text-white text-lg hover:text-yellow-600 hover:underline">
                  <FontAwesomeIcon icon={faEnvelope} /> edi@coffee.hu
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-white flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p id="rf" className="text-sm text-white font-bold mb-2 cursor-default">
              © 2020 by EdiCoffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
