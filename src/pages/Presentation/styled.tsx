import styled from "styled-components";

export const InicioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 80px;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const Descricao = styled.div`
  flex: 0 0 60%;
  @media (max-width: 768px) {
    flex: 1 0 100%;
    padding-right: 0;
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Titulo = styled.h1`
  font-weight: bold;
  color: #ffc000;
  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const Subtitulo = styled.h2`
  color: white;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const Texto = styled.p`
  font-size: 18px;
  color: white;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const PrimeiraLetra = styled.span`
  color: white;
  font-weight: bold;
`;

export const ImagemDownload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    margin-top: 60px;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: #0b4c5f;
    color: white;
    border: 3px solid white;
    transition: all 0.5s ease;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  @media (max-width: 768px) {
        text-align: center;
    }
`;
