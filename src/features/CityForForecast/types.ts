export type CityForForecastState = {
  latitude?: number
  longitude?: number
}

export interface SearchResponse {
  results: CityProps[]
  generationtime_ms: number
}

export interface CityProps {
  id: number
  name: string
  latitude: number
  longitude: number
  elevation: number
  feature_code: string
  country_code: string
  admin1_id: number
  timezone: string
  population?: number
  country_id: number
  country: string
  admin1: string
  admin2_id?: number
  postcodes?: string[]
  admin2?: string
  admin3_id?: number
  admin3?: string
}
