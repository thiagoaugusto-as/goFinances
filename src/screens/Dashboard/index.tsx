import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
    id: string;
}

import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './styles';

export function Dashboard() {
    const data: DataListProps[] = [
        {
            id: '1',
            data: {
                type: 'positive',
                amount: "R$ 12.000,00",
                category: {
                    name: 'Vendas', 
                    icon: 'dollar-sign'
                },
                date: "13/04/2020",
                title: "Desenvolvimento de Site"
            }
        },
        {
            id: '2',
            data: {
                type: 'negative',
                amount: "R$ 59,00",
                category: {
                    name: 'Alimentação', 
                    icon: 'coffee'
                },
                date: "02/04/2020",
                title: "Hamburgueria Pizzy"
            }
        },
        {
            id: '3',
            data: {
                type: 'positive',
                amount: "R$ 1200,00",
                category: {
                    name: 'Casa', 
                    icon: 'shopping-bag'
                },
                date: "10/04/2020",
                title: "Aluguel do apartamento"
            }
        }
    ]

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{uri: 'https://avatars.githubusercontent.com/u/64223859?v=4'}}
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Thiago!</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril."
                    type="up"
                />
                <HighlightCard 
                    title="Saidas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril."
                    type="down"
                />
                <HighlightCard 
                    title="Total" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril."
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>

                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item.data} />}
                />
            </Transactions>
        </Container>
    )
}
