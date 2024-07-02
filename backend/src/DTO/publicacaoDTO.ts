export interface PublicacaoDTO {
  id?: number;
  tipo: string;
  titulo: string;
  conteudo: string;
  usuarioId: number;
  dataPublicacao?: Date;
  dataAtualizacao?: Date;
  imagem?: string | null;
}