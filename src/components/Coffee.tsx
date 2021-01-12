import React, { useEffect, useState } from 'react'
import { CoffeeApi } from '../api/coffee.api'
import { CoffeeDto } from '../api/dto/coffee.dto'

const Coffee: React.FunctionComponent = () => {
  const [coffees, setCoffees] = useState<CoffeeDto[]>([])
  useEffect(() => {
    async function fetchAll(): Promise<void> {
      const resp = await CoffeeApi.getAll()

      setCoffees(resp)
    }
    fetchAll().then(() => {
      console.log('ok')
    })
  }, [])

  return (
    <main className="mb-8 pb-8">
      <div className="container mx-auto px-6 pt-8">
        <h1 id="rf" className="text-gray-800 text-4xl font-medium cursor-default">
          Coffees
        </h1>
        <span className="mt-3 text-base text-gray-600 pb-8 cursor-default">Discover our coffee offer.</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 pt-4">
          {coffees
            .filter((coffee) => !coffee.order)
            .map((coffee) => (
              <div
                className="w-full max-w-sm mx-auto rounded shadow
                                     overflow-hidden bg-gray-200"
                key={coffee.id}
              >
                <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${coffee.image})` }} />
                <div className="px-5 py-3 bg-white">
                  <h3 id="rf" className="text-gray-800 text-xl font-bold cursor-default">
                    {coffee.name}
                  </h3>
                  <span className="text-gray-700 text-lg mt-2 cursor-default">
                    {coffee.price} Ft
                    <br />
                  </span>
                  <span className="text-gray-600 mt-2 cursor-default">{coffee.size} ml</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}

export default Coffee
