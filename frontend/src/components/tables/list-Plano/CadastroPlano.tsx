import { useState } from 'react';
import { CreatePlano } from '../../../service/planos';
import { ContainerCadastroPlano, ContentCadastroPlano, FormCadastroPlano } from './style';
import Swal from 'sweetalert2';

const CadastroPlano = () => {
  const [data, setData] = useState({
    nome: '',
    valor: '',
    descricao: ''
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fixData = {
        ...data,
        valor: parseFloat(data.valor)
      };

      const response = await CreatePlano(fixData);
      if (response.id !== 0) {
        Swal.fire({
          icon: 'success',
          title: 'Plano cadastrado com sucesso',
        });

        setData({
          nome: '',
          valor: '',
          descricao: ''
        });
      }
      
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar plano',
        text: 'Erro interno do servidor',
      });
    }
  }
  return (
    <ContainerCadastroPlano>
      <ContentCadastroPlano>
        <FormCadastroPlano
          onSubmit={handleSubmit}
        >
        <h1>Cadastrar novo Plano</h1>

          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={data.nome}
              onChange={
                (e) => setData({ ...data, nome: e.target.value })
              } />
          </div>

          <div>
            <label>Valor:</label>
            <input
              type="text"
              value={data.valor} 
              onChange={(e) => setData({ ...data, valor: e.target.value })} />
          </div>
          
          <div>
            <label>Descrição:</label>
            <textarea
              value={data.descricao}
              onChange={(e) => setData({ ...data, descricao: e.target.value })} />
          </div>

          <div className='btn'>
            <button type="submit">Cadastrar</button>
            <button
              type="reset"
              onClick={() => setData({
                nome: '',
                valor: '',
                descricao: ''
              })}
            >Limpar</button>
          </div>
        </FormCadastroPlano>
      </ContentCadastroPlano>

    </ContainerCadastroPlano>
  );
}

export default CadastroPlano;