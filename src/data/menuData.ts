import { MenuItem, Review, Pillar } from '../types';

export const BUSINESS_INFO = {
  name: 'Predador da Brasa',
  tagline: 'Fogo vivo, cortes nobres e sabor voraz.',
  description: 'Hambúrgueres artesanais forjados no fogo vivo e brasa intensa. Blends de cortes nobres Angus, queijos artesanais e receitas autorais.',
  address: 'SEU ENDEREÇO AQUI',
  phone: '(00) 00000-0000',
  whatsappRaw: '0000000000',
  hours: 'Não informado',
  instagram: '@predadordabrasa',
  ctaText: 'Entrar em contato',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'predador-alfa',
    name: 'O Predador Alfa',
    tagline: 'O ápice da nossa brasa • O mais pedido',
    description: 'Dois blends Angus de 160g selados na brasa viva, cheddar inglês maturado duplo, fatias generosas de bacon artesanal caramelizado no mel de laranjeira, cebola crispy dourada e maionese defumada no carvão ativado. Servido em pão brioche amanteigado.',
    price: 46.90,
    category: 'prime',
    badge: 'Mais Pedido',
    weight: '480g',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      '2x Blends Angus 160g',
      'Cheddar Inglês Maturado',
      'Bacon Caramelizado no Mel',
      'Cebola Crispy da Casa',
      'Maionese de Carvão Ativado',
      'Pão Brioche Selado'
    ],
    isFavorite: true
  },
  {
    id: 'fogo-da-estepe',
    name: 'Fogo da Estepe',
    tagline: 'Sabor marcante com picância sutil',
    description: 'Blend Angus nobre de 180g na brasa de lenha nobre, queijo gorgonzola dolce fundido no calor do fogo, geleia caseira de pimenta biquinho com pedaços de bacon, folhas frescas de rúcula silvestre e aioli de alho negro assado.',
    price: 44.50,
    category: 'autorais',
    badge: 'Receita do Chef',
    weight: '420g',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      'Blend Angus 180g',
      'Gorgonzola Dolce Fundido',
      'Geleia de Pimenta Biquinho com Bacon',
      'Rúcula Silvestre Fresca',
      'Aioli de Alho Negro',
      'Pão Brioche Selado'
    ],
    spicyLevel: 1
  },
  {
    id: 'smash-brasa-vulcanica',
    name: 'Smash Brasa Vulcânica',
    tagline: 'Crosta crocante Maillard inconfundível',
    description: 'Dois smashes de 90g ultra prensados na chapa de ferro ardente com crosta crocante caramelizada, queijo gouda fundido em camada dupla, picles artesanal crocante de pepino, cebola roxa marinada e molho secreto defumado do Predador.',
    price: 38.90,
    category: 'smash',
    badge: 'Smash Supremo',
    weight: '360g',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      '2x Smash Angus 90g',
      'Queijo Gouda Artesanal',
      'Picles Caseiro Crocante',
      'Cebola Roxa Fininha',
      'Molho Secreto Defumado',
      'Pão de Batata Tostado'
    ]
  },
  {
    id: 'costela-defumada-bbq',
    name: 'Costela Defumada 10h',
    tagline: 'Desmanchando na boca • Lenha de macieira',
    description: 'Blend Angus 180g com crosta de brasa, coberto por generosa camada de costela bovina nobre desfiada, defumada pacientemente por 10 horas em lenha de macieira, barbecue rústico com toque de cerveja preta, queijo prato artesanal e coleslaw fresco.',
    price: 49.90,
    category: 'prime',
    badge: 'Defumado 10 Horas',
    weight: '510g',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      'Blend Angus 180g',
      'Costela Desfiada Defumada 10h',
      'Queijo Prato Artesanal',
      'Barbecue de Cerveja Preta',
      'Coleslaw Agridoce',
      'Pão Brioche Selado'
    ],
    isFavorite: true
  },
  {
    id: 'brie-e-trufas-negras',
    name: 'Brie Imperial Trufado',
    tagline: 'Sofisticação extrema na brasa',
    description: 'Blend nobre de Picanha e Costela Angus 180g, queijo brie francês generosamente maçaricado com crosta dourada, mel silvestre trufado com castanhas tostadas, cebola confitada lentamente no vinho do Porto e pão australiano artesanal com cacau.',
    price: 52.00,
    category: 'autorais',
    badge: 'Edição Especial',
    weight: '430g',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      'Blend Picanha & Costela 180g',
      'Queijo Brie Maçaricado',
      'Mel Trufado com Castanhas',
      'Cebola Confitada no Vinho',
      'Pão Australiano com Cacau'
    ]
  },
  {
    id: 'smash-bacon-brasa',
    name: 'Smash Bacon em Dobro',
    tagline: 'Para devoradores autênticos de bacon',
    description: 'Dois smashes de 90g com crostinha dourada, queijo cheddar cremoso derretido, farofa ultra crocante de bacon artesanal, fatias extras de bacon rústico defumado na casa e maionese verde de ervas frescas.',
    price: 39.50,
    category: 'smash',
    badge: 'Crocância Máxima',
    weight: '370g',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      '2x Smash Angus 90g',
      'American Cheese Artesanal',
      'Farofa Crocante de Bacon',
      'Fatias Grossas de Bacon',
      'Maionese Verde de Ervas',
      'Pão Brioche Selado'
    ]
  },
  {
    id: 'batatas-rusticas-paprica',
    name: 'Batatas Rústicas na Brasa',
    tagline: 'Crocantes por fora, aveludadas por dentro',
    description: 'Batatas cortadas à mão com casca, fritas em imersão perfeita e finalizadas com sal de parrilla temperado, páprica defumada espanhola e alecrim tostado na brasa. Acompanha aioli artesanal da casa.',
    price: 24.90,
    category: 'porcoes',
    badge: 'Acompanhamento',
    weight: '350g',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      'Batatas Especiais com Casca',
      'Sal de Parrilla Temperado',
      'Páprica Defumada Espanhola',
      'Alecrim Tostado na Brasa',
      'Aioli Artesanal da Casa'
    ]
  },
  {
    id: 'dadinhos-coalho-brasa',
    name: 'Dadinhos de Coalho & Mel de Pimenta',
    tagline: 'Dourados na brasa com crosta inigualável',
    description: 'Cubos de queijo coalho artesanal do sertão grelhados diretamente sobre a brasa ardente até formar crosta dourada e interior derretido, servidos com redução caseira de mel de engenho e pimenta dedo-de-moça.',
    price: 28.50,
    category: 'porcoes',
    badge: 'Entrada Voraz',
    weight: '300g',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      'Queijo Coalho Selecionado',
      'Grelhado na Brasa Direta',
      'Mel de Engenho Artesanal',
      'Pimenta Dedo-de-Moça Fresca'
    ]
  },
  {
    id: 'cerveja-artesanal-ipa',
    name: 'Chopp Artesanal Predador IPA',
    tagline: 'Amargor nobre para harmonizar com cortes gordurosos',
    description: 'Cerveja artesanal estilo American IPA com notas cítricas e resinosas de lúpulos nobres, corpo médio e final marcante, ideal para cortar a gordura do blend Angus grelhado.',
    price: 18.00,
    category: 'bebidas',
    badge: 'Harmonização Perfeita',
    weight: '500ml',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    ingredients: [
      'Lúpulos Americanos Nobres',
      'Malte Cevada Selecionado',
      'Teor Alcoólico 6.5%',
      'Copo Congelado da Casa'
    ]
  }
];

export const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Cortes Nobres Angus',
    subtitle: 'Origem rastreada e 100% fresca',
    description: 'Não trabalhamos com carne ultracongelada. Nosso blend proprietário é moído diariamente na casa a partir de cortes nobres selecionados, respeitando a proporção de gordura ideal para a máxima suculência.',
    iconName: 'Flame'
  },
  {
    number: '02',
    title: 'Brasa Viva & Lenha Nobre',
    subtitle: 'O calor ancestral que carameliza e defuma',
    description: 'O segredo reside na alta temperatura do carvão mineral combinado com lenha de macieira e nós de pinho. O resultado é a crosta Maillard perfeita e notas aromáticas de defumação inimitáveis.',
    iconName: 'Sparkles'
  },
  {
    number: '03',
    title: 'Fermentação Natural & Alquimia',
    subtitle: 'Pães selados na manteiga e molhos autorais',
    description: 'Pães de fermentação lenta com massa leve e macia, tostados na grelha com manteiga de garrafa para impermeabilizar os sucos da carne. Todos os molhos, maioneses e picles são de fabricação própria.',
    iconName: 'ShieldCheck'
  }
];

export const STATS = [
  {
    value: 48,
    suffix: 'K+',
    label: 'Hambúrgueres na Brasa',
    sublabel: 'Grelhados com maestria'
  },
  {
    value: 100,
    suffix: '%',
    label: 'Blends Nobres Angus',
    sublabel: 'Carne fresca moída todo dia'
  },
  {
    value: 4.9,
    suffix: '★',
    label: 'Avaliação Média',
    sublabel: 'Em mais de 3.400 clientes'
  },
  {
    value: 0,
    suffix: '%',
    label: 'Conservantes Químicos',
    sublabel: 'Gastronomia pura e autêntica'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rodrigo Medeiros',
    role: 'Crítico Gastronômico & Carnívoro',
    rating: 5,
    date: 'Ontem',
    comment: 'O Predador Alfa é simplesmente inacreditável. O ponto da carne na brasa veio rosado e vertendo suculência, o bacon com mel de laranjeira equilibra com perfeição o sal da carne. É outro patamar de hamburgueria.',
    favoriteBurger: 'O Predador Alfa'
  },
  {
    id: '2',
    author: 'Camila Alencar',
    role: 'Cliente Frequente',
    rating: 5,
    date: 'Há 3 dias',
    comment: 'O atendimento é impecável e a entrega foi absurdamente rápida. O hambúrguer chegou quentinho e com o pão intacto, crocante por fora e macio por dentro. O Fogo da Estepe com gorgonzola é viciante!',
    favoriteBurger: 'Fogo da Estepe'
  },
  {
    id: '3',
    author: 'Lucas Fontes',
    role: 'Chef de Parrilla',
    rating: 5,
    date: 'Semana passada',
    comment: 'Como churrasqueiro, eu sou chato com carne na brasa. E a equipe do Predador da Brasa dá uma aula de fogo! A crosta Maillard dos smashes e o defumado da costela são obras de arte.',
    favoriteBurger: 'Costela Defumada 10h'
  }
];
