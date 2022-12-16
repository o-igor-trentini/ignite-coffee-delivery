export const moneyMask = (value: string): string => {
    value = +value < 100 ? String(+value * 100) : value;

    const split = (str: string, index: number) => [str.slice(0, index), str.slice(index)];

    const addDots = (str: string): string => {
        if (str.length <= 3) return str;

        const pair = Array.from(str).reverse();

        for (let i = 3; i < pair.length; i += 4) {
            pair.splice(i, 0, '.');
        }

        return pair.reverse().join('');
    };

    const val = value.replace(/[.,]/g, '').replace(/^0*/g, '');
    const index = val.length - 2;
    let [first, second] = split(val, index);

    first = addDots(first);
    second = second.padStart(2, '0');

    return [first, second].join(',');
};
