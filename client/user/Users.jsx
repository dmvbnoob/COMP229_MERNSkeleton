import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import {list} from './api-user.js'
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import Avatar from '@material-ui/core/Avatar'
//import Person from '@material-ui/core/Person'
//import ArrowForward from '@material-ui/core/ArrowForward'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
//import ArrowForward from '@material-ui/core/ArrowForward'
import ArrowForward from '@material-ui/icons/ArrowForward';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
  root: {
    // Define your root styles here
   },
 }));
export default function Users() {
  const [users, setUsers] = useState([])
useEffect(() => {
  const abortController = new AbortController()
  const signal = abortController.signal
  list(signal).then((data) => {
   console.log(data)
if (data && data.error) { 
console.log(data.error)
} else { 
  console.log(data)
setUsers(data)
} 
})
return function cleanup(){ 
abortController.abort()
} 
}, [])
 
  const classes = useStyles()
return (
<Paper className={classes.root} elevation={4}>
<Typography variant="h6" className={classes.title}> 
All Users
</Typography> 
<List dense>
{users.map((item, i) => { 
 return <Link component={RouterLink} to={"/user/" + item._id} key={i}>
  
<ListItem button> 
<ListItemAvatar>
<Avatar> 
</Avatar>
</ListItemAvatar>
<ListItemText primary={item.name}/> 
<ListItemSecondaryAction>
<IconButton>
<ArrowForward/> 
</IconButton>
</ListItemSecondaryAction> 
</ListItem>
</Link> 
})} 
</List>
</Paper>
)
}
