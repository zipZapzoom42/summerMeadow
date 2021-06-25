import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';
export default class Publisher extends LightningElement {
    @wire(CurrentPageReference)
    currentPageRef;
    _message;
    handleClick(){
        fireEvent(this.currentPageRef,"pubevent1",this.messageText);
    }

    get messageText(){
        return this._message;
    }

    set messageText(value){
        this._message = value;
    }
    
    trackMessageChange(event){
        this.messageText = event.target.value;
    }
}