import {filterDogs} from '../../../../src/hooks/dogs/useDogsList.helpers';

describe('useDogsList.helpers', () => {
    describe('filterDogs', () => {
        it('returns only items finishing with lowercase jpg, gif or png', () => {
            expect(filterDogs(['jpg', 'JPG', 'gif', 'GIF', 'png', 'PNG', 'random'])).toEqual(['jpg', 'JPG', 'gif', 'GIF', 'png', 'PNG']);
        });

        it('returns only first 20 filtered items', () => {
            expect(
                filterDogs([
                    '1.any',
                    '1.jpg',
                    '2.JPG',
                    '2.Any',
                    '3.gif',
                    '4.GIF',
                    '5.png',
                    '6.PNG',
                    '3.any',
                    '7.jpg',
                    '8.JPG',
                    '4.Any',
                    '9.gif',
                    '10.GIF',
                    '11.png',
                    '12.PNG',
                    '5.any',
                    '13.jpg',
                    '14.JPG',
                    '6.Any',
                    '15.gif',
                    '16.GIF',
                    '17.png',
                    '18.PNG',
                    '7.any',
                    '19.jpg',
                    '20.JPG',
                    '8.Any',
                    '21.gif',
                    '22.GIF',
                    '23.png',
                    '24.PNG',
                ]),
            ).toEqual([
                '1.jpg',
                '2.JPG',
                '3.gif',
                '4.GIF',
                '5.png',
                '6.PNG',
                '7.jpg',
                '8.JPG',
                '9.gif',
                '10.GIF',
                '11.png',
                '12.PNG',
                '13.jpg',
                '14.JPG',
                '15.gif',
                '16.GIF',
                '17.png',
                '18.PNG',
                '19.jpg',
                '20.JPG',
            ]);
        });
    });
});
