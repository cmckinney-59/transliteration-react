import homeImg from './assets/home.jpg';
import inasalImg from './assets/inasal.png';
import theBoisImg from './assets/thebois.webp';
import beeImg from './assets/deseretBee.jpg';

export const PAGES = {
    Home: {
        image: homeImg,
        title: 'Home',
        description: 'This is the Home description'
    },
    Baybayin: {
        image: inasalImg,
        title: 'Baybayin',
        whatIs: 'What is Baybayin?',
        description: 'This is the Baybayin description',
        transliterator: 'Baybayin transliterator'
    },
    Aurebesh: {
        image: theBoisImg,
        title: 'Aurebesh',
        whatIs: 'What is Aurebesh?',
        description: 'This is the Aurebesh description',
        transliterator: 'Aurebesh transliterator'
    },
    Deseret: {
        image: beeImg,
        title: 'Deseret',
        whatIs: 'What is Deseret?',
        description: 'This is the Deseret description',
        transliterator: 'Deseret transliterator'
    },
}