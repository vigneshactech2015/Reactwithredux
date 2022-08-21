import { Fragment } from "react";
import Counterredux from "./Counterredux";
import Auth from '../components/Auth';
import Header from '../components/Header';
import UserProfile from '../components/UserProfile';
import {useSelector} from 'react-redux';

function AppRedux(){
    const isAuth=useSelector(state=>state.auth.isAuthenticated);
   
    return(
        <Fragment>
        <Header/>
       {!isAuth && <Auth/>}
       {isAuth && <UserProfile/>}
        <Counterredux/>
        </Fragment>
    )
}

export default AppRedux;