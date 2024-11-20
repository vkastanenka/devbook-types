// types
import { User } from './user'
import { Prisma } from '@vkastanenka/devbook-prisma'

/**
 * Fields
 */

export type CommentBody = string
export type PostBody = string

/**
 * Models
 */

// Comment

export interface Comment {
  id: string
  body: CommentBody
  createdAt: string
  updatedAt: string
  parentComment?: Comment
  parentCommentId?: string
  post?: Post
  postId: string
  user?: User
  userId: string
  subComments?: Comment[]
  _count?: { subComments?: number }
}

// Post

export enum PostType {
  DEFAULT,
  EVENT,
  ARTICLE,
}

export interface Post {
  id: string
  body: PostBody
  postType: PostType
  createdAt: string
  updatedAt: string
  user?: User
  userId: string
  comments?: Comment[]
  postLikes?: PostLike[]
  _count?: {
    comments?: number
    postLikes?: number
  }
}

// PostLike

export interface PostLike {
  id: string
  createdAt: string
  updatedAt: string
  post?: Post
  postId: string
  user?: User
  userId: string
}

/**
 * Forms
 */

// Comment

export interface PostCreateCommentFormData {
  body: string
}

export interface PostUpdateCommentFormData {
  body?: string
}

// Post

export interface PostCreatePostFormData {
  body: string
}

export interface PostUpdatePostFormData {
  body?: string
}

/**
 * Request bodies
 */

// Comment

export interface PostReadCommentRelationQueryReqBody {
  include?: Prisma.CommentInclude
}

export interface PostCreateCommentReqBody {
  body: CommentBody
  parentCommentId?: string | null
  postId: string
  userId: string
}

export interface PostUpdateCommentReqBody {
  body?: CommentBody
}

// Post

export interface PostReadPostRelationQueryReqBody {
  include?: Prisma.PostInclude
}

export interface PostReadPostReqBody {
  body: PostBody
  userId: string
}

export interface PostCreatePostReqBody {
  body: PostBody
  userId: string
}

export interface PostUpdatePostReqBody {
  body?: PostBody
}

// PostLike

export interface PostCreatePostLikeReqBody {
  postId: string
  userId: string
}
