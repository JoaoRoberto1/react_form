import './App.css'
import Button from './components/Button/Button'
import { Input } from './components/input/Input'
import { InputSelect } from './components/InputSelect/InputSelect'
import { useState } from 'react'
function App() {

  const [nomeCompleto, setNomeCompleto] = useState('')
  const [nomeMae, setnomeMae] = useState('')
  const [date, setDate] = useState('')

  const enviar = e => {
    e.preventDefault()

    console.log('form', nomeCompleto);
    console.log('form', nomeMae);
    console.log('form', date);
    
  }

  return (
    <>
      <main className="form-pessoa">
        <h2>Cadastro de Pessoa</h2>

        <form className='row g-3' onSubmit={enviar}>

          <Input
            label='Nome Completo'
            id='nomeCompleto'
            handleChange={(e) => setNomeCompleto(e.target.value)}
          />

          <Input
            label='Nome Mãe'
            id='nomeMae'
            handleChange={e => setnomeMae(e.target.value)}
          />
          <Input 
            inputSize={2}
            label='Data de Nascimento'
            id='dataNascimento'
            type='date'
            handleChange={e => setDate(e.target.value)}
          />

          <Input 
            inputSize={5}
            label='Email'
            id='email'
          />

          <Input 
            inputSize={5}
            label='Senha'
            id='senha'
            type='password'
          />

          <Input 
            label='CEP'
            id='cep'
            inputSize={4}
          />
          <Input 
            label='Endereço'
            id='endereco'
            inputSize={8}
          />

          <Input 
            label='Número'
            id='numero'
            inputSize={1}
          />

          <Input 
            label='Complemento'
            id='complemento'
            inputSize={11}
          />
          <Input 
            label='Bairro'
            id='bairro'
            inputSize={4}
          />

          <InputSelect
            label='Estado'
            id='estado'
          />

          <InputSelect
            label='Cidade'
            id='cidade'
          />

          <Button 
            ButtonColor='btn btn-primary'
            ButtonName='Enviar'
            ButtonType='submit'
          />
          <Button 
            ButtonColor='btn btn-danger'
            ButtonName='Limpar'
            ButtonType='reset'
          />
          

          {/* <div className="col-md-6">
            <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="nomeCompleto" />
          </div> */}

          {/* <div className="col-md-6">
            <label htmlFor="nomeMae" className="form-label">Nome Mãe</label>
            <input type="text" className="form-control" id="nomeMae" />
          </div> */}

          {/* <div className="col-md-2">
            <label htmlFor="dataNascimento" className="form-label">Data Nascimento</label>
            <input type="date" className="form-control" id="dataNascimento" />
          </div> */}

          {/* <div className="col-md-5">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" />
          </div> */}

          {/* <div className="col-md-5">
            <label htmlFor="senha" className="form-label">Senha</label>
            <input type="password" className="form-control" id="senha" />
          </div> */}

          {/* <div className="col-md-4">
            <label htmlFor="cep" className="form-label">CEP</label>
            <input type="text" className="form-control" id="cep" />
          </div> */}

          {/* <div className="col-md-8">
            <label htmlFor="endereco" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="endereco" />
          </div> */}

          {/* <div className="col-md-1">
            <label htmlFor="numero" className="form-label">Número</label>
            <input type="text" className="form-control" id="numero" />
          </div> */}

          {/* <div className="col-md-11">
            <label htmlFor="complemento" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="complemento" />
          </div> */}

          {/* <div className="col-md-4">
            <label htmlFor="bairro" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="bairro" />
          </div> */}

          {/* <div className="col-md-4">
            <label htmlFor="estado" className="form-label">Estado</label>
            <select id="estado" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-4">
            <label htmlFor="cidade" className="form-label">Cidade</label>
            <select id="cidade" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div> */}

        </form>
      </main>
    </>
  )
}

export default App