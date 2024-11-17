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
  const CustomIcon = () => (
    <svg width="24px" height="24px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 320 320" style={{color: "black", width: '50px', height: '50px'}}>
      <path
        d="M223.91,57.68,85.11,81.42a29.14,29.14,0,0,0-25.61,29v81.13a29.25,29.25,0,0,0,25.61,29l15.56,2.68a2.8,2.8,0,0,1,2.28,3.62l-9,34.06a9.37,9.37,0,0,0,9,11.67,9.6,9.6,0,0,0,5.23-1.61l51.9-35a9,9,0,0,1,6.7-1.34l57,9.65a29.12,29.12,0,0,0,32.72-29V86.65A29.09,29.09,0,0,0,223.91,57.68Zm1.48,31.52-67.73,67.18a4.84,4.84,0,0,1-6.16.54L86.32,112.53a4.89,4.89,0,0,1,1.88-8.85L221.1,81C225.79,80.21,228.74,86,225.39,89.2Z"/>
    </svg>
  );

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
                  icon: <CustomIcon/>,
                  text: <p style={{
                    color: "black",
                    fontWeight: 900,
                    fontSize: '24px',
                    letterSpacing: "1px",
                    fontFamily: 'Courier'
                  }}>Parlo</p>,
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
