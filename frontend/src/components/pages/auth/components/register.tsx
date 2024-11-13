import { useForm } from "@refinedev/react-hook-form"
import * as React from "react"
import {
  type RegisterPageProps,
  useActiveAuthProvider,
  type BaseRecord,
  type HttpError,
  useTranslate,
  useRouterContext,
  useRouterType,
  useLink,
  useRegister
} from "@refinedev/core"
import { ThemedTitleV2 } from "@refinedev/mui"
import { layoutStyles, titleStyles } from "./styles"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Container from "@mui/material/Container"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import MuiLink from "@mui/material/Link"
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import type { BoxProps } from "@mui/material/Box"
import type { CardContentProps } from "@mui/material/CardContent"
import type { FormPropsType } from "../index"

type RegisterProps = RegisterPageProps<BoxProps, CardContentProps, FormPropsType>;

interface RegisterFormTypes {
  firstName?: string;
  lastName?: string;
  email?: string;
  companyName?: string;
  password?: string;
  repeatPassword?: string;
  providerName?: string;
}

export const RegisterPage: React.FC<RegisterProps> = ({
                                                        loginLink,
                                                        wrapperProps,
                                                        contentProps,
                                                        renderContent,
                                                        providers,
                                                        formProps,
                                                        title,
                                                        hideForm
                                                      }) => {
  const { onSubmit, ...useFormProps } = formProps || {}
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<BaseRecord, HttpError, RegisterFormTypes>({
    ...useFormProps
  })

  const authProvider = useActiveAuthProvider()
  const { mutate: registerMutate, isLoading } = useRegister<RegisterFormTypes>({
    v3LegacyAuthProviderCompatible: Boolean(authProvider?.isLegacy)
  })
  const translate = useTranslate()
  const routerType = useRouterType()
  const Link = useLink()
  const { Link: LegacyLink } = useRouterContext()

  const ActiveLink = routerType === "legacy" ? LegacyLink : Link

  const PageTitle =
    title === false ? null : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px"
        }}
      >
        {title ?? (
          <ThemedTitleV2
            collapsed={false}
            wrapperStyles={{
              gap: "8px"
            }}
          />
        )}
      </div>
    )

  const renderProviders = () => {
    if (providers && providers.length > 0) {
      return (
        <>
          <Stack spacing={1}>
            {providers.map((provider: any) => {
              return (
                <Button
                  key={provider.name}
                  color="secondary"
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: "primary.light",
                    borderColor: "primary.light",
                    textTransform: "none"
                  }}
                  onClick={() =>
                    registerMutate({
                      providerName: provider.name
                    })
                  }
                  startIcon={provider.icon}
                >
                  {provider.label}
                </Button>
              )
            })}
          </Stack>
          {!hideForm && (
            <Divider
              sx={{
                fontSize: "12px",
                marginY: "16px"
              }}
            >
              {translate("pages.login.divider", "or")}
            </Divider>
          )}
        </>
      )
    }
    return null
  }

  const password = watch("password")

  const Content = (
    <Card {...(contentProps ?? {})}>
      <CardContent sx={{ p: "32px", "&:last-child": { pb: "32px" } }}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={titleStyles}
          color="primary"
          fontWeight={700}
        >
          {translate("pages.register.title", "Sign up for your account")}
        </Typography>
        {renderProviders()}
        {!hideForm && (
          <Box
            component="form"
            onSubmit={handleSubmit((data) => {
              if (onSubmit) {
                return onSubmit(data)
              }

              const { repeatPassword, ...submitData } = data

              return registerMutate(submitData)
            })}
            sx={{
              mt: 3
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("firstName", {
                    required: translate(
                      "pages.register.errors.requiredFirstName",
                      "First Name is required"
                    )
                  })}
                  id="firstName"
                  margin="normal"
                  fullWidth
                  label={translate("pages.register.firstName", "First Name")}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? errors.firstName.message : ""}
                  name="firstName"
                  autoComplete="firstName"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("lastName", {
                    required: translate(
                      "pages.register.errors.requiredLastName",
                      "Last Name is required"
                    )
                  })}
                  id="lastName"
                  margin="normal"
                  fullWidth
                  label={translate("pages.register.lastName", "Last Name")}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ""}
                  name="lastName"
                  autoComplete="lastName"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("companyName", {
                    required: translate(
                      "pages.register.errors.requiredCompanyName",
                      "Company Name is required"
                    )
                  })}
                  id="companyName"
                  margin="normal"
                  fullWidth
                  label={translate("pages.register.companyName", "Company Name")}
                  error={!!errors.companyName}
                  helperText={errors.companyName ? errors.companyName.message : ""}
                  name="companyName"
                  autoComplete="companyName"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  {...register("email", {
                    required: translate(
                      "pages.register.errors.requiredEmail",
                      "Email is required"
                    ),
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: translate(
                        "pages.register.errors.validEmail",
                        "Invalid email address"
                      )
                    }
                  })}
                  id="email"
                  margin="normal"
                  fullWidth
                  label={translate("pages.register.email", "Email")}
                  error={!!errors.email}
                  helperText={errors.email ? errors.email.message : ""}
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("password", {
                    required: translate(
                      "pages.register.errors.requiredPassword",
                      "Password is required"
                    )
                  })}
                  id="password"
                  margin="normal"
                  fullWidth
                  name="password"
                  label={translate("pages.register.fields.password", "Password")}
                  helperText={errors.password ? errors.password.message : ""}
                  error={!!errors.password}
                  type="password"
                  placeholder="●●●●●●●●"
                  autoComplete="current-password"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  {...register("repeatPassword", {
                    required: translate(
                      "pages.register.errors.requiredRepeatPassword",
                      "Repeat Password is required"
                    ),
                    validate: (value) =>
                      value === password || "Passwords do not match"
                  })}
                  id="repeatPassword"
                  margin="normal"
                  fullWidth
                  name="repeatPassword"
                  label={translate("pages.register.fields.repeatPassword", "Repeat Password")}
                  helperText={errors.repeatPassword ? errors.repeatPassword.message : ""}
                  error={!!errors.repeatPassword}
                  type="password"
                  placeholder="●●●●●●●●"
                  autoComplete="current-password"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{
                mt: "24px"
              }}
            >
              {translate("pages.register.signup", "Sign up")}
            </Button>
          </Box>
        )}
        {loginLink ?? (
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            sx={{
              mt: "24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography variant="body2" component="span" fontSize="12px">
              {translate("pages.login.buttons.haveAccount", "Have an account?")}
            </Typography>
            <MuiLink
              ml="4px"
              variant="body2"
              color="primary"
              component={ActiveLink}
              underline="none"
              to="/login"
              fontSize="12px"
              fontWeight="bold"
            >
              {translate("pages.login.signin", "Sign in")}
            </MuiLink>
          </Box>
        )}
      </CardContent>
    </Card>
  )

  return (
    <Box
      component="div"
      style={layoutStyles}
      {...(wrapperProps ?? {})}
      sx={{
        backgroundImage: "linear-gradient(to bottom right, #7BD5F5, #787FF6)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: hideForm ? "flex-start" : "center",
          alignItems: "center",
          minHeight: "100dvh",
          padding: "16px",
          width: "100%",
          maxWidth: "400px"
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            flexDirection: "column",
            paddingTop: hideForm ? "15dvh" : 0
          }}
        >
          {renderContent ? (
            renderContent(Content, PageTitle)
          ) : (
            <>
              {PageTitle}
              {Content}
            </>
          )}
        </Box>
      </Container>
    </Box>
  )
}
