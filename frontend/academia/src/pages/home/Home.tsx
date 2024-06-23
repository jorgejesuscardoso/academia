import { useEffect, useState } from 'react'
import { GetClientes } from '../../service/clienteApi'

const Home = () => {
  const [listClients, setListClients] = useState([])

  useEffect(() => {
    const data = async () => { 
      const client = await GetClientes();
      const attDate = client.map((item: any) => {
        const da = item.dataNascimento.split('/').slice(2, 3);
        const date = Date().toLocaleLowerCase().split(' ').slice(3, 4);
        const age = Number(date) - da;
        return {
          id: item.id,
          nome: item.nome,
          email: item.email,
          telefone: item.telefone,
          idade: age,
          Começo: item.dataInicio,
          plano: item.plano,
          vencimento: item.vencimento
        }
      });
      setListClients(attDate)
    }
    data();
  }, [])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Idade</th>
            <th>Começo</th>
            <th>Plano</th>
            <th>Vecimento</th>
          </tr>
        </thead>
        <tbody>
          {listClients.map((item: any) => (
            <tr key={item.id}>
              <td>{ item.id }</td>
              <td>{ item.nome }</td>
              <td>{ item.email }</td>
              <td>{ item.telefone }</td>
              <td>{ item.idade }</td>
              <td>{ item.Começo }</td>
              <td>{ item.plano }</td>
              <td>{ item.vencimento }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home