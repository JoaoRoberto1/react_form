import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>

      <main className="form-pessoa">

        <h2>Cadastro de Pessoa</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="nomeCompleto" className="form-label">Nome Completo</label>
            <input type="text" className="form-control" id="nomeCompleto" />
          </div>

          <div className="col-md-6">
            <label htmlFor="nomedaMae" className="form-label">Nome da Mãe</label>
            <input type="text" className="form-control" id="nomedaMae" />
          </div>

          <div className="col-md-4">
            <label for="inputAddress" className="form-label">CEP</label>
            <input type="text" className="form-control" id="Cep" placeholder="CEP" />
          </div>

          <div className="col-md-8">
            <label for="inputAddress" className="form-label">Endereço</label>
            <input type="text" className="form-control" id="Endereço" placeholder="Endereço" />
          </div>

          <div className="col-md-1">
            <label for="inputAddress" className="form-label">Número</label>
            <input type="text" className="form-control" id="Número" placeholder="Número" />
          </div>

          <div className="col-md-11">
            <label for="inputAddress" className="form-label">Complemento</label>
            <input type="text" className="form-control" id="Complemento" placeholder="Complemento" />
          </div>

          <div className="col-md-4">
            <label for="inputAddress" className="form-label">Bairro</label>
            <input type="text" className="form-control" id="Bairro" placeholder="Bairro" />
          </div>

          <div className="col-md-4">
            <label for="inputAddress" className="form-label">Estado</label>
            <select id="inputState" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
          </div>

          <div className="col-md-4">
            <label for="inputAddress" className="form-label">Cidade</label>
            <select id="inputState" class="form-select">
              <option selected>Escolha...</option>
              <option>...</option>
            </select>
        </div>




      </form>

    </main >

    </>
  )
}

export default App
