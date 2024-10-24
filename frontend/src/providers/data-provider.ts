import { DataProvider } from "@refinedev/core"
import { TOKEN_KEY } from "../authProvider"

const apiUrl = import.meta.env.VITE_API_BASE_URL + "/admin"

const fetcher = async (url: string, options?: RequestInit) => {
  const token = localStorage.getItem(TOKEN_KEY)

  return fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
      "Authorization": token ?? ""
    }
  })
}

export const dataProvider: DataProvider = {
  getOne: async ({ resource, id }) => {
    const response = await fetcher(`${apiUrl}/${resource}/${id}`, {
      method: "GET"
    })

    if (response.status < 200 || response.status > 299) throw response

    const data = await response.json()

    return { data }
  },
  getApiUrl: () => apiUrl,
  create: async ({ resource, variables }) => {

    const response = await fetcher(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(variables) // Posting list name
    })

    if (response.status < 200 || response.status > 299) throw response

    const data = await response.json()

    return { data }
  },
  // TODO: implement sorting and filtering
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const params = new URLSearchParams()

    if (pagination) {
      if (pagination.pageSize && pagination.current) {
        params.append("page", pagination.current.toString())
        params.append("per_page", pagination.pageSize.toString())
      }
    }

    // if (sorters && sorters.length > 0) {
    //   params.append("_sort", sorters.map((sorter) => sorter.field).join(","));
    //   params.append("_order", sorters.map((sorter) => sorter.order).join(","));
    // }

    // if (filters && filters.length > 0) {
    //   filters.forEach((filter) => {
    //     if ("field" in filter && filter.operator === "eq") {
    //       // Our fake API supports "eq" operator by simply appending the field name and value to the query string.
    //       params.append(filter.field, filter.value);
    //     }
    //   });
    // }

    const response = await fetcher(`${apiUrl}/${resource}?${params.toString()}`)

    if (response.status < 200 || response.status > 299) throw response

    const data = await response.json()
    const { current_page, total_count } = data.meta

    return {
      data: data[resource],
      total: total_count,
      current: current_page
    }
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetcher(`${apiUrl}/${resource}/${id}`, {
      method: "PUT",
      body: JSON.stringify(variables)
    })

    if (response.status < 200 || response.status > 299) throw response

    const data = await response.json()

    return { data }
  },
  deleteOne: async ({ resource, id }) => {
    const response = await fetcher(`${apiUrl}/${resource}/${id}`, {
      method: "DELETE"
    })

    const data = await response.json()

    return { data }
  }
}
