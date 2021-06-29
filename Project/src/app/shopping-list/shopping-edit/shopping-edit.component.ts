import { Component, ElementRef,  OnInit, ViewChild  } from '@angular/core';
import { SLService } from 'src/app/services/sl.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;


  constructor(private slService: SLService) { }

  ngOnInit(): void {
  }

  onAddItem() {
   const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value , this.amountInputRef.nativeElement.value);
   this.slService.addIngredient(newIngredient);
  }
}
