import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environment/environment';
import { HttpClient } from '@angular/common/http';
import { TranslationService } from './translationservices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// inputText: any;
//  constructor(private translate : TranslateService){
    
//     this.translate.setDefaultLang("fr");

//  }

//  switchLanguage(language: string){
//   this.translate.use(language);
//  }

 targetLanguage:string='';
 inputText:string='';
 transalatedText='';
 title = 'translate';

 constructor(private translateService:TranslationService){}

//  constructor(private translateservice: TranslateService){

//  }
 translate(){
   let model={
     "q": [this.inputText],
     "target": this.targetLanguage
   };

      this.translateService.translations(model).subscribe((response:any)=>{
     this.transalatedText=response.data.translations[0].translatedText
   })
 }

}

