import React, { useState } from "react";
import { Modal } from "react-native";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import { CategorySelect } from "../CategorySelect";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModal, setCategoryModal] = useState(false);
    
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    function handleCloseSelectionCategoryModal() {
        setCategoryModal(false);
    }

    function handleOpenCategorySelectModal() {
        setCategoryModal(true);
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
          
            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    
                    <TransactionTypes>
                        <TransactionTypeButton 
                            title="Entrada"
                            type="up"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton 
                            title="Saída"
                            type="down"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionTypes>

                    <CategorySelectButton 
                        title={category.name}
                        onPress={handleOpenCategorySelectModal}
                    />
                </Fields>
                <Button title="Enviar" />
            </Form>

            <Modal visible={categoryModal}>
                <CategorySelect 
                    category={category}
                    closeSelectCategory={handleCloseSelectionCategoryModal}
                    setCategory={setCategory}
                />
            </Modal>

        </Container>
    );
}