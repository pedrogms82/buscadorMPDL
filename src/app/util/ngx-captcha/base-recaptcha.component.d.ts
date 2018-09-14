// import { AfterViewInit, ElementRef, EventEmitter, Injector, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
// import { ReCaptchaType } from './recaptcha-type.enum';
// import { NgxCaptchaConfig } from './recaptcha.config';
// import { ControlValueAccessor } from '@angular/forms';
// export declare abstract class BaseReCaptchaComponent implements OnChanges, OnDestroy, ControlValueAccessor, AfterViewInit {
//     protected renderer: Renderer2;
//     protected zone: NgZone;
//     protected injector: Injector;
//     protected globalConfig: NgxCaptchaConfig;
//     /**
//      * Form Control to be enable usage in reactive forms
//      */
//     private control;
//     private setupAfterLoad;
//     /**
//     * Name of the global callback
//     */
//     protected readonly windowOnLoadCallbackProperty: string;
//     /**
//      * Name of the global reCaptcha property
//      */
//     protected readonly globalReCaptchaProperty: string;
//     /**
//      * Prefix of the captcha element
//      */
//     protected readonly captchaElemPrefix: string;
//     /**
//       * Google's site key.
//       * You can find this under https://www.google.com/recaptcha
//       */
//     protected _siteKey?: string;
//     /**
//     * Config to use
//     */
//     siteKey: string | (() => string);
//     /**
//      * Type
//      */
//     type: 'audio' | 'image';
//     /**
//      * Language code. Auto-detects the user's language if unspecified.
//      */
//     hl: string;
//     /**
//     * Tab index
//     */
//     tabIndex: number;
//     /**
//      * Called when captcha receives successful response.
//      * Captcha response token is passed to event.
//      */
//     success: EventEmitter<string>;
//     /**
//     * Called when captcha is loaded. Event receives id of the captcha
//     */
//     load: EventEmitter<number>;
//     /**
//     * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
//     */
//     ready: EventEmitter<void>;
//     captchaWrapperElem: ElementRef;
//     captchaScriptElem: ElementRef;
//     /**
//      * Captcha element
//      */
//     protected captchaElem?: HTMLElement;
//     /**
//      * Id of the captcha elem
//      */
//     protected captchaId?: number;
//     /**
//      * Holds last response value
//      */
//     protected currentResponse?: string;
//     /**
//      * If enabled, captcha will reset after receiving success response. This is useful
//      * when invisible captcha need to be resolved multiple times on same page
//      */
//     protected resetCaptchaAfterSuccess: boolean;
//     /**
//      * Indicates if captcha is loaded
//      */
//     isLoaded: boolean;
//     /**
//     * Reference to global reCaptcha API
//     */
//     reCaptchaApi?: any;
//     /**
//      * Id of the DOM element wrapping captcha
//      */
//     captchaElemId?: string;
//     /**
//      * Captcha type
//      */
//     protected abstract recaptchaType: ReCaptchaType;
//     /**
//     * Required by ControlValueAccessor
//     */
//     protected onChange: (value: string) => void;
//     protected onTouched: (value: string) => void;
//     protected constructor(renderer: Renderer2, zone: NgZone, injector: Injector, globalConfig?: NgxCaptchaConfig);
//     ngAfterViewInit(): void;
//     /**
//     * Gets reCaptcha properties
//     */
//     protected abstract getCaptchaProperties(): any;
//     /**
//      * Used for captcha specific setup
//     */
//     protected abstract captchaSpecificSetup(): void;
//     private getGlobalSiteKey();
//     ngOnChanges(changes: SimpleChanges): void;
//     ngOnDestroy(): void;
//     /**
//      * Gets captcha response as per reCaptcha docs
//     */
//     getResponse(): string;
//     /**
//      * Gets Id of captcha widget
//     */
//     getCaptchaId(): number;
//     /**
//     * Resets captcha
//     */
//     resetCaptcha(): void;
//     /**
//      * Gets last submitted captcha response
//     */
//     getCurrentResponse(): string | undefined;
//     /**
//      * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
//     */
//     reloadCaptcha(): void;
//     protected ensureCaptchaElem(captchaElemId: string): void;
//     /**
//      * Responsible for instantiating captcha element
//     */
//     protected renderReCaptcha(): void;
//     /**
//      * Called when captcha receives response
//      * @param callback Callback
//      */
//     protected handleCallback(callback: any): void;
//     /**
//      * Registers reCaptcha script if its not available
//     */
//     protected ensureReCaptchaScript(): void;
//     /**
//      * Add script to page with reference to captcha API. This has to be done manually
//      * as we want to avoid adding script to main index.html
//     */
//     protected registerReCaptchaScript(): void;
//     protected getLanguageParam(): string;
//     private getPseudoUniqueNumber();
//     /**
//      * Checks if reCaptcha Api is defined. It may happen that when navigating from angular component to another
//      * via router, the Api was already loaded previously. In such cases, do not render script again.
//     */
//     private isReCaptchaApiDefined();
//     private setupComponent();
//     /**
//     * Called when google's recaptcha script is ready
//     */
//     private onloadCallback();
//     private generateNewElemId();
//     private createAndSetCaptchaElem();
//     /**
//      * To be aligned with the ControlValueAccessor interface we need to implement this method
//      * However as we don't want to update the recaptcha, this doesn't need to be implemented
//      */
//     writeValue(obj: any): void;
//     /**
//      * This method helps us tie together recaptcha and our formControl values
//      */
//     registerOnChange(fn: any): void;
//     /**
//     * At some point we might be interested whether the user has touched our component
//     */
//     registerOnTouched(fn: any): void;
// }
