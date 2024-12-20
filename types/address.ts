// types
import { User } from './user'

/**
 * Inputs
 */

export type AddressUnitNumber = string | null
export type AddressStreetNumber = string
export type AddressStreetName = string
export type AddressSuburb = string
export type AddressState = string
export type AddressCountry = string

/**
 * Models
 */

export interface Address {
  id: string
  unitNumber: AddressUnitNumber
  streetNumber: AddressStreetNumber
  streetName: AddressStreetName
  suburb: AddressSuburb
  state: AddressState
  country: AddressCountry
  createdAt: Date
  updatedAt: Date
  user?: User
  userId?: string
}

/**
 * Forms
 */

export interface AddressCreateAddressFormData {
  unitNumber?: AddressUnitNumber
  streetNumber: AddressStreetNumber
  streetName: AddressStreetName
  suburb: AddressSuburb
  state: AddressState
  country: AddressCountry
}

export interface AddressUpdateAddressFormData {
  unitNumber?: AddressUnitNumber
  streetNumber?: AddressStreetNumber
  streetName?: AddressStreetName
  suburb?: AddressSuburb
  state?: AddressState
  country?: AddressCountry
}

/**
 * Request Bodies
 */

export interface AddressCreateUserAddressReqBody {
  unitNumber?: AddressUnitNumber
  streetNumber: AddressStreetNumber
  streetName: AddressStreetName
  suburb: AddressSuburb
  state: AddressState
  country: AddressCountry
  userId: string
}

export interface AddressUpdateAddressReqBody {
  unitNumber?: AddressUnitNumber
  streetNumber?: AddressStreetNumber
  streetName?: AddressStreetName
  suburb?: AddressSuburb
  state?: AddressState
  country?: AddressCountry
}
