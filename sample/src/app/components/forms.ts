import { MaterializeDirective } from "@samuelberthe/angular2-materialize";
import { Component, OnInit } from "@angular/core"

@Component({
  selector: "forms",
  template: `
<form action="#" class="col s12">
<div class="row">
<div class="input-field col s6">
<input [(ngModel)]="firstName" name="firstName" placeholder="Placeholder" id="first_name" type="text" class="validate" [disabled]="isDisabled?true:null">
<label for="first_name">First Name</label>
</div>
<div class="input-field col s6">
<input id="last_name" type="text" class="validate" [disabled]="isDisabled?true:null">
<label for="last_name">Last Name</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<i class="material-icons prefix">textsms</i>
<input type="text" id="autoComplete" name="autoComplete" materialize="Autocomplete" [materializeParams]="[autocompleteInit]" [disabled]="isDisabled?true:null">
<label for="autoComplete">Autocomplete (Apple/Google)</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<input disabled value="I am not editable" id="disabled" type="text" class="validate">
<label for="disabled">Disabled</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<input id="password" type="password" placeholder="" class="validate" [disabled]="isDisabled?true:null">
<label for="password">Password</label>
</div>
</div>
<div class="row">
<div class="input-field col s12">
<input id="email" type="email" class="validate" [disabled]="isDisabled?true:null">
<label for="email">Email</label>
</div>
</div>
<div class="row">
<div class="input-field col s6">
<i class="material-icons prefix">account_circle</i>
<input id="icon_prefix" type="text" class="validate" [disabled]="isDisabled?true:null">
<label for="icon_prefix">First Name</label>
</div>
<div class="input-field col s6">
<i class="material-icons prefix">phone</i>
<input id="icon_telephone" type="tel" class="validate" [disabled]="isDisabled?true:null">
<label for="icon_telephone">Telephone</label>
</div>
</div>
<div class="row file-field input-field">
<div class="btn">
<span>File</span>
<input type="file" (change)="onFileSelection($event)">
</div>
<div class="file-path-wrapper">
<input class="file-path validate" type="text">
</div>
</div>
<div class="row">
<input materialize="Datepicker" [materializeParams]="[{format: 'dd/mm/yyyy'}]" type="text" class="datepicker" [disabled]="isDisabled?true:null">
</div>
<div class="row">
<div class="input-field col s12">
<textarea id="textarea1" class="materialize-textarea" materialize="CharacterCounter" [attr.length]="maxLength" [disabled]="isDisabled?true:null"></textarea>
<label for="textarea1">Textarea</label>
</div>
</div>
<div class="row">
<div class="input-field col s6">
<select name="singleSelect" [(ngModel)]="selectedOption" name="selectedOption" materialize="FormSelect" [materializeSelectOptions]="selectOptions" [disabled]="isDisabled?true:null">
<option value="" disabled selected>Choose your option</option>
<option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
</select>
<label>Materialize Select</label>
</div>
<div class="input-field col s6">
<select name="multiSelect" [(ngModel)]="selectedOptions" multiple materialize="FormSelect" [materializeSelectOptions]="selectOptions" [disabled]="isDisabled?true:null">
<option value="" disabled selected>Choose your option</option>
<option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
</select>
<label>Materialize Multi Select</label>
</div>
</div>
<div class="row">
<div class="col s6 switch">
<div class="switch">
<label>
Off
<input type="checkbox" [disabled]="isDisabled?true:null">
<span class="lever"></span>
On
</label>
</div>
<br/>
<p>
<label for="test5">
<input type="checkbox" id="test5" [checked]="isTest5Checked" [disabled]="isDisabled?true:null"/>
<span>Red</span></label>
</p>
<p>
<label for="test6">
<input type="checkbox" id="test6" name="test6" [(ngModel)]="isTest6Checked" [disabled]="isDisabled?true:null"/>
<span>Yellow</span></label>
</p>
<p>
<label for="filled-in-box">
<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" [disabled]="isDisabled?true:null"/>
<span>Filled in</span></label>
</p>
<p>
<label for="indeterminate-checkbox">
<input type="checkbox" id="indeterminate-checkbox" [disabled]="isDisabled?true:null"/>
<span>Indeterminate Style</span></label>
</p>
</div>
<div class="col s6">Value: {{isTest6Checked}}</div>
</div>
<div class="row">
<div class="col s6">
<p>
<label for="test1">
<input name="group1" type="radio" id="test1" [(ngModel)]="radioButtonValue" [value]="1" [disabled]="isDisabled?true:null"/>
<span>Red</span></label>
</p>
<p>
<label for="test2">
<input name="group1" type="radio" id="test2" [(ngModel)]="radioButtonValue" [value]="2" [disabled]="isDisabled?true:null"/>
<span>Yellow</span></label>
</p>
<p>
<label for="test3">
<input class="with-gap" name="group1" type="radio" id="test3" [(ngModel)]="radioButtonValue" [value]="3" [disabled]="isDisabled?true:null"/>
<span>Green</span></label>
</p>
<p>
<label for="test4">
<input name="group1" type="radio" id="test4" disabled="disabled"/>
<span>Brown</span></label>
</p>
</div>
<div class="col s6">Value: {{radioButtonValue}}</div>
</div>
</form>
<br/><hr/><br/>
<a class="waves-effect waves-light btn" (click)="isDisabled=!isDisabled">{{isDisabled?"Enable":"Disable"}} Form</a>
<br/><br/><hr/><br/>
<div class="row">
<div class="col s6">First Name: {{firstName}}</div>
</div>
<div class="row">
<div class="col s6">Selected Option: {{selectedOption}}</div>
</div>
<div class="row">
<div class="col s6">Selected Options: {{selectedOptions}}</div>
</div>
`
})
export class Forms implements OnInit {
  firstName = "";
  selectedOption = "";
  selectedOptions = "";

  selectOptions = [];

  isTest5Checked = false;
  isTest6Checked = true;

  radioButtonValue = 3;

  maxLength = 20;
  autocompleteInit = {
    'data': { 'Apple': null, 'Google': null },
    onAutocomplete: (val) => {
      console.log(val);
    },
  };

  isDisabled = false;

  public ngOnInit() {
    window.setTimeout(() => {
      this.selectOptions = [
        { value: 1, name: "Option 1" },
        { value: 2, name: "Option 2" },
        { value: 3, name: "Option 3" }
      ]
    }, 100);

    // window.setInterval(()=>{
    //   console.log(this.radioButtonValue);
    // },500);
  }

  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }

}
