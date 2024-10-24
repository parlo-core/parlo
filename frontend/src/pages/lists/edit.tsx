import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export const ListEdit = () => {
  const {
    saveButtonProps,
    register,
    formState: { errors },
    refineCore: { onFinish },
    handleSubmit
  } = useForm({
    refineCoreProps: {
      action: "edit",
      resource: "lists"
    }
  });

  return (
    <Edit saveButtonProps={{
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
            required: "This field is required",
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
    </Edit>
  );
};
