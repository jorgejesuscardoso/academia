const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Planos
async function main() {
  const mensal = await prisma.plano.create({
    data: {
      nome: 'Mensal',
      valor: 60.00
    },
  });

  const trimestral = await prisma.plano.create({
    data: {
      nome: 'Trimestral',
      valor: 150.00
    },
  });

  const semestral = await prisma.plano.create({
    data: {
      nome: 'Semestral',
      valor: 270.00
    },
  });

  const anual = await prisma.plano.create({
    data: {
      nome: 'Anual',
      valor: 550.00
    },
  });

  const bianual = await prisma.plano.create({
    data: {
      nome: 'Bianual',
      valor: 1000.00
    },
  });

  const vitalicio = await prisma.plano.create({
    data: {
      nome: 'Vitalício',
      valor: 2000.00
    },
  });

  // Instrutores
  const instrutor1 = await prisma.instrutor.create({
    data: {
      nome: 'João Gomes',
      email: 'joao.gomes@example.com',
      telefone: '1234567890',
      turno: 'Manhã'
    },
  });

  const instrutor2 = await prisma.instrutor.create({
    data: {
      nome: 'Maria Silva',
      email: 'maria.silva@example.com',
      telefone: '0987654321',
      turno: 'Tarde'
    },
  });

  const instrutor3 = await prisma.instrutor.create({
    data: {
      nome: 'Pedro Oliveira',
      email: 'pedro.oliveira@example.com',
      telefone: '0123456789',
      turno: 'Noite'
    },
  });

  // Clientes
  const cliente1 = await prisma.cliente.create({
    data: {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      telefone: '1234567890',
      dataNascimento: '1990-01-01T00:00:00Z',
      dataInicio: '2021-01-01T00:00:00Z',
      vencimento: '2021-01-01T00:00:00Z',
      planoId: mensal.id
    },
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      nome: 'Maria Santos',
      email: 'maria.santos@example.com',
      telefone: '0987654321',
      dataNascimento: '1995-05-15T00:00:00Z',
      dataInicio: '2021-05-01T00:00:00Z',
      vencimento: '2021-05-01T00:00:00Z',
      planoId: trimestral.id
    },
  });

  const cliente3 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Oliveira',
      email: 'pedro.oliveira@example.com',
      telefone: '0123456789',
      dataNascimento: '1988-03-20T00:00:00Z',
      dataInicio: '2021-03-01T00:00:00Z',
      vencimento: '2021-03-01T00:00:00Z',
      planoId: anual.id
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
