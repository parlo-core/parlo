import { List, type ListProps } from "@refinedev/mui";


export const RefineListView = ({ children, ...props }: ListProps) => {
  return (
    <List
      {...props}
      headerProps={{
        sx: {
          display: "flex",
          flexWrap: "wrap",
          ".MuiCardHeader-action": {
            margin: 0,
            alignSelf: "center",
          },
          height: "72px",
        },
      }}
      headerButtonProps={{
        alignItems: "center",
        ...props.headerButtonProps,
      }}
      wrapperProps={{
        sx: {
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          ...props.wrapperProps?.sx,
        },
      }}
    >
      {children}
    </List>
  );
};
