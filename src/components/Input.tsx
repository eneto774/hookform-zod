import { TextField } from "@mui/material"

export const Input = ({ ...props }) => {
    return (
        <TextField
          variant='filled'
          sx={{ marginBottom: '20px' }}
          {...props}
        />
    )
}