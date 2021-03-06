import Axios, { AxiosRequestConfig } from 'axios'

export interface Credentials {
  name: string
  email: string
  street: string
  city: string
  country: string
  zip: string
  card: string
  date: string
  cvc: string
}

export const createOne = async (data: Credentials): Promise<any> => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'http://localhost:4000/orders',
    data,
  }

  try {
    const { data: token } = await Axios.request(requestConfig)
    return {
      token,
    }
  } catch (e) {
    console.error(e)
    return { error: e.response.data.message }
  }
}
