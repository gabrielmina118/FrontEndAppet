import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: #222;
    color: white;
    padding: 50px;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin-top: 30px;
`;

export const FormTitulo = styled.h2`
    font-size: 28px;
    font-weight: bold;
    color: yellow;
    margin-bottom: 30px;
    text-align: center;
`;

export const FormLabel = styled.label`
    font-size: 18px;
    margin-bottom: 8px;
    display: block;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const FormTextarea = styled.textarea`
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    height: 150px;
`;

export const FormButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-top: 20px;
    width: 100%;

    &:hover {
        background-color: #45a049;
    }
`;
