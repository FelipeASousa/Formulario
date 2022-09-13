import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect, } from 'react';

export const Etapa3Form = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    const handleNextStep = () => {
        if(state.projeto !== '' && state.cliente !== '' && state.gestor !== '') {
            history.push('/etapa2');
        } else {
            alert("Preencha os dados.");
        }
    }

    const handleProjectChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setProjeto,
            payload: e.target.value
        });
    }
    
    const handleClientChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setCliente,
            payload: e.target.value
        });
    }
    
    const handleGestorChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGestor,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo.</p>

                <hr/>

                
                <div className="form-floating mb-3">
                    <input type="text" 
                    className="form-control" 
                    id="floatingInput" 
                    value={state.projeto}
                    onChange={handleProjectChange}
                    placeholder="Nome do Projeto"
                    />
                    <label htmlFor="floatingInput">Nome do Projeto</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" 
                    className="form-control" 
                    id="floatingInput2" 
                    value={state.cliente}
                    onChange={handleClientChange}
                    placeholder="Nome do Cliente"
                    />
                    <label htmlFor="floatingInput2">Nome do Cliente</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" 
                    className="form-control" 
                    id="floatingInput3" 
                    value={state.gestor}
                    onChange={handleGestorChange}
                    placeholder="Nome do Gestor"
                    />
                    <label htmlFor="floatingInput3">Nome do Gestor</label>
                </div>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}