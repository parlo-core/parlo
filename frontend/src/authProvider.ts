import { AuthBindings } from "@refinedev/core"

export const TOKEN_KEY = "refine-auth"
const apiUrl = import.meta.env.VITE_API_BASE_URL

export const authProvider: AuthBindings = {
  register: async ({ firstName, lastName, email, password, companyName }) => {
    try {
      const response = await fetch(`${apiUrl}admin/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            company_name: companyName
          }
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        return {
          success: false,
          error: {
            name: "RegistrationError",
            message: errorData.message || "Failed to register"
          }
        }
      }

      const data = await response.json()
      const { user } = data

      localStorage.setItem(TOKEN_KEY, user.token)

      return {
        success: true,
        redirectTo: "/"
      }
    } catch (error) {
      return {
        success: false,
        error: {
          name: "RegistrationError",
          message: "Failed to register due to an unexpected error"
        }
      }
    }
  },
  login: async ({ email, password }) => {
    const response = await fetch(`${apiUrl}admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        error: {
          name: "LoginError",
          message: errorData.message || "Failed to login"
        }
      }
    }

    const data = await response.json()
    const { user } = data
    localStorage.setItem(TOKEN_KEY, user.token)
    return {
      success: true,
      redirectTo: "/"
    }
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY)
    return {
      success: true,
      redirectTo: "/login"
    }
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      return {
        authenticated: true
      }
    }

    return {
      authenticated: false,
      redirectTo: "/login"
    }
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY)
    if (token) {
      return {
        id: 1,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300"
      }
    }
    return null
  },
  onError: async (error) => {
    console.error(error)
    return { error }
  }
}
