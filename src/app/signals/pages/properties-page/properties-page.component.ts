import { Component, OnDestroy, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-req.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy {
  public user = signal<User>({
    id: "1",
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  })

  public counter = signal(10)

  public userChangedEffect = effect(()=>{
    console.log(this.user().first_name);
    console.log(this.counter())

  })

  onFieldUpdated(field: keyof User, value: string) {
    this.user.mutate(current=> {
      current[field] = value
    })
  }

  ngOnDestroy(): void {
    
    this.userChangedEffect.destroy();
  }


}
