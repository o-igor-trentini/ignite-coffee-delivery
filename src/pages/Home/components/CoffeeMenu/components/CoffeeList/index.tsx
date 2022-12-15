import { FC, useContext } from 'react';
import styles from './index.module.css';
import expressoTradicionalPng from '../../../../../../assets/coffees/expresso-tracional.png';
import expressoAmericanoPng from '../../../../../../assets/coffees/expresso-americano.png';
import expressoCremosoPng from '../../../../../../assets/coffees/expresso-cremoso.png';
import expressoGeladoPng from '../../../../../../assets/coffees/expresso-gelado.png';
import cafeComLeitePng from '../../../../../../assets/coffees/cafe-com-leite.png';
import LattePng from '../../../../../../assets/coffees/latte.png';
import CapuccinoPng from '../../../../../../assets/coffees/capuccino.png';
import MacchiatoPng from '../../../../../../assets/coffees/macchiato.png';
import MocaccinoPng from '../../../../../../assets/coffees/mocaccino.png';
import ChocolatePng from '../../../../../../assets/coffees/chocolate-quente.png';
import CubanoPng from '../../../../../../assets/coffees/cubano.png';
import HavaianoPng from '../../../../../../assets/coffees/havaiano.png';
import arabePng from '../../../../../../assets/coffees/arabe.png';
import irlandesPng from '../../../../../../assets/coffees/irlandes.png';
import { Title } from '../../../../../../components/ui/Title';
import { Text } from '../../../../../../components/ui/Text';
import { Counter } from '../../../../../../components/ui/Counter';
import { Button } from '../../../../../../components/ui/Button';
import { CartContext } from '../../../../../../context/Cart';
import { moneyMask } from '../../../../../../utils/string';

export interface Coffee {
    name: string;
    description: string;
    price: number;
    tags: string[];
    imageSrc: string;
}

// TODO: Mudar implementação de tags

const coffees: Coffee[] = [
    {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.9,
        tags: ['tradicional'],
        imageSrc: expressoTradicionalPng,
    },
    {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.9,
        tags: ['tradicional'],
        imageSrc: expressoAmericanoPng,
    },
    {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.9,
        tags: ['tradicional'],
        imageSrc: expressoCremosoPng,
    },
    {
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.9,
        tags: ['tradicional', 'gelado'],
        imageSrc: expressoGeladoPng,
    },
    {
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tracional com leite vaporizado',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        imageSrc: cafeComLeitePng,
    },
    {
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobre de leite e espuma cremosa',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        imageSrc: LattePng,
    },
    {
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        imageSrc: CapuccinoPng,
    },
    {
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        imageSrc: MacchiatoPng,
    },
    {
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.9,
        tags: ['tradicional', 'com leite'],
        imageSrc: MocaccinoPng,
    },
    {
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.9,
        tags: ['especial', 'com leite'],
        imageSrc: ChocolatePng,
    },
    {
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.9,
        tags: ['especial', 'alcoólico', 'gelado'],
        imageSrc: CubanoPng,
    },
    {
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.9,
        tags: ['especial'],
        imageSrc: HavaianoPng,
    },
    {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.9,
        tags: ['especial'],
        imageSrc: arabePng,
    },
    {
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.9,
        tags: ['especial', 'alcoólico'],
        imageSrc: irlandesPng,
    },
];

export const CoffeeList: FC = () => {
    const { addOrder } = useContext(CartContext);

    const handleAddCoffee = (coffeeName: string, coffeeAmount: number): void =>
        addOrder({
            id: null,
            coffee: coffees.find((item) => item.name === coffeeName) as Coffee,
            amount: coffeeAmount,
        });

    const card = (coffee: Coffee): JSX.Element => {
        let coffeeAmount = 1;

        const handleChangeAmount = (value: number): void => {
            coffeeAmount = value;
        };

        return (
            <div key={coffee.name} className={styles.card}>
                <img src={coffee.imageSrc} alt="" />

                <div className={styles.cardTags}>
                    {coffee.tags.map((item) => (
                        <span key={item} className={styles.cardTag}>
                            {item}
                        </span>
                    ))}
                </div>

                <div className={styles.cardDescription}>
                    <div className={styles.cardTitle}>
                        <Title size="sm">{coffee.name}</Title>
                    </div>

                    <div className={styles.cardSubtitle}>
                        <Text size="sm" weight="regular">
                            {coffee.description}
                        </Text>
                    </div>
                </div>

                <div className={styles.buy}>
                    <div className={styles.buyPrice}>
                        <Text size="sm" weight="regular">
                            R$
                        </Text>

                        <Title size="md">{moneyMask('' + coffee.price)}</Title>
                    </div>

                    <div className={styles.buyActions}>
                        <Counter minValue={1} onChange={handleChangeAmount} />

                        <Button
                            variant="shop-cart-secondary"
                            onClick={() => handleAddCoffee(coffee.name, coffeeAmount)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return <div className={styles.coffeeList}>{coffees.map(card)}</div>;
};
