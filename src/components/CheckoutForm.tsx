import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigation } from 'react-navi'
import { createOne } from '../api/order.api'

type Inputs = {
  name: string
  email: string
  street: string
  city: string
  country: string
  zip: number
  number: string
  date: string
  cvc: number
}

const CheckoutForm: React.FunctionComponent = () => {
  const fullName = localStorage.getItem('name_key') as string
  const emails = localStorage.getItem('email_key') as string

  const { register, handleSubmit, errors } = useForm<Inputs>()
  const navigation = useNavigation()

  const [{ name, email, street, city, country, zip, card, date, cvc }, setRegisterData] = useState({
    name: fullName,
    email: emails,
    street: '',
    city: '',
    country: '',
    zip: '',
    card: '',
    date: '',
    cvc: '',
  })

  const onSubmit: (data: Inputs) => void = (data: Inputs) => {
    console.log('data', data)
    createOne({
      name,
      email,
      street,
      city,
      country,
      zip,
      card,
      date,
      cvc,
    }).then(() => {
      console.log('Created')
    })
    navigation.navigate('/success').then(() => {
      console.log('Navigated')
    })
  }

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2 pb-2">
            Costumer information
          </label>
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            Name
          </label>
          <input
            value={name}
            onChange={(event): void =>
              setRegisterData({
                name: event.target.value,
                email,
                street,
                city,
                country,
                zip,
                card,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && errors.name.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your name.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            E-mail
          </label>
          <input
            value={email}
            onChange={(event): void =>
              setRegisterData({
                name,
                email: event.target.value,
                street,
                city,
                country,
                zip,
                card,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && errors.email.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your e-mail.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            Address
          </label>
          <input
            value={street}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street: event.target.value,
                city,
                country,
                zip,
                card,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Street"
            type="text"
            id="street"
            name="street"
            ref={register({ required: true })}
          />
          {errors.street && errors.street.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your street.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input
            value={city}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street,
                city: event.target.value,
                country,
                zip,
                card,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="City"
            type="text"
            id="city"
            name="city"
            ref={register({ required: true })}
          />
          {errors.city && errors.city.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your city.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            value={country}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street,
                city,
                country: event.target.value,
                zip,
                card,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Country"
            type="text"
            id="country"
            name="country"
            ref={register({ required: true })}
          />
          {errors.country && errors.country.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your country.
            </label>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            value={zip}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street,
                city,
                country,
                zip: event.target.value,
                card,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Zip"
            type="text"
            id="zip"
            name="zip"
            ref={register({ required: true })}
          />
          {errors.zip && errors.zip.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your Zip.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2 pb-2">
            Payment information
          </label>
          <label id="rf" className="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2 pb-2">
            Card
          </label>
          <input
            value={card}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street,
                city,
                country,
                zip,
                card: event.target.value,
                date,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Number"
            type="text"
            id="number"
            name="number"
            ref={register({ required: true })}
          />
          {errors.number && errors.number.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your Card number.
            </label>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
            value={date}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street,
                city,
                country,
                zip,
                card,
                date: event.target.value,
                cvc,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="Expiry Date"
            type="text"
            id="date"
            name="date"
            ref={register({ required: true })}
          />
          {errors.date && errors.date.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your Card expiry date.
            </label>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <input
            value={cvc}
            onChange={(event): void =>
              setRegisterData({
                name,
                email,
                street,
                city,
                country,
                zip,
                card,
                date,
                cvc: event.target.value,
              })
            }
            className="appearance-none block w-full text-gray-700 border border-gray-400
                            rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
            placeholder="CV Code"
            type="password"
            id="cvc"
            name="cvc"
            ref={register({ required: true })}
          />
          {errors.cvc && errors.cvc.type === 'required' && (
            <label
              className="error block tracking-wide text-red-700
                        text-xs font-medium pt-2"
            >
              You must enter your Card CV Code.
            </label>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="w-full text-center py-3 rounded bg-yellow-600 text-white border border-yellow-600
                            hover:bg-transparent hover:border-yellow-600 hover:text-yellow-600 font-bold focus:outline-none"
      >
        Pay
      </button>
    </form>
  )
}

export default CheckoutForm
