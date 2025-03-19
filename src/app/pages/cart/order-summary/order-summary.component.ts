import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
  <div class="bg-slate-100 p-6 rounded-xl shadow-xl">
    <h2 class="text-2xl">Order Summary</h2>
    <div class="flex flex-col gap-4">
      <div class="flex flex-center gap-4 mt-2">
        <span class="text-lg">Total</span>
        <span class="text-lg">{{' $'+ total() }}</span>
      </div>
      <app-primary-button label="Proceed to checkout" />
    </div>
  </div>
`,
  styles: ``
})
export class OrderSummaryComponent {
  cartservice = inject(CartService)

  total = computed(()=>{
    let total = 0;
    for(const item of this.cartservice.cart()){
      total += item.price
    }

    return total;
  })
}
