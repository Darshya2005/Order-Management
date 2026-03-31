import { LightningElement, wire, track } from 'lwc';
import getProducts from '@salesforce/apex/OrderControllerAdvanced.getProducts';
import createOrderWithItems from '@salesforce/apex/OrderControllerAdvanced.createOrderWithItems';

export default class OrderManager extends LightningElement {
    @track products=[];
    selectedProducts=[];

    @wire(getProducts)
    wired({data}){
        if(data){
            this.products=data;
        }
    }

    handleSelect(event){
        const id = event.target.key;
        this.selectedProducts.push(id);
    }

    createOrder(){
        createOrderWithItems({productIds:this.selectedProducts})
        .then(()=>{
            alert('Order Created');
        });
    }
}
