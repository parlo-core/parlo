import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const ContactEdit = () => {
  const {
    saveButtonProps,
    register,
    formState: { errors },
    refineCore: { onFinish },
    handleSubmit
  } = useForm({
    refineCoreProps: {
      action: "edit",
      resource: "contacts"
    }
  });

  return (
    <Edit saveButtonProps={{
      ...saveButtonProps,
      onClick: (e: React.BaseSyntheticEvent) => {
        handleSubmit(
          (values) => {
            onFinish({
              contact: {
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
            required: "This field is required",
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
            required: "This field is required",
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
        {/*TODO: change to dropdown select menu field*/}
        <TextField
          {...register("status", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.title}
          helperText={(errors as any)?.title?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Status"}
          name="status"
        />
      </Box>
    </Edit>
  );
};
