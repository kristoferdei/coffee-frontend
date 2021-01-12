import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from 'react-navi'
import Input from './Input'

const CartTable: React.FunctionComponent = () => {
  const items = JSON.parse(localStorage.getItem('items') as string)
  const navigation = useNavigation()

  const deleteItem = (id: any): any => {
    let del: Array<any> = []
    if (localStorage.getItem('items') !== null) {
      del = JSON.parse(localStorage.getItem('items') as string)
      localStorage.setItem('items', JSON.stringify(del.filter((item: any) => item.id !== id)))
      window.location.reload()
    }
  }

  const deleteAll = (): any => {
    localStorage.removeItem('items')
    const itemsArray: any = []
    localStorage.setItem('items', JSON.stringify(itemsArray))
    window.location.reload()
  }

  const onClick = (): any => {
    if (items.length < 1) {
      console.log('error')
    } else {
      navigation.navigate('/checkout').then(() => {
        console.log('ok')
      })
    }
  }

  const [count, setCount] = useState(1 as any)

  const onChange = (event: { target: { value: any } }): any => {
    setCount(event.target.value)
  }

  const result = items.reduce(function (tot: any, arr: any) {
    return tot + arr.price * count
  }, 0)

  const shipping = 690

  return (
    <main className="flex justify-center bg-white h-screen w-screen">
      <div className="overflow-y-auto m-6 flex flex-col w-full p-8 text-gray-800 bg-white pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellSpacing="0">
            <thead>
              <tr className="h-12 uppercase">
                <th className="hidden md:table-cell" />
                <th id="rf" className="text-left text-lg text-gray-800 font-bold cursor-default">
                  Product
                </th>
                <th className="lg:text-right text-left pl-5 lg:pl-0">
                  <span id="rf" className="lg:hidden text-lg text-gray-800 font-bold">
                    Qtd
                  </span>
                  <span id="rf" className="hidden lg:inline text-gray-800 text-lg font-bold cursor-default">
                    Quantity
                  </span>
                </th>
                <th id="rf" className="hidden text-right md:table-cell text-gray-800 text-lg font-bold cursor-default">
                  Unit price
                </th>
                <th id="rf" className="text-right text-gray-800 text-lg font-bold cursor-default">
                  Total price
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item: any) => (
                <tr key={item.id}>
                  <td className="hidden pb-4 md:table-cell">
                    <img src={item.image} className="w-20 rounded" alt="item" />
                  </td>
                  <td>
                    <p className="mb-2 md:ml-4 text-yellow-600 text-xl font-bold cursor-default">{item.name}</p>
                    <button className="text-gray-700 md:ml-4 outline-none focus:outline-none" onClick={(): any => deleteItem(item.id)}>
                      <small className="hover:text-gray-900 hover:underline">(Remove item)</small>
                    </button>
                  </td>
                  <td className="justify-center md:justify-end md:flex mt-6">
                    <div className="w-20 h-10">
                      <div className="relative flex flex-row w-full h-8">
                        <Input value={count} onChange={onChange} />
                      </div>
                    </div>
                  </td>
                  <td className="hidden text-right md:table-cell">
                    <span className="text-sm lg:text-lg text-gray-700 cursor-default">{item.price} Ft</span>
                  </td>
                  <td className="text-right">
                    <span className="text-sm lg:text-lg font-medium text-gray-700 cursor-default">{item.price * count} Ft</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className="mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2">
              <button
                onClick={deleteAll}
                className="p-3 bg-gray-700 border border-gray-700 hover:text-gray-900 hover:border-gray-700 hover:bg-transparent rounded ml-2 uppercase text-white focus:outline-none"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-full">
              <div className="p-4 bg-gray-200 rounded">
                <h2 id="rf" className="ml-2 font-bold text-xl uppercase text-gray-800 cursor-default">
                  Order Details
                </h2>
              </div>
              <div className="p-4">
                <p className="mb-6 italic text-gray-700 cursor-default">Tax and additional costs are calculated based on values you have entered.</p>
                <div className="flex justify-between border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-900 cursor-default">Subtotal</div>
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-medium text-center text-gray-900 cursor-default">{result} Ft</div>
                </div>
                <div className="flex justify-between pt-4 border-b">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-900 cursor-default">Shipping</div>
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-medium text-center text-gray-900 cursor-default">{shipping} Ft</div>
                </div>
                <div className="flex justify-between pt-4 border-b mb-8">
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-900 cursor-default">Total</div>
                  <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-medium text-center text-gray-900 cursor-default">{result + shipping} Ft</div>
                </div>
                <button
                  className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-yellow-600 border border-yellow-600 hover:text-yellow-600 hover:border-yellow-600 hover:bg-transparent font-bold rounded item-center focus:outline-none"
                  onClick={onClick}
                >
                  <FontAwesomeIcon size="lg" icon={faCreditCard} />
                  <span className="ml-2 mt-5px">Proceed to checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default CartTable
