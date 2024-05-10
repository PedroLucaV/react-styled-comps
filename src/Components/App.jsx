import { Titulo1, Container, Main, Block1, Block2, Block3, DownSide, Subtitle1, Paragraph1 } from "../Style/App.js";

const App = () => {
    return (
        <Main>
            <Container>
                <Block1>
                    <Titulo1>
                        Join our community
                    </Titulo1>
                    <Subtitle1>
                        30-day, hassle-free money back guarantee
                    </Subtitle1>
                    <Paragraph1>
                        Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
                    </Paragraph1>
                </Block1>
                <DownSide>
                    <Block2>
                        A
                    </Block2>
                    <Block3>
                        B
                    </Block3>
                </DownSide>
            </Container>
        </Main>
    )
}

export default App;