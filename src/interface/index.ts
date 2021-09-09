export interface MenuItemInterface {
  name: string
  title: string
  params?: Record<string, any>
  exact?: boolean
}

export interface PaginationInterface {
  status?: number | null
  total?: number
  page: number
  limit: number
  [x: string]: any
}

export interface PaginationInterface2 {
  status?: number | null
  total: number
  page: number
  limit: number
}

export interface ParamsInterface {
  page?: number
  limit?: number
  year?: Date | number
  month?: number
  [x: string]: any
}
export interface TabsFile {
  id?: number
  name?: string
  [x: string]: any
}

export interface IErrorRow {
  sheetName: string
  errorCount: number
}

export interface PaginationInterfaceSalary {
  status?: number | null
  total: number
  page?: number
  limit?: number
  [x: string]: any
}
