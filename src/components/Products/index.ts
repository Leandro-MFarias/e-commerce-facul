import fio from '../../assets/item1.png'
import pino from '../../assets/item2.png'
import lata from '../../assets/item3.png'
import fluxo from '../../assets/item4.png'
import gel from '../../assets/item5.png'
import serra from '../../assets/item6.jpg'
import bantman from '../../assets/item7.jpg'
import esab from '../../assets/item8.jpg'
import carbono from '../../assets/item9.jpg'
import ferro from '../../assets/item10.jpg'
import lincoln from '../../assets/destaque.png'

export interface IProduct {
    id: number,
    name: string,
    preco: number,
    descricao: string,
    image: string,
}

export const Products: IProduct[] = [
    {
        id: 1,
        name: 'Arame Solda MIG' ,
        preco: 28.89,
        descricao: 'Arame de solda para processo MIG/MAG',
        image: fio
    },
    {
        id: 2,
        name: 'Eletrodo De Tungstênio',
        preco: 145.00,
        descricao: 'Os eletrodos de tungstênio com 1,5% de Lantânio são ideais para materiais como: aço carbono, inox, cobre, bronze e titânio',
        image: pino
    },
    {
        id: 3,
        name: 'Eletrodo ESAB OK 4600',
        preco: 82.99,
        descricao: 'Ideal para soldagem de todos os tipos de juntas, mesmo sem preparação, em todas as posições',
        image: lata
    },
    {
        id: 4,
        name: 'Fluxo Solda Latão e Cobre',
        preco: 28.90,
        descricao: 'Fluxo para solda é um composto decapante para solda e suas ligas',
        image: fluxo
    },
    {
        id: 5,
        name: 'Gel Decapante/Passivante Avesta',
        preco: 57.90,
        descricao: 'Produto aplicado para promover a decapagem/passivação das superfícies de aços inoxidáveis e resistentes aos ácidos',
        image: gel
    },
    {
        id: 6,
        name: 'Máquina de Corte Bosch GCO',
        preco: 1699.00,
        descricao: 'Excelente Serra Policorte para Cortar Ferro/Metal GCO 14-24 Bosch de alta produtividade, com motor forte e resistente de 2400 Watts',
        image: serra
    },
    {
        id: 7,
        name: 'Máquina de Solda Bantam Max',
        preco: 770.00,
        descricao: 'Fácil de Usar, basta fazer o ajuste de sua máquina de acordo com a bitola do eletrodo',
        image: bantman
    },
    {
        id: 8,
        name: 'Máquina de Solda ESAB LHN',
        preco: 2490.00,
        descricao: 'A Inversora Esab LHN 162i monofásica possui alimentação com reconhecimento automático em redes monofásicas de 127V e 220V',
        image: esab
    },
    {
        id: 9,
        name: 'Vareta Solda TIG ESAB',
        preco: 47.69,
        descricao: 'Vareta para soldagem de aços não ligados',
        image: carbono
    },
    {
        id: 10,
        name: 'Vareta TIG Inoxidável WELD',
        preco: 107.79,
        descricao: 'Vareta Inoxidável para solda WELD INOX',
        image: ferro
    },
    {
        id: 11,
        name: 'Máquina de Solda',
        preco: 16846.00, 
        descricao: 'Máquina de Soldas Lincoln Square Wave - Invertec V 275 S',
        image: lincoln
    },
]