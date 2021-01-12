import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { CoffeeApi } from '../api/coffee.api'
import { CoffeeDto } from '../api/dto/coffee.dto'

const Card: React.FunctionComponent = () => {
  const [coffees, setCoffees] = useState<CoffeeDto[]>([])
  let [sortedCoffees, setSortedCoffees] = useState<CoffeeDto[]>([])
  useEffect(() => {
    async function fetchAll(): Promise<void> {
      const resp = await CoffeeApi.getAll()

      setCoffees(resp)
      setSortedCoffees(resp)
    }
    fetchAll().then(() => {
      console.log('ok')
    })
  }, [])

  const [input, setInput] = useState('')
  const handleChange = (e: any): void => {
    e.preventDefault()
    setInput(e.target.value)
  }

  if (input.length > 0) {
    sortedCoffees = sortedCoffees.filter((i) => {
      return i.name.toLowerCase().match(input) || i.name.toUpperCase().match(input) || i.name.match(input)
    })
  }

  const sortAsc = (): void => {
    const sorted = [...coffees].sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
    setSortedCoffees(sorted)
  }

  const sortDesc = (): void => {
    const sorted = [...coffees].sort((a, b) => {
      return b.name.localeCompare(a.name)
    })
    setSortedCoffees(sorted)
  }

  const sortPriceAsc = (): void => {
    const sorted = [...coffees].sort((a, b) => {
      return a.price - b.price
    })
    setSortedCoffees(sorted)
  }

  const sortPriceDesc = (): void => {
    const sorted = [...coffees].sort((a, b) => {
      return b.price - a.price
    })
    setSortedCoffees(sorted)
  }

  const [value, setValue] = useState<number>(190)

  const handleSlide = (e: any): void => {
    setValue(e.target.value)
    const sorted = [...coffees].filter((a) => {
      return a.price <= value
    })
    setSortedCoffees(sorted)
  }

  return (
    <main className="mb-8 pb-8">
      <div className="relative mt-8 max-w-md mx-auto">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <FontAwesomeIcon className="text-gray-500" icon={faSearch} />
        </span>
        <input
          className="w-full border rounded py-2
                   focus:border-gray-700 focus:outline-none focus:outline-none text-center"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={input}
        />
      </div>
      <div className="mt-6 max-w-md mx-auto flex justify-center">
        <p className="mr-2 rounded text-gray-600 px-2 py-1 w-20 focus:outline-none cursor-default">Sort by:</p>
        <button
          onClick={sortAsc}
          className="mr-4 rounded border border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
        >
          A-Z
        </button>
        <button
          onClick={sortDesc}
          className="mr-4 rounded border border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
        >
          Z-A
        </button>
        <p className="rounded text-gray-600 px-2 py-1 w-20 focus:outline-none cursor-default">Price:</p>
        <button
          onClick={sortPriceAsc}
          className="mr-4 rounded border border-gray-400 hover:border-gray-700 text-gray-500 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button
          onClick={sortPriceDesc}
          className="rounded border border-gray-400 hover:border-gray-700 text-gray-500 hover:text-gray-900 px-2 py-1 w-16 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
      <div className="mt-4 mb-4 max-w-md mx-auto flex justify-center">
        <p className="-mr-6 ml-8 rounded text-gray-600 px-2 py-1 w-20 focus:outline-none">Range:</p>
        <p className="rounded text-gray-600 flex justify-end pr-2 py-1 w-20 focus:outline-none cursor-default">100 Ft</p>
        <input type="range" list="marks" min="100" max="190" step="10" onChange={handleSlide} value={value} style={{ width: '50%' }} />
        <datalist id="marks">
          <option value="100" />
          <option value="110" />
          <option value="120" />
          <option value="130" />
          <option value="140" />
          <option value="150" />
          <option value="160" />
          <option value="170" />
          <option value="180" />
          <option value="190" />
        </datalist>
        <p className="mr-2 rounded text-gray-600 px-2 py-1 w-20 focus:outline-none cursor-default">190 Ft</p>
      </div>
      <div className="container mx-auto px-6 pt-8">
        <h1 id="rf" className="text-gray-800 text-4xl font-medium cursor-default">
          Coffees
        </h1>
        <span className="text-base text-gray-600 cursor-default">Buy our coffee capsules so we can be there in your home too.</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {sortedCoffees
            .filter((coffee) => coffee.order)
            .map((coffee) => (
              <div
                className="w-full max-w-sm mx-auto rounded shadow
                                     overflow-hidden bg-gray-200"
                key={coffee.id}
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover
                                         bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${coffee.image})` }}
                >
                  <button
                    className="bg-yellow-600 p-2 rounded-full h-12 w-12 text-white mx-5 -mb-6 hover:bg-yellow-500 focus:outline-none"
                    onClick={(): any => {
                      let itemsArray: Array<object> = []
                      if (localStorage.getItem('items') !== null) {
                        itemsArray = JSON.parse(localStorage.getItem('items') as string)
                      }
                      itemsArray.push(coffee)
                      localStorage.setItem('items', JSON.stringify(itemsArray))
                      window.location.reload()
                    }}
                  >
                    <FontAwesomeIcon size="sm" icon={faShoppingCart} />
                  </button>
                </div>
                <div className="px-5 py-3 bg-white">
                  <h3 id="rf" className="text-gray-800 text-xl font-bold cursor-default">
                    {coffee.name}
                  </h3>
                  <span className="text-gray-700 text-lg mt-2 cursor-default">
                    {coffee.price} Ft
                    <br />
                  </span>
                  <span className="text-gray-600 mt-2 cursor-default">{coffee.description}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}

export default Card
