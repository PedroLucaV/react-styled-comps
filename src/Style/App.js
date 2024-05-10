import styled from "styled-components";

const Cores = {
    Cyan: "#3eb7b6",
    LightCyan: "#4abebd",
    BrightYellow: "#c0df34",
    LightGray: "#e5eff5",
    GrayishBlue: "#98a6bd"
}

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    width: 800px;
    height: 550px;
    border-radius: 12px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

export const Block1 = styled.div`
    display: flex;
    height: 275px;
    width: 85%;
    margin-left: 30px;
    margin-top: 30px;
    flex-direction: column;
    background-color: #fff;
`

export const Block2 = styled.div`
    display: flex;
    height: 275px;
    width: 400px;
    background-color: ${Cores.Cyan};
`

export const Block3 = styled.div`
    display: flex;
    height: 275px;
    width: 400px;
    background-color: ${Cores.LightCyan};
`

export const DownSide = styled.span`
    display: flex;
    flex-direction: row;
`

export const Subtitle1 = styled.h3`
    color: ${Cores.BrightYellow};
    font-size: 22.5px;
    margin-bottom: 20px;
`

export const Paragraph1 = styled.p`
    color: ${Cores.GrayishBlue};
    font-size: 20px;
`

export const Titulo1 = styled.h1`
    color: ${Cores.Cyan};
    
    margin-bottom: 40px;
`