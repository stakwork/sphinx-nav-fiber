import { useState } from 'react';
import styled from 'styled-components'
import { boostContent } from './helpers'
import Modal from '../sphinxUI/modal'

interface BoostProps {
    refId: string,
    content: any,
    style?: any
}

export default function Booster(props: BoostProps) {
    const [submitting, setSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [boostAmount, setBoostAmount] = useState('')
    const { refId, content } = props

    let { image_url, podcast_title, episode_title, timestamp } = content || {}
    
    if (image_url) {
        image_url = image_url.replace('.jpg','_l.jpg')
    }


    async function doBoost() {
        if (submitting || !boostAmount || parseInt(boostAmount) === 0) return
        setSubmitting(true)
        try {
            const res = await boostContent(refId, parseInt(boostAmount))
            console.log('res', res)
            setIsSuccess(true)

            setTimeout(() => {
                setShowModal(false)
                setBoostAmount('')    
            }, 700)
            
            setTimeout(() => {
                setIsSuccess(false)
            },1000)
            
        } catch (e) {
            console.log('e',e)
        }
        setSubmitting(false)
    }

    return <div style={{...props.style}}>
        <Pill style={{ width: 'fit-content', margin:'10px 0 15px', paddingRight:26 }}
            onClick={() => setShowModal(true)}>
            <span className="material-icons" style={{ fontSize: 14 }}>bolt</span>
    Boost
    </Pill>
        <Modal  visible={showModal} close={() => setShowModal(false)}
        envStyle={{borderRadius:4, padding:'20px 30px 0px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                <ContentEnv>
                    <Avatar src={image_url} />
                    <div>
                        <Title>{podcast_title}</Title>
                        <MainTitle>{episode_title}</MainTitle>
                        <Title> {timestamp}</Title>
                    </div>
                    </ContentEnv>
                    <div style={{height:20}} />
                    <Input
                        type="number"
                        value={boostAmount}
                        disabled={submitting}
                        placeholder="Enter Boost Amount"
                        onKeyPress={(event: any) => {
                            if (event.key === 'Enter') {
                                doBoost()
                            }
                        }}
                        onChange={e => {
                            const value = e.target.value
                            setBoostAmount(value)
                        }}
            
                    />
                
                    <div style={{ height: 10 }} />
            
                    <Pill style={{ margin: '10px 0 15px' }}
                        disabled={submitting}
                        onClick={() => doBoost()}>
                        <span className="material-icons" style={{ fontSize: 14 }}>bolt</span>
                        Confirm Boost
                </Pill>
                
                {/* success cover */}
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position:'absolute',
                    top: 0, left: 0, height: '100%', width: '100%', background: '#fff', zIndex: 5,
                    userSelect:'none',pointerEvents:'none',opacity:isSuccess?1:0, transition:'opacity 0.1s'
                }}>
                        <span className="material-icons" style={{ fontSize: 80, color: '#49c998' }}>bolt</span>
                </div>
                </div>
        </Modal>
    </div>
    
}

interface PillProps {
    selected?: boolean;
    disabled?: boolean;
  }
const Pill = styled.div<PillProps>`
padding:10px 20px;
width: calc(100% - 40px);
border-radius:20px;
flex-grow:0;
flex-shrink:0;
cursor:pointer;
margin-right:10px;
background:${p=>p.disabled?'#bbb':'#49c998'};
color:#fff;
display:flex;
justify-content:center;
align-items:center;
font-weight: 500;
font-size: 12px;
line-height: 14px;
pointer-events: ${p=>p.disabled?'none':'auto'};
`


const Input = styled.input`
pointer-events:auto;
width:calc(100% - 40px);
height:40px;
padding:0 20px;
border: 1px solid #D0D5D8;
// box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 4px;
:&focus{
  border:none;
}
`

const ContentEnv = styled.div`
display: flex; 
align-items: flex-start;
`

const Title = styled.div`
font-weight: 400;
font-size: 11px;
margin-bottom:4px;
/* or 164% */


/* Main bottom icons */

color: #5F6368;
`

const MainTitle = styled.div`
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* or 164% */


/* Main bottom icons */

color: #222;
margin-bottom:4px;
`

interface ImgProps {
    src: string;
  }
  const Avatar = styled.div<ImgProps>`
  background-image:url(${p => p.src});
  background-size:contain;
  background-repeat: no-repeat;
  flex-grow:0;
  flex-shrink:0;
  margin-right:12px;
  width:45px;
  height:45px;
  border-radius:4px;
  `