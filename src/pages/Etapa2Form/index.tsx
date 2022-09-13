import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const Etapa2Form = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.modalidade === ''){
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2,
            });
        }

    }, []);

    const handleNextStep = () => {
            history.push('/etapa3');
        
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>Defina  a data de inicio e fim</h1>

               <hr/>
               <p>Data e horário de Inicio</p>
                <input type="datetime-local" name="" id="" />
                <p>Data e horário de fim</p>
                <input type="datetime-local" name="" id="" />
                <hr />
                <Link to="/" className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}> Próximo </button>
            </C.Container>
        </Theme>

    )
} 

