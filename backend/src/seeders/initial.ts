const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Planos
async function main() {

  const user = await prisma.user.create({
    data: {
      user: 'bushido',
      email: 'test@example.com',
      senha: '123123',
      role: 'Admin'
    },
  });

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

  const instrutor4 = await prisma.instrutor.create({
    data: {
      nome: 'Ana Souza',
      email: 'ana.souza@example.com',
      telefone: '9876543210',
      turno: 'Manhã'
    },
  });

  const instrutor5 = await prisma.instrutor.create({
    data: {
      nome: 'Lucas Santos',
      email: 'lucas.santos@example.com',
      telefone: '5678901234',
      turno: 'Tarde'
    },
  });

  const instrutor6 = await prisma.instrutor.create({
    data: {
      nome: 'Carla Almeida',
      email: 'carla.almeida@example.com',
      telefone: '9012345678',
      turno: 'Noite'
    },
  });

  // Clientes
  const cliente1 = await prisma.cliente.create({
    data: {
      nome: 'João Silva',
      email: 'joao.silva@example.com',
      telefone: '1234567890',
      dataNascimento: '1990-01-01T06:00:00Z',
      dataInicio: '2022-06-01T06:00:00Z',
      vencimento: '2024-08-01T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    },
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      nome: 'Maria Santos',
      email: 'maria.santos@example.com',
      telefone: '0987654321',
      dataNascimento: '1995-05-15T06:00:00Z',
      dataInicio: '2023-01-01T06:00:00Z',
      vencimento: '2024-11-01T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    },
  });

  const cliente3 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Oliveira',
      email: 'pedro.oliveira@example.com',
      telefone: '0123456789',
      dataNascimento: '1988-03-20T06:00:00Z',
      dataInicio: '2021-12-01T06:00:00Z',
      vencimento: '2023-12-01T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    },
  });

  const cliente4 = await prisma.cliente.create({
    data: {
      nome: 'Ana Souza',
      email: 'ana.souza@example.com',
      telefone: '9876543210',
      dataNascimento: '1998-07-30T06:00:00Z',
      dataInicio: '2022-04-01T06:00:00Z',
      vencimento: '3500-04-01T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    },
  });

  const cliente5 = await prisma.cliente.create({
    data: {
      nome: 'José Santos',
      email: 'jose.santos@example.com',
      telefone: '8765432109',
      dataNascimento: '1990-11-10T06:00:00Z',
      dataInicio: '2023-06-01T06:00:00Z',
      vencimento: '2024-10-01T06:00:00Z',
      planoId: bianual.id,
      status: 'Ativo'
    },
  });

  const cliente6 = await prisma.cliente.create({
    data: {
      nome: 'Carla Almeida',
      email: 'carla.almeida@example.com',
      telefone: '9012345678',
      dataNascimento: '1985-09-25T06:00:00Z',
      dataInicio: '2022-08-01T06:00:00Z',
      vencimento: '2023-06-01T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    },
  });

  const cliente7 = await prisma.cliente.create({
    data: {
      nome: 'Jorge Cardoso',
      email: 'bushido@gmail.com',
      telefone: '1234567890',
      dataNascimento: '1991-06-17T06:00:00Z',
      dataInicio: '2022-06-01T06:00:00Z',
      vencimento: '3001-12-31T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
