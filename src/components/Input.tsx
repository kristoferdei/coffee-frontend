import React from 'react'

const Input: React.FunctionComponent<{ onChange: any; value: any }> = ({ onChange, value }) => {
  return (
    <input
      type="number"
      min="1"
      value={value}
      className="w-full text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
      onChange={onChange}
    />
  )
}

export default Input
