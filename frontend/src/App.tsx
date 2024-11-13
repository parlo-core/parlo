import { Authenticated, Refine } from "@refinedev/core"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"

import { ErrorComponent, notificationProvider, RefineSnackbarProvider, ThemedLayoutV2 } from "@refinedev/mui"

import CssBaseline from "@mui/material/CssBaseline"
import GlobalStyles from "@mui/material/GlobalStyles"
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier
} from "@refinedev/react-router-v6"
import { dataProvider } from "./providers/data-provider"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import { authProvider } from "./authProvider"
import { Header } from "./components"
import { ColorModeContextProvider } from "./contexts/color-mode"
import { ForgotPassword } from "./pages/forgotPassword"
import { Login } from "./pages/login"
import { Register } from "./pages/register"
import { ListCreate, ListEdit, ListList, ListShow } from "./pages/lists"
import { ContactCreate, ContactEdit, ContactShow } from "./pages/contacts"

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: "lists",
                  list: "/lists",
                  create: "/lists/create",
                  edit: "/lists/edit/:id",
                  show: "/lists/show/:id",
                  meta: {
                    canDelete: true
                  }
                }
              ]}
              options={{
                title: {
                  // TODO: Customize text style and add custom icon
                  text: "Parlo"
                },
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "A37MVW-Q1ibzK-i30OFW"
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="authenticated-inner"
                      fallback={<CatchAllNavigate to="/login" />}
                      v3LegacyAuthProviderCompatible={false}
                    >
                      <ThemedLayoutV2 Header={() => <Header sticky />}>
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route index element={<NavigateToResource resource="lists" />} />
                  <Route path="/lists">
                    <Route index element={<ListList />} />
                    <Route path="create" element={<ListCreate />} />
                    <Route path="edit/:id" element={<ListEdit />} />
                    <Route path="show/:id" element={<ListShow />} />
                    {/* Nested Routes for Contacts under a specific List */}
                    <Route path="show/:listId/contacts">
                      <Route path="create" element={<ContactCreate />} />
                      <Route path="edit/:contactId" element={<ContactEdit />} />
                      <Route path="show/:contactId" element={<ContactShow />} />
                    </Route>
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated key="authenticated-outer" fallback={<Outlet />}
                                   v3LegacyAuthProviderCompatible={false}>
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App
