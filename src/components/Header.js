import React from 'react'
import styled from 'styled-components'
import {Avatar} from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);
    return (
       <HeaderContainer>
           
           {/*Header left */}
           <HeaderLeft>
               <HeaderAvatar
               onClick={()=> auth.signOut()}
               alt={user?.displayName}
               src={user?.photoURL}
               />
                 <AccessTimeIcon/>
             
           </HeaderLeft>

            {/*Header Search */}

            <HeaderSearch>
                <SearchIcon  />
                <input placeholder='Search Page/'></input>
            </HeaderSearch>

            {/*Header right*/}
            <HeaderRight>
                <HelpOutlineIcon/>
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header

const HeaderSearch = styled.div`
color: white;
flex:0.4;
opacity: 1;
border-radius: 6px;
background-color: #150050;
text-align: center;
display: flex;
padding: 0 50px;
margin: 5px;
border: 1px gray solid;

> input {
    background-color: transparent;
    border: none;
    text-align 
    : center;
    min-width:30vw;
    outline:0;
    color: white;
}

`


const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
justify-content: space-between;
padding: 10px 0;
background-color: #150050;

flex-direction: row;
`;

const HeaderLeft = styled.div`
flex:0.3;
color: white;
display: flex;
flex-direction: row;
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
}

`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }

`
const HeaderRight = styled.div`
color: white;
flex: 0.3;
display: flex;
align-items: center;

> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
}

`