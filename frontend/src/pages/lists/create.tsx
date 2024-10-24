import { Box, TextField } from "@mui/material"
import { Create } from "@refinedev/mui"
import { useForm } from "@refinedev/react-hook-form"

export const ListCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    refineCoreProps: {
      action: "create",
      resource: "lists"
    }
  })

  return (
    <Create isLoading={formLoading} saveButtonProps={{
      ...saveButtonProps,
      onClick: (e: React.BaseSyntheticEvent) => {
        handleSubmit(
          (values) => {
            onFinish({
              list: {
                ...values
              }
            })
          },
          () => false
        )(e)
      }
    }}>
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
          label={"List name"}
          name="name"
        />
      </Box>
    </Create>
  )
}
