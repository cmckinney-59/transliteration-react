import homeImg from './assets/images/home.jpg';
import inasalImg from './assets/images/inasal.png';
import theBoisImg from './assets/images/thebois.webp';
import beeImg from './assets/images/deseretBee.jpg';

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
        transHeader: 'Baybayin transliterator'
    },
    Aurebesh: {
        image: theBoisImg,
        title: 'Aurebesh',
        whatIs: 'What is Aurebesh?',
        description: 'This is the Aurebesh description',
        transHeader: 'Aurebesh transliterator'
    },
    Deseret: {
        image: beeImg,
        title: 'Deseret',
        whatIs: 'What is Deseret?',
        description: 'This is the Deseret description',
        transHeader: 'Deseret transliterator'
    },
}