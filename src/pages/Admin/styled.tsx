import styled from "styled-components";

export const AdminContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #6e6e6e;
`;

export const AdminHeader = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
    color: yellow;
`;

export const AdminMenu = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const AdminMenuItem = styled.li`
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        color: yellow;
        text-decoration: underline;
    }

    &.active {
        background-color: #252424;
        color: yellow;
        border-color: #252424;
    }
`;



export const AdminContent = styled.div`
    border-top: 1px solid #ddd;
    /* padding-top: 20px; */
    color: #fff;

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;

        th,
        td {
            padding: 10px;
            border: 1px solid #ddd;
            /* text-align: left; */
        }

        th {
            background-color: #444;
            color: yellow;
        }

        td {
            background-color: #555;
        }

        /* @media (max-width: 768px) {
            display: block;
            width: 100%;

            thead,
            tbody,
            th,
            td,
            tr {
                display: block;
            }

            th {
                position: absolute;
                 top: -9999px;
                left: -9999px; 
            }

            tr {
                border: 1px solid #ddd;
                margin-bottom: 5px;
            }

            td {
                border: none;
                border-bottom: 1px solid #ddd;
                position: relative;
                padding-left: 50%;
                text-align: right;
            }

            td:before {
                content: attr(data-label);
                position: absolute;
                left: 10px;
                width: calc(50% - 20px);
                padding-right: 10px;
                white-space: nowrap;
                text-align: left;
                font-weight: bold;
                color: yellow;
            }
        } */
    }
`;

