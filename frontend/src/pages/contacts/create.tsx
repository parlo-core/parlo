import { Box, FormControl, InputLabel, Select, TextField } from "@mui/material"
import { Create } from "@refinedev/mui"
import { useForm } from "@refinedev/react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import MenuItem from "@mui/material/MenuItem"

enum Status {
  Subscribed = "subscribed",
  Unsubscribed = "unsubscribed"
}

export const ContactCreate = () => {
  const { listId } = useParams()
  const navigate = useNavigate()
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm({
    refineCoreProps: {
      action: "create",
      resource: "contacts",
      redirect: false
    }
  })

  const handleFormSubmit = async (values: any) => {
    try {
      await onFinish({
        contact: {
          ...values,
          list_id: listId
        }
      })
      navigate(`/lists/show/${listId}`)
    } catch (error) {
      console.error("Failed to create contact:", error)
    }
  }


  return (
    <Create isLoading={formLoading} saveButtonProps={{
      ...saveButtonProps,
      onClick: (e) => {
        e.preventDefault()
        handleSubmit(handleFormSubmit)()
      }
    }}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(handleFormSubmit)()
        }}
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
        />
        <FormControl margin="normal" fullWidth error={!!(errors as any)?.status}>
          <InputLabel shrink>Status</InputLabel>
          <Select
            {...register("status", {
              required: "This field is required",
              validate: value => Object.values(Status).includes(value) || "Invalid status"
            })}
            label="Status"
            defaultValue=""
            onChange={(e) => setValue("status", e.target.value as Status)}
          >
            <MenuItem value={Status.Subscribed}>Subscribed</MenuItem>
            <MenuItem value={Status.Unsubscribed}>Unsubscribed</MenuItem>
          </Select>
          {errors.status && (
            <Box color="error.main" mt={1}>
              {(errors as any)?.status?.message}
            </Box>
          )}
        </FormControl>
      </Box>
    </Create>
  )
}
