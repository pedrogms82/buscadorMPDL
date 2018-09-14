// import { OnChanges, Renderer2, SimpleChanges, NgZone, Injector } from '@angular/core';
// import { BaseReCaptchaComponent } from './base-recaptcha.component';
// import { ReCaptchaType } from './recaptcha-type.enum';
// import { NgxCaptchaConfig } from './recaptcha.config';
// export declare class InvisibleReCaptchaComponent extends BaseReCaptchaComponent implements OnChanges {
//     protected renderer: Renderer2;
//     protected zone: NgZone;
//     protected injector: Injector;
//     protected globalConfig: NgxCaptchaConfig;
//     /**
//      * This size representing invisible captcha
//      */
//     protected readonly size: string;
//     /**
//      * Badge
//      */
//     badge: 'bottomright' | 'bottomleft' | 'inline';
//     /**
//      * Language code. Auto-detects the user's language if unspecified.
//      */
//     hl: string;
//     protected recaptchaType: ReCaptchaType;
//     constructor(renderer: Renderer2, zone: NgZone, injector: Injector, globalConfig: NgxCaptchaConfig);
//     ngOnChanges(changes: SimpleChanges): void;
//     /**
//      * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
//      */
//     execute(): void;
//     protected captchaSpecificSetup(): void;
//     /**
//     * Gets reCaptcha properties
//     */
//     protected getCaptchaProperties(): any;
// }
