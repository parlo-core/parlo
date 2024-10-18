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
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(`${apiUrl}/${resource}/${id}`)

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
  // TODO: implement pagination, sorting, and filtering
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const params = new URLSearchParams()

    // if (pagination) {
    //   params.append("_start", (pagination.current - 1) * pagination.pageSize);
    //   params.append("_end", pagination.current * pagination.pageSize);
    // }

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

    return {
      data: data[resource],
      total: 0
    }
  },
  update: () => {
    throw new Error("Not implemented")
  },
  deleteOne: () => {
    throw new Error("Not implemented")
  }
}
