import styled, {css} from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { Feather } from '@expo/vector-icons';
import theme from "../../global/styles/theme";

interface TypeProps {
    type: 'up' | 'total' | 'down';
}

export const Container = styled.View<TypeProps>`
    ${({type}) => type === 'total' 
        ? 
        css`
            background-color: ${theme.colors.secondary};
        `
        :
        css`background-color: ${theme.colors.shape};`
    }

    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: ${RFValue(19)}px ${RFValue(23)}px;
    padding-bottom: ${RFValue(42)}px;
    margin-right: 16px;
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-family: ${theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    ${({type}) => type === 'total' 
        ? 
        css`
            color: ${theme.colors.shape};
        `
        :
        css`color: ${theme.colors.text_dark};`
    }    
`;

export const Icon = styled(Feather)<TypeProps>`
    font-size: ${RFValue(40)}px;
    
    ${({type}) => type === 'up' && css`
        color: ${theme.colors.success};
    `};

    ${({type}) => type === 'down' && css`
        color: ${theme.colors.attention};
    `};

    ${(props) => props.type === 'total' && css`
        color: ${theme.colors.shape};
    `};
`;

export const Footer = styled.View`

`;

export const Amount = styled.Text<TypeProps>`
    font-family: ${theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    ${({type}) => type === 'total' 
        ? 
        css`
            color: ${theme.colors.shape};
        `
        :
        css`color: ${theme.colors.text_dark};`
    }
`;

export const LastTransaction = styled.Text<TypeProps>`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.regular};
    ${({type}) => type === 'total' 
        ? 
        css`
            color: ${theme.colors.shape};
        `
        :
        css`color: ${theme.colors.text};`
    }
`;