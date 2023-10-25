
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// import{TranslateHttpLoader} from '@ngx-translate/http-loader';
// import{TranslateLoader,TranslateModule} from '@ngx-translate/core';


// export function HttpLoaderFactory(http: HttpClient){
//   let fullLocationPath = location.host + location.pathname;

//    return new TranslateHttpLoader(http);
// }


// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
    
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory:HttpLoaderFactory,
//         deps :[ HttpClient ],
//       },
//     }),
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }