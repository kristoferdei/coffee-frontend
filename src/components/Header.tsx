import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from 'react-navi'

const Header: React.FunctionComponent = () => {
  const username = localStorage.getItem('name_key')

  const navigation = useNavigation()
  const items = JSON.parse(localStorage.getItem('items') as string)

  const onClick = (): any => {
    if (items.length >= 1) {
      navigation.navigate('/cart').then(() => {
        console.log('ok')
      })
    } else {
      console.log('error')
    }
    window.location.reload()
  }

  return (
    <header className="container mx-auto px-6 py-3 pt-8">
      <div className="flex items-center justify-between">
        <div className="hidden w-full text-gray-600 md:flex md:items-center">
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div id="rf" className="w-full text-gray-700 md:text-center text-3xl font-bold cursor-default">
          EdiCoffee <span className="text-yellow-600">Shop</span>
        </div>
        <div className="flex items-center justify-end w-full">
          <a
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 pr-4 text-gray-600 hover:text-gray-900 hover:underline"
            href="/profile"
          >
            {username}
          </a>
          <a
            onClick={(): void => localStorage.clear()}
            href="/login"
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-600 hover:text-gray-900 focus:outline-none mx-4 sm:mx-0"
          >
            <FontAwesomeIcon size="lg" icon={faSignInAlt} />
          </a>
        </div>
      </div>
      <nav className="sm:flex sm:justify-center sm:items-center mt-4 -mb-4">
        <div className="flex flex-col sm:flex-row">
          <a
            href="/"
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-3 text-gray-600 text-lg hover:underline hover:text-gray-900 sm:mx-3 sm:mt-0"
          >
            Home
          </a>
          <a
            href="/shop"
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-3 text-gray-600 text-lg hover:underline hover:text-gray-900 sm:mx-3 sm:mt-0"
          >
            Products
          </a>
          <button
            onClick={onClick}
            className="transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-110 mt-3 text-gray-600 text-lg hover:underline hover:text-gray-900 sm:mx-3 sm:mt-0"
          >
            Cart
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
