var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var PrismaClient = require('@prisma/client').PrismaClient;
var prisma = new PrismaClient();
// Planos
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        var user, user2, user3, user4, user5, user6, user7, user8, lembrete1, lembrete2, lembrete3, lembrete4, lembrete5, lembrete6, evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8, evento9, evento10, publicacao1, publicacao2, publicacao3, publicacao4, publicacao5, publicacao6, publicacao7, publicacao8, publicacao9, publicacao10, mensal, trimestral, semestral, anual, bienal, vitalicio, instrutor1, instrutor2, instrutor3, instrutor4, instrutor5, instrutor6, instrutor7, instrutor8, instrutor9, instrutor10, instrutor11, instrutor12, instrutor13, instrutor14, instrutor15, instrutor16, instrutor17, instrutor18, instrutor19, instrutor20, instrutor21, instrutor22, instrutor23, instrutor24, instrutor25, instrutor26, instrutor27, instrutor28, instrutor29, instrutor30, cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10, cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20, cliente21, cliente22, cliente23, cliente24, cliente25, cliente26, cliente27, cliente28, cliente29, cliente30, cliente31, cliente32, cliente33, cliente34, cliente35, cliente36, cliente37, cliente38, cliente39, cliente40, cliente41, cliente42, cliente43, cliente44, cliente45, cliente46, cliente47, cliente48, cliente49, cliente50, cliente51, cliente52, cliente53, cliente54, cliente55, cliente56, cliente57, cliente58, cliente59, cliente60, cliente61, cliente62, cliente63, cliente64, cliente65, cliente66, cliente67, cliente68, cliente69, cliente70, cliente71, cliente72, cliente73, cliente74, cliente75, cliente76, cliente77, cliente78, cliente79, cliente80, cliente81, cliente82, cliente83, cliente84, cliente85, cliente86, cliente87, cliente88, cliente89, cliente90, cliente91, cliente92, cliente93, cliente94, cliente95, cliente96, cliente97, cliente98, cliente99, cliente100, cliente101, cliente102, cliente103, cliente104, cliente105, cliente106, cliente107, cliente108, cliente109, cliente110, cliente111, cliente112, cliente113, cliente114, cliente115, cliente116, cliente117, cliente118, cliente119, cliente120, cliente121, cliente122, cliente123, cliente124, cliente125, cliente126, cliente127, cliente128, cliente129, cliente130, cliente131, cliente132, cliente133, cliente134, cliente135, cliente136, cliente137, cliente138, cliente139, cliente140, cliente141, cliente142, cliente143, cliente144, cliente145, cliente146, cliente147, cliente148, cliente149, cliente150, cliente151, cliente152, cliente153, cliente154, cliente155, cliente156, cliente157, cliente158, cliente159, cliente160, cliente161, cliente162, cliente165, cliente180, cliente181, cliente182, cliente183, cliente184, cliente163, cliente164, cliente1651, cliente166, cliente167, cliente168, cliente169, cliente170, cliente171, cliente172, cliente173, cliente174, cliente175, cliente176, cliente177, cliente178, cliente179, cliente1801, cliente1811, cliente1821, cliente1831, cliente1841, cliente185, cliente186, cliente187, cliente188, cliente189, cliente190, cliente191, cliente192, cliente193, cliente194, products, _i, products_1, product, purchases, clientId, numberOfProducts, i, productId, quantity;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.create({
                        data: {
                            username: 'bushido',
                            nome: 'Bushido',
                            email: 'bushido.adm@adm.com',
                            telefone: '1234567890',
                            senha: '123123',
                            turno: 'Noite',
                            role: 'Admin'
                        },
                    })];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'jorge',
                                nome: 'Jorge',
                                email: 'jorge@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Manhã',
                                role: 'Instrutor'
                            },
                        })];
                case 2:
                    user2 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'maria',
                                nome: 'Maria',
                                email: 'mary.top@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Tarde',
                                role: 'Instrutor'
                            },
                        })];
                case 3:
                    user3 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'ana',
                                nome: 'Ana',
                                email: 'aninha.danana@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Noite',
                                role: 'Instrutor'
                            },
                        })];
                case 4:
                    user4 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'lucas',
                                nome: 'Lucas',
                                email: 'lucas.silva@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Manhã',
                                role: 'Aluno'
                            },
                        })];
                case 5:
                    user5 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'carolina',
                                nome: 'Carolina',
                                email: 'carol.jones@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Tarde',
                                role: 'Aluno'
                            },
                        })];
                case 6:
                    user6 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'rodrigo',
                                nome: 'Rodrigo',
                                email: 'rodrigo.cruz@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Noite',
                                role: 'Aluno'
                            },
                        })];
                case 7:
                    user7 = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                username: 'isabela',
                                nome: 'Isabela',
                                email: 'isa.moreira@test.com',
                                telefone: '1234567890',
                                senha: '123123',
                                turno: 'Manhã',
                                role: 'Aluno'
                            },
                        })];
                case 8:
                    user8 = _a.sent();
                    return [4 /*yield*/, prisma.lembrete.create({
                            data: {
                                tipo: 'lembrete',
                                titulo: 'Contactar fornecedor',
                                conteudo: 'Entrar em contato com o fornecedor de whey protein para fazer o pedido.',
                                data: '2024-07-01T06:00:00Z',
                                concluido: false,
                                usuarioId: user5.id
                            },
                        })];
                case 9:
                    lembrete1 = _a.sent();
                    return [4 /*yield*/, prisma.lembrete.create({
                            data: {
                                tipo: 'lembrete',
                                titulo: 'Reunião de equipe',
                                conteudo: 'Reunião com os instrutores para discutir a programação de treinos do mês.',
                                data: '2024-06-01T06:00:00Z',
                                concluido: true,
                                usuarioId: user.id
                            },
                        })];
                case 10:
                    lembrete2 = _a.sent();
                    return [4 /*yield*/, prisma.lembrete.create({
                            data: {
                                tipo: 'lembrete',
                                titulo: 'Avaliação física',
                                conteudo: 'Realizar avaliação física do aluno ID 5.',
                                data: '2022-07-11T06:00:00Z',
                                concluido: false,
                                usuarioId: user8.id
                            },
                        })];
                case 11:
                    lembrete3 = _a.sent();
                    return [4 /*yield*/, prisma.lembrete.create({
                            data: {
                                tipo: 'lembrete',
                                titulo: 'Avaliação física',
                                conteudo: 'Realizar avaliação física do aluno ID 7.',
                                data: '2024-08-21T06:00:00Z',
                                concluido: false,
                                usuarioId: user8.id
                            },
                        })];
                case 12:
                    lembrete4 = _a.sent();
                    return [4 /*yield*/, prisma.lembrete.create({
                            data: {
                                tipo: 'lembrete',
                                titulo: 'Avaliação física',
                                conteudo: 'Realizar avaliação física do aluno ID 6.',
                                data: '2024-06-21T06:00:00Z',
                                concluido: false,
                                usuarioId: user8.id
                            },
                        })];
                case 13:
                    lembrete5 = _a.sent();
                    return [4 /*yield*/, prisma.lembrete.create({
                            data: {
                                tipo: 'lembrete',
                                titulo: 'Equipamentos',
                                conteudo: 'Agendar manutenção dos equipamentos da academia.',
                                data: '2024-07-21T06:00:00Z',
                                concluido: false,
                                usuarioId: user8.id
                            },
                        })];
                case 14:
                    lembrete6 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Aula de Zumba no parque',
                                conteudo: 'Duração de 3 dias, das 8h às 10h. Local: Parque da Cidade. Trazer garrafa de água e protetor solar. Inscrições abertas e gratuitas.',
                                imagem: null,
                                usuarioId: user.id
                            },
                        })];
                case 15:
                    evento1 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Aula de Crossfit',
                                conteudo: 'Duração de 1 dia, das 19h às 21h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
                                imagem: null,
                                usuarioId: user.id
                            },
                        })];
                case 16:
                    evento2 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Aula de Pilates',
                                conteudo: 'Duração de 1 dia, das 9h às 11h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
                                imagem: null,
                                usuarioId: user.id
                            },
                        })];
                case 17:
                    evento3 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Projeto Verão',
                                conteudo: 'Duração de 3 meses, de junho a agosto. Treinos diários das 7h às 9h. Inscrições abertas. ',
                                imagem: null,
                                usuarioId: user.id
                            }
                        })];
                case 18:
                    evento4 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Campeonato: Summer House',
                                conteudo: 'Inscrições abertas. Primeiro lugar: 3 meses de academia grátis + o tão cobiçado Summer Travel. Segundo lugar: 2 meses de academia grátis. Terceiro lugar: 1 mês de academia grátis.',
                                imagem: null,
                                usuarioId: user.id
                            }
                        })];
                case 19:
                    evento5 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Torneio powerlifting',
                                conteudo: 'Inscrições abertas. Primeiro lugar: 3 meses de academia grátis. Segundo lugar: 2 meses de academia grátis. Terceiro lugar: 1 mês de academia grátis.',
                                imagem: null,
                                usuarioId: user.id
                            }
                        })];
                case 20:
                    evento6 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Aula de Yoga',
                                conteudo: 'Duração de 1 dia, das 8h às 10h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
                                imagem: null,
                                usuarioId: user6.id
                            }
                        })];
                case 21:
                    evento7 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Aula de Muay Thai',
                                conteudo: 'Duração de 1 dia, das 19h às 21h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
                                imagem: null,
                                usuarioId: user3.id
                            }
                        })];
                case 22:
                    evento8 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Aula de Dança',
                                conteudo: 'Duração de 1 dia, das 9h às 11h. Local: Academia Bushido. Inscrições abertas e gratuitas.',
                                imagem: null,
                                usuarioId: user5.id
                            }
                        })];
                case 23:
                    evento9 = _a.sent();
                    return [4 /*yield*/, prisma.evento.create({
                            data: {
                                tipo: 'evento',
                                titulo: 'Projeto Verão',
                                conteudo: 'Duração de 3 meses, de junho a agosto. Treinos diários das 7h às 9h. Inscrições abertas. ',
                                imagem: null,
                                usuarioId: user2.id
                            }
                        })];
                case 24:
                    evento10 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Dicas de alimentação',
                                conteudo: 'Para ganhar massa muscular, é importante manter uma alimentação balanceada e rica em proteínas. Alguns alimentos recomendados são: frango, peixe, ovos, batata doce, arroz integral, aveia, entre outros.',
                                createdAt: '2024-06-22T06:00:00Z',
                                usuarioId: user.id
                            },
                        })];
                case 25:
                    publicacao1 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Treino de pernas',
                                conteudo: 'Para quem está começando a treinar, é importante começar com exercícios mais leves e ir aumentando a intensidade aos poucos. Alguns exercícios recomendados são: agachamento, leg press, avanço, entre outros.',
                                usuarioId: user.id
                            },
                        })];
                case 26:
                    publicacao2 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Benefícios do pilates',
                                conteudo: 'O pilates é uma atividade física que trabalha o corpo como um todo, fortalecendo os músculos, melhorando a postura e a flexibilidade, além de ajudar a aliviar o estresse e a ansiedade.',
                                usuarioId: user.id
                            },
                        })];
                case 27:
                    publicacao3 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Treino de glúteos',
                                conteudo: 'Para quem deseja aumentar o bumbum, é importante focar em exercícios que trabalhem os músculos dessa região, como: agachamento, afundo, elevação pélvica, entre outros.',
                                usuarioId: user.id
                            },
                        })];
                case 28:
                    publicacao4 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Dicas para emagrecer',
                                conteudo: 'Para emagrecer de forma saudável, é importante manter uma alimentação balanceada e praticar exercícios físicos regularmente. Além disso, é importante beber bastante água e dormir bem.',
                                usuarioId: user.id
                            },
                        })];
                case 29:
                    publicacao5 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Benefícios da musculação',
                                conteudo: 'A musculação é uma atividade física que ajuda a aumentar a massa muscular, fortalecer os ossos, melhorar a postura e a flexibilidade, além de ajudar a emagrecer e a aliviar o estresse.',
                                usuarioId: user.id
                            },
                        })];
                case 30:
                    publicacao6 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Treino de braços',
                                conteudo: 'Para quem deseja aumentar a massa muscular dos braços, é importante focar em exercícios que trabalhem os músculos dessa região, como: rosca direta, tríceps testa, supino, entre outros.',
                                usuarioId: user.id
                            },
                        })];
                case 31:
                    publicacao7 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Benefícios do crossfit',
                                conteudo: 'O crossfit é uma atividade física que combina exercícios de alta intensidade e funcionalidade, ajudando a melhorar a resistência, a força, a agilidade e a coordenação motora.',
                                usuarioId: user.id
                            },
                        })];
                case 32:
                    publicacao8 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Treino de costas',
                                conteudo: 'Para quem deseja aumentar a massa muscular das costas, é importante focar em exercícios que trabalhem os músculos dessa região, como: puxada, remada, levantamento terra, entre outros.',
                                usuarioId: user.id
                            },
                        })];
                case 33:
                    publicacao9 = _a.sent();
                    return [4 /*yield*/, prisma.publicacao.create({
                            data: {
                                tipo: 'publicação',
                                titulo: 'Benefícios do pilates',
                                conteudo: 'O pilates é uma atividade física que trabalha o corpo como um todo, fortalecendo os músculos, melhorando a postura e a flexibilidade, além de ajudar a aliviar o estresse e a ansiedade.',
                                usuarioId: user.id
                            },
                        })];
                case 34:
                    publicacao10 = _a.sent();
                    return [4 /*yield*/, prisma.plano.create({
                            data: {
                                nome: 'Mensal',
                                valor: 60.00,
                                descricao: 'Pagamento mensal. Todos os serviços acessíveis. Valor sem desconto.'
                            },
                        })];
                case 35:
                    mensal = _a.sent();
                    return [4 /*yield*/, prisma.plano.create({
                            data: {
                                nome: 'Trimestral',
                                valor: 162.00,
                                descricao: 'Pagamento trimestral. Valor com desconto de 10% aplicado sobre o total de 3 meses (R$ 180,00 - economia de R$ 18,00 em relação ao plano mensal).'
                            },
                        })];
                case 36:
                    trimestral = _a.sent();
                    return [4 /*yield*/, prisma.plano.create({
                            data: {
                                nome: 'Semestral',
                                valor: 306.00,
                                descricao: 'Pagamento semestral. Valor com desconto de 15% aplicado sobre o total de 6 meses (R$ 360,00 - economia de R$ 54,00).'
                            },
                        })];
                case 37:
                    semestral = _a.sent();
                    return [4 /*yield*/, prisma.plano.create({
                            data: {
                                nome: 'Anual',
                                valor: 578.00,
                                descricao: 'Pagamento anual. Valor com desconto de 20% aplicado sobre o total de 12 meses (R$ 720,00 - economia de R$ 142,00). Novos usuários recebem um brinde de boas vindas: camisa + coqueteleira'
                            },
                        })];
                case 38:
                    anual = _a.sent();
                    return [4 /*yield*/, prisma.plano.create({
                            data: {
                                nome: 'Bienal',
                                valor: 1152.00,
                                descricao: 'Pagamento bienal. Valor com desconto de 20% aplicado sobre o total de 24 meses (R$ 1440,00 - economia de R$ 288,00). Novos usuários recebem um brinde de boas vindas: camisa + coqueteleira + luva + participação grátis em alguns dos eventos da academia.'
                            },
                        })];
                case 39:
                    bienal = _a.sent();
                    return [4 /*yield*/, prisma.plano.create({
                            data: {
                                nome: 'Vitalício',
                                valor: 7560.00,
                                descricao: 'Pagamento único vitalício. Mais brinde da academia(coqueteleira, camisa, luva e estacionamento privativo, participação grátis de todos eventos e a participação de 5 dias grátis do tão cobiçado Summer Travel). Valor com desconto de 30% aplicado sobre o valor total de 15 anos (R$ 10800,00 - economia de R$ 3240,00 ).'
                            },
                        })];
                case 40:
                    vitalicio = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'João Gomes',
                                email: 'joao.gomes@example.com',
                                telefone: '1234567890',
                                turno: 'Manhã'
                            },
                        })];
                case 41:
                    instrutor1 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Maria Silva',
                                email: 'maria.silva@example.com',
                                telefone: '0987654321',
                                turno: 'Tarde'
                            },
                        })];
                case 42:
                    instrutor2 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Pedro Oliveira',
                                email: 'pedro.oliveira@example.com',
                                telefone: '0123456789',
                                turno: 'Noite'
                            },
                        })];
                case 43:
                    instrutor3 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Ana Souza',
                                email: 'ana.souza@example.com',
                                telefone: '9876543210',
                                turno: 'Manhã'
                            },
                        })];
                case 44:
                    instrutor4 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Lucas Santos',
                                email: 'lucas.santos@example.com',
                                telefone: '5678901234',
                                turno: 'Tarde'
                            },
                        })];
                case 45:
                    instrutor5 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Carla Almeida',
                                email: 'carla.almeida@example.com',
                                telefone: '9012345678',
                                turno: 'Noite'
                            },
                        })];
                case 46:
                    instrutor6 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Rafael Lima',
                                email: 'rafael.lima@example.com',
                                telefone: '2345678901',
                                turno: 'Manhã'
                            },
                        })];
                case 47:
                    instrutor7 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Fernanda Costa',
                                email: 'fernanda.costa@example.com',
                                telefone: '3456789012',
                                turno: 'Tarde'
                            },
                        })];
                case 48:
                    instrutor8 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Bruno Silva',
                                email: 'bruno.silva@example.com',
                                telefone: '4567890123',
                                turno: 'Noite'
                            },
                        })];
                case 49:
                    instrutor9 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Juliana Martins',
                                email: 'juliana.martins@example.com',
                                telefone: '5678901234',
                                turno: 'Manhã'
                            },
                        })];
                case 50:
                    instrutor10 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Ricardo Ferreira',
                                email: 'ricardo.ferreira@example.com',
                                telefone: '6789012345',
                                turno: 'Tarde'
                            },
                        })];
                case 51:
                    instrutor11 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Patrícia Almeida',
                                email: 'patricia.almeida@example.com',
                                telefone: '7890123456',
                                turno: 'Noite'
                            },
                        })];
                case 52:
                    instrutor12 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Leonardo Melo',
                                email: 'leonardo.melo@example.com',
                                telefone: '8901234567',
                                turno: 'Manhã'
                            },
                        })];
                case 53:
                    instrutor13 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Gabriela Rocha',
                                email: 'gabriela.rocha@example.com',
                                telefone: '9012345678',
                                turno: 'Tarde'
                            },
                        })];
                case 54:
                    instrutor14 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Thiago Pereira',
                                email: 'thiago.pereira@example.com',
                                telefone: '0123456789',
                                turno: 'Noite'
                            },
                        })];
                case 55:
                    instrutor15 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Laura Barros',
                                email: 'laura.barros@example.com',
                                telefone: '1234567890',
                                turno: 'Manhã'
                            },
                        })];
                case 56:
                    instrutor16 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Rodrigo Gomes',
                                email: 'rodrigo.gomes@example.com',
                                telefone: '2345678901',
                                turno: 'Tarde'
                            },
                        })];
                case 57:
                    instrutor17 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Aline Nunes',
                                email: 'aline.nunes@example.com',
                                telefone: '3456789012',
                                turno: 'Noite'
                            },
                        })];
                case 58:
                    instrutor18 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Felipe Cardoso',
                                email: 'felipe.cardoso@example.com',
                                telefone: '4567890123',
                                turno: 'Manhã'
                            },
                        })];
                case 59:
                    instrutor19 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Beatriz Dias',
                                email: 'beatriz.dias@example.com',
                                telefone: '5678901234',
                                turno: 'Tarde'
                            },
                        })];
                case 60:
                    instrutor20 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'André Moreira',
                                email: 'andre.moreira@example.com',
                                telefone: '6789012345',
                                turno: 'Noite'
                            },
                        })];
                case 61:
                    instrutor21 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Camila Fonseca',
                                email: 'camila.fonseca@example.com',
                                telefone: '7890123456',
                                turno: 'Manhã'
                            },
                        })];
                case 62:
                    instrutor22 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Daniela Sousa',
                                email: 'daniela.sousa@example.com',
                                telefone: '8901234567',
                                turno: 'Tarde'
                            },
                        })];
                case 63:
                    instrutor23 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Eduardo Araújo',
                                email: 'eduardo.araujo@example.com',
                                telefone: '9012345678',
                                turno: 'Noite'
                            },
                        })];
                case 64:
                    instrutor24 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Mariana Pinto',
                                email: 'mariana.pinto@example.com',
                                telefone: '0123456789',
                                turno: 'Manhã'
                            },
                        })];
                case 65:
                    instrutor25 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Bruno Costa',
                                email: 'bruno.costa@example.com',
                                telefone: '1234567890',
                                turno: 'Tarde'
                            },
                        })];
                case 66:
                    instrutor26 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Renata Martins',
                                email: 'renata.martins@example.com',
                                telefone: '2345678901',
                                turno: 'Noite'
                            },
                        })];
                case 67:
                    instrutor27 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Marcelo Lima',
                                email: 'marcelo.lima@example.com',
                                telefone: '3456789012',
                                turno: 'Manhã'
                            },
                        })];
                case 68:
                    instrutor28 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Cecília Andrade',
                                email: 'cecilia.andrade@example.com',
                                telefone: '4567890123',
                                turno: 'Tarde'
                            },
                        })];
                case 69:
                    instrutor29 = _a.sent();
                    return [4 /*yield*/, prisma.instrutor.create({
                            data: {
                                nome: 'Gustavo Reis',
                                email: 'gustavo.reis@example.com',
                                telefone: '5678901234',
                                turno: 'Noite'
                            },
                        })];
                case 70:
                    instrutor30 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 71:
                    cliente1 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 72:
                    cliente2 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 73:
                    cliente3 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 74:
                    cliente4 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 75:
                    cliente5 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 76:
                    cliente6 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 77:
                    cliente7 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 78:
                    cliente8 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 79:
                    cliente9 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 80:
                    cliente10 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 81:
                    cliente11 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 82:
                    cliente12 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 83:
                    cliente13 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 84:
                    cliente14 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 85:
                    cliente15 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 86:
                    cliente16 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 87:
                    cliente17 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 88:
                    cliente18 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 89:
                    cliente19 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 90:
                    cliente20 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 91:
                    cliente21 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 92:
                    cliente22 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 93:
                    cliente23 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 94:
                    cliente24 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 95:
                    cliente25 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 96:
                    cliente26 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 97:
                    cliente27 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 98:
                    cliente28 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 99:
                    cliente29 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 100:
                    cliente30 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 101:
                    cliente31 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 102:
                    cliente32 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 103:
                    cliente33 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 104:
                    cliente34 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 105:
                    cliente35 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 106:
                    cliente36 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 107:
                    cliente37 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 108:
                    cliente38 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 109:
                    cliente39 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 110:
                    cliente40 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 111:
                    cliente41 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 112:
                    cliente42 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 113:
                    cliente43 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 114:
                    cliente44 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 115:
                    cliente45 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 116:
                    cliente46 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 117:
                    cliente47 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 118:
                    cliente48 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 119:
                    cliente49 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 120:
                    cliente50 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 121:
                    cliente51 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 122:
                    cliente52 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 123:
                    cliente53 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 124:
                    cliente54 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 125:
                    cliente55 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 126:
                    cliente56 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 127:
                    cliente57 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 128:
                    cliente58 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 129:
                    cliente59 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 130:
                    cliente60 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 131:
                    cliente61 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 132:
                    cliente62 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 133:
                    cliente63 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 134:
                    cliente64 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 135:
                    cliente65 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 136:
                    cliente66 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 137:
                    cliente67 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 138:
                    cliente68 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 139:
                    cliente69 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 140:
                    cliente70 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 141:
                    cliente71 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 142:
                    cliente72 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 143:
                    cliente73 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 144:
                    cliente74 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 145:
                    cliente75 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 146:
                    cliente76 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 147:
                    cliente77 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 148:
                    cliente78 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 149:
                    cliente79 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 150:
                    cliente80 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 151:
                    cliente81 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 152:
                    cliente82 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 153:
                    cliente83 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 154:
                    cliente84 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 155:
                    cliente85 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 156:
                    cliente86 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 157:
                    cliente87 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 158:
                    cliente88 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 159:
                    cliente89 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 160:
                    cliente90 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 161:
                    cliente91 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 162:
                    cliente92 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 163:
                    cliente93 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 164:
                    cliente94 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 165:
                    cliente95 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 166:
                    cliente96 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 167:
                    cliente97 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 168:
                    cliente98 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 169:
                    cliente99 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 170:
                    cliente100 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 171:
                    cliente101 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 172:
                    cliente102 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 173:
                    cliente103 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 174:
                    cliente104 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 175:
                    cliente105 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 176:
                    cliente106 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 177:
                    cliente107 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 178:
                    cliente108 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 179:
                    cliente109 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 180:
                    cliente110 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 181:
                    cliente111 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 182:
                    cliente112 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 183:
                    cliente113 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 184:
                    cliente114 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 185:
                    cliente115 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 186:
                    cliente116 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 187:
                    cliente117 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 188:
                    cliente118 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 189:
                    cliente119 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 190:
                    cliente120 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 191:
                    cliente121 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 192:
                    cliente122 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 193:
                    cliente123 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 194:
                    cliente124 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 195:
                    cliente125 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 196:
                    cliente126 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 197:
                    cliente127 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 198:
                    cliente128 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 199:
                    cliente129 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 200:
                    cliente130 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 201:
                    cliente131 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 202:
                    cliente132 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 203:
                    cliente133 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 204:
                    cliente134 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 205:
                    cliente135 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 206:
                    cliente136 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 207:
                    cliente137 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 208:
                    cliente138 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 209:
                    cliente139 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 210:
                    cliente140 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 211:
                    cliente141 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 212:
                    cliente142 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 213:
                    cliente143 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 214:
                    cliente144 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 215:
                    cliente145 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 216:
                    cliente146 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 217:
                    cliente147 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 218:
                    cliente148 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 219:
                    cliente149 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 220:
                    cliente150 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 221:
                    cliente151 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 222:
                    cliente152 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 223:
                    cliente153 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 224:
                    cliente154 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 225:
                    cliente155 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 226:
                    cliente156 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 227:
                    cliente157 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 228:
                    cliente158 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 229:
                    cliente159 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 230:
                    cliente160 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 231:
                    cliente161 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 232:
                    cliente162 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 233:
                    cliente165 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 234:
                    cliente180 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 235:
                    cliente181 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 236:
                    cliente182 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 237:
                    cliente183 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 238:
                    cliente184 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 239:
                    cliente163 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 240:
                    cliente164 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 241:
                    cliente1651 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 242:
                    cliente166 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 243:
                    cliente167 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 244:
                    cliente168 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 245:
                    cliente169 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 246:
                    cliente170 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 247:
                    cliente171 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 248:
                    cliente172 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 249:
                    cliente173 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 250:
                    cliente174 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 251:
                    cliente175 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 252:
                    cliente176 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 253:
                    cliente177 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 254:
                    cliente178 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 255:
                    cliente179 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 256:
                    cliente1801 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 257:
                    cliente1811 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 258:
                    cliente1821 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 259:
                    cliente1831 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 260:
                    cliente1841 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 261:
                    cliente185 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 262:
                    cliente186 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 263:
                    cliente187 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 264:
                    cliente188 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 265:
                    cliente189 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 266:
                    cliente190 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 267:
                    cliente191 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 268:
                    cliente192 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 269:
                    cliente193 = _a.sent();
                    return [4 /*yield*/, prisma.cliente.create({
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
                        })];
                case 270:
                    cliente194 = _a.sent();
                    products = [
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
                        }, {
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
                    _i = 0, products_1 = products;
                    _a.label = 271;
                case 271:
                    if (!(_i < products_1.length)) return [3 /*break*/, 274];
                    product = products_1[_i];
                    return [4 /*yield*/, prisma.product.create({
                            data: product
                        })];
                case 272:
                    _a.sent();
                    _a.label = 273;
                case 273:
                    _i++;
                    return [3 /*break*/, 271];
                case 274:
                    purchases = [];
                    // Iterar sobre todos os clientes (IDs de 1 a 200)
                    for (clientId = 1; clientId <= 200; clientId++) {
                        numberOfProducts = getRandomInt(1, 60);
                        for (i = 0; i < numberOfProducts; i++) {
                            productId = getRandomInt(1, 50);
                            quantity = getRandomInt(1, 10);
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
                    return [4 /*yield*/, prisma.purchase.createMany({
                            data: purchases
                        })];
                case 275:
                    // Inserir compras na tabela
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
