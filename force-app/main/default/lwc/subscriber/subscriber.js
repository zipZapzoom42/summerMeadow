import { LightningElement, wire } from 'lwc';
import { registerListener } from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class Subscriber extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

    connectedCallback(){
        registerListener("pubevent1",this.handlePublishedEvent,this);
    }

    handlePublishedEvent(message){
        console.log("Subscriber handled this event");
        this.template.querySelector('div').innerHTML = message;
    }
}