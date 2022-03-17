import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
    type: 'up' | 'down';
}

interface ContainerProps {
    isActive: boolean;
    type: 'up' | 'down';
}
 

export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 16px;
    
    border: 1.5px;
    border-width: 1.5px;
    border-style: solid;
    border-color: ${({theme}) => theme.colors.text};
    border-radius: 5px;

    ${({isActive, type}) => isActive && type === 'down' && css`
        background-color: ${({theme}) => theme.colors.attention_light};
        border: 0px;
    `}

    ${({isActive, type}) => isActive && type === 'up' && css`
        background-color: ${({theme}) => theme.colors.success_light};
        border: 0px;
    `}
`

export const Icon = styled(Feather)<IconsProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;
    color: ${({theme, type}) => 
        type === 'up' ? theme.colors.success : theme.colors.attention
    };
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    
`;
