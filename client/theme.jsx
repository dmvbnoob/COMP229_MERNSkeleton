import { createTheme } from '@material-ui/core/styles' 
import { blue, pink } from '@material-ui/core/colors'
const theme = createTheme({ 
typography: {
useNextVariants: true, 
},
palette: {
primary: {
light: '#5c67a3', 
main: '#ffd3e9', 
dark: '#2e3a55', 
contrastText: '#fff',
},
secondary: {
light: '#ff79b0', 
main: '#ff7ba8', 
dark: '#c60055', 
contrastText: '#000',
},
openTitle: pink['300'], 
protectedTitle: blue['400'], 
type: 'light'
} 
})
export default theme
