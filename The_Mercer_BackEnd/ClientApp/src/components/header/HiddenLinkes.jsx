
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/slice/authSlice'


const ShowOnLogin = ({ children }) => {
    

const isLoggedin = useSelector(selectIsLoggedIn)
  
  
    if (isLoggedin)
    {
        return children
    }
    return null;
 
}

export const ShowOnLogOut = ({ children }) => {
    

    const isLoggedin = useSelector(selectIsLoggedIn)
    console.log("RRRRRRR compo", isLoggedin)

        if (!isLoggedin)
        {
            return children  
        }
        return null;
     
    }



export default ShowOnLogin;