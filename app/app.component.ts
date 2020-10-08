import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Provider Search';
  searchText;
  heroes = [
    { name: 'Mr. Nice', country: 'India', distance:'0.6' },
    { name: 'Narco' , country: 'USA',distance:'2.8'},
    { name: 'Bombasto' , country: 'UK',distance:'7'},
    { name: 'Celeritas' , country: 'Canada',distance:'7.5' },
    { name: 'Magneta' , country: 'Russia',distance:'8'},
    { name: 'RubberMan' , country: 'China',distance:'2.5'},
    { name: 'Dynama' , country: 'Germany',distance:'1.5'},
    { name: 'Dr IQ' , country: 'Hong Kong',distance:'3.5'},
    { name: 'Magma' , country: 'South Africa',distance:'5.5'},
    { name: 'Tornado' , country: 'Sri Lanka',distance:'6.5'}
  ];
}
