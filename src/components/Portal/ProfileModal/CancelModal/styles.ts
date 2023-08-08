import styled from 'styled-components';

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 60px 30px;
    gap: 20px;
    position: fixed;

    background: #FDFFFC;

    border: 2px solid ${({ theme }) => theme.colors.primaryDark};
    border-radius: 10px;

    @media (max-width: 280px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const ModalText = styled.p`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;

    color: ${({ theme }) => theme.colors.mutedDarker};

    @media (max-width: 280px) {
        width: 80%;
        margin-top: 50px;
    }

    @media (max-width: 480px) {
        width: 80%;
        margin-top: 50px;
    }
`;

export const ModalTitle = styled.h1`
    display: flex;
    flex-wrap: wrap;
    width: 370px;
    height: 48px;
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.primaryDark};

    @media (max-width: 280px) {
        width: 80%;
        margin-right: 40px;
        
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const ButtonContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    gap: 15px;

    @media (max-width: 280px) {
      width: 80%;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`;
