"use client"
import { createTheme, Paper, ThemeProvider, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children:JSX.Element;
}

export enum themePalette {
    BACKGROUND="#FFFFFF",
    BLUE_1 = "#0000FF",
    BLACK = "#000000",
    GRAY = "#212121",
    GLOBAL_TYPOGRAPHY = "'Lato'"
}

const theme = createTheme ({
    palette : {
        mode:"light",
        background : {
            default: themePalette.BACKGROUND
        },
        primary : { // para otros componentes
            main : themePalette.BLUE_1
        }
    },
    typography : {
        fontFamily:themePalette.GLOBAL_TYPOGRAPHY,
    },
    components : {
        MuiButton : {
            defaultProps: {
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"0.5em"
                    
                }
            }
        },
        MuiAppBar : {
            defaultProps : {
                style:{
                    backgroundColor:themePalette.GRAY
                }
            }
        }
    }
});

export const ThemeConfig: React.FC <ThemeProp> = ({ children }) => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
    </ThemeProvider>
};