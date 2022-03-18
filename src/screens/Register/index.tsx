import React, { useState } from "react";
import { Button, Modal } from "react-native";
import { useForm } from 'react-hook-form';
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { InputForm } from "../../components/Form/InputForm";

import { CategorySelect } from "../CategorySelect";

import { 
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes
} from "./styles";

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModal, setCategoryModal] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit
    } = useForm({
        
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

    function handleRegister(form: FormData) {
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data)
    }

    return(
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
          
            <Form>
                <Fields>
                    <InputForm 
                        control={control}
                        name="name"
                        placeholder="Name"
                    />

                    <InputForm 
                        control={control}
                        name="amount"
                        placeholder="Preço"
                    />
                
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
                <Button
                    title="Enviar" 
                    onPress={handleSubmit(handleRegister)}
                />
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