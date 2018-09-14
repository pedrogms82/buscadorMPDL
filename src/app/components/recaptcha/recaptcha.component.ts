// import {
//   AfterViewInit,
//   ChangeDetectorRef,
//   Component,
//   ElementRef, OnInit,
//   ViewChild
// } from '@angular/core';
//
// // import { ReCaptcha2Component } from '../../projects/ngx-captcha-lib/src/public_api';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReCaptcha2Component } from '../../util/ngx-captcha/index';
//
//
// declare var hljs: any;
//
// @Component({
//   selector: 'ngx-recaptcha',
//   templateUrl: './recaptcha.component.html'
// })
// export class RecaptchaComponent implements OnInit, AfterViewInit {
//
//   public readonly exampleCode = `<ngx-recaptcha2 #captchaElem
//   [size]="size"
//   [hl]="lang"
//   (expire)="handleExpire()"
//   [type]="type"
//   (load)="handleLoad()"
//   (success)="handleSuccess($event)"
//   formControlName="recaptcha">
// </ngx-recaptcha2>`;
//
//   public captchaIsLoaded = false;
//   public captchaSuccess = false;
//   public captchaIsExpired = false;
//   public captchaResponse?: string;
//
//  public size = 'normal';
//   public lang = 'es';
//
//
//   @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
//   @ViewChild('langInput') langInput: ElementRef;
//   public aFormGroup: FormGroup;
//
//   constructor(private cdr: ChangeDetectorRef, private formBuilder: FormBuilder) {}
//
//   ngOnInit() {
//     this.aFormGroup = this.formBuilder.group({
//       recaptcha: ['', Validators.required]
//     });
//   }
//
//   ngAfterViewInit(): void {
//     this.highlight();
//   }
//
//   handleSuccess(captchaResponse: string): void {
//     this.captchaSuccess = true;
//     this.captchaResponse = captchaResponse;
//     this.captchaIsExpired = false;
//     this.cdr.detectChanges();
//   }
//
//   handleLoad(): void {
//     this.captchaIsLoaded = true;
//     this.captchaIsExpired = false;
//     this.cdr.detectChanges();
//   }
//
//
//   getResponse(): void {
//     const response = this.captchaElem.getResponse();
//     if (!response) {
//       alert('Tiene que marcar el captcha');
//     } else {
//       alert(response);
//     }
//   }
//
//   private highlight(): void {
//     const highlightBlocks = document.getElementsByTagName('code');
//     for (let i = 0; i < highlightBlocks.length; i++) {
//       const block = highlightBlocks[i];
//       hljs.highlightBlock(block);
//     }
//   }
// }
