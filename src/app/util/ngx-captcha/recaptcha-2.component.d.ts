// import { EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges, NgZone, Injector } from '@angular/core';
// import { BaseReCaptchaComponent } from './base-recaptcha.component';
// import { ReCaptchaType } from './recaptcha-type.enum';
// import { NgxCaptchaConfig } from './recaptcha.config';
// export declare class ReCaptcha2Component extends BaseReCaptchaComponent implements OnChanges, OnDestroy {
//     protected renderer: Renderer2;
//     protected zone: NgZone;
//     protected injector: Injector;
//     protected globalConfig: NgxCaptchaConfig;
//     /**
//     * Name of the global expire callback
//     */
//     protected readonly windowOnErrorCallbackProperty: string;
//     /**
//     * Name of the global error callback
//     */
//     protected readonly windowOnExpireCallbackProperty: string;
//     /**
//      * Theme
//      */
//     theme: 'dark' | 'light';
//     /**
//     * Size
//     */
//     size: 'compact' | 'normal';
//     /**
//      * Language code. Auto-detects the user's language if unspecified.
//      */
//     hl: string;
//     /**
//     * Expired callback
//     */
//     expire: EventEmitter<void>;
//     /**
//     * Error callback
//     */
//     error: EventEmitter<void>;
//     protected recaptchaType: ReCaptchaType;
//     constructor(renderer: Renderer2, zone: NgZone, injector: Injector, globalConfig: NgxCaptchaConfig);
//     ngOnChanges(changes: SimpleChanges): void;
//     ngOnDestroy(): void;
//     protected captchaSpecificSetup(): void;
//     /**
//      * Gets reCaptcha properties
//     */
//     protected getCaptchaProperties(): any;
//     /**
//      * Registers global callbacks
//     */
//     private registerCallbacks();
//     /**
//      * Handles error callback
//     */
//     private handleErrorCallback();
//     /**
//      * Handles expired callback
//      */
//     private handleExpireCallback();
// }
