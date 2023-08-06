import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import InputWrapper from '../../components/InputWrapper';
import Header from '../../components/Portal/Header';
import { Form, Title } from '../CandidateSettings/style';
import { Container, Main, Position, Row } from '../styles/CompanyPortalStyles';

export const CompanyPassAlter: React.FC = () => {
    return (
        <Container>
            <Header />
            <Main>
                <Title>Alterar Senha</Title>
                <Row />
            </Main>
            <Form style={{ gridTemplateColumns: '1fr', maxWidth: '30%' }}>
                <InputWrapper>
                    <label htmlFor="">Senha atual</label>
                    <input type="password" placeholder="Insira sua senha" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Nova senha</label>
                    <input type="password" placeholder="Insira sua senha" />
                </InputWrapper>
                <InputWrapper>
                    <label htmlFor="">Cofirmar nova senha</label>
                    <input
                        type="password"
                        placeholder="Confirme sua nova senha"
                    />
                </InputWrapper>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '24px',
                        marginTop: '32px',
                    }}
                >
                    <Button type="submit">Alterar</Button>
                    <Button background="outline">Cancelar</Button>
                </div>
            </Form>
            <Position>
                <Main />
                <Footer />
            </Position>
        </Container>
    );
};
