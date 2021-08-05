import styled from 'styled-components';
import {COLORS,DEVICE,TRANSITION,FONT} from '../../utilities/constants';
import {ANIM} from '../../utilities/animation';
import {Link as LinkR} from 'react-router-dom';
import CheckMark from '../../assets/shared/icon-check.svg';


export const Wrapper = styled.section`
    max-width:82.5rem;
    width:100%;
    display:block;
    margin-left:1rem;
    @media ${DEVICE.md}{
        margin:4rem 0 0;
    }
    @media ${DEVICE.sm}{
        margin:0;
    }
`
export const TitleBar = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 1.6rem 0 2.4rem;
    height:7.2rem;
    border-radius:10px;
    background:${COLORS.darkBlueDark};
    color:${COLORS.white};
    @media ${DEVICE.sm}{
        height:5.6rem;
        border-radius:0;
        padding:0 2.4rem;
    }
`
export const Title = styled.div`
    display:flex;
    min-width:15.6rem;
    margin-right:2.5rem;
    @media ${DEVICE.spec}{
        display:none;
    }
`
export const TitleIcon = styled.img`
    width:2.3rem;
    height:2.4rem;
`
export const H2 = styled.h2`
    margin-left:1.6rem;
`
export const FilterWrapper = styled.div`
    flex: 1 1 30%;
    margin-right:1rem;
    display:flex;
    justify-content:flex-start;
    position:relative;
`
export const Filter = styled.button`
    display:flex;
    cursor:pointer;
    flex-wrap:wrap;
    align-items:center;
    color:${COLORS.grayDark};
    transition:opacity ${TRANSITION.ease};
    user-select:none;
    &:hover{
        opacity:.7;
    }
    @media ${DEVICE.sm}{
        font-size:1.3rem;
        line-height:1.8rem;
    }
`
export const Select = styled.span`
    display:flex;
    font-weight:700;
`
export const SelectIcon = styled.span`
    margin-left:1rem;
    transition: all ${TRANSITION.ease};
    transform:${(props:any)=>props['data-icon-rotate']?'rotate(180deg)':''};
`
export const OptionModal = styled.div`
    z-index:9999;
    position:absolute;
    top:6.5rem;
    display:${props=>props['aria-hidden']?'block':'none'};
    width:25.5rem;
    height:0;
    height:fit-content;
    background:${COLORS.white};
    border-radius:10px;
    box-shadow: 0 10px 40px -7px hsla(0,0%,0%,0.1);
    animation:${ANIM.fadeIn} .4s linear;
`
export const OptionLabel = styled.label`
    display:flex;
    align-items:center;
    width:100%;
    height:4.7rem;
    font-size:1.6rem;
    position:relative;
    color:${COLORS.darkBlueLight};
    transition:color ${TRANSITION.ease};
    &:hover{
        color:${COLORS.purple};
    }
    &:not(:first-of-type):after{
        content:'';
        position:absolute;
        display:flex;
        top:0;
        width:100%;
        height:1px;
        background:${COLORS.darkBlueDark};
        opacity:0.12;
    }
`
export const Option = styled.input`
    appearance: none;
    cursor:pointer;
    display:flex;
    position:relative;
    width:100%;
    margin:0 2.4rem;
    height:fit-content;
    align-items:center;
    justify-content:space-between;
    &:before{
        content:attr(value);
    }
    &:after{
        content:'';
        background:url(${CheckMark});
        width:1.3rem;
        height:1.1rem;
        opacity:0;
        transition:opacity ${TRANSITION.easeFast};
    }
    &:checked{
        &:after{
            opacity:1;
        }
    }

`


///////////////////////////////////////////
//                 Feedback
///////////////////////////////////////////

export const FeedbackWrapper = styled.ul`
    display:block;
    margin-top:2.4rem;
    @media ${DEVICE.sm}{
        margin-top:3.2rem;
        padding:0 2.4rem;
    }
`
export const FeedbackLi = styled.li`
    display:flex;
    justify-content:space-between;
    padding:2.4rem 3.2rem;
    background:${COLORS.white};
    height:fit-content;
    margin-bottom:2rem;
    border-radius:10px;
`
export const Vote = styled.button`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:.9rem 0;
    width:4rem;
    height:5.3rem;
    border-radius:10px;
    font-weight:700;
    font-size:1.3rem;
    letter-spacing:-0.02rem;
    cursor:pointer;
    transition:all ${TRANSITION.ease};
    background:${(props:any)=>props['data-voted']? `${COLORS.blue}`:`${COLORS.grayMid}`};
    color:${(props:any)=>props['data-voted']? `${COLORS.white}`:`${COLORS.darkBlueDark}`};
    &:hover{
        background:${(props:any)=>props['data-voted']? `${COLORS.blueMid}`:`${COLORS.blueHoverLight}`};

    }
`
export const VoteIcon = styled.img`
    filter:${(props:any)=>props['data-voted']? 'brightness(5)':'0'};
`
export const SuggestionTitle = styled(LinkR)`
    ${FONT.suggestionTitle};
    color:${COLORS.darkBlue};
    margin-bottom:.4rem;
    transition:color ${TRANSITION.ease};
`
export const SuggestionWrapper = styled.div`
    display:flex;
    flex-direction:column;
    flex:1 1 60%;
    margin:0 4rem;
    cursor:pointer;
    &:hover ${SuggestionTitle}{
        color:${COLORS.blue};
    }
`

export const SuggestionText = styled.p`
    ${FONT.regular};
    color:${COLORS.darkBlueLight};
    margin-bottom:1.2rem;
`
export const CommentCounter = styled.button`
    display:flex;
    align-items:center;
    font-weight:700;
    cursor:pointer;
`
export const CommentIcon = styled.img`
    margin-right:.8rem;
    width:1.8rem;
    height:1.6rem;
`