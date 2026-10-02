// Estrutura que cada imóvel deverá possuir
export interface Imovel {
  id: number;
  titulo: string;
  descricao: string;
  descricaoDetalhada: string;
  valor: number;
  imagem: any;
}

// Lista inicial de imóveis
export const imoveis: Imovel[] = [
  {
    id: 1,
    titulo: 'Casa moderna em condomínio',
    descricao: 'Casa ampla, moderna e localizada em condomínio fechado.',
    descricaoDetalhada:
      'Casa moderna com três quartos, sendo uma suíte, sala ampla, cozinha planejada, área externa e duas vagas de garagem.',
    valor: 650000,
    imagem: require('../../assets/images/imovel-01.jpg'),
  },

  {
    id: 2,
    titulo: 'Apartamento próximo ao centro',
    descricao: 'Apartamento confortável em excelente localização.',
    descricaoDetalhada:
      'Apartamento com dois quartos, sala, cozinha, banheiro, varanda e uma vaga de garagem. Localizado próximo a comércio e transporte público.',
    valor: 380000,
    imagem: require('../../assets/images/imovel-02.jpg'),
  },

  {
    id: 3,
    titulo: 'Casa com área de lazer',
    descricao: 'Casa espaçosa com piscina e área de lazer.',
    descricaoDetalhada:
      'Casa com quatro quartos, duas suítes, piscina, churrasqueira, jardim e três vagas de garagem.',
    valor: 890000,
    imagem: require('../../assets/images/imovel-03.jpg'),
  },
];