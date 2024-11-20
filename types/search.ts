/**
 * Inputs
 */

export type SearchDevbookQuery = string

/**
 * Forms
 */

export interface SearchDevbookFormData {
  query: SearchDevbookQuery
}

/**
 * Request Bodies
 */

export interface SearchDevbookReqBody {
  query: SearchDevbookQuery
}
