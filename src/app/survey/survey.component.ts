import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
  show = false;
  surveyData = {
    firstName: '',
    lastName: '',
    fname: '',
    age: '',
    type: '',
    land: '',
    cardno: '',
    phn: '',
  };

  surveyform = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl(''),
    fname: new FormControl(''),
    age: new FormControl(''),
    type: new FormControl('', [Validators.required]),
    land: new FormControl(''),
    cardno: new FormControl(''),
    phn: new FormControl(''),
  });

  constructor(privatefrombuilders: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.surveyform.value);
    localStorage.setItem('form-data', JSON.stringify(this.surveyform.value));
    alert('survey submition success');
  }
}
