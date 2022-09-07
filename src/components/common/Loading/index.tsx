import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";

const messages = [
    'Searching Podcast Index',
    'Searching YouTube',
    'Searching Twitter Spaces',
    'Finding Transcripts',
    'Loading Audio Clips',
    'Loading Video Clips',
    'Preparing Results'
]

export default function Loading() {
    const [msgIndex, setMsgIndex] = useState(0)

    useEffect(() => {
        const messageTimeout = setTimeout(doIndex, 5000)

        return function cleanup(){
            clearTimeout(messageTimeout)
        }
    }, [msgIndex])
    
    function doIndex() {
        if (msgIndex < messages.length - 1) setMsgIndex(msgIndex + 1)
    }

    return (
        <Wrap>
            <div style={{marginBottom:20,height:30}}>{messages[msgIndex]}...</div>
            <ClipLoader color={"#000"} loading={true} size={26} />
        </Wrap>  
  );
};

const Wrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex:1;
`
