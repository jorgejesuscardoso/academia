export interface PublicacaoDTO {
  id: number;
  titulo: string;
  descricao: string;
  conteudo: string;
  autor: number;
  dataPublicacao: Date;
  dataAtualizacao: Date;
}