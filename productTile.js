import { LightningElement, api } from 'lwc';

export default class ProductTile extends LightningElement {
    @api name;
    @api price;

    handleClick(){
        this.dispatchEvent(new CustomEvent('select'));
    }
}
