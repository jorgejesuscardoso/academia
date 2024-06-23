const DadosDoClienteMaisPlanos = (data: any, plano: any) => {
  return {
    id: data.id,
    nome: data.nome,
    email: data.email,
    telefone: data.telefone,
    dataNascimento: data.dataNascimento.toLocaleDateString(),
    dataInicio: data.dataInicio.toLocaleDateString(),
    vencimento: data.vencimento?.getFullYear() && data.vencimento?.getFullYear()  > 3000 ? null : data.vencimento?.toLocaleDateString(),
    plano: {
      id: data.planoId,
      tipo: plano.nome,
      valor: plano.valor,
    }
  }
}

export default DadosDoClienteMaisPlanos;
