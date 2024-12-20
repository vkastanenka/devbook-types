import { User } from './user'

/**
 * Models
 */

export interface AuthSession {
  id: string
  expires: Date
  createdAt: Date
  updatedAt: Date
  user?: User
  userId: string
}

/**
 * Forms
 */

export interface AuthLoginFormData {
  email: string
  password: string
}

export interface AuthRegisterFormData {
  name: string
  email: string
  username: string
  password: string
}

export interface AuthSendResetPasswordTokenFormData {
  email: string
}

export interface AuthResetPasswordFormData {
  password: string
}

export interface AuthUpdatePasswordFormData {
  currentPassword: string
  newPassword: string
}

/**
 * Request Bodies
 */

export type AuthLoginReqBody = AuthLoginFormData
export type AuthRegisterReqBody = AuthRegisterFormData
export type AuthSendResetPasswordTokenReqBody =
  AuthSendResetPasswordTokenFormData
export type AuthResetPasswordReqBody = AuthResetPasswordFormData
export type AuthUpdatePasswordReqBody = AuthUpdatePasswordFormData
