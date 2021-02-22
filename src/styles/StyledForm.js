import styled, {css} from 'styled-components';


export const StyledBoxForm = styled.div`
 width: 80%;
 margin: 0 auto;
 background-color: ${({ theme }) => theme.mainColor};
 min-height:  80vh;
 -webkit-box-shadow: -2px 3px 17px -1px #DBD5D5; 
 box-shadow: -2px 3px 17px -1px #DBD5D5;
`;

export const StyledLabel = styled.label`
font-size: ${({ theme }) => theme.fontSize.l};
color: ${({ theme }) => theme.mainColorPastel};
text-align: left;
text-transform: uppercase;

`;

export const StyledInput = styled.input`
margin-top: 30px;
border: none;
height: 40px;
width: 100%;
margin: 0 auto;
margin: 10px 0 0 0;
background-color: ${({ theme }) => theme.mainColorPastel};


&::placeholder { 
  color: white;
} 

&:focus {
        outline: none;
        background-color: ${({ theme }) => theme.mainColorSecondary};
        border-bottom: none;
}

`;

export const StyledContainer = styled.div`

display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

export const StyledDiv = styled.div`
margin: 20px;
width: 80%;
`;

export const StyledButton  = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 20px;
font-weight: bold;
color: ${({ theme }) => theme.black};
width: 30%;
height: 30px;
background-color: ${({ theme }) => theme.mainColorPastel};
border: none;
border-radius: 2px;

    &:hover {
        background-color: ${({ theme }) => theme.mainColorSecondary};
    }

`;

export const StyledData = styled.ul`
color: ${({ theme }) => theme.black};
list-style: none;
margin-top: 30px;
text-transform: uppercase;


`;
export const StyledListContainer = styled.li`
margin-top: 20px;
list-style: none;
color: ${({ theme }) => theme.black};
text-transform: uppercase;

`;


export const StyledError = styled.ul`
list-style: none;
padding: 15px;
text-transform: uppercase;
color: ${({ theme }) => theme.colorError};

`;

  
  