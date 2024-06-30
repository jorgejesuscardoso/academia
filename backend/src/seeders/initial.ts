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


  const user2 = await prisma.user.create({
    data: {
      username: 'jorge',
      nome: 'Jorge',
      email: 'jorge@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Manhã',
      role: 'Instrutor'
    },
  });

  const user3 = await prisma.user.create({
    data: {
      username: 'maria',
      nome: 'Maria',
      email: 'mary.top@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Tarde',
      role: 'Instrutor'
    },
  });

  const user4 = await prisma.user.create({
    data: {
      username: 'ana',
      nome: 'Ana',
      email: 'aninha.danana@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Noite',
      role: 'Instrutor'
    },
  });

  const user5 = await prisma.user.create({
    data: {
      username: 'lucas',
      nome: 'Lucas',
      email: 'lucas.silva@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Manhã',
      role: 'Aluno'
    },
  });
  
  const user6 = await prisma.user.create({
    data: {
      username: 'carolina',
      nome: 'Carolina',
      email: 'carol.jones@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Tarde',
      role: 'Aluno'
    },
  });
  
  const user7 = await prisma.user.create({
    data: {
      username: 'rodrigo',
      nome: 'Rodrigo',
      email: 'rodrigo.cruz@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Noite',
      role: 'Aluno'
    },
  });
  
  const user8 = await prisma.user.create({
    data: {
      username: 'isabela',
      nome: 'Isabela',
      email: 'isa.moreira@test.com',
      telefone: '1234567890',
      senha: '123123',
      turno: 'Manhã',
      role: 'Aluno'
    },
  });

  // Planos

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
      valor: 162.00,
      descricao: 'Pagamento trimestral. Valor com desconto de 10% aplicado sobre o total de 3 meses (R$ 180,00 - economia de R$ 18,00 em relação ao plano mensal).'
    },
  });

  const semestral = await prisma.plano.create({
    data: {
      nome: 'Semestral',
      valor: 306.00,
      descricao: 'Pagamento semestral. Valor com desconto de 15% aplicado sobre o total de 6 meses (R$ 360,00 - economia de R$ 54,00).'
    },
  });

  const anual = await prisma.plano.create({
    data: {
      nome: 'Anual',
      valor: 578.00,
      descricao: 'Pagamento anual. Valor com desconto de 20% aplicado sobre o total de 12 meses (R$ 720,00 - economia de R$ 142,00). Novos usuários recebem um brinde de boas vindas: camisa + coqueteleira'
    },
  });

  const bienal = await prisma.plano.create({
    data: {
      nome: 'Bienal',
      valor: 1152.00,
      descricao: 'Pagamento bienal. Valor com desconto de 20% aplicado sobre o total de 24 meses (R$ 1440,00 - economia de R$ 288,00). Novos usuários recebem um brinde de boas vindas: camisa + coqueteleira + luva + participação grátis em alguns dos eventos da academia.'
    },
  });

  const vitalicio = await prisma.plano.create({
    data: {
      nome: 'Vitalício',
      valor: 7560.00,
      descricao: 'Pagamento único vitalício. Mais brinde da academia(coqueteleira, camisa, luva e estacionamento privativo, participação grátis de todos eventos e a participação de 5 dias grátis do tão cobiçado Summer Travel). Valor com desconto de 30% aplicado sobre o valor total de 15 anos (R$ 10800,00 - economia de R$ 3240,00 ).'
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
  
  const instrutor7 = await prisma.instrutor.create({
    data: {
      nome: 'Rafael Lima',
      email: 'rafael.lima@example.com',
      telefone: '2345678901',
      turno: 'Manhã'
    },
  });
  
  const instrutor8 = await prisma.instrutor.create({
    data: {
      nome: 'Fernanda Costa',
      email: 'fernanda.costa@example.com',
      telefone: '3456789012',
      turno: 'Tarde'
    },
  });
  
  const instrutor9 = await prisma.instrutor.create({
    data: {
      nome: 'Bruno Silva',
      email: 'bruno.silva@example.com',
      telefone: '4567890123',
      turno: 'Noite'
    },
  });
  
  const instrutor10 = await prisma.instrutor.create({
    data: {
      nome: 'Juliana Martins',
      email: 'juliana.martins@example.com',
      telefone: '5678901234',
      turno: 'Manhã'
    },
  });
  
  const instrutor11 = await prisma.instrutor.create({
    data: {
      nome: 'Ricardo Ferreira',
      email: 'ricardo.ferreira@example.com',
      telefone: '6789012345',
      turno: 'Tarde'
    },
  });
  
  const instrutor12 = await prisma.instrutor.create({
    data: {
      nome: 'Patrícia Almeida',
      email: 'patricia.almeida@example.com',
      telefone: '7890123456',
      turno: 'Noite'
    },
  });
  
  const instrutor13 = await prisma.instrutor.create({
    data: {
      nome: 'Leonardo Melo',
      email: 'leonardo.melo@example.com',
      telefone: '8901234567',
      turno: 'Manhã'
    },
  });
  
  const instrutor14 = await prisma.instrutor.create({
    data: {
      nome: 'Gabriela Rocha',
      email: 'gabriela.rocha@example.com',
      telefone: '9012345678',
      turno: 'Tarde'
    },
  });
  
  const instrutor15 = await prisma.instrutor.create({
    data: {
      nome: 'Thiago Pereira',
      email: 'thiago.pereira@example.com',
      telefone: '0123456789',
      turno: 'Noite'
    },
  });
  
  const instrutor16 = await prisma.instrutor.create({
    data: {
      nome: 'Laura Barros',
      email: 'laura.barros@example.com',
      telefone: '1234567890',
      turno: 'Manhã'
    },
  });
  
  const instrutor17 = await prisma.instrutor.create({
    data: {
      nome: 'Rodrigo Gomes',
      email: 'rodrigo.gomes@example.com',
      telefone: '2345678901',
      turno: 'Tarde'
    },
  });
  
  const instrutor18 = await prisma.instrutor.create({
    data: {
      nome: 'Aline Nunes',
      email: 'aline.nunes@example.com',
      telefone: '3456789012',
      turno: 'Noite'
    },
  });
  
  const instrutor19 = await prisma.instrutor.create({
    data: {
      nome: 'Felipe Cardoso',
      email: 'felipe.cardoso@example.com',
      telefone: '4567890123',
      turno: 'Manhã'
    },
  });
  
  const instrutor20 = await prisma.instrutor.create({
    data: {
      nome: 'Beatriz Dias',
      email: 'beatriz.dias@example.com',
      telefone: '5678901234',
      turno: 'Tarde'
    },
  });
  
  const instrutor21 = await prisma.instrutor.create({
    data: {
      nome: 'André Moreira',
      email: 'andre.moreira@example.com',
      telefone: '6789012345',
      turno: 'Noite'
    },
  });
  
  const instrutor22 = await prisma.instrutor.create({
    data: {
      nome: 'Camila Fonseca',
      email: 'camila.fonseca@example.com',
      telefone: '7890123456',
      turno: 'Manhã'
    },
  });
  
  const instrutor23 = await prisma.instrutor.create({
    data: {
      nome: 'Daniela Sousa',
      email: 'daniela.sousa@example.com',
      telefone: '8901234567',
      turno: 'Tarde'
    },
  });
  
  const instrutor24 = await prisma.instrutor.create({
    data: {
      nome: 'Eduardo Araújo',
      email: 'eduardo.araujo@example.com',
      telefone: '9012345678',
      turno: 'Noite'
    },
  });
  
  const instrutor25 = await prisma.instrutor.create({
    data: {
      nome: 'Mariana Pinto',
      email: 'mariana.pinto@example.com',
      telefone: '0123456789',
      turno: 'Manhã'
    },
  });
  
  const instrutor26 = await prisma.instrutor.create({
    data: {
      nome: 'Bruno Costa',
      email: 'bruno.costa@example.com',
      telefone: '1234567890',
      turno: 'Tarde'
    },
  });
  
  const instrutor27 = await prisma.instrutor.create({
    data: {
      nome: 'Renata Martins',
      email: 'renata.martins@example.com',
      telefone: '2345678901',
      turno: 'Noite'
    },
  });
  
  const instrutor28 = await prisma.instrutor.create({
    data: {
      nome: 'Marcelo Lima',
      email: 'marcelo.lima@example.com',
      telefone: '3456789012',
      turno: 'Manhã'
    },
  });
  
  const instrutor29 = await prisma.instrutor.create({
    data: {
      nome: 'Cecília Andrade',
      email: 'cecilia.andrade@example.com',
      telefone: '4567890123',
      turno: 'Tarde'
    },
  });
  
  const instrutor30 = await prisma.instrutor.create({
    data: {
      nome: 'Gustavo Reis',
      email: 'gustavo.reis@example.com',
      telefone: '5678901234',
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
      planoId: bienal.id,
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
      vencimento: '2026-12-31T06:00:00Z',
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
      vencimento: '2026-10-10T06:00:00Z',
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

  const cliente31 = await prisma.cliente.create({
    data: {
      nome: 'Carlos Silva',
      email: 'carlos.silva@gmail.com',
      telefone: '1122334455',
      dataNascimento: '1990-02-14T06:00:00Z',
      dataInicio: '2022-03-01T06:00:00Z',
      vencimento: '2023-03-01T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente32 = await prisma.cliente.create({
    data: {
      nome: 'Maria Oliveira',
      email: 'maria.oliveira@gmail.com',
      telefone: '2233445566',
      dataNascimento: '1985-05-20T06:00:00Z',
      dataInicio: '2021-06-15T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente33 = await prisma.cliente.create({
    data: {
      nome: 'João Pereira',
      email: 'joao.pereira@gmail.com',
      telefone: '3344556677',
      dataNascimento: '1975-08-30T06:00:00Z',
      dataInicio: '2020-01-10T06:00:00Z',
      vencimento: '2025-07-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente34 = await prisma.cliente.create({
    data: {
      nome: 'Ana Costa',
      email: 'ana.costa@gmail.com',
      telefone: '4455667788',
      dataNascimento: '1992-03-15T06:00:00Z',
      dataInicio: '2019-09-05T06:00:00Z',
      vencimento: '2025-09-05T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente35 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Lima',
      email: 'pedro.lima@gmail.com',
      telefone: '5566778899',
      dataNascimento: '1988-12-12T06:00:00Z',
      dataInicio: '2018-02-22T06:00:00Z',
      vencimento: '2025-02-22T06:00:00Z',
      planoId: bienal.id,
      status: 'Ativo'
    }
  });
  
  const cliente36 = await prisma.cliente.create({
    data: {
      nome: 'Clara Martins',
      email: 'clara.martins@gmail.com',
      telefone: '6677889900',
      dataNascimento: '1979-11-11T06:00:00Z',
      dataInicio: '2017-05-25T06:00:00Z',
      vencimento: '3001-01-01T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });
  
  const cliente37 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Rocha',
      email: 'lucas.rocha@gmail.com',
      telefone: '7788990011',
      dataNascimento: '1991-04-24T06:00:00Z',
      dataInicio: '2020-11-15T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente38 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Alves',
      email: 'fernanda.alves@gmail.com',
      telefone: '8899001122',
      dataNascimento: '1983-06-19T06:00:00Z',
      dataInicio: '2019-10-10T06:00:00Z',
      vencimento: '2025-04-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente39 = await prisma.cliente.create({
    data: {
      nome: 'Bruno Ribeiro',
      email: 'bruno.ribeiro@gmail.com',
      telefone: '9900112233',
      dataNascimento: '1977-07-07T06:00:00Z',
      dataInicio: '2017-08-08T06:00:00Z',
      vencimento: '2024-09-08T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente40 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Sousa',
      email: 'juliana.sousa@gmail.com',
      telefone: '0011223344',
      dataNascimento: '1995-09-23T06:00:00Z',
      dataInicio: '2021-05-05T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente41 = await prisma.cliente.create({
    data: {
      nome: 'Renato Barros',
      email: 'renato.barros@gmail.com',
      telefone: '1122334455',
      dataNascimento: '1986-10-29T06:00:00Z',
      dataInicio: '2020-02-10T06:00:00Z',
      vencimento: '2025-08-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente42 = await prisma.cliente.create({
    data: {
      nome: 'Patrícia Melo',
      email: 'patricia.melo@gmail.com',
      telefone: '2233445566',
      dataNascimento: '1994-12-05T06:00:00Z',
      dataInicio: '2021-01-20T06:00:00Z',
      vencimento: '2026-01-20T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente43 = await prisma.cliente.create({
    data: {
      nome: 'Ricardo Fernandes',
      email: 'ricardo.fernandes@gmail.com',
      telefone: '3344556677',
      dataNascimento: '1980-02-13T06:00:00Z',
      dataInicio: '2019-03-15T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: bienal.id,
      status: 'Ativo'
    }
  });
  
  const cliente44 = await prisma.cliente.create({
    data: {
      nome: 'Larissa Nunes',
      email: 'larissa.nunes@gmail.com',
      telefone: '4455667788',
      dataNascimento: '1978-03-22T06:00:00Z',
      dataInicio: '2018-04-10T06:00:00Z',
      vencimento: '3001-01-01T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });
  
  const cliente45 = await prisma.cliente.create({
    data: {
      nome: 'Rafael Batista',
      email: 'rafael.batista@gmail.com',
      telefone: '5566778899',
      dataNascimento: '1987-07-17T06:00:00Z',
      dataInicio: '2022-05-01T06:00:00Z',
      vencimento: '2026-06-01T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente46 = await prisma.cliente.create({
    data: {
      nome: 'Gabriela Ferreira',
      email: 'gabriela.ferreira@gmail.com',
      telefone: '6677889900',
      dataNascimento: '1993-08-18T06:00:00Z',
      dataInicio: '2020-09-09T06:00:00Z',
      vencimento: '2025-12-09T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente47 = await prisma.cliente.create({
    data: {
      nome: 'Fábio Almeida',
      email: 'fabio.almeida@gmail.com',
      telefone: '7788990011',
      dataNascimento: '1984-11-21T06:00:00Z',
      dataInicio: '2017-06-06T06:00:00Z',
      vencimento: '2024-12-06T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente48 = await prisma.cliente.create({
    data: {
      nome: 'Débora Teixeira',
      email: 'debora.teixeira@gmail.com',
      telefone: '8899001122',
      dataNascimento: '1989-01-01T06:00:00Z',
      dataInicio: '2019-07-15T06:00:00Z',
      vencimento: '2025-07-15T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente49 = await prisma.cliente.create({
    data: {
      nome: 'Marcelo Correia',
      email: 'marcelo.correia@gmail.com',
      telefone: '9900112233',
      dataNascimento: '1992-02-12T06:00:00Z',
      dataInicio: '2016-11-20T06:00:00Z',
      vencimento: '2024-11-20T06:00:00Z',
      planoId: bienal.id,
      status: 'Ativo'
    }
  });
  
  const cliente50 = await prisma.cliente.create({
    data: {
      nome: 'Simone Azevedo',
      email: 'simone.azevedo@gmail.com',
      telefone: '0011223344',
      dataNascimento: '1981-10-10T06:00:00Z',
      dataInicio: '2021-12-12T06:00:00Z',
      vencimento: '3001-01-01T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });
  const cliente51 = await prisma.cliente.create({
    data: {
      nome: 'Isabela Rodrigues',
      email: 'isabela.rodrigues.51@example.com',
      telefone: '1102233445',
      dataNascimento: '1996-05-15T06:00:00Z',
      dataInicio: '2023-01-01T06:00:00Z',
      vencimento: '2024-01-01T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente52 = await prisma.cliente.create({
    data: {
      nome: 'Felipe Carvalho',
      email: 'felipe.carvalho.52@example.com',
      telefone: '2203344556',
      dataNascimento: '1988-08-25T06:00:00Z',
      dataInicio: '2022-02-15T06:00:00Z',
      vencimento: '2026-08-15T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente53 = await prisma.cliente.create({
    data: {
      nome: 'Camila Barros',
      email: 'camila.barros.53@example.com',
      telefone: '3304455667',
      dataNascimento: '1993-11-20T06:00:00Z',
      dataInicio: '2021-03-10T06:00:00Z',
      vencimento: '2026-03-10T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente54 = await prisma.cliente.create({
    data: {
      nome: 'Marcelo Andrade',
      email: 'marcelo.andrade.54@example.com',
      telefone: '4405566778',
      dataNascimento: '1991-06-12T06:00:00Z',
      dataInicio: '2020-07-01T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente55 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Almeida',
      email: 'fernanda.almeida.55@example.com',
      telefone: '5506677889',
      dataNascimento: '1985-09-15T06:00:00Z',
      dataInicio: '2019-10-05T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: bienal.id,
      status: 'Ativo'
    }
  });
  
  const cliente56 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Ribeiro',
      email: 'lucas.ribeiro.56@example.com',
      telefone: '6607788990',
      dataNascimento: '1982-12-05T06:00:00Z',
      dataInicio: '2018-11-15T06:00:00Z',
      vencimento: '3001-01-01T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });
  
  const cliente57 = await prisma.cliente.create({
    data: {
      nome: 'Patrícia Nascimento',
      email: 'patricia.nascimento.57@example.com',
      telefone: '7708899001',
      dataNascimento: '1990-07-23T06:00:00Z',
      dataInicio: '2022-05-20T06:00:00Z',
      vencimento: '2023-05-20T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente58 = await prisma.cliente.create({
    data: {
      nome: 'Renato Lima',
      email: 'renato.lima.58@example.com',
      telefone: '8809900112',
      dataNascimento: '1987-03-18T06:00:00Z',
      dataInicio: '2021-09-10T06:00:00Z',
      vencimento: '2026-03-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente59 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Araújo',
      email: 'juliana.araujo.59@example.com',
      telefone: '9900112233',
      dataNascimento: '1994-04-14T06:00:00Z',
      dataInicio: '2020-08-05T06:00:00Z',
      vencimento: '2025-11-05T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente60 = await prisma.cliente.create({
    data: {
      nome: 'Gustavo Pereira',
      email: 'gustavo.pereira.60@example.com',
      telefone: '1102233445',
      dataNascimento: '1989-11-30T06:00:00Z',
      dataInicio: '2017-06-01T06:00:00Z',
      vencimento: '2019-06-01T06:00:00Z',
      planoId: bienal.id,
      status: 'Ativo'
    }
  });
  const cliente61 = await prisma.cliente.create({
    data: {
      nome: 'Bianca Costa',
      email: 'bianca.costa.61@example.com',
      telefone: '2211223344',
      dataNascimento: '1995-02-10T06:00:00Z',
      dataInicio: '2022-09-05T06:00:00Z',
      vencimento: '2023-09-05T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente62 = await prisma.cliente.create({
    data: {
      nome: 'Rodrigo Silva',
      email: 'rodrigo.silva.62@example.com',
      telefone: '3322334455',
      dataNascimento: '1983-04-20T06:00:00Z',
      dataInicio: '2021-05-15T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente63 = await prisma.cliente.create({
    data: {
      nome: 'Ana Oliveira',
      email: 'ana.oliveira.63@example.com',
      telefone: '4433445566',
      dataNascimento: '1990-06-15T06:00:00Z',
      dataInicio: '2020-10-10T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente64 = await prisma.cliente.create({
    data: {
      nome: 'Marcos Pereira',
      email: 'marcos.pereira.64@example.com',
      telefone: '5544556677',
      dataNascimento: '1987-09-25T06:00:00Z',
      dataInicio: '2019-11-01T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: bienal.id,
      status: 'Desativado'
    }
  });
  
  const cliente65 = await prisma.cliente.create({
    data: {
      nome: 'Renata Santos',
      email: 'renata.santos.65@example.com',
      telefone: '6655667788',
      dataNascimento: '1985-12-30T06:00:00Z',
      dataInicio: '2018-08-15T06:00:00Z',
      vencimento: '2019-08-15T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente66 = await prisma.cliente.create({
    data: {
      nome: 'Julio Lima',
      email: 'julio.lima.66@example.com',
      telefone: '7766778899',
      dataNascimento: '1992-03-12T06:00:00Z',
      dataInicio: '2023-04-04T06:00:00Z',
      vencimento: '2023-07-04T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente67 = await prisma.cliente.create({
    data: {
      nome: 'Larissa Nascimento',
      email: 'larissa.nascimento.67@example.com',
      telefone: '8877889900',
      dataNascimento: '1988-05-25T06:00:00Z',
      dataInicio: '2021-01-01T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente68 = await prisma.cliente.create({
    data: {
      nome: 'Bruno Souza',
      email: 'bruno.souza.68@example.com',
      telefone: '9988990011',
      dataNascimento: '1993-08-30T06:00:00Z',
      dataInicio: '2022-03-15T06:00:00Z',
      vencimento: '2026-06-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente69 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Oliveira',
      email: 'fernanda.oliveira.69@example.com',
      telefone: '1100112233',
      dataNascimento: '1981-07-01T06:00:00Z',
      dataInicio: '2019-09-10T06:00:00Z',
      vencimento: '2025-09-10T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente70 = await prisma.cliente.create({
    data: {
      nome: 'Gustavo Almeida',
      email: 'gustavo.almeida.70@example.com',
      telefone: '2211223344',
      dataNascimento: '1989-11-05T06:00:00Z',
      dataInicio: '2018-12-20T06:00:00Z',
      vencimento: '2025-12-20T06:00:00Z',
      planoId: bienal.id,
      status: 'Desativado'
    }
  });
  
  const cliente71 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Souza',
      email: 'juliana.souza.71@example.com',
      telefone: '3322334455',
      dataNascimento: '1995-04-12T06:00:00Z',
      dataInicio: '2022-06-10T06:00:00Z',
      vencimento: '2023-06-10T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente72 = await prisma.cliente.create({
    data: {
      nome: 'Eduardo Lima',
      email: 'eduardo.lima.72@example.com',
      telefone: '4433445566',
      dataNascimento: '1987-02-19T06:00:00Z',
      dataInicio: '2021-11-01T06:00:00Z',
      vencimento: '2026-11-01T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente73 = await prisma.cliente.create({
    data: {
      nome: 'Paula Costa',
      email: 'paula.costa.73@example.com',
      telefone: '5544556677',
      dataNascimento: '1982-05-15T06:00:00Z',
      dataInicio: '2020-01-10T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente74 = await prisma.cliente.create({
    data: {
      nome: 'Rafael Pereira',
      email: 'rafael.pereira.74@example.com',
      telefone: '6655667788',
      dataNascimento: '1990-10-25T06:00:00Z',
      dataInicio: '2019-03-20T06:00:00Z',
      vencimento: '2019-09-20T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente75 = await prisma.cliente.create({
    data: {
      nome: 'Mariana Santos',
      email: 'mariana.santos.75@example.com',
      telefone: '7766778899',
      dataNascimento: '1985-07-18T06:00:00Z',
      dataInicio: '2018-05-15T06:00:00Z',
      vencimento: '2024-08-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente76 = await prisma.cliente.create({
    data: {
      nome: 'Carlos Nascimento',
      email: 'carlos.nascimento.76@example.com',
      telefone: '8877889900',
      dataNascimento: '1981-09-01T06:00:00Z',
      dataInicio: '2021-11-05T06:00:00Z',
      vencimento: '2026-11-05T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente77 = await prisma.cliente.create({
    data: {
      nome: 'Lúcia Fernandes',
      email: 'lucia.fernandes.77@example.com',
      telefone: '9988990011',
      dataNascimento: '1983-06-22T06:00:00Z',
      dataInicio: '2020-12-01T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente78 = await prisma.cliente.create({
    data: {
      nome: 'Roberto Oliveira',
      email: 'roberto.oliveira.78@example.com',
      telefone: '1100112233',
      dataNascimento: '1992-01-13T06:00:00Z',
      dataInicio: '2019-05-10T06:00:00Z',
      vencimento: '2019-08-10T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente79 = await prisma.cliente.create({
    data: {
      nome: 'Patrícia Costa',
      email: 'patricia.costa.79@example.com',
      telefone: '2211223344',
      dataNascimento: '1986-03-07T06:00:00Z',
      dataInicio: '2022-01-15T06:00:00Z',
      vencimento: '2023-01-15T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente80 = await prisma.cliente.create({
    data: {
      nome: 'Vinícius Almeida',
      email: 'vinicius.almeida.80@example.com',
      telefone: '3322334455',
      dataNascimento: '1994-02-25T06:00:00Z',
      dataInicio: '2020-04-10T06:00:00Z',
      vencimento: '2025-10-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente81 = await prisma.cliente.create({
    data: {
      nome: 'Beatriz Lima',
      email: 'beatriz.lima.81@example.com',
      telefone: '4433445566',
      dataNascimento: '1997-11-11T06:00:00Z',
      dataInicio: '2023-02-05T06:00:00Z',
      vencimento: '2024-02-05T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente82 = await prisma.cliente.create({
    data: {
      nome: 'Guilherme Souza',
      email: 'guilherme.souza.82@example.com',
      telefone: '5544556677',
      dataNascimento: '1988-04-18T06:00:00Z',
      dataInicio: '2021-06-01T06:00:00Z',
      vencimento: '2026-06-01T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente83 = await prisma.cliente.create({
    data: {
      nome: 'Carolina Ribeiro',
      email: 'carolina.ribeiro.83@example.com',
      telefone: '6655667788',
      dataNascimento: '1981-08-29T06:00:00Z',
      dataInicio: '2018-11-01T06:00:00Z',
      vencimento: '2019-11-01T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente84 = await prisma.cliente.create({
    data: {
      nome: 'Diego Nascimento',
      email: 'diego.nascimento.84@example.com',
      telefone: '7766778899',
      dataNascimento: '1990-09-10T06:00:00Z',
      dataInicio: '2019-03-15T06:00:00Z',
      vencimento: '2019-09-15T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente85 = await prisma.cliente.create({
    data: {
      nome: 'Amanda Silva',
      email: 'amanda.silva.85@example.com',
      telefone: '8877889900',
      dataNascimento: '1992-12-07T06:00:00Z',
      dataInicio: '2022-05-20T06:00:00Z',
      vencimento: '2026-08-20T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente86 = await prisma.cliente.create({
    data: {
      nome: 'Bruno Costa',
      email: 'bruno.costa.86@example.com',
      telefone: '9988990011',
      dataNascimento: '1984-01-19T06:00:00Z',
      dataInicio: '2018-12-10T06:00:00Z',
      vencimento: '2019-12-10T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente87 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Oliveira',
      email: 'fernanda.oliveira.87@example.com',
      telefone: '1100112233',
      dataNascimento: '1987-05-03T06:00:00Z',
      dataInicio: '2019-11-15T06:00:00Z',
      vencimento: '2025-11-15T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente88 = await prisma.cliente.create({
    data: {
      nome: 'Gabriel Lima',
      email: 'gabriel.lima.88@example.com',
      telefone: '2211223344',
      dataNascimento: '1995-09-22T06:00:00Z',
      dataInicio: '2022-07-05T06:00:00Z',
      vencimento: '2023-07-05T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente89 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Almeida',
      email: 'juliana.almeida.89@example.com',
      telefone: '3322334455',
      dataNascimento: '1982-10-01T06:00:00Z',
      dataInicio: '2020-05-20T06:00:00Z',
      vencimento: '2025-08-20T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente90 = await prisma.cliente.create({
    data: {
      nome: 'Rodrigo Santos',
      email: 'rodrigo.santos.90@example.com',
      telefone: '4433445566',
      dataNascimento: '1989-03-14T06:00:00Z',
      dataInicio: '2021-12-01T06:00:00Z',
      vencimento: '2026-12-01T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente91 = await prisma.cliente.create({
    data: {
      nome: 'Tatiana Souza',
      email: 'tatiana.souza.91@example.com',
      telefone: '5544556677',
      dataNascimento: '1980-01-01T06:00:00Z',
      dataInicio: '2021-04-04T06:00:00Z',
      vencimento: '2026-04-04T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente92 = await prisma.cliente.create({
    data: {
      nome: 'Vitor Nascimento',
      email: 'vitor.nascimento.92@example.com',
      telefone: '6655667788',
      dataNascimento: '1989-12-30T06:00:00Z',
      dataInicio: '2019-08-15T06:00:00Z',
      vencimento: '2025-08-15T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente93 = await prisma.cliente.create({
    data: {
      nome: 'Marcela Gomes',
      email: 'marcela.gomes.93@example.com',
      telefone: '7766778899',
      dataNascimento: '1991-05-25T06:00:00Z',
      dataInicio: '2022-01-15T06:00:00Z',
      vencimento: '2026-07-15T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente94 = await prisma.cliente.create({
    data: {
      nome: 'Andréa Almeida',
      email: 'andrea.almeida.94@example.com',
      telefone: '8877889900',
      dataNascimento: '1987-07-14T06:00:00Z',
      dataInicio: '2018-03-10T06:00:00Z',
      vencimento: '2024-06-10T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente95 = await prisma.cliente.create({
    data: {
      nome: 'Fernando Costa',
      email: 'fernando.costa.95@example.com',
      telefone: '9988990011',
      dataNascimento: '1983-12-03T06:00:00Z',
      dataInicio: '2021-05-01T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente96 = await prisma.cliente.create({
    data: {
      nome: 'Claudia Lima',
      email: 'claudia.lima.96@example.com',
      telefone: '1100112233',
      dataNascimento: '1992-09-27T06:00:00Z',
      dataInicio: '2019-08-10T06:00:00Z',
      vencimento: '2025-08-10T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente97 = await prisma.cliente.create({
    data: {
      nome: 'Fábio Souza',
      email: 'fabio.souza.97@example.com',
      telefone: '2211223344',
      dataNascimento: '1984-01-09T06:00:00Z',
      dataInicio: '2020-03-15T06:00:00Z',
      vencimento: '2024-06-30T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente98 = await prisma.cliente.create({
    data: {
      nome: 'Adriana Silva',
      email: 'adriana.silva.98@example.com',
      telefone: '3322334455',
      dataNascimento: '1986-05-16T06:00:00Z',
      dataInicio: '2021-10-01T06:00:00Z',
      vencimento: '2026-10-01T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente99 = await prisma.cliente.create({
    data: {
      nome: 'Leonardo Pereira',
      email: 'leonardo.pereira.99@example.com',
      telefone: '4433445566',
      dataNascimento: '1993-03-08T06:00:00Z',
      dataInicio: '2018-11-10T06:00:00Z',
      vencimento: '2019-05-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente100 = await prisma.cliente.create({
    data: {
      nome: 'Camila Santos',
      email: 'camila.santos.100@example.com',
      telefone: '5544556677',
      dataNascimento: '1991-11-11T06:00:00Z',
      dataInicio: '2023-01-01T06:00:00Z',
      vencimento: '2023-04-01T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  const cliente101 = await prisma.cliente.create({
    data: {
      nome: 'Marcelo Costa',
      email: 'marcelo.costa.101@example.com',
      telefone: '6655447788',
      dataNascimento: '1990-04-15T06:00:00Z',
      dataInicio: '2023-03-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z', 
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente102 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Oliveira',
      email: 'fernanda.oliveira.102@example.com',
      telefone: '7788990011',
      dataNascimento: '1985-12-28T06:00:00Z',
      dataInicio: '2022-09-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z', 
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente103 = await prisma.cliente.create({
    data: {
      nome: 'Rafael Souza',
      email: 'rafael.souza.103@example.com',
      telefone: '8899001122',
      dataNascimento: '1997-07-10T06:00:00Z',
      dataInicio: '2021-11-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z', 
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  const cliente104 = await prisma.cliente.create({
    data: {
      nome: 'Ana Oliveira',
      email: 'ana.oliveira.104@example.com',
      telefone: '9988776655',
      dataNascimento: '1994-08-20T06:00:00Z',
      dataInicio: '2023-04-15T06:00:00Z',
      vencimento: '3024-07-02T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });
  
  const cliente105 = await prisma.cliente.create({
    data: {
      nome: 'Roberto Santos',
      email: 'roberto.santos.105@example.com',
      telefone: '7766554433',
      dataNascimento: '1991-02-10T06:00:00Z',
      dataInicio: '2022-10-01T06:00:00Z',
      vencimento: '2024-10-02T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente106 = await prisma.cliente.create({
    data: {
      nome: 'Vanessa Lima',
      email: 'vanessa.lima.106@example.com',
      telefone: '5544332211',
      dataNascimento: '1988-12-05T06:00:00Z',
      dataInicio: '2021-09-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente107 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Almeida',
      email: 'pedro.almeida.107@example.com',
      telefone: '6677889900',
      dataNascimento: '1993-05-25T06:00:00Z',
      dataInicio: '2022-11-20T06:00:00Z',
      vencimento: '2024-07-20T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente108 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Castro',
      email: 'juliana.castro.108@example.com',
      telefone: '7788990011',
      dataNascimento: '1995-03-15T06:00:00Z',
      dataInicio: '2023-02-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente109 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Santos',
      email: 'lucas.santos.109@example.com',
      telefone: '8899001122',
      dataNascimento: '1990-09-10T06:00:00Z',
      dataInicio: '2021-08-10T06:00:00Z',
      vencimento: '2024-09-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente110 = await prisma.cliente.create({
    data: {
      nome: 'Mariana Oliveira',
      email: 'mariana.oliveira.110@example.com',
      telefone: '9900112233',
      dataNascimento: '1992-06-20T06:00:00Z',
      dataInicio: '2022-07-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente111 = await prisma.cliente.create({
    data: {
      nome: 'Rafaela Silva',
      email: 'rafaela.silva.111@example.com',
      telefone: '1122334455',
      dataNascimento: '1987-04-05T06:00:00Z',
      dataInicio: '2023-05-15T06:00:00Z',
      vencimento: '2024-01-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente112 = await prisma.cliente.create({
    data: {
      nome: 'Gustavo Pereira',
      email: 'gustavo.pereira.112@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-11-30T06:00:00Z',
      dataInicio: '2021-12-20T06:00:00Z',
      vencimento: '2024-11-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente113 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Lima',
      email: 'fernanda.lima.113@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-07-10T06:00:00Z',
      dataInicio: '2022-09-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente114 = await prisma.cliente.create({
    data: {
      nome: 'José Alves',
      email: 'jose.alves.114@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-02-28T06:00:00Z',
      dataInicio: '2023-04-01T06:00:00Z',
      vencimento: '2028-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente115 = await prisma.cliente.create({
    data: {
      nome: 'Amanda Costa',
      email: 'amanda.costa.115@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-11-15T06:00:00Z',
      dataInicio: '2022-10-20T06:00:00Z',
      vencimento: '2027-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente116 = await prisma.cliente.create({
    data: {
      nome: 'Marcos Santos',
      email: 'marcos.santos.116@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-08-25T06:00:00Z',
      dataInicio: '2021-11-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente117 = await prisma.cliente.create({
    data: {
      nome: 'Carolina Oliveira',
      email: 'carolina.oliveira.117@example.com',
      telefone: '9900112233',
      dataNascimento: '1995-05-10T06:00:00Z',
      dataInicio: '2023-01-10T06:00:00Z',
      vencimento: '2024-11-02T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente118 = await prisma.cliente.create({
    data: {
      nome: 'Felipe Castro',
      email: 'felipe.castro.118@example.com',
      telefone: '1122334455',
      dataNascimento: '1988-12-01T06:00:00Z',
      dataInicio: '2022-08-15T06:00:00Z',
      vencimento: '2024-02-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente119 = await prisma.cliente.create({
    data: {
      nome: 'Patrícia Silva',
      email: 'patricia.silva.119@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-03-20T06:00:00Z',
      dataInicio: '2021-12-10T06:00:00Z',
      vencimento: '2024-10-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente120 = await prisma.cliente.create({
    data: {
      nome: 'Rodrigo Pereira',
      email: 'rodrigo.pereira.120@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-10-05T06:00:00Z',
      dataInicio: '2022-07-20T06:00:00Z',
      vencimento: '2024-05-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente121 = await prisma.cliente.create({
    data: {
      nome: 'Isabela Lima',
      email: 'isabela.lima.121@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-07-15T06:00:00Z',
      dataInicio: '2023-03-01T06:00:00Z',
      vencimento: '2024-09-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente122 = await prisma.cliente.create({
    data: {
      nome: 'Renato Alves',
      email: 'renato.alves.122@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-04-28T06:00:00Z',
      dataInicio: '2022-09-25T06:00:00Z',
      vencimento: '2024-07-21T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente123 = await prisma.cliente.create({
    data: {
      nome: 'Camila Costa',
      email: 'camila.costa.123@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-01-10T06:00:00Z',
      dataInicio: '2021-10-10T06:00:00Z',
      vencimento: '2024-09-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente124 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.124@example.com',
      telefone: '9900112233',
      dataNascimento: '1995-08-25T06:00:00Z',
      dataInicio: '2023-02-15T06:00:00Z',
      vencimento: '2025-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente125 = await prisma.cliente.create({
    data: {
      nome: 'Aline Silva',
      email: 'aline.silva.125@example.com',
      telefone: '1122334455',
      dataNascimento: '1988-11-01T06:00:00Z',
      dataInicio: '2022-11-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente126 = await prisma.cliente.create({
    data: {
      nome: 'Diego Castro',
      email: 'diego.castro.126@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-06-10T06:00:00Z',
      dataInicio: '2021-12-01T06:00:00Z',
      vencimento: '2024-06-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente127 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Almeida',
      email: 'juliana.almeida.127@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-09-15T06:00:00Z',
      dataInicio: '2022-08-10T06:00:00Z',
      vencimento: '3024-07-02T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Desativado'
    }
  });
  
  const cliente128 = await prisma.cliente.create({
    data: {
      nome: 'Ricardo Lima',
      email: 'ricardo.lima.128@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-04-20T06:00:00Z',
      dataInicio: '2023-01-05T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente129 = await prisma.cliente.create({
    data: {
      nome: 'Mariana Costa',
      email: 'mariana.costa.129@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-03-05T06:00:00Z',
      dataInicio: '2022-10-15T06:00:00Z',
      vencimento: '2024-07-09T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente130 = await prisma.cliente.create({
    data: {
      nome: 'Thiago Silva',
      email: 'thiago.silva.130@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-12-10T06:00:00Z',
      dataInicio: '2021-09-20T06:00:00Z',
      vencimento: '2024-08-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  const cliente131 = await prisma.cliente.create({
    data: {
      nome: 'Ana Oliveira',
      email: 'ana.oliveira.131@example.com',
      telefone: '9988776655',
      dataNascimento: '1994-08-20T06:00:00Z',
      dataInicio: '2023-04-15T06:00:00Z',
      vencimento: '3024-07-02T06:00:00Z',
      planoId: vitalicio.id,
      status: 'Ativo'
    }
  });
  const cliente132 = await prisma.cliente.create({
    data: {
      nome: 'Roberto Santos',
      email: 'roberto.santos.132@example.com',
      telefone: '7766554433',
      dataNascimento: '1991-02-10T06:00:00Z',
      dataInicio: '2022-10-01T06:00:00Z',
      vencimento: '2024-10-02T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  const cliente133 = await prisma.cliente.create({
    data: {
      nome: 'Carlos Lima',
      email: 'carlos.lima.133@example.com',
      telefone: '5544332211',
      dataNascimento: '1988-06-15T06:00:00Z',
      dataInicio: '2021-08-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  const cliente134 = await prisma.cliente.create({
    data: {
      nome: 'Larissa Oliveira',
      email: 'larissa.oliveira.134@example.com',
      telefone: '9988776655',
      dataNascimento: '1994-08-20T06:00:00Z',
      dataInicio: '2023-04-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente135 = await prisma.cliente.create({
    data: {
      nome: 'Marcos Santos',
      email: 'marcos.santos.135@example.com',
      telefone: '7766554433',
      dataNascimento: '1991-02-10T06:00:00Z',
      dataInicio: '2022-10-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente136 = await prisma.cliente.create({
    data: {
      nome: 'Gabriela Lima',
      email: 'gabriela.lima.136@example.com',
      telefone: '5544332211',
      dataNascimento: '1988-12-05T06:00:00Z',
      dataInicio: '2021-09-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente137 = await prisma.cliente.create({
    data: {
      nome: 'Renato Almeida',
      email: 'renato.almeida.137@example.com',
      telefone: '6677889900',
      dataNascimento: '1993-05-25T06:00:00Z',
      dataInicio: '2022-11-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente138 = await prisma.cliente.create({
    data: {
      nome: 'Lívia Castro',
      email: 'livia.castro.138@example.com',
      telefone: '7788990011',
      dataNascimento: '1995-03-15T06:00:00Z',
      dataInicio: '2023-02-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente139 = await prisma.cliente.create({
    data: {
      nome: 'Carlos Santos',
      email: 'carlos.santos.139@example.com',
      telefone: '8899001122',
      dataNascimento: '1990-09-10T06:00:00Z',
      dataInicio: '2021-08-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente140 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Oliveira',
      email: 'fernanda.oliveira.140@example.com',
      telefone: '9900112233',
      dataNascimento: '1992-06-20T06:00:00Z',
      dataInicio: '2022-07-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente141 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Silva',
      email: 'pedro.silva.141@example.com',
      telefone: '1122334455',
      dataNascimento: '1987-04-05T06:00:00Z',
      dataInicio: '2023-05-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente142 = await prisma.cliente.create({
    data: {
      nome: 'Mariana Pereira',
      email: 'mariana.pereira.142@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-11-30T06:00:00Z',
      dataInicio: '2021-12-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente143 = await prisma.cliente.create({
    data: {
      nome: 'Rodrigo Lima',
      email: 'rodrigo.lima.143@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-07-10T06:00:00Z',
      dataInicio: '2022-09-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente144 = await prisma.cliente.create({
    data: {
      nome: 'Aline Alves',
      email: 'aline.alves.144@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-02-28T06:00:00Z',
      dataInicio: '2023-04-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente145 = await prisma.cliente.create({
    data: {
      nome: 'Leonardo Costa',
      email: 'leonardo.costa.145@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-11-15T06:00:00Z',
      dataInicio: '2022-10-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente146 = await prisma.cliente.create({
    data: {
      nome: 'Gabriel Santos',
      email: 'gabriel.santos.146@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-08-25T06:00:00Z',
      dataInicio: '2021-11-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente147 = await prisma.cliente.create({
    data: {
      nome: 'Carla Oliveira',
      email: 'carla.oliveira.147@example.com',
      telefone: '9900112233',
      dataNascimento: '1995-05-10T06:00:00Z',
      dataInicio: '2023-01-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente148 = await prisma.cliente.create({
    data: {
      nome: 'Matheus Castro',
      email: 'matheus.castro.148@example.com',
      telefone: '1122334455',
      dataNascimento: '1988-12-01T06:00:00Z',
      dataInicio: '2022-08-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente149 = await prisma.cliente.create({
    data: {
      nome: 'Beatriz Silva',
      email: 'beatriz.silva.149@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-03-20T06:00:00Z',
      dataInicio: '2021-12-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente150 = await prisma.cliente.create({
    data: {
      nome: 'Felipe Lima',
      email: 'felipe.lima.150@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-10-05T06:00:00Z',
      dataInicio: '2022-07-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  const cliente151 = await prisma.cliente.create({
    data: {
      nome: 'Isabela Lima',
      email: 'isabela.lima.151@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-07-15T06:00:00Z',
      dataInicio: '2023-03-01T06:00:00Z',
      vencimento: '2024-09-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  const cliente152 = await prisma.cliente.create({
    data: {
      nome: 'Renato Alves',
      email: 'renato.alves.152@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-04-28T06:00:00Z',
      dataInicio: '2022-09-25T06:00:00Z',
      vencimento: '2024-07-21T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });const cliente153 = await prisma.cliente.create({
    data: {
      nome: 'Isabela Lima',
      email: 'isabela.lima.153@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-07-15T06:00:00Z',
      dataInicio: '2023-03-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente154 = await prisma.cliente.create({
    data: {
      nome: 'Renato Alves',
      email: 'renato.alves.154@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-04-28T06:00:00Z',
      dataInicio: '2022-09-25T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente155 = await prisma.cliente.create({
    data: {
      nome: 'Camila Costa',
      email: 'camila.costa.155@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-01-10T06:00:00Z',
      dataInicio: '2021-10-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente156 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.156@example.com',
      telefone: '9900112233',
      dataNascimento: '1995-08-25T06:00:00Z',
      dataInicio: '2023-02-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente157 = await prisma.cliente.create({
    data: {
      nome: 'Aline Silva',
      email: 'aline.silva.157@example.com',
      telefone: '1122334455',
      dataNascimento: '1988-11-01T06:00:00Z',
      dataInicio: '2022-11-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente158 = await prisma.cliente.create({
    data: {
      nome: 'Diego Castro',
      email: 'diego.castro.158@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-06-10T06:00:00Z',
      dataInicio: '2021-12-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente159 = await prisma.cliente.create({
    data: {
      nome: 'Juliana Almeida',
      email: 'juliana.almeida.159@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-09-15T06:00:00Z',
      dataInicio: '2022-08-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente160 = await prisma.cliente.create({
    data: {
      nome: 'Ricardo Lima',
      email: 'ricardo.lima.160@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-04-20T06:00:00Z',
      dataInicio: '2023-01-05T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente161 = await prisma.cliente.create({
    data: {
      nome: 'Mariana Costa',
      email: 'mariana.costa.161@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-03-05T06:00:00Z',
      dataInicio: '2022-10-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente162 = await prisma.cliente.create({
    data: {
      nome: 'Thiago Silva',
      email: 'thiago.silva.162@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-12-10T06:00:00Z',
      dataInicio: '2021-09-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  // Continue criando os clientes restantes de maneira similar...
  
  const cliente165 = await prisma.cliente.create({
    data: {
      nome: 'Carlos Lima',
      email: 'carlos.lima.165@example.com',
      telefone: '5544332211',
      dataNascimento: '1988-06-15T06:00:00Z',
      dataInicio: '2021-08-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  // Cliente 166 até 179 continuam aqui...
  
  const cliente180 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.180@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente181 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.181@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente182 = await prisma.cliente.create({
    data: {
      nome: 'Julia Lima',
      email: 'julia.lima.182@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente183 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Costa',
      email: 'lucas.costa.183@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  const cliente184 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.184@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-07-02T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  const cliente163 = await prisma.cliente.create({
    data: {
      nome: 'Amanda Oliveira',
      email: 'amanda.oliveira.163@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-15T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2024-04-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente164 = await prisma.cliente.create({
    data: {
      nome: 'Vinicius Alves',
      email: 'vinicius.alves.164@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2023-12-20T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente1651 = await prisma.cliente.create({
    data: {
      nome: 'Natália Lima',
      email: 'natalia.lima.165@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2025-01-25T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  const cliente166 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Costa',
      email: 'lucas.costa.166@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-09-12T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente167 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.167@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-08-05T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente168 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.168@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2024-07-18T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente169 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.169@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2025-02-23T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente170 = await prisma.cliente.create({
    data: {
      nome: 'Julia Lima',
      email: 'julia.lima.170@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2023-11-30T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente171 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.171@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-10-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente172 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.172@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-08-01T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente173 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.173@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2023-12-25T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  const cliente174 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.174@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2025-03-10T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente175 = await prisma.cliente.create({
    data: {
      nome: 'Julia Lima',
      email: 'julia.lima.175@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2024-11-15T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente176 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.176@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-09-05T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente177 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.177@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-08-20T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente178 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.178@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2024-07-30T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente179 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.179@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2025-01-25T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente1801 = await prisma.cliente.create({
    data: {
      nome: 'Julia Lima',
      email: 'julia.lima.180@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2024-12-10T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente1811 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.181@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-10-28T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente1821 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.182@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-09-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente1831 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.183@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2023-11-20T06:00:00Z',
      planoId: semestral.id,
      status: 'Desativado'
    }
  });
  const cliente1841 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.184@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2025-03-05T06:00:00Z',
      planoId: anual.id,
      status: 'Ativo'
    }
  });
  
  const cliente185 = await prisma.cliente.create({
    data: {
      nome: 'Julia Lima',
      email: 'julia.lima.185@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2024-11-10T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente186 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.186@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-09-15T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente187 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.187@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-08-25T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente188 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.188@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2024-07-05T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente189 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.189@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2025-01-15T06:00:00Z',
      planoId: mensal.id,
      status: 'Ativo'
    }
  });
  
  const cliente190 = await prisma.cliente.create({
    data: {
      nome: 'Julia Lima',
      email: 'julia.lima.190@example.com',
      telefone: '6677889900',
      dataNascimento: '1991-05-30T06:00:00Z',
      dataInicio: '2023-03-20T06:00:00Z',
      vencimento: '2024-12-20T06:00:00Z',
      planoId: trimestral.id,
      status: 'Desativado'
    }
  });
  
  const cliente191 = await prisma.cliente.create({
    data: {
      nome: 'Lucas Oliveira',
      email: 'lucas.oliveira.191@example.com',
      telefone: '7788990011',
      dataNascimento: '1990-02-10T06:00:00Z',
      dataInicio: '2022-11-01T06:00:00Z',
      vencimento: '2024-10-10T06:00:00Z',
      planoId: semestral.id,
      status: 'Ativo'
    }
  });
  
  const cliente192 = await prisma.cliente.create({
    data: {
      nome: 'Fernanda Santos',
      email: 'fernanda.santos.192@example.com',
      telefone: '8899001122',
      dataNascimento: '1993-09-20T06:00:00Z',
      dataInicio: '2021-10-15T06:00:00Z',
      vencimento: '2024-09-20T06:00:00Z',
      planoId: anual.id,
      status: 'Desativado'
    }
  });
  
  const cliente193 = await prisma.cliente.create({
    data: {
      nome: 'Laura Silva',
      email: 'laura.silva.193@example.com',
      telefone: '3344556677',
      dataNascimento: '1996-09-25T06:00:00Z',
      dataInicio: '2021-12-05T06:00:00Z',
      vencimento: '2023-12-10T06:00:00Z',
      planoId: mensal.id,
      status: 'Desativado'
    }
  });
  
  const cliente194 = await prisma.cliente.create({
    data: {
      nome: 'Pedro Alves',
      email: 'pedro.alves.194@example.com',
      telefone: '5566778899',
      dataNascimento: '1989-08-15T06:00:00Z',
      dataInicio: '2022-07-10T06:00:00Z',
      vencimento: '2025-02-05T06:00:00Z',
      planoId: trimestral.id,
      status: 'Ativo'
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
