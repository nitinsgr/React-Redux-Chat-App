import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react'
import styled from 'styled-components'
import SidebarOptions from './SidebarOptions';
import { Add, ExpandMore } from '@material-ui/icons';
import { auth, db } from '../firebase';
import {useCollection} from 'react-firebase-hooks/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';



function Sidebar() {

    const [channels] = useCollection(db.collection("room"));
    const [user] = useAuthState(auth);
    return (
        <SidebarContainer
        
        
        >
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Community</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>

            <SidebarOptions Icon={InsertCommentIcon} title="Task"/>
            <SidebarOptions Icon={InsertCommentIcon} title="Assignment"/>
            <SidebarOptions Icon={InsertCommentIcon} title="Music Suggetion"/>
            <SidebarOptions Icon={InsertCommentIcon} title="Important"/>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads"/>
            <hr/>
            <SidebarOptions Icon={ExpandMore} title="Channels"/>
            <hr/>
            <SidebarOptions Icon={Add} addChannelOption title="Add channel"/>

            {channels?.docs.map((doc) => (

                <SidebarOptions 
                key={doc.id} 
                id={doc.id}
                title={doc.data().name}
                />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
background-color: #150050;
color: white;
flex: 0.3;
margin-top: 60px;
max-width: 260px;
border-top: 1px solid #49274b

> hr{
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b
}

`

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root{
     padding: 8px;
     color: #49274b;
     font-size: 18px;
     background-color: white;
     border-radius: 999px;
}

`

const SidebarInfo = styled.div`
flex: 1;

> h2{
    font-size: 15px;
    font-weight: 900;
    display : flex;
    margin-bottom: 5px;
}

> h3{
    display: flex;
    font-size:13px;
    font-weight: 400;
    align-items: center;
}

> h3{
    .MuiSvgIcon-root{
         font-size: 14px;
         margin-top: 1px;
         margin-right: 2px;
         color: green;
    }

}

`