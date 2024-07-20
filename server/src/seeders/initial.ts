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

  // Lembretes

  const lembrete1 = await prisma.lembrete.create({
    data: {
      tipo: 'lembrete',
      titulo: 'Contactar fornecedor',
      conteudo: 'Entrar em contato com o fornecedor de whey protein para fazer o pedido.',
      data: '2024-07-01T06:00:00Z',
      concluido: false,
      usuarioId: user5.id
    },
  });

  const lembrete2 = await prisma.lembrete.create({
    data: {
      tipo: 'lembrete',
      titulo: 'Reunião de equipe',
      conteudo: 'Reunião com os instrutores para discutir a programação de treinos do mês.',
      data: '2024-06-01T06:00:00Z',
      concluido: true,
      usuarioId: user.id
    },
  });

  const lembrete3 = await prisma.lembrete.create({
    data: {
      tipo: 'lembrete',
      titulo: 'Avaliação física',
      conteudo: 'Realizar avaliação física do aluno ID 5.',
      data: '2022-07-11T06:00:00Z',
      concluido: false,
      usuarioId: user8.id
    },
  });

  const lembrete4 = await prisma.lembrete.create({
    data: {
      tipo: 'lembrete',
      titulo: 'Avaliação física',
      conteudo: 'Realizar avaliação física do aluno ID 7.',
      data: '2024-08-21T06:00:00Z',
      concluido: false,
      usuarioId: user8.id
    },
  });

  const lembrete5 = await prisma.lembrete.create({
    data: {
      tipo: 'lembrete',
      titulo: 'Avaliação física',
      conteudo: 'Realizar avaliação física do aluno ID 6.',
      data: '2024-06-21T06:00:00Z',
      concluido: false,
      usuarioId: user8.id
    },
  });

  const lembrete6 = await prisma.lembrete.create({
    data: {
      tipo: 'lembrete',
      titulo: 'Equipamentos',
      conteudo: 'Agendar manutenção dos equipamentos da academia.',
      data: '2024-07-21T06:00:00Z',
      concluido: false,
      usuarioId: user8.id
    },
  });

  // Eventos

  const evento1 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Aula de Zumba no parque',
      conteudo: 'Duração de 3 dias, das 8h às 10h. Local: Parque da Cidade. Trazer garrafa de água e protetor solar. Inscrições abertas e gratuitas.',
      imagem: null,
      usuarioId: user.id
    },
  });

  const evento2 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Aula de Crossfit',
      conteudo: 'Duração de 1 dia, das 19h às 21h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
      imagem: null,
      usuarioId: user.id
    },
  });

  const evento3 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Aula de Pilates',
      conteudo: 'Duração de 1 dia, das 9h às 11h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
      imagem: null,
      usuarioId: user.id
    },
  });

  const evento4 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Projeto Verão',
      conteudo: 'Duração de 3 meses, de junho a agosto. Treinos diários das 7h às 9h. Inscrições abertas. ',
      imagem: null,
      usuarioId: user.id
    }
  });

  const evento5 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Campeonato: Summer House',
      conteudo: 'Inscrições abertas. Primeiro lugar: 3 meses de academia grátis + o tão cobiçado Summer Travel. Segundo lugar: 2 meses de academia grátis. Terceiro lugar: 1 mês de academia grátis.',
      imagem: null,
      usuarioId: user.id
    }
  });

  const evento6 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Torneio powerlifting',
      conteudo: 'Inscrições abertas. Primeiro lugar: 3 meses de academia grátis. Segundo lugar: 2 meses de academia grátis. Terceiro lugar: 1 mês de academia grátis.',
      imagem: null,
      usuarioId: user.id
    }
  });

  const evento7 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Aula de Yoga',
      conteudo: 'Duração de 1 dia, das 8h às 10h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
      imagem: null,
      usuarioId: user6.id
    }
  });

  const evento8 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Aula de Muay Thai',
      conteudo: 'Duração de 1 dia, das 19h às 21h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
      imagem: null,
      usuarioId: user3.id
    }
  });

  const evento9 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Aula de Dança',
      conteudo: 'Duração de 1 dia, das 9h às 11h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
      imagem: null,
      usuarioId: user5.id
    }
  });

  const evento10 = await prisma.evento.create({
    data: {
      tipo: 'evento',
      titulo: 'Projeto Verão',
      conteudo: 'Duração de 3 meses, de junho a agosto. Treinos diários das 7h às 9h. Inscrições abertas. ',
      imagem: null,
      usuarioId: user2.id
    }
  });

  // Publicações

  const publicacao1 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Dicas de alimentação',
      conteudo: 'Para ganhar massa muscular, é importante manter uma alimentação balanceada e rica em proteínas. Alguns alimentos recomendados são: frango, peixe, ovos, batata doce, arroz integral, aveia, entre outros.',
      createdAt: '2024-06-22T06:00:00Z',
      usuarioId: user.id
    },
  });

  const publicacao2 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Treino de pernas',
      conteudo: 'Para quem está começando a treinar, é importante começar com exercícios mais leves e ir aumentando a intensidade aos poucos. Alguns exercícios recomendados são: agachamento, leg press, avanço, entre outros.',
      usuarioId: user.id
    },
  });

  const publicacao3 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Benefícios do pilates',
      conteudo: 'O pilates é uma atividade física que trabalha o corpo como um todo, fortalecendo os músculos, melhorando a postura e a flexibilidade, além de ajudar a aliviar o estresse e a ansiedade.',
      usuarioId: user.id
    },
  });

  const publicacao4 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Treino de glúteos',
      conteudo: 'Para quem deseja aumentar o bumbum, é importante focar em exercícios que trabalhem os músculos dessa região, como: agachamento, afundo, elevação pélvica, entre outros.',
      usuarioId: user.id
    },
  });

  const publicacao5 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Dicas para emagrecer',
      conteudo: 'Para emagrecer de forma saudável, é importante manter uma alimentação balanceada e praticar exercícios físicos regularmente. Além disso, é importante beber bastante água e dormir bem.',
      usuarioId: user.id
    },
  });

  const publicacao6 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Benefícios da musculação',
      conteudo: 'A musculação é uma atividade física que ajuda a aumentar a massa muscular, fortalecer os ossos, melhorar a postura e a flexibilidade, além de ajudar a emagrecer e a aliviar o estresse.',
      usuarioId: user.id
    },
  });

  const publicacao7 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Treino de braços',
      conteudo: 'Para quem deseja aumentar a massa muscular dos braços, é importante focar em exercícios que trabalhem os músculos dessa região, como: rosca direta, tríceps testa, supino, entre outros.',
      usuarioId: user.id
    },
  });

  const publicacao8 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Benefícios do crossfit',
      conteudo: 'O crossfit é uma atividade física que combina exercícios de alta intensidade e funcionalidade, ajudando a melhorar a resistência, a força, a agilidade e a coordenação motora.',
      usuarioId: user.id
    },
  });

  const publicacao9 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Treino de costas',
      conteudo: 'Para quem deseja aumentar a massa muscular das costas, é importante focar em exercícios que trabalhem os músculos dessa região, como: puxada, remada, levantamento terra, entre outros.',
      usuarioId: user.id
    },
  });

  const publicacao10 = await prisma.publicacao.create({
    data: {
      tipo: 'publicação',
      titulo: 'Benefícios do pilates',
      conteudo: 'O pilates é uma atividade física que trabalha o corpo como um todo, fortalecendo os músculos, melhorando a postura e a flexibilidade, além de ajudar a aliviar o estresse e a ansiedade.',
      usuarioId: user.id
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

  const products = [
    { 
      name: 'Proteína Whey Isolada', 
      price: 150.0, 
      stored: 50, 
      brand: 'NutriMax', 
      category: 'suplemento', 
      thumbnail: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/gsn/media/uploads/produtos/foto/sbwsjhzv/whey-gold-isolate-2280g.jpg', 
      description: 'Proteína Whey Isolada de alta qualidade, com 90% de proteína pura por dose. Ideal para recuperação muscular e ganho de massa magra. Livre de lactose e com baixo teor de carboidratos.' 
    },
    { 
      name: 'Creatina Monohidratada', 
      price: 80.0, 
      stored: 100, 
      brand: 'PowerBoost', 
      category: 'suplemento', 
      thumbnail: 'https://meumundofit.com.br/wp-content/uploads/creatina-monohidratada-150g-black-skull.jpg', 
      description: 'Creatina Monohidratada pura para aumentar a força e a performance durante os treinos. Aumenta a capacidade muscular e melhora a recuperação entre as sessões de exercício.' 
    },
    { 
      name: 'BCAA 2:1:1', 
      price: 120.0, 
      stored: 60, 
      brand: 'UltraFit', 
      category: 'suplemento', 
      thumbnail: 'https://www.gsuplementos.com.br/upload/produto/imagem/bcaa-5-1-1-200g-em-p-growth-supplements-3.jpg', 
      description: 'Complexo de aminoácidos essenciais com proporção de 2:1:1. Ajuda na recuperação muscular, reduz a fadiga e previne a degradação muscular durante treinos intensos.' 
    },
    { 
      name: 'Pré-Treino X', 
      price: 90.0, 
      stored: 30, 
      brand: 'EnergyPlus', 
      category: 'suplemento', 
      thumbnail: 'https://a-static.mlcdn.com.br/450x450/pre-treino-x-pre-workout-450g-atlhetica-nutrition/lojacentraldocorpo1/921669/bfac551b586f6751dd68c869e6bd796c.jpeg', 
      description: 'Suplemento pré-treino com formulação avançada para aumentar a energia, foco e resistência. Contém cafeína, beta-alanina e citrulina para um desempenho máximo.' 
    },
    { 
      name: 'Glutamina', 
      price: 70.0, 
      stored: 40, 
      brand: 'VitalStrength', 
      category: 'suplemento', 
      thumbnail: 'https://m.media-amazon.com/images/I/61cVJweezRL._AC_UF350,350_QL50_.jpg', 
      description: 'Glutamina pura para suporte ao sistema imunológico e recuperação muscular. Ideal para ajudar a reparar os músculos e reduzir o tempo de recuperação após treinos pesados.' 
    },
    { 
      name: 'Cinta Abdominal', 
      price: 50.0, 
      stored: 20, 
      brand: 'FitGear', 
      category: 'acessório', 
      thumbnail: 'https://www.medicalfarma.com.br/site/wp-content/uploads/2020/10/Cinta-Abdominal.jpg', 
      description: 'Cinta abdominal de alta compressão que ajuda a definir a cintura e melhorar a postura durante os exercícios. Feita com material resistente e confortável.' 
    },
    { 
      name: 'Colchonete Fitness', 
      price: 45.0, 
      stored: 25, 
      brand: 'GymMat', 
      category: 'acessório', 
      thumbnail: 'https://cdn.awsli.com.br/600x450/1686/1686615/produto/147587602/8619e426d5.jpg', 
      description: 'Colchonete de espuma com superfície antiderrapante, ideal para exercícios de alongamento, yoga e pilates. Proporciona conforto e estabilidade durante a prática.' 
    },
    { 
      name: 'Halter 5kg', 
      price: 35.0, 
      stored: 15, 
      brand: 'IronLift', 
      category: 'equipamento', 
      thumbnail: 'https://decathlonpro.vtexassets.com/arquivos/ids/3944231/-halter-pintado-5kg-2x25kg1.jpg?v=637723368388400000', 
      description: 'Halter de 5kg com acabamento ergonômico e resistente. Ideal para treinos de força e resistência, proporcionando um ótimo suporte para exercícios variados.' 
    },
    { 
      name: 'Rolo de Espuma', 
      price: 60.0, 
      stored: 35, 
      brand: 'FlexRoll', 
      category: 'acessório', 
      thumbnail: 'https://images.ctfassets.net/ea2tosc1qg3k/BR-67J4C9pPCPp5V8o0F266eU/3bf6960466496878e95de68e1c7e3b56/bat-5-art-66-hero-mobi.jpg?w=800&q=50', 
      description: 'Rolo de espuma para liberação miofascial e alívio de tensões musculares. Ideal para recuperação pós-treino e aumento da flexibilidade. Feito de espuma de alta densidade para maior durabilidade e eficácia.' 
    },
    { 
      name: 'Massa Muscular Gainer', 
      price: 200.0, 
      stored: 10, 
      brand: 'MassBuilder', 
      category: 'suplemento', 
      thumbnail: 'https://www.drogariaminasbrasil.com.br/media/product/773/mega-mass-gainer-baunilha-3kg-health-labs-4ae.jpg', 
      description: 'Suplemento em pó para ganho de massa muscular, com uma mistura de proteínas e carboidratos de rápida absorção. Contém vitaminas e minerais essenciais para maximizar o crescimento muscular e a recuperação.' 
    },
    { 
      name: 'Saco de Boxe', 
      price: 180.0, 
      stored: 12, 
      brand: 'PunchPro', 
      category: 'equipamento', 
      thumbnail: 'https://images-americanas.b2w.io/produtos/75345499/imagens/kit-saco-pancada-grande-profissional-160-cm-boxe-muay-thai-luva-equipamento-treino-original-gorilla/75345497_1_large.jpg', 
      description: 'Saco de boxe robusto e durável, ideal para treinamento de boxe e artes marciais. Feito de material resistente com enchimento que proporciona um impacto firme e realista. Vem com cadeado e corrente para fácil instalação.' 
    },
    { 
      name: 'Barra de Triceps', 
      price: 40.0, 
      stored: 25, 
      brand: 'TricepBar', 
      category: 'equipamento', 
      thumbnail: 'https://watsongym.co.uk/wp-content/uploads/2023/03/lateral-tricep-bar-03-2.jpg', 
      description: 'Barra de triceps em aço inoxidável para exercícios de isolamento e força. Ergonomicamente projetada para proporcionar um melhor controle e conforto durante os treinos. Compatível com a maioria dos suportes de barras.' 
    },
    { 
      name: 'Suplemento de Vitamina C', 
      price: 25.0, 
      stored: 75, 
      brand: 'HealthBoost', 
      category: 'suplemento', 
      thumbnail: 'https://www.gsuplementos.com.br/upload/produto/imagem/vitamina-c-120-caps-growth-supplements-1.webp', 
      description: 'Suplemento de Vitamina C com alta absorção para fortalecer o sistema imunológico e promover a saúde geral. Cada dose fornece a quantidade diária recomendada de Vitamina C.' 
    },
    { 
      name: 'Bola de Pilates', 
      price: 30.0, 
      stored: 20, 
      brand: 'PilatesPro', 
      category: 'acessório', 
      thumbnail: 'https://down-br.img.susercontent.com/file/10dceaaa789442971868519aaace1e58', 
      description: 'Bola de Pilates resistente e antiderrapante, ideal para exercícios de core e alongamento. Ajuda a melhorar a postura, flexibilidade e força do tronco. Inclui bomba para fácil inflagem.' 
    },
    { 
      name: 'Elastic Bands', 
      price: 20.0, 
      stored: 50, 
      brand: 'FlexBands', 
      category: 'acessório', 
      thumbnail: 'https://www.yyvertical.com/cdn/shop/products/YY_ElasticsBand_1080-1080.jpg?v=1673358940', 
      description: 'Faixas elásticas para treinamento de força e resistência. Disponível em várias intensidades para exercícios variados. Leves e portáteis, perfeitas para treinos em casa ou na academia.' 
    },
    { 
      name: 'Roupas de Treino', 
      price: 60.0, 
      stored: 40, 
      brand: 'GymWear', 
      category: 'vestuário', 
      thumbnail: 'https://m.media-amazon.com/images/I/41XntOXqrEL._AC_SY1000_.jpg', 
      description: 'Roupas de treino confortáveis e estilosas, projetadas para melhorar o desempenho durante atividades físicas. Feitas com tecidos respiráveis e de secagem rápida. Disponível em diferentes tamanhos e cores.' 
    },
    { 
      name: 'Pesos Ankle', 
      price: 45.0, 
      stored: 18, 
      brand: 'AnkleWeights', 
      category: 'acessório', 
      thumbnail: 'https://m.media-amazon.com/images/I/61evRLCDNgL._AC_UF1000,1000_QL80_.jpg', 
      description: 'Pesos para tornozelo ajustáveis, ideais para aumentar a intensidade de treinos de pernas e glúteos. Feitos com material resistente e acolchoado para máximo conforto. Cada par pode ser ajustado para diferentes pesos.' 
    },
    { 
      name: 'Ab Roller', 
      price: 55.0, 
      stored: 30, 
      brand: 'AbRoller', 
      category: 'equipamento', 
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8A02GUtMxfp37y8kjq0aJKRRpehhOwAfbhRDt4sy-04QlXxjDQ5t78HNS87WELCAI3E&usqp=CAU', 
      description: 'Ab Roller para treino de core e abdômen. Possui rodas de alta resistência e empunhadura confortável para estabilidade e controle durante os exercícios. Ideal para fortalecer e definir a região abdominal.' 
    },
    { 
      name: 'Shaker Protein', 
      price: 15.0, 
      stored: 100, 
      brand: 'ShakeFit', 
      category: 'acessório', 
      thumbnail: 'https://m.media-amazon.com/images/I/61NDnGFuVrL._AC_UF894,1000_QL80_.jpg', 
      description: 'Shaker resistente com capacidade de 700ml, ideal para misturar proteínas e outros suplementos de forma eficiente. Possui rede misturadora para uma mistura homogênea e tampa segura para evitar vazamentos.' 
    },
    { 
      name: 'Máquina de Exercício', 
      price: 1200.0, 
      stored: 5, 
      brand: 'GymMachine', 
      category: 'equipamento', 
      thumbnail: 'https://ae01.alicdn.com/kf/S4b292c1c143647d99d8b31caf7f4442dr.jpg_640x640Q90.jpg_.webp', 
      description: 'Máquina de exercício multifuncional para treinos completos. Equipamento robusto e durável, com diversas opções de ajuste para diferentes exercícios de força e resistência.' 
    },
    { 
      name: 'Puxador de Corda', 
      price: 75.0, 
      stored: 22, 
      brand: 'RopePull', 
      category: 'equipamento', 
      thumbnail: 'https://m.media-amazon.com/images/I/51J+ztPkC+L._AC_UF1000,1000_QL80_.jpg', 
      description: 'Puxador de corda de alta qualidade para exercícios de tração. Ideal para treinos de costas, bíceps e tríceps, proporcionando um treino eficiente e confortável.' 
    },
    { 
      name: 'Suplemento de Ômega 3', 
      price: 65.0, 
      stored: 40, 
      brand: 'OmegaBoost', 
      category: 'suplemento', 
      thumbnail: 'https://integralmedica.vtexassets.com/arquivos/ids/165844-800-auto?v=638316036287300000&width=800&height=auto&aspect=true', 
      description: 'Suplemento de Ômega 3 com alta concentração de EPA e DHA, essenciais para a saúde cardiovascular e cerebral. Cada dose oferece uma quantidade adequada de ácidos graxos essenciais.' 
    },
    { 
      name: 'Bands Fit Pump', 
      price: 95.0, 
      stored: 28, 
      brand: 'ChestPump', 
      category: 'acessório', 
      thumbnail: 'https://m.media-amazon.com/images/I/414-fTLDApL._AC_UF894,1000_QL80_.jpg', 
      description: 'Para treino de peito para aumentar a definição e a força muscular. Ideal para treinos de peito e braços, com ajuste fácil e material resistente para maior durabilidade.' 
    },
    { 
      name: 'Suplemento de Ferro', 
      price: 35.0, 
      stored: 50, 
      brand: 'IronBoost', 
      category: 'suplemento', 
      thumbnail: 'https://images-americanas.b2w.io/produtos/5423452471/imagens/suplemento-alimentar-ferro-acido-folico-com-vitamina-b-12-60/5423452471_1_large.jpg', 
      description: 'Suplemento de ferro para ajudar na prevenção de anemia e melhorar a energia e resistência. Cada cápsula fornece a quantidade diária recomendada de ferro de forma eficaz.' 
    },
    { 
      name: 'Corda de Pular', 
      price: 25.0, 
      stored: 60, 
      brand: 'JumpRope', 
      category: 'acessório', 
      thumbnail: 'https://t34114.vtexassets.com/arquivos/ids/170489-800-auto?v=637943757535270000&width=800&height=auto&aspect=true', 
      description: 'Corda de pular ajustável com empunhadura confortável. Ideal para exercícios cardiovasculares e melhorar a coordenação e resistência. Feita de material durável e resistente ao desgaste.' 
    },
    { 
      name: 'Tênis de Treino', 
      price: 220.0, 
      stored: 20, 
      brand: 'FitSneakers', 
      category: 'vestuário', 
      thumbnail: 'https://underarmourbr.vtexassets.com/arquivos/ids/276146/3027500-001-01.jpg?v=638065491984000000', 
      description: 'Tênis de treino com suporte ergonômico e solado antiderrapante. Oferece conforto e estabilidade durante atividades físicas intensas, ideal para corrida e treinos na academia.' 
    },
    { 
      name: 'Bola de Ginástica', 
      price: 40.0, 
      stored: 45, 
      brand: 'GymBall', 
      category: 'acessório', 
      thumbnail: 'https://m.media-amazon.com/images/I/710F10P3wnL._AC_UF1000,1000_QL80_.jpg', 
      description: 'Bola de ginástica resistente e antideslizante, perfeita para exercícios de fortalecimento do core, alongamento e reabilitação. Inclui bomba para inflar facilmente.' 
    },
    { 
      name: 'Halter 10kg', 
      price: 70.0, 
      stored: 15, 
      brand: 'HeavyLift', 
      category: 'equipamento', 
      thumbnail: 'https://vollo.vtexassets.com/arquivos/ids/159403/VGC-H10-Halteres-Vollo-Imagem-02-1200px.jpg?v=638042818760370000', 
      description: 'Halter de 10kg com acabamento ergonômico e durável. Ideal para treinos de força e resistência, proporcionando um ótimo suporte para exercícios de levantamento e musculação.' 
    },
    { 
      name: 'Cadeira Extensora', 
      price: 350.0, 
      stored: 10, 
      brand: 'LegExtender', 
      category: 'equipamento', 
      thumbnail: 'https://images.tcdn.com.br/img/img_prod/450774/cadeira_extensora_ultrawod_1276_1_6fe9b0394e79c1d4f21e13609cdfc85d.jpg', 
      description: 'Cadeira extensora de alta qualidade para treinos de quadríceps. Equipamento ajustável e robusto, projetado para proporcionar conforto e eficiência durante os exercícios.' 
    },
    { 
      name: 'Protetor Bucal', 
      price: 20.0, 
      stored: 75, 
      brand: 'MouthGuard', 
      category: 'acessório', 
      thumbnail: 'https://m.media-amazon.com/images/I/71KgGb9sNYL.__AC_SX300_SY300_QL70_ML2_.jpg', 
      description: 'Protetor bucal de alta proteção para esportes de contato. Feito de material flexível e durável, garante conforto e segurança durante atividades físicas intensas.' 
    },
    { 
      name: 'Suplemento de Zinco', 
      price: 45.0, 
      stored: 55, 
      brand: 'ZincBoost', 
      category: 'suplemento', 
      thumbnail: 'https://dooqle.com/pub/media/catalog/product/cache/5e70ae0b84b934aa046c948511aec3c8/p/r/protetor-bucal-shock-doctor-aparelho-odontologico-superior-single-braces-1.png', 
      description: 'Suplemento de Zinco essencial para fortalecer o sistema imunológico e melhorar a saúde geral. Cada dose fornece a quantidade adequada de zinco para suporte nutricional.' 
    },
    { 
      name: 'Camiseta Dry Fit', 
      price: 35.0, 
      stored: 40, 
      brand: 'CoolWear', 
      category: 'vestuário', 
      thumbnail: 'https://img.ws.mms.shopee.com.br/6f7a103333857fb9a880f63ab4f10720', 
      description: 'Camiseta Dry Fit com tecnologia de absorção de suor, ideal para manter-se seco e confortável durante os treinos. Feita de material leve e respirável.' 
    },
    { 
      name: 'Calça Legging Fitness', 
      price: 55.0, 
      stored: 30, 
      brand: 'FitLeg', 
      category: 'vestuário', 
      thumbnail: 'https://www.useange.com.br/app/assets/images/dinamica/produto/1430/cor_0/lg18229-calca-legging-fitness-be-you-110221-73abc2.jpg?1689599246', 
      description: 'Calça legging fitness com ajuste perfeito e tecido elástico. Proporciona suporte e conforto durante atividades físicas, com design que valoriza o corpo e facilita a movimentação.' 
    },
    { 
      name: 'Garrafão de Água 2L', 
      price: 25.0, 
      stored: 50, 
      brand: 'HydroJug', 
      category: 'acessório', 
      thumbnail: 'https://www.gsuplementos.com.br/upload/growth-layout-personalizado/produto/1053/galao-2litros-growth-supplements.png', 
      description: 'Garrafão de água com capacidade de 2 litros, ideal para manter-se hidratado durante os treinos. Feito de plástico resistente e com tampa hermética para evitar vazamentos.' 
    },
    { 
      name: 'Tapete de Yoga', 
      price: 40.0, 
      stored: 35, 
      brand: 'YogaMat', 
      category: 'acessório', 
      thumbnail: 'https://d1fitness.com.br/cdn/shop/products/imagem-tapete-yoga-d1fitness_1024x1024.png?v=1695292486', 
      description: 'Tapete de yoga antiderrapante com espessura ideal para conforto e estabilidade durante as posturas. Feito de material de alta qualidade e fácil de limpar.' 
    },
    { 
      name: 'Agasalho de Treino', 
      price: 80.0, 
      stored: 25, 
      brand: 'SportSet', 
      category: 'vestuário', 
      thumbnail: 'https://images.tcdn.com.br/img/img_prod/498725/agasalho_e_calca_de_treino_holanda_2021_conjunto_de_treino_8937_1_3409a20ca59a96852efc4cb95ae304e6.jpg', 
      description: 'Agasalho de treino confortável e resistente, perfeito para aquecer antes e depois dos treinos. Feito com tecido leve e respirável para manter a temperatura ideal.' 
    },
    { 
      name: 'Luvas de Musculação', 
      price: 20.0, 
      stored: 60, 
      brand: 'GripGloves', 
      category: 'acessório', 
      thumbnail: 'https://m.media-amazon.com/images/I/51ztnAF3gAL._AC_UF1000,1000_QL80_.jpg', 
      description: 'Luvas de musculação com suporte para os pulsos e material antideslizante. Oferece proteção e conforto durante os treinos de levantamento de peso e exercícios de força.' 
    },
    { 
      name: 'Kit de Faixas Elásticas', 
      price: 50.0, 
      stored: 40, 
      brand: 'BandSet', 
      category: 'acessório', 
      thumbnail: 'https://a-static.mlcdn.com.br/450x450/kit-5-faixas-elasticas-thera-band-com-5-niveis-exercicios-ab-midia/knimport/81-3/615478eea413e4134997cfb9b59e2b0f.jpeg', 
      description: 'Kit de faixas elásticas com diferentes resistências para uma ampla gama de exercícios. Ideal para treinos de força, flexibilidade e reabilitação. Inclui bolsa para transporte.' 
    },
    { 
      name: 'Monitor de Frequência Cardíaca', 
      price: 120.0, 
      stored: 15, 
      brand: 'HeartTrack', 
      category: 'acessório', 
      thumbnail: 'https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/37/85/37851_monitor-polar-frequencia-cardiaca-rcx3m-preto_m1_636851338000280770.jpg', 
      description: 'Monitor de frequência cardíaca com display fácil de ler e funções avançadas para monitorar seu desempenho durante os treinos. Compatível com aplicativos de fitness e atividades externas.' 
    },
    { 
      name: 'Suplemento de Colágeno', 
      price: 60.0, 
      stored: 45, 
      brand: 'CollagenPlus', 
      category: 'suplemento', 
      thumbnail: 'https://drogariasp.vteximg.com.br/arquivos/ids/634578-1000-1000/765147---Suplemento-Alimentar-Renova-Be-Colageno-com-acido-Hialuronico-216g-1.jpg?v=637873031609070000', 
      description: 'Suplemento de colágeno para suporte à saúde das articulações, pele e cabelo. Cada dose contém colágeno hidrolisado para melhor absorção e eficácia.' 
    },{ 
      name: 'Elíptico', 
      price: 700.0, 
      stored: 5, 
      brand: 'CardioStride', 
      category: 'equipamento', 
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_923721-MLU72062911411_102023-O.webp', 
      description: 'Elíptico com resistência ajustável e monitor de desempenho integrado. Ideal para treinos cardiovasculares de baixo impacto, proporcionando um exercício eficiente e confortável para todo o corpo.' 
    },
    { 
      name: 'Rolo de Liberação Miofascial', 
      price: 45.0, 
      stored: 35, 
      brand: 'MyofascialRoll', 
      category: 'acessório', 
      thumbnail: 'https://images.tcdn.com.br/img/img_prod/671591/rolo_de_massagem_liberacao_miofascial_texturizado_y_eva_pvc_33x14cm_09104_13827_1_71ba0037f30e4c11ca68477b39543961_20220519185509.jpg', 
      description: 'Rolo de liberação miofascial para aliviar tensão muscular e melhorar a recuperação. Feito de material resistente com textura para massagem profunda, ideal para uso pós-treino.' 
    },
    { 
      name: 'Kettlebell 8kg', 
      price: 55.0, 
      stored: 20, 
      brand: 'KettlePower', 
      category: 'equipamento', 
      thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_772017-MLU71708209014_092023-O.webp', 
      description: 'Kettlebell de 8kg com design ergonômico para uma pegada confortável. Ideal para treinos de força, resistência e explosão, proporcionando um treino completo e eficiente.' 
    },
    { 
      name: 'Tênis de Corrida', 
      price: 130.0, 
      stored: 22, 
      brand: 'RunFast', 
      category: 'vestuário', 
      thumbnail: 'https://img.band.uol.com.br/image/2023/12/21/conheca-as-melhores-marcas-e-modelos-para-praticar-a-corrida-de-rua-181652_800x450.webp', 
      description: 'Tênis de corrida com amortecimento avançado e solado antiderrapante. Oferece conforto e suporte durante a corrida, com design leve e respirável para melhor desempenho.' 
    },
    { 
      name: 'Suplemento de Vitamina D', 
      price: 40.0, 
      stored: 50, 
      brand: 'SunBoost', 
      category: 'suplemento', 
      thumbnail: 'https://www.gsuplementos.com.br/upload/produto/layout/176/vitamina-d-75caps-growth-supplements-v2.webp', 
      description: 'Suplemento de vitamina D essencial para a saúde óssea e imunológica. Cada dose fornece a quantidade recomendada de vitamina D para suportar a saúde geral e bem-estar.' 
    },
    { 
      name: 'BCAA 4:1:1', 
      price: 130.0, 
      stored: 55, 
      brand: 'MaxRecovery', 
      category: 'suplemento', 
      thumbnail: 'https://blackskullusa.vtexassets.com/arquivos/ids/159084-800-auto?v=638458525257730000&width=800&height=auto&aspect=true', 
      description: 'Suplemento BCAA com proporção 4:1:1 para recuperação muscular otimizada. Contém aminoácidos essenciais para suporte durante e após o treino, ajudando a reduzir a fadiga e acelerar a recuperação.' 
    },
    { 
      name: 'Roda Abdominal', 
      price: 35.0, 
      stored: 30, 
      brand: 'CoreRoller', 
      category: 'equipamento', 
      thumbnail: 'https://images.tcdn.com.br/img/img_prod/671591/roda_abdominal_wheel_stability_09076_5817_1_20220519183935.jpg', 
      description: 'Roda abdominal para treinos eficazes de core. Possui empunhaduras antiderrapantes e um design robusto para garantir estabilidade e conforto durante os exercícios de fortalecimento do abdômen.' 
    },
    { 
      name: 'Blender Portátil', 
      price: 50.0, 
      stored: 25, 
      brand: 'BlendPro', 
      category: 'acessório', 
      thumbnail: 'https://zemelo.com.br/wp-content/uploads/2022/04/Linha-Oster-Liquidificador-Portatil-com-Autorizacao-do-inmetro-2-Copos-com-Tampa-Possui-acessorios-individuais-que-possam-ser-Trocados-Laminas-Tampas-Copos-Material-Livre-de-BPA-3.jpeg', 
      description: 'Blender portátil compacto e eficiente para preparar shakes e smoothies. Com lâminas afiadas e bateria recarregável, é ideal para uso em casa ou na academia.' 
    },
    { 
      name: 'Manguito de Compressão', 
      price: 15.0, 
      stored: 40, 
      brand: 'CompFit', 
      category: 'vestuário', 
      thumbnail: 'https://acdn.mitiendanube.com/stores/001/867/184/products/380d7080a34e3954585cda4e9dd4ad50-e938b9193ac803bb0116778786588879-640-0.jpg', 
      description: 'Manguito de compressão para suporte adicional e melhora na circulação sanguínea durante os treinos. Feito de material elástico e confortável, ideal para atividades de alta intensidade.' 
    },
    { 
      name: 'Caneleira de Peso', 
      price: 25.0, 
      stored: 35, 
      brand: 'WeightAnkle', 
      category: 'acessório', 
      thumbnail: 'https://images.tcdn.com.br/img/img_prod/450774/caneleiras_de_peso_12kg_ultrawod_par_905_1_10a3648daf1d16269729f1c27bdde805.jpg', 
      description: 'Caneleira de peso ajustável para intensificar treinos de pernas e glúteos. Feita de material durável e confortável, com fechamento de velcro para ajuste seguro.' 
    },
    { 
      name: 'Balança Digital', 
      price: 60.0, 
      stored: 20, 
      brand: 'FitScale', 
      category: 'acessório', 
      thumbnail: 'https://casaevideonewio.vtexassets.com/arquivos/ids/193841/Balanca-Digital-de-Vidro-G-Tech-Glass10-com-Capacidade-de-150kg-1483498.jpg?v=636782294292770000', 
      description: 'Balança digital com display LCD e capacidade para medir até 180kg. Fornece medições precisas de peso com design elegante e fácil de usar.' 
    },
    { 
      name: 'Bola de Medicina 4kg', 
      price: 45.0, 
      stored: 30, 
      brand: 'MedBall', 
      category: 'equipamento', 
      thumbnail: 'https://casadofitness.fbitsstatic.net/img/p/medicine-ball-starke-4kg-75191/261897-2.jpg?w=900&h=900&v=no-change&qs=ignore', 
      description: 'Bola de medicina de 4kg para exercícios de força e explosão. Feita de material resistente com superfície texturizada para melhor aderência e durabilidade.' 
    },
    { 
      name: 'Suplemento de Magnésio', 
      price: 35.0, 
      stored: 45, 
      brand: 'MagBoost', 
      category: 'suplemento', 
      thumbnail: 'https://images.tcdn.com.br/img/img_prod/1224488/magnesio_forte_60_cap_dimalato_25mg_quelato_50mg_cloreto_25mg_11_1_0d7faf912969b93cc39472d8dd0eab51.jpg', 
      description: 'Suplemento de magnésio para suportar a função muscular e nervosa. Cada dose contém a quantidade recomendada de magnésio para melhorar a recuperação e reduzir cãibras.' 
    },
    { 
      name: 'Mochila de Treino', 
      price: 80.0, 
      stored: 25, 
      brand: 'TrainPack', 
      category: 'acessório', 
      thumbnail: 'https://integralmedica.vtexassets.com/arquivos/ids/159072/mochilabattle.png?v=637436357808530000', 
      description: 'Mochila de treino espaçosa e resistente com vários compartimentos. Ideal para transportar equipamentos e roupas de treino, com design ergonômico e confortável.' 
    },
    { 
      name: 'Cadeira Abdominal', 
      price: 90.0, 
      stored: 10, 
      brand: 'AbChair', 
      category: 'equipamento', 
      thumbnail: 'https://m.media-amazon.com/images/I/61AkIsIVsJL._AC_UF1000,1000_QL80_.jpg', 
      description: 'Cadeira abdominal para treinos focados em fortalecimento do core. Equipamento robusto e ajustável, projetado para proporcionar suporte e conforto durante os exercícios.' 
    },
    { 
      name: 'Calça Térmica', 
      price: 60.0, 
      stored: 20, 
      brand: 'ThermoPants', 
      category: 'vestuário', 
      thumbnail: 'https://cdn.awsli.com.br/600x700/1725/1725094/produto/91746633/80cbd0a8c3.jpg', 
      description: 'Calça térmica com tecnologia de isolamento para manter a temperatura corporal. Ideal para treinos ao ar livre em climas frios, feita de material leve e confortável.' 
    },
    { 
      name: 'Bicicleta Ergométrica', 
      price: 500.0, 
      stored: 8, 
      brand: 'ErgoBike', 
      category: 'equipamento', 
      thumbnail: 'https://m.media-amazon.com/images/I/61EYaGP-bTL._AC_UF1000,1000_QL80_.jpg', 
      description: 'Bicicleta ergométrica com resistência ajustável e monitor de desempenho. Ideal para treinos cardiovasculares, proporcionando um exercício eficiente e baixo impacto.' 
    },
    { 
      name: 'Suplemento Multivitamínico', 
      price: 65.0, 
      stored: 60, 
      brand: 'VitaMax', 
      category: 'suplemento', 
      thumbnail: 'https://m.media-amazon.com/images/I/518-wkOsZDL._AC_UF1000,1000_QL80_.jpg', 
      description: 'Suplemento multivitamínico completo para suportar a saúde geral. Cada dose fornece uma combinação equilibrada de vitaminas e minerais essenciais para o bem-estar diário.' 
    },
    { 
      name: 'Protetor de Pulso', 
      price: 20.0, 
      stored: 55, 
      brand: 'WristGuard', 
      category: 'acessório', 
      thumbnail: 'https://acdn.mitiendanube.com/stores/001/118/077/products/design-sem-nome-681-fd47a520bd9498111716304182574939-1024-1024.png', 
      description: 'Protetor de pulso com suporte e acolchoamento para proteção durante atividades de alta intensidade. Ideal para esportes e treinos que exigem suporte adicional para os pulsos.' 
    },
    { 
      name: 'Creatina Hardcore', 
      price: 55.0, 
      stored: 70, 
      brand: 'CreatinePower', 
      category: 'suplemento', 
      thumbnail: 'https://dw0jruhdg6fis.cloudfront.net/producao/31440372/G/cratina_150g.png', 
      description: 'Pó de creatina para aumento de força e desempenho. Cada dose fornece creatina de alta pureza para melhorar a potência muscular e acelerar a recuperação.' 
    }    
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const purchases = [];
  
  // Iterar sobre todos os clientes (IDs de 1 a 200)
  for (let clientId = 1; clientId <= 200; clientId++) {
    // Selecionar um número aleatório de produtos para o cliente (entre 1 e 50)
    const numberOfProducts = getRandomInt(1, 60); 

    for (let i = 0; i < numberOfProducts; i++) {
      // Selecionar um produto aleatório (IDs de 1 a 50)
      const productId = getRandomInt(1, 50); 
      // Quantidade comprada aleatória (entre 1 e 10)
      const quantity = getRandomInt(1, 10); 

      // Adicionar a compra à lista
      purchases.push({
        clientId: clientId,
        productId: productId,
        qtd_saled: quantity,
        createdAt: new Date()
      });
    }
  }

  // Inserir compras na tabela
  await prisma.purchase.createMany({
    data: purchases
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