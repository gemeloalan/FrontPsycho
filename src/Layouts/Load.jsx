import { ArrowCircleUpSharp } from "@mui/icons-material"
import { Backdrop } from "@mui/material"


export const Load = ({state}) => {
  return (
    <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={state}
>
  <ArrowCircleUpSharp color="inherit" />
</Backdrop>
  )
}
