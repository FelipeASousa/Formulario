import { BrowserRouter, Route } from 'react-router-dom';
import { Etapa1Form } from './pages/Etapa1Form';
import { Etapa2Form } from './pages/Etapa2Form';
import { Etapa3Form } from './pages/Etapa3Form';


export const Router = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Etapa1Form}/>
            <Route path="/etapa2"  component={Etapa2Form}/>
            <Route path="/etapa3" component={Etapa3Form}/>
        </BrowserRouter>
    );
}