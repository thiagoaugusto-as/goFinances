import React, { useState } from "react";
import { 
    Button, 
    Modal, 
    TouchableWithoutFeedback, 
    Keyboard,
    Alert
} from "react-native";
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from "../../components/Form/InputForm";

import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
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

const schema = Yup.object().shape({
    name: Yup
    .string()
    .required('Nome é obrigatório'),
    amount: Yup
    .number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('O preço é obrigatório')
    ,
});

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModal, setCategoryModal] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
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
        if(!transactionType) 
            return Alert.alert('Selecione o tipo da transação');

        if(category.key === 'category') 
            return Alert.alert('Selecione a categoria');

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data)
    }

    return(
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
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
                                autoCapitalize="words"
                                autoCorrect={false}
                                error={errors.name && errors.name.message}
                            />

                            <InputForm 
                                control={control}
                                name="amount"
                                placeholder="Preço"
                                keyboardType="numeric"
                                error={errors.amount && errors.amount.message}
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
        </TouchableWithoutFeedback>
    );
}