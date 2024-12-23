import { Box, CircularProgress, TextField } from "@mui/material"
import { Edit } from "@refinedev/mui"
import { useForm } from "@refinedev/react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import IconButton from "@mui/material/IconButton"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import React from "react"

export const ContactEdit = () => {
  const { contactId, listId } = useParams()
  const navigate = useNavigate()
  const {
    saveButtonProps,
    register,
    formState: { errors },
    refineCore: { onFinish, queryResult },
    handleSubmit
  } = useForm({
    refineCoreProps: {
      action: "edit",
      resource: "contacts",
      id: contactId
    }
  })

  // Extract existing data for initial values
  const contact = queryResult?.data?.data.contact


  if (!queryResult || queryResult?.isLoading){
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Edit
      saveButtonProps={{
        ...saveButtonProps,
        onClick: (e: React.BaseSyntheticEvent) => {
          handleSubmit(
            (values) => {
              onFinish({
                contact: {
                  ...values,
                  list_id: listId
                }
              })
            },
            () => false
          )(e)
        }
      }}
      goBack={
        <IconButton onClick={() => navigate(`/lists/show/${listId}`)}>
          <ArrowBackIcon />
        </IconButton>
      }
    >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("name", {
            required: "This field is required"
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Contact name"}
          name="name"
          defaultValue={contact.name}
        />
        <TextField
          {...register("email", {
            required: "This field is required"
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Email"}
          name="email"
          defaultValue={contact.email}
        />
        {/*TODO: change to dropdown select menu field*/}
        <TextField
          {...register("status", {
            required: "This field is required"
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Status"}
          name="status"
          defaultValue={contact.status}
        />
      </Box>
    </Edit>
  )
}
