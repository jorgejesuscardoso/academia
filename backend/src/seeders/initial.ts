const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Planos
async function main() {

  const user = await prisma.user.create({
    data: {
      username: 'bushido',
      nome: 'Bushido',
      email: 'bushido.adm@adm.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Noite',
      role: 'Admin'
    },
  });

  const mensal = await prisma.plano.create({
    data: {
      nome: 'Mensal',
      valor: 60.00,
      descricao: 'Pagamento mensal. Todos os serviços acessíveis. Valor sem desconto.'
    },
  });

  const trimestral = await prisma.plano.create({
    data: {
      nome: 'Trimestral',
      valor: 171.00,
      descricao: 'Pagamento trimestral. Todos os serviços acessíveis. Valor com desconto de 5% aplicado sobre o total de 3 meses (R$ 180,00 - economia de R$ 9,00 em relação ao plano mensal).'
    },
  });

  const semestral = await prisma.plano.create({
    data: {
      nome: 'Semestral',
      valor: 324.00,
      descricao: 'Pagamento semestral. Todos os serviços acessíveis. Valor com desconto de 10% aplicado sobre o total de 6 meses (R$ 360,00 - economia de R$ 36,00 em relação ao plano mensal).'
    },
  });

  const anual = await prisma.plano.create({
    data: {
      nome: 'Anual',
      valor: 612.00,
      descricao: 'Pagamento anual. Todos os serviços acessíveis. Valor com desconto de 15% aplicado sobre o total de 12 meses (R$ 720,00 - economia de R$ 108,00 em relação ao plano mensal).'
    },
  });

  const bianual = await prisma.plano.create({
    data: {
      nome: 'Bianual',
      valor: 1152.00,
      descricao: 'Pagamento bianual. Todos os serviços acessíveis. Valor com desconto de 20% aplicado sobre o total de 24 meses (R$ 1440,00 - economia de R$ 288,00 em relação ao plano mensal).'
    },
  });

  const vitalicio = await prisma.plano.create({
    data: {
      nome: 'Vitalício',
      valor: 5400.00,
      descricao: 'Pagamento único vitalício. Todos os serviços acessíveis. Valor com desconto de 25% aplicado sobre o valor total de 10 anos (R$ 7200,00 - economia de R$ 1800,00 em relação ao plano mensal).'
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

  const cliente8 = await prisma.cliente.create({
    data: {
      nome: 'Ana Oliveira',
      email: 'ana.oliveira@gmail.com',
      telefone: '9876543210',
      dataNascimento: '1985-02-14T06:00:00Z',
      dataInicio: '2021-05-10T06:00:00Z',
      vencimento: '2023-11-30T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });

  const cliente9 = await prisma.cliente.create({
    data: {
      nome: 'Carlos Santos',
      email: 'carlos.santos@gmail.com',
      telefone: '1231231234',
      dataNascimento: '1978-08-22T06:00:00Z',
      dataInicio: '2020-07-15T06:00:00Z',
      vencimento: '2022-12-31T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });

  const cliente10 = await prisma.cliente.create({
    data: {
      nome: 'Beatriz Lima',
      email: 'beatriz.lima@gmail.com',
      telefone: '3213213210',
      dataNascimento: '1990-03-30T06:00:00Z',
      dataInicio: '2019-01-01T06:00:00Z',
      vencimento: '2025-06-30T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });

  const cliente11 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Silva',
      email: 'pedro.silva@gmail.com',
      telefone: '4564564560',
      dataNascimento: '1982-11-11T06:00:00Z',
      dataInicio: '2018-08-08T06:00:00Z',
      vencimento: '2023-03-31T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });

  const cliente12 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Souza',
      email: 'juliana.souza@gmail.com',
      telefone: '6546546540',
      dataNascimento: '1995-06-25T06:00:00Z',
      dataInicio: '2021-09-09T06:00:00Z',
      vencimento: '2024-09-09T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });

  const cliente13 = await prisma.cliente.create({
    data: {
      nome: 'Rafael Costa',
      email: 'rafael.costa@gmail.com',
      telefone: '7897897890',
      dataNascimento: '1988-12-05T06:00:00Z',
      dataInicio: '2017-03-03T06:00:00Z',
      vencimento: '2022-10-10T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });

  const cliente14 = await prisma.cliente.create({
    data: {
      nome: 'Mariana Ribeiro',
      email: 'mariana.ribeiro@gmail.com',
      telefone: '9879879870',
      dataNascimento: '1993-04-18T06:00:00Z',
      dataInicio: '2016-05-15T06:00:00Z',
      vencimento: '3025-01-01T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });

  const cliente15 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Alves',
      email: 'lucas.alves@gmail.com',
      telefone: '3219876540',
      dataNascimento: '1992-01-23T06:00:00Z',
      dataInicio: '2020-12-12T06:00:00Z',
      vencimento: '2023-06-06T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });

  const cliente16 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Lima',
      email: 'fernanda.lima@gmail.com',
      telefone: '6541237890',
      dataNascimento: '1984-09-09T06:00:00Z',
      dataInicio: '2015-10-10T06:00:00Z',
      vencimento: '2024-12-12T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });

  const cliente17 = await prisma.cliente.create({
    data: {
      nome: 'Thiago Moreira',
      email: 'thiago.moreira@gmail.com',
      telefone: '7896541230',
      dataNascimento: '1997-07-07T06:00:00Z',
      dataInicio: '2014-11-11T06:00:00Z',
      vencimento: '2023-08-08T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });

  const cliente18 = await prisma.cliente.create({
    data: {
      nome: 'Paula Correia',
      email: 'paula.correia@gmail.com',
      telefone: '1237894560',
      dataNascimento: '1994-05-05T06:00:00Z',
      dataInicio: '2013-02-02T06:00:00Z',
      vencimento: '2026-04-04T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });

  const cliente19 = await prisma.cliente.create({
    data: {
      nome: 'Gabriel Ferreira',
      email: 'gabriel.ferreira@gmail.com',
      telefone: '1122334455',
      dataNascimento: '1990-10-15T06:00:00Z',
      dataInicio: '2021-01-01T06:00:00Z',
      vencimento: '2023-12-31T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });

  const cliente20 = await prisma.cliente.create({
    data: {
      nome: 'Larissa Martins',
      email: 'larissa.martins@gmail.com',
      telefone: '9988776655',
      dataNascimento: '1987-07-30T06:00:00Z',
      dataInicio: '2019-04-04T06:00:00Z',
      vencimento: '2024-04-04T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });

  const cliente21 = await prisma.cliente.create({
    data: {
      nome: 'Rodrigo Rocha',
      email: 'rodrigo.rocha@gmail.com',
      telefone: '5566778899',
      dataNascimento: '1985-12-20T06:00:00Z',
      dataInicio: '2018-07-15T06:00:00Z',
      vencimento: '2023-07-15T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });

  const cliente22 = await prisma.cliente.create({
    data: {
      nome: 'Isabela Carvalho',
      email: 'isabela.carvalho@gmail.com',
      telefone: '6677889900',
      dataNascimento: '1993-03-10T06:00:00Z',
      dataInicio: '2020-05-20T06:00:00Z',
      vencimento: '2025-05-20T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });

  const cliente23 = await prisma.cliente.create({
    data: {
      nome: 'Bruno Mendes',
      email: 'bruno.mendes@gmail.com',
      telefone: '7788990011',
      dataNascimento: '1998-11-25T06:00:00Z',
      dataInicio: '2021-09-01T06:00:00Z',
      vencimento: '2023-09-01T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });

  const cliente24 = await prisma.cliente.create({
    data: {
      nome: 'Renata Lima',
      email: 'renata.lima@gmail.com',
      telefone: '8899001122',
      dataNascimento: '1986-04-18T06:00:00Z',
      dataInicio: '2017-12-12T06:00:00Z',
      vencimento: '3022-12-12T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Desativado'
    }
  });

  const cliente25 = await prisma.cliente.create({
    data: {
      nome: 'Eduardo Gomes',
      email: 'eduardo.gomes@gmail.com',
      telefone: '9900112233',
      dataNascimento: '1991-05-05T06:00:00Z',
      dataInicio: '2019-03-03T06:00:00Z',
      vencimento: '2023-03-03T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });

  const cliente26 = await prisma.cliente.create({
    data: {
      nome: 'Carolina Torres',
      email: 'carolina.torres@gmail.com',
      telefone: '1100223344',
      dataNascimento: '1994-09-15T06:00:00Z',
      dataInicio: '2020-06-15T06:00:00Z',
      vencimento: '2025-06-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });

  const cliente27 = await prisma.cliente.create({
    data: {
      nome: 'Felipe Almeida',
      email: 'felipe.almeida@gmail.com',
      telefone: '2233445566',
      dataNascimento: '1996-08-10T06:00:00Z',
      dataInicio: '2021-11-20T06:00:00Z',
      vencimento: '2023-11-20T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });

  const cliente28 = await prisma.cliente.create({
    data: {
      nome: 'Patricia Barros',
      email: 'patricia.barros@gmail.com',
      telefone: '3344556677',
      dataNascimento: '1983-02-14T06:00:00Z',
      dataInicio: '2018-01-01T06:00:00Z',
      vencimento: '2023-01-01T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });

  const cliente29 = await prisma.cliente.create({
    data: {
      nome: 'Vitor Nascimento',
      email: 'vitor.nascimento@gmail.com',
      telefone: '4455667788',
      dataNascimento: '1989-12-30T06:00:00Z',
      dataInicio: '2019-08-15T06:00:00Z',
      vencimento: '2024-08-15T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });

  const cliente30 = await prisma.cliente.create({
    data: {
      nome: 'Tatiana Sousa',
      email: 'tatiana.sousa@gmail.com',
      telefone: '5566778899',
      dataNascimento: '1980-01-01T06:00:00Z',
      dataInicio: '2021-04-04T06:00:00Z',
      vencimento: '2023-04-04T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
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
