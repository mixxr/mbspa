import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';

import {MsBudget} from "../../model/ms-budget";
import {Similarity} from "../../model/similarity.enum";
import {MsCartItem} from "../../model/ms-cart-item";
import {MsSearchService} from "../../svcs/ms-search.service";

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';


@Component({
  selector: 'cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {

    public static _DEF_BUDGET: number = 500;
    public similarity = Similarity;
    public pbarColor:string = "";

    model:MsBudget;
    message = "Stai spendendo";
    list:MsCartItem[];
    //deletingLs: { [id: string] : boolean; } = {};

    currencies = ["EUR", "USD"];
    submitted = false;
    listView = false;

   constructor(public searchSvc:MsSearchService, overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
        console.log('constructor>list:',this.list);
        overlay.defaultViewContainer = vcRef;
    }

       // constructor(public searchSvc:MsSearchSvc){}

    // getList(){
    //     return this.searchSvc.list.sort(function (a:MsCartItem, b:MsCartItem) {
    //         return (a.refresh - b.refresh);
    //     });
    // }

    ngOnInit() {
        this.model = new MsBudget(CartItemListComponent._DEF_BUDGET);
        this.resetList();
        this.model.cart = {};
    }

    addList(list:MsCartItem[]){ // only the delta (new items)
        if (list === undefined || list.length === 0)
            return;
        console.log('addList>list-p:',this.list.length,list.length);
        this.list = [...list, ...this.list];
        console.log('addList>list-d:',this.list.length);
        list.map((item)=>this.model.cart[item.sku]=item.qty);
        if (this.model.value - this.calcCurrentValue() > 1)
            this.onSubmit(1);
    }


    getRows(): number{
        return this.list.length | 0;
    }

    
    

    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;



    // search bar event handler
    onSubmit(maxItems:number) { 
        console.log('on submit:',this.model.value);
        if (this.model.value <= 1 || maxItems === 0)
            return;
        this.model.maxItems = maxItems || this.model.maxItems;
        this.model.currentValue = this.calcCurrentValue(); // update cart value
        this.searchSvc.getList(this.model)
                .subscribe(
                    list => this.addList(list),
                    error => this.message = <any>error);
        this.submitted = true; 
    }
    onEdit() { this.submitted = false; this.isOpen = false;}
    
    onReset() {
        this.model = new MsBudget(CartItemListComponent._DEF_BUDGET);
        this.active = false;
        this.resetList();
        setTimeout(() => this.active = true, 0);
    }

    get diagnostic() { return JSON.stringify(this.model); }

    getDiagnostic(item: MsCartItem):string{
        return JSON.stringify(item);
    }

    // list event handler
    onSelect(itemId:string){
        console.log('select:', itemId);
    }
 
    onDelete(itemId:string){
        // this.getItem(itemId).oldQty = this.getItem(itemId).qty;
        // this.getItem(itemId).qty = 0;
        // this.onQtyChange(itemId,"0");
        if (this.model.forceDel)
            this.confirmDelete(itemId, true);
        else
            //this.getItem(itemId).deleting = true;
            this.onModalClick(itemId);
    }

    onPin(itemId:number){
        // this.getItem(itemId).oldQty = this.getItem(itemId).qty;
        // this.getItem(itemId).qty = 0;
        // this.onQtyChange(itemId,"0");
        this.model.pin[itemId] = !this.model.pin[itemId]; 
    }

    confirmDelete(itemId:string, confirm:boolean){
        //this.getItem(itemId).deleting = confirm;
        if (confirm) {
            // remove other with pin=true
            Object.keys(this.model.pin).forEach((id)=>{
                this.model.cart[id] = 0;
                this.removeItem(id); // 0=no call onSubmit()
                this.model.pin[id] = false;
            });
            this.model.cart[itemId] = 0;
            this.removeItem(itemId);
            this.onSubmit(1);
        }else
            this.getItem(itemId).qty = this.model.cart[itemId];
    }

    onQtyBtn(itemId:string, increment:number){
        console.log('btn:id,increment:',itemId,increment);
        this.getItem(itemId).qty += increment;
        console.log('btn:id,qty:',itemId,this.getItem(itemId).qty);
        this.onQtyChange(itemId,this.getItem(itemId).qty);
    }

    onQtyChange(itemId:string, newQty:number){
        console.log('chg:id,qty:',itemId,newQty);
        this.getItem(itemId).qty = newQty;
        if (newQty <= 0)
            //this.getItem(itemId).deleting = true;
            this.onModalClick(itemId);
        else
            this.model.cart[itemId] = newQty;
    }




    // avoid(A)|find(F)
    onSimilar(itemId:number,iloveit:boolean){
        console.log('similar:', itemId,' ',iloveit);
        // if (this.model.similar === undefined || this.model.similar.length === 0)
        //     this.model.similar = ';';
        //  if (this.model.similar.indexOf(';'+itemId+':') >= 0)
        //     this.model.similar = this.model.similar.replace(';'+itemId+':'+(action==='A'?'F':'A')+';',';'+itemId+':'+action+';');
        // else
        //     this.model.similar += itemId+':'+action+';';
        this.model.similar[itemId] = (iloveit)?(this.model.similar[itemId]===Similarity.Love)?Similarity.None:Similarity.Love:(this.model.similar[itemId]===Similarity.Hate)?Similarity.None:Similarity.Hate;
    }

    calcCurrentValue(): number{
        console.log('calcCurrentValue>list:',this.list.length);
        var prices = this.list.map(function(a:MsCartItem) {return (a.price*a.qty);});
        return prices.reduce((acc, value) => acc + value, 0);
    }

    getItem(itemId: string): MsCartItem{
        return this.list.find((item)=>(item.sku == itemId));
    }

    removeItem(itemId: string) {
        console.log('removeItem:',itemId);
        var item = this.getItem(itemId);
        if (item){
            const i = this.list.indexOf(item);
            this.list = [...this.list.slice(0,i),
            ...this.list.slice(i+1)];
        }
    }

    resetList() {
        this.list = [];
    }

    isOpen:boolean = false;
    
    onToggle(){
        this.isOpen = !this.isOpen;
    }
    /**
     * for rendering cart-item array attributes
     */

    getDescription(itemId: string): string{
        let item:MsCartItem = this.getItem(itemId);
        let ret:string = "* ";
        if (item.descriptions)
            ret += item.descriptions.join(" * ");
        return ret; 
    }
    getLongDescription(itemId: string): string{
        let item:MsCartItem = this.getItem(itemId);
        let ret:string = "";
        if (item.longDescs)
            ret = item.longDescs.join("<br>");
        return ret; 
    }
    getMainImgUrl(itemId: string): string{
        let item:MsCartItem = this.getItem(itemId);
        let ret:string = "";
        if (item.imgUrls)
            ret = item.imgUrls[0];
        return ret; 
    }

    getOtherImgUrl(itemId: string, index:number): string{
        let item:MsCartItem = this.getItem(itemId);
        let ret:string = "";
        if (item.imgUrls) 
            if(item.imgUrls.length > index)
                ret = item.imgUrls[index];
            else
                ret = item.imgUrls[0];
        return ret; 
    }

    /**
     * End of array attributes
     */
    

onModalClick(itemId:string) {

    let msg = 'Sei sicuro di voler rimuovere '+ (((<any>Object).values(this.model.pin).toString().indexOf('true')>=0)?'i prodotti?':'il prodotto?');

    let confirm = this.modal.confirm()
    .size('sm')
    .isBlocking(true)
    .keyboard(27)
    .title('Conferma Cancellazione')
    .body(msg)
    .cancelBtn('Annulla')
    .open().catch(err => {console.log("MODAL ERROR: Deleted in any case");this.confirmDelete(itemId,true);})
            .then(dialog => (<any>dialog).result)
            .then(result => this.confirmDelete(itemId,true))
            .catch(err => this.confirmDelete(itemId,false));
  }
}
