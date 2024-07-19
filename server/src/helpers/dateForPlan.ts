const DataPorTipoDePlano = (cliente: any, plano: any) => {
  const startDate = new Date(cliente.dataInicio);
    
    let endDate;

    if (plano.nome === 'Mensal') {
      endDate = new Date(startDate.setMonth(startDate.getMonth() + 1));
    } else if (plano.nome === 'Trimestral') {
      endDate = new Date(startDate.setMonth(startDate.getMonth() + 3));
    } else if (plano.nome === 'Semestral') {
      endDate = new Date(startDate.setMonth(startDate.getMonth() + 6));
    } else if (plano.nome === 'Anual') {
      endDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1));
    } else if (plano.nome === 'Bianual') {
      endDate = new Date(startDate.setMonth(startDate.getMonth() + 24));
    } else {
      endDate = new Date(startDate.setFullYear(startDate.getFullYear() + 1000));
    }

    return endDate;
}

export default DataPorTipoDePlano;
