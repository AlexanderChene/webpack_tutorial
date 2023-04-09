import Heading from '../heading/heading.js';
import KiwiImage from '../kiwi-Image/kiwi-image';


class KiwiPage {
    render(){
        const heading = new Heading();
        heading.render('kiwi');
        const kiwiImage = new KiwiImage();
        kiwiImage.render();
    }
}

export default KiwiPage;
