import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from 'react-navi'

const Success: React.FunctionComponent = () => {
  const navigation = useNavigation()

  const onClick = (): any => {
    localStorage.removeItem('items')
    const itemsArray: any = []
    localStorage.setItem('items', JSON.stringify(itemsArray))
    navigation.navigate('/shop').then(() => {
      console.log('ok')
    })
  }

  return (
    <main className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
      <div className="relative flex bg-yellow-600 max-w-xl h-64 mb-4 rounded">
        <div className="w-16 bg-yellow-700 rounded-l">
          <div className="p-4 text-white">
            <FontAwesomeIcon size="2x" icon={faCheckCircle} />
          </div>
        </div>
        <div className="w-auto text-grey-darker items-center p-4">
          <h2 id="rf" className="text-2xl font-bold text-white pb-4 cursor-default">
            Successful purchase!
          </h2>
          <p className="leading-tight pt-8 text-white text-justify cursor-default">
            Your order has been placed and we will contact you shortly. Thank you for choosing us. We look forward to seeing you again next time!
          </p>
        </div>
        <div className="absolute bottom-0 left-0 flex items-center mt-4 text-gray-700 pl-20 pb-4">
          <button
            className="bg-transparent border border-white text-lg text-white
                        hover:text-gray-900 hover:border-white hover:bg-white font-medium py-2 px-4 rounded focus:outline-none"
            onClick={onClick}
          >
            Back
          </button>
        </div>
      </div>
    </main>
  )
}

export default Success
