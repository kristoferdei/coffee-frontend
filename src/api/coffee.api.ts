import { CoffeeDto } from './dto/coffee.dto'

export class CoffeeApi {
  public static async getAll(): Promise<CoffeeDto[]> {
    const resp = await fetch('http://localhost:4000/coffees/', {
      method: 'GET',
      headers: { 'Access-Control-Allow-Origin': '*' },
    })

    return await resp.json()
  }
}
