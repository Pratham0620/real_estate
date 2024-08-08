'use client'
import { createTheme ,ThemeProvider} from "@mui/material";
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 560,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
  });
  export default function ClientThemeProvider({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}