import { AuthBindings } from "@refinedev/core";

export const TOKEN_KEY = "refine-auth";

export const authProvider: AuthBindings = {
  register: async ({ firstName, lastName, email, password, companyName }) => {
    // For now, we didn't send a request, and we save the token in localStorage.
    // In real world, we will send a request and the token will be saved in a more secure place.
    localStorage.setItem("token", email);
    alert("You have successfully completed sign up!");
    return {
      success: true,
    };
  },
  login: async ({ email, password }) => {
    // TODO: handle login
    // const {status} = handleLogin(email, password);
    //
    // if (status === 200) {
    //   return { success: true, redirectTo: "/dashboard" };
    // } else {
    //   return {
    //     success: false,
    //     error: {
    //       name: "LoginError",
    //       message: "Invalid username or password",
    //     },
    //   };
    // }

    // TODO: remove this block
    if (email && password) {
      localStorage.setItem(TOKEN_KEY, email);
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    localStorage.removeItem(TOKEN_KEY);
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      return {
        id: 1,
        name: "John Doe",
        avatar: "https://i.pravatar.cc/300",
      };
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
