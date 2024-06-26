import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
export const purpleTheme = createTheme({
    palette:{
        primary:{
            main:'#262254'
        },
        secondary:{
            main:'#543888'
        },
        error:{
            main:red.A400
        },
        secondary2:{
            main: '#262350'
        }
    }

})