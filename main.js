(self["webpackChunkgaurav_enterprises"] = self["webpackChunkgaurav_enterprises"] || []).push([["main"],{

/***/ 2010:
/*!******************************************************************!*\
  !*** ./apps/admin/$_lazy_route_resources/ lazy namespace object ***!
  \******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 2010;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 871:
/*!**************************************************!*\
  !*** ./apps/admin/src/app/app-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/categories/categories-form/categories-form.component */ 1765);
/* harmony import */ var _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/categories/categories-list/categories-list.component */ 8954);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 2884);
/* harmony import */ var _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/orders/orders-detail/orders-detail.component */ 477);
/* harmony import */ var _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/orders/orders-list/orders-list.component */ 7407);
/* harmony import */ var _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products/products-form/products-form.component */ 2264);
/* harmony import */ var _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products/products-list/products-list.component */ 8067);
/* harmony import */ var _pages_users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/users/user-form/user-form.component */ 7159);
/* harmony import */ var _pages_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/users/user-list/user-list.component */ 8826);
/* harmony import */ var _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shell/shell.component */ 1076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4788);














const routes = [
    { path: '', component: _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_10__.ShellComponent,
        children: [
            { path: '', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent },
            { path: 'categories', component: _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_2__.CategoriesListComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'categories/form', component: _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesFormComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'categories/form/:id', component: _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesFormComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'products', component: _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_7__.ProductsListComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'products/form', component: _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductsFormComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'products/form/:id', component: _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_6__.ProductsFormComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'users', component: _pages_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_9__.UserListComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'users/form', component: _pages_users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__.UserFormComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'users/form/:id', component: _pages_users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__.UserFormComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'orders', component: _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_5__.OrdersListComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
            { path: 'orders/:id', component: _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_4__.OrdersDetailComponent, canActivate: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
        ] },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.UsersModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.UsersModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 4520:
/*!*********************************************!*\
  !*** ./apps/admin/src/app/app.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3984);


class AppComponent {
    constructor() {
        this.title = 'admin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["admin-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 3909:
/*!******************************************!*\
  !*** ./apps/admin/src/app/app.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/platform-browser */ 1211);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7094);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 4520);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 2884);
/* harmony import */ var _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shell/shell.component */ 1076);
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ 9567);
/* harmony import */ var _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/categories/categories-list/categories-list.component */ 8954);
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/categories/categories-form/categories-form.component */ 1765);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/confirmdialog */ 3473);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/colorpicker */ 5609);
/* harmony import */ var _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/products/products-list/products-list.component */ 8067);
/* harmony import */ var _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/products/products-form/products-form.component */ 2264);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputtextarea */ 6543);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputswitch */ 5301);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/editor */ 3104);
/* harmony import */ var _pages_users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/users/user-form/user-form.component */ 7159);
/* harmony import */ var _pages_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/users/user-list/user-list.component */ 8826);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/tag */ 3771);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/inputmask */ 6352);
/* harmony import */ var _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/orders/orders-list/orders-list.component */ 7407);
/* harmony import */ var _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/orders/orders-detail/orders-detail.component */ 477);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/fieldset */ 14);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ 871);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/core */ 4788);






































const UX_MODULE = [
    primeng_card__WEBPACK_IMPORTED_MODULE_15__.CardModule,
    primeng_toolbar__WEBPACK_IMPORTED_MODULE_16__.ToolbarModule,
    primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule,
    primeng_table__WEBPACK_IMPORTED_MODULE_18__.TableModule,
    primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputTextModule,
    primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule,
    primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule,
    primeng_colorpicker__WEBPACK_IMPORTED_MODULE_22__.ColorPickerModule,
    primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule,
    primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_24__.InputTextareaModule,
    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_25__.InputSwitchModule,
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule,
    primeng_editor__WEBPACK_IMPORTED_MODULE_27__.EditorModule,
    primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule,
    primeng_inputmask__WEBPACK_IMPORTED_MODULE_29__.InputMaskModule,
    primeng_fieldset__WEBPACK_IMPORTED_MODULE_30__.FieldsetModule
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵdefineInjector"]({ providers: [
        _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_5__.CategoriesService,
        primeng_api__WEBPACK_IMPORTED_MODULE_32__.MessageService,
        primeng_api__WEBPACK_IMPORTED_MODULE_32__.ConfirmationService,
        _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_7__.UsersService, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HTTP_INTERCEPTORS, useClass: _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_7__.JwtInterceptor,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_37__.JwtModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule,
            ...UX_MODULE,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__.AppRoutingModule,
            _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_7__.UsersModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_31__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        _shared_shell_shell_component__WEBPACK_IMPORTED_MODULE_2__.ShellComponent, _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _pages_categories_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_4__.CategoriesListComponent, _pages_categories_categories_form_categories_form_component__WEBPACK_IMPORTED_MODULE_6__.CategoriesFormComponent, _pages_products_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_8__.ProductsListComponent, _pages_products_products_form_products_form_component__WEBPACK_IMPORTED_MODULE_9__.ProductsFormComponent,
        _pages_users_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_10__.UserFormComponent, _pages_users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_11__.UserListComponent, _pages_orders_orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_12__.OrdersListComponent, _pages_orders_orders_detail_orders_detail_component__WEBPACK_IMPORTED_MODULE_13__.OrdersDetailComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_34__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.FormsModule,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_37__.JwtModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_36__.ReactiveFormsModule, primeng_card__WEBPACK_IMPORTED_MODULE_15__.CardModule,
        primeng_toolbar__WEBPACK_IMPORTED_MODULE_16__.ToolbarModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_17__.ButtonModule,
        primeng_table__WEBPACK_IMPORTED_MODULE_18__.TableModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_19__.InputTextModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_20__.ToastModule,
        primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_21__.ConfirmDialogModule,
        primeng_colorpicker__WEBPACK_IMPORTED_MODULE_22__.ColorPickerModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_23__.InputNumberModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_24__.InputTextareaModule,
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_25__.InputSwitchModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_26__.DropdownModule,
        primeng_editor__WEBPACK_IMPORTED_MODULE_27__.EditorModule,
        primeng_tag__WEBPACK_IMPORTED_MODULE_28__.TagModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_29__.InputMaskModule,
        primeng_fieldset__WEBPACK_IMPORTED_MODULE_30__.FieldsetModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_14__.AppRoutingModule,
        _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_7__.UsersModule] }); })();


/***/ }),

/***/ 1765:
/*!******************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/categories/categories-form/categories-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesFormComponent": () => (/* binding */ CategoriesFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/colorpicker */ 5609);



















function CategoriesFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesFormComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Icon is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoriesFormComponent {
    constructor(formBuilder, categoriesService, messageService, location, route) {
        this.formBuilder = formBuilder;
        this.categoriesService = categoriesService;
        this.messageService = messageService;
        this.location = location;
        this.route = route;
        this.isSubmitted = false;
        this.editMode = false;
        this.currentCategoryId = null;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            icon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            color: ['#fff', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
        this._checkEditMode();
    }
    get CategoryForm() {
        return this.form.controls;
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const category = {
            _id: this.currentCategoryId,
            name: this.CategoryForm.name.value,
            icon: this.CategoryForm.icon.value,
            color: this.CategoryForm.color.value
        };
        if (this.editMode) {
            this.__updateCategory(category);
        }
        else {
            this._addCategory(category);
        }
    }
    _checkEditMode() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.editMode = true;
                this.currentCategoryId = params.id;
                this.categoriesService.getCategory(params.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe(category => {
                    console.log(category);
                    this.CategoryForm.name.setValue(category.name);
                    this.CategoryForm.icon.setValue(category.icon);
                    this.CategoryForm.color.setValue(category.color);
                });
            }
        });
    }
    navigate() {
        this.location.back();
    }
    __updateCategory(category) {
        this.categoriesService.updateCategory(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((response) => {
            console.log(response);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category is updated' });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(1000).toPromise().then(done => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category not updated' });
        });
    }
    _addCategory(category) {
        this.categoriesService.createCategory(category).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((category) => {
            console.log(category);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: `${category.name} is created` });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(2000).toPromise().then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category not created' });
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
CategoriesFormComponent.ɵfac = function CategoriesFormComponent_Factory(t) { return new (t || CategoriesFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
CategoriesFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesFormComponent, selectors: [["admin-categories-form"]], decls: 29, vars: 5, consts: [[1, "admin-page"], ["subheader", "You can add or edit category here", 3, "header"], [1, "grid", "mb-2"], [1, "col-12"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary", "icon", "pi pi-plus", 3, "label", "click"], ["styleClass", "p-button-secondary ml-2", "label", "Cancel", "icon", "pi pi-arrow-circle-left", 3, "click"], [1, "grid"], [3, "formGroup"], [1, "formgrid", "grid"], [1, "field", "col"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["class", "p-error", 4, "ngIf"], ["for", "icon"], ["formControlName", "icon", "id", "icon", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["for", "color"], ["formControlName", "color", 1, "inputfield", "w-full"], [1, "p-error"]], template: function CategoriesFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_p_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesFormComponent_Template_p_button_click_9_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoriesFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CategoriesFormComponent_small_23_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p-colorPicker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.editMode ? "Edit Category" : "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.editMode ? "Update" : "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CategoryForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.CategoryForm.icon.invalid && ctx.isSubmitted);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_10__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_14__.ColorPicker], encapsulation: 2 });


/***/ }),

/***/ 8954:
/*!******************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/categories/categories-list/categories-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesListComponent": () => (/* binding */ CategoriesListComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ 3473);
/* harmony import */ var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/colorpicker */ 5609);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4751);



















function CategoriesListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-colorPicker", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesListComponent_ng_template_12_Template_p_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const category_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteCategory(category_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CategoriesListComponent_ng_template_12_Template_p_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const category_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateCategory(category_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "pi-" + category_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", category_r2.color);
} }
const _c0 = function () { return { width: "50vw" }; };
class CategoriesListComponent {
    constructor(categoriesService, messageService, location, confirmationService, router) {
        this.categoriesService = categoriesService;
        this.messageService = messageService;
        this.location = location;
        this.confirmationService = confirmationService;
        this.router = router;
        this.categories = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getCategories();
    }
    deleteCategory(categoryId) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this category?',
            header: 'Delete category',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.categoriesService.deleteCategory(categoryId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(response => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category is deleted.' });
                    this._getCategories();
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category not deleted' });
                });
            },
            reject: (type) => {
            }
        });
    }
    updateCategory(categoryId) {
        this.router.navigateByUrl(`categories/form/${categoryId}`);
    }
    _getCategories() {
        this.categoriesService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(cats => {
            console.log(cats);
            this.categories = cats;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) { return new (t || CategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
CategoriesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesListComponent, selectors: [["admin-categories-list"]], decls: 14, vars: 5, consts: [[1, "admin-page"], ["header", "Categories", "subheader", "List of all categories"], [1, "p-grid"], [1, "p-col-12"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-success", "routerLink", "form", "label", "New", "icon", "pi pi-plus"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "name"], [1, "pi", 2, "font-size", "2rem", 3, "ngClass"], [1, "inputfield", "w-full", 3, "ngModel"], ["styleClass", "p-button-danger mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-pencil", 3, "click"]], template: function CategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CategoriesListComponent_ng_template_11_Template, 8, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CategoriesListComponent_ng_template_12_Template, 10, 3, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_9__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, primeng_table__WEBPACK_IMPORTED_MODULE_11__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_11__.SortIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, primeng_colorpicker__WEBPACK_IMPORTED_MODULE_13__.ColorPicker, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2884:
/*!*******************************************************************!*\
  !*** ./apps/admin/src/app/pages/dashboard/dashboard.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/orders */ 583);
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);











class DashboardComponent {
    constructor(orderService, productsService, userService) {
        this.orderService = orderService;
        this.productsService = productsService;
        this.userService = userService;
        this.orderCount = 0;
        this.productsCount = 0;
        this.usersCount = 0;
        this.totalSales = 0;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this._getOrderCount();
        this._getProductsCount();
        this._getUserCount();
        this._getTotalSales();
    }
    _getOrderCount() {
        this.orderService.orderCount().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((data) => {
            console.log(data);
            this.orderCount = data.orderCount;
        });
    }
    _getProductsCount() {
        this.productsService.getProductsCount().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((data) => {
            console.log(data);
            this.productsCount = data.productCount;
        });
    }
    _getUserCount() {
        this.userService.getUsersCount().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((data) => {
            this.usersCount = data.userCount;
        });
    }
    _getTotalSales() {
        this.orderService.getTotalSalesCount().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((data) => {
            this.totalSales = data.totalsales;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_2__.UsersService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["admin-dashboard"]], decls: 44, vars: 9, consts: [[1, "admin-page"], ["subheader", "Latest Updates", 3, "header"], [1, "grid"], [1, "col-3"], ["styleClass", "d-orders"], [1, "d-item"], [1, "pi", "pi-shopping-cart"], [1, "name"], [1, "number"], ["styleClass", "d-products"], [1, "pi", "pi-briefcase"], ["styleClass", "d-users"], [1, "pi", "pi-users"], ["styleClass", "d-totalsales"], [1, "pi", "pi-dollar"], [1, "name", 2, "font-size", "22px"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "p-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "TotalSales");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](43, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("header", "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.orderCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.productsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.usersCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](43, 5, ctx.totalSales, "INR", "symbol"));
    } }, directives: [primeng_card__WEBPACK_IMPORTED_MODULE_6__.Card], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 477:
/*!**********************************************************************************!*\
  !*** ./apps/admin/src/app/pages/orders/orders-detail/orders-detail.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersDetailComponent": () => (/* binding */ OrdersDetailComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/orders */ 583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/fieldset */ 14);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4751);















function OrdersDetailComponent_div_1_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const orderItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orderItem_r2.product.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orderItem_r2.product.brand, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orderItem_r2.product.category.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 6, orderItem_r2.product.price, "INR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", orderItem_r2.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 9, orderItem_r2.product.price * orderItem_r2.quantity, "INR"), " ");
} }
function OrdersDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-fieldset", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Order Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Order Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Order Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p-dropdown", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrdersDetailComponent_div_1_Template_p_dropdown_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.selectedStatus = $event; })("onChange", function OrdersDetailComponent_div_1_Template_p_dropdown_onChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onStatusChanges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Order Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p-fieldset", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, OrdersDetailComponent_div_1_div_45_Template, 15, 12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Total Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](52, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p-fieldset", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Order Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Customer Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Contact Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", "View Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 18, ctx_r0.order.dateOrdered, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r0.orderStatuses)("ngModel", ctx_r0.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 21, ctx_r0.order.totalPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.order.orderItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](52, 24, ctx_r0.order.totalPrice, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("toggleable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.order.shippingAddress1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.order.shippingAddress2, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.order.zip, " ", ctx_r0.order.city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.order.country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.order.phone);
} }
class OrdersDetailComponent {
    constructor(orderService, messageService, route) {
        this.orderService = orderService;
        this.messageService = messageService;
        this.route = route;
        this.orderStatuses = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._mapOrderStatus();
        this._getOrder();
    }
    _getOrder() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.orderService.getOrder(params.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(order => {
                    console.log(order);
                    this.order = order;
                    this.selectedStatus = order.status;
                });
            }
        });
    }
    _mapOrderStatus() {
        this.orderStatuses = Object.keys(_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUS).map((key) => {
            return {
                id: key,
                name: _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUS[key].label
            };
        });
        console.log(this.orderStatuses);
    }
    onStatusChanges(event) {
        this.orderService.updateOrder({ status: event.value }, this.order._id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((order) => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Order status is updated.'
            });
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Order status is not updated' });
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
OrdersDetailComponent.ɵfac = function OrdersDetailComponent_Factory(t) { return new (t || OrdersDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
OrdersDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersDetailComponent, selectors: [["admin-order-detail"]], decls: 2, vars: 1, consts: [["class", "admin-page", 4, "ngIf"], [1, "admin-page"], ["subheader", "You can edit order status here", 3, "header"], ["legend", "Order Details", "styleClass", "mb-4", 3, "toggleable"], [1, "grid"], [1, "col-4"], ["optionValue", "id", "optionLabel", "name", 3, "options", "ngModel", "ngModelChange", "onChange"], ["legend", "Order Items", "styleClass", "mb-4", 3, "toggleable"], [1, "grid", "mb-5"], [1, "col-2"], ["class", "grid mb-5", 4, "ngFor", "ngForOf"], [1, "grid", 2, "color", "green"], [1, "col-2", "col-offset-8"], ["legend", "Order Address", 3, "toggleable"]], template: function OrdersDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrdersDetailComponent_div_1_Template, 76, 27, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_8__.Card, primeng_fieldset__WEBPACK_IMPORTED_MODULE_9__.Fieldset, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 7407:
/*!******************************************************************************!*\
  !*** ./apps/admin/src/app/pages/orders/orders-list/orders-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersListComponent": () => (/* binding */ OrdersListComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/orders */ 583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/confirmdialog */ 3473);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tag */ 3771);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2057);

















function OrdersListComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Total Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Date Ordered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-sortIcon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p-sortIcon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrdersListComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p-tag", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListComponent_ng_template_9_Template_p_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const order_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteOrder(order_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersListComponent_ng_template_9_Template_p_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const order_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showOrder(order_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2.user == null ? null : order_r2.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r2.totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, order_r2.dateOrdered, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.orderStatus[order_r2.status].label)("severity", order_r2.status === "0" ? "Primary" : order_r2.status === "2" ? "warning" : order_r2.status === "3" ? "success" : order_r2.status === "4" ? "danger" : "info");
} }
const _c0 = function () { return { width: "50vw" }; };
class OrdersListComponent {
    constructor(orderService, confirmationService, messageService, router) {
        this.orderService = orderService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.router = router;
        this.orders = [];
        this.orderStatus = _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.ORDER_STATUS;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getOrders();
    }
    deleteOrder(orderId) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this order?',
            header: 'Delete Order',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.orderService.deleteOrder(orderId).subscribe(response => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Order is deleted.' });
                    this._getOrders();
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Order not deleted' });
                });
            },
            reject: (type) => {
            }
        });
    }
    showOrder(orderId) {
        this.router.navigateByUrl(`orders/${orderId}`);
    }
    _getOrders() {
        this.orderService.getOrders().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((orders) => {
            console.log(orders);
            this.orders = orders;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
OrdersListComponent.ɵfac = function OrdersListComponent_Factory(t) { return new (t || OrdersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
OrdersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersListComponent, selectors: [["admin-order-list"]], decls: 11, vars: 5, consts: [[1, "admin-page"], ["header", "Orders", "subheader", "List of all orders"], [1, "p-grid"], [1, "p-col-12"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "user"], ["pSortableColumn", "totalPrice"], ["field", "totalPrice"], ["pSortableColumn", "dateOrdered"], ["field", "dateOrdered"], ["pSortableColumn", "status"], ["field", "status"], [3, "value", "severity"], ["styleClass", "p-button-danger mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-eye", 3, "click"]], template: function OrdersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrdersListComponent_ng_template_8_Template, 14, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrdersListComponent_ng_template_9_Template, 13, 8, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "p-confirmDialog", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_9__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_tag__WEBPACK_IMPORTED_MODULE_10__.Tag, primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 2264:
/*!************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/products/products-form/products-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsFormComponent": () => (/* binding */ ProductsFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputswitch */ 5301);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/inputtextarea */ 6543);
/* harmony import */ var primeng_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/editor */ 3104);
























function ProductsFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Icon is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Price is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Category is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsFormComponent_small_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Image is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "height": "320px" }; };
class ProductsFormComponent {
    constructor(formBuilder, productService, categoryService, messageService, location, route) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.categoryService = categoryService;
        this.messageService = messageService;
        this.location = location;
        this.route = route;
        this.editMode = false;
        this.isSubmitted = false;
        this.categories = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._initForm();
        this._getCategories();
        this._checkEditMode();
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        let productFormData = new FormData();
        Object.keys(this.ProductForm).map((key) => {
            console.log(key);
            console.log(this.ProductForm[key].value);
            productFormData.append(key, this.ProductForm[key].value);
            console.log(productFormData.get(key));
        });
        if (this.editMode) {
            this._updateProduct(productFormData);
        }
        else {
            this._addProduct(productFormData);
        }
    }
    navigate() {
        this.location.back();
    }
    get ProductForm() {
        return this.form.controls;
    }
    onImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            this.form.patchValue({ image: file });
            this.form.get('image').updateValueAndValidity();
            const fileReader = new FileReader();
            fileReader.onload = () => {
                this.imageDisplay = fileReader.result;
            };
            fileReader.readAsDataURL(file);
        }
    }
    _updateProduct(productFormData) {
        console.log(productFormData);
        this.productService.updateProduct(productFormData, this.currentProductId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((response) => {
            console.log(response);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(1000).toPromise().then(done => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category not updated' });
        });
    }
    _checkEditMode() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.editMode = true;
                this.currentProductId = params.id;
                this.productService.getProduct(params.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((product) => {
                    console.log(product);
                    this.ProductForm.name.setValue(product.name);
                    this.ProductForm.category.setValue(product.category._id);
                    this.ProductForm.brand.setValue(product.brand);
                    this.ProductForm.price.setValue(+(product.price));
                    this.ProductForm.countInStock.setValue(+(product.countInStock));
                    this.ProductForm.isFeatured.setValue(product.isFeatured);
                    this.ProductForm.description.setValue(product.description);
                    this.ProductForm.richDescription.setValue(product.richDescription);
                    this.ProductForm.image.setValue(product.image);
                    this.ProductForm.image.setValidators([]);
                    this.ProductForm.image.updateValueAndValidity();
                    this.imageDisplay = product.image;
                });
            }
        });
    }
    _getCategories() {
        this.categoryService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(categories => {
            this.categories = categories;
        });
    }
    _addProduct(productData) {
        console.log(productData);
        this.productService.createProduct(productData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((product) => {
            console.log(product);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: `${product.name} is created` });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(2000).toPromise().then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Product not created' });
        });
    }
    _initForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            countInStock: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            description: [''],
            richDescription: [''],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            isFeatured: [false],
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
ProductsFormComponent.ɵfac = function ProductsFormComponent_Factory(t) { return new (t || ProductsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
ProductsFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsFormComponent, selectors: [["admin-products-form"]], decls: 74, vars: 19, consts: [[1, "admin-page"], ["subheader", "You can add or edit product here", 3, "header"], [1, "grid", "mb-2"], [1, "col-12"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary", "icon", "pi pi-plus", 3, "label", "click"], ["styleClass", "p-button-secondary ml-2", "label", "Cancel", "icon", "pi pi-arrow-circle-left", 3, "click"], [1, "grid"], [3, "formGroup"], [1, "formgrid", "grid"], [1, "field", "col"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["class", "p-error", 4, "ngIf"], ["for", "brand"], ["formControlName", "brand", "id", "brand", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["for", "color"], ["formControlName", "price", "mode", "decimal", "inputId", "withoutgrouping", 3, "useGrouping"], ["for", "countInStock"], ["formControlName", "countInStock", "mode", "decimal", "inputId", "withoutgrouping", 3, "useGrouping"], ["for", "category"], ["filterBy", "name", "placeholder", "Select a Category", "formControlName", "category", "optionLabel", "name", "optionValue", "_id", 3, "filter", "showClear", "options"], ["for", "isFeatured"], ["formControlName", "isFeatured"], ["for", "description"], ["formControlName", "description", "pInputTextarea", ""], [1, "field", "col-12"], ["for", "richDescription"], ["formControlName", "richDescription"], ["for", "mainImage"], ["type", "file", "accept", "image/*", 1, "p-inputtext", 3, "change"], [1, "col-2", "mt-2", "pl-0"], ["alt", "", 2, "width", "100%", 3, "src"], [1, "p-error"]], template: function ProductsFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsFormComponent_Template_p_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsFormComponent_Template_p_button_click_9_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProductsFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProductsFormComponent_small_23_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "p-inputNumber", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProductsFormComponent_small_30_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Count In Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "p-inputNumber", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ProductsFormComponent_small_38_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "p-dropdown", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, ProductsFormComponent_small_45_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Is Featured");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "p-inputSwitch", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ProductsFormComponent_small_58_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "p-editor", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Main Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ProductsFormComponent_Template_input_change_70_listener($event) { return ctx.onImageUpload($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, ProductsFormComponent_small_73_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.editMode ? "Edit Product" : "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.editMode ? "Update" : "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.brand.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("useGrouping", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.price.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("useGrouping", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.countInStock.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("filter", true)("showClear", true)("options", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.category.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.description.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imageDisplay, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ProductForm.image.invalid && ctx.isSubmitted);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_10__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_14__.InputNumber, primeng_dropdown__WEBPACK_IMPORTED_MODULE_15__.Dropdown, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_16__.InputSwitch, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_17__.InputTextarea, primeng_editor__WEBPACK_IMPORTED_MODULE_18__.Editor], encapsulation: 2 });


/***/ }),

/***/ 8067:
/*!************************************************************************************!*\
  !*** ./apps/admin/src/app/pages/products/products-list/products-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 3473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2057);
















function ProductsListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Stock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Created at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProductsListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsListComponent_ng_template_12_Template_p_button_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const product_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.deleteProduct(product_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsListComponent_ng_template_12_Template_p_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const product_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateProduct(product_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.countInStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r2.category.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 6, product_r2.dateCreated, "short"));
} }
const _c0 = function () { return { width: "50vw" }; };
class ProductsListComponent {
    constructor(productService, messageService, confirmationService, router) {
        this.productService = productService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.products = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getProducts();
    }
    deleteProduct(productId) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this product?',
            header: 'Delete product',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.productService.deleteProduct(productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(response => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is deleted.' });
                    this._getProducts();
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Product not deleted' });
                });
            },
            reject: (type) => {
            }
        });
    }
    updateProduct(productId) {
        this.router.navigateByUrl(`products/form/${productId}`);
    }
    _getProducts() {
        this.productService.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(products => {
            console.log(products);
            this.products = products;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["gaurav-enterprises-products-list"]], decls: 14, vars: 7, consts: [[1, "admin-page"], ["header", "Products", "subheader", "List of all products"], [1, "p-grid"], [1, "p-col-12"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-success", "routerLink", "form", "label", "New", "icon", "pi pi-plus"], ["styleClass", "p-datatable-gridlines", 3, "paginator", "rows", "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "price"], ["pSortableColumn", "stock"], ["pSortableColumn", "category"], ["pSortableColumn", "created"], ["alt", "", 2, "width", "100%", 3, "src"], ["styleClass", "p-button-danger mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-pencil", 3, "click"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProductsListComponent_ng_template_11_Template, 19, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProductsListComponent_ng_template_12_Template, 17, 9, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("paginator", true)("rows", 10)("value", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 7159:
/*!*************************************************************************!*\
  !*** ./apps/admin/src/app/pages/users/user-form/user-form.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFormComponent": () => (/* binding */ UserFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputmask */ 6352);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputswitch */ 5301);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ 103);






















function UserFormComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserFormComponent_small_23_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, UserFormComponent_small_23_span_2_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.UserForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.UserForm.email.errors.email);
} }
function UserFormComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Is admin is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Aopartment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Street is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Zip is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserFormComponent_small_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserFormComponent {
    constructor(formBuilder, usersService, messageService, location, userService, route) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.messageService = messageService;
        this.location = location;
        this.userService = userService;
        this.route = route;
        this.isSubmitted = false;
        this.editMode = false;
        this.currentUserId = null;
        this.countries = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._initUserForm();
        this._getCountries();
        this._checkEditMode();
    }
    _initUserForm() {
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            isAdmin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            apartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
        });
    }
    get UserForm() {
        return this.form.controls;
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        const user = {
            _id: this.currentUserId,
            name: this.UserForm.name.value,
            email: this.UserForm.email.value,
            password: this.UserForm.password.value,
            phone: this.UserForm.phone.value,
            isAdmin: this.UserForm.isAdmin.value,
            street: this.UserForm.street.value,
            apartment: this.UserForm.apartment.value,
            zip: this.UserForm.zip.value,
            city: this.UserForm.city.value,
            country: this.UserForm.country.value,
        };
        if (this.editMode) {
            this.__updateUser(user);
        }
        else {
            this._addUser(user);
        }
    }
    _checkEditMode() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.editMode = true;
                this.currentUserId = params.id;
                this.usersService.getUser(params.id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe(user => {
                    // console.log(user)
                    this.UserForm.name.setValue(user.name);
                    this.UserForm.password.setValue(user.password);
                    this.UserForm.email.setValue(user.email);
                    this.UserForm.phone.setValue(user.phone);
                    this.UserForm.token.setValue(user.token);
                    this.UserForm.isAdmin.setValue(user.isAdmin);
                    this.UserForm.street.setValue(user.street);
                    this.UserForm.apartment.setValue(user.apartment);
                    this.UserForm.zip.setValue(user.zip);
                    this.UserForm.city.setValue(user.city);
                    this.UserForm.country.setValue(user.country);
                    this.UserForm.password.setValidators([]);
                    this.UserForm.password.updateValueAndValidity();
                });
            }
        });
    }
    navigate() {
        this.location.back();
    }
    __updateUser(user) {
        this.usersService.updateUser(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((response) => {
            console.log(response);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is updated' });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(1000).toPromise().then(done => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not updated' });
        });
    }
    _addUser(user) {
        this.usersService.createUser(user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((user) => {
            console.log(user);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: `${user.name} is created` });
            (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timer)(2000).toPromise().then(() => {
                this.location.back();
            });
        }, () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not created' });
        });
    }
    _getCountries() {
        this.countries = this.userService.getCountries();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
UserFormComponent.ɵfac = function UserFormComponent_Factory(t) { return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_6__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute)); };
UserFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserFormComponent, selectors: [["gaurav-enterprises-user-form"]], decls: 72, vars: 16, consts: [[1, "admin-page"], ["subheader", "You can add or edit User here", 3, "header"], [1, "grid", "mb-2"], [1, "col-12"], [1, "p-toolbar-group-left"], [1, "p-toolbar-group-right"], ["styleClass", "p-button-primary", "icon", "pi pi-plus", 3, "label", "click"], ["styleClass", "p-button-secondary ml-2", "label", "Cancel", "icon", "pi pi-arrow-circle-left", 3, "click"], [1, "grid"], [3, "formGroup"], [1, "formgrid", "grid"], [1, "field", "col"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["class", "p-error", 4, "ngIf"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "email", "pInputText", "", 1, "inputfield", "w-full"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "password", "pInputText", "", 1, "inputfield", "w-full"], ["for", "phone"], ["mask", "(+99) 999-999-9999", "formControlName", "phone", "placeholder", "(+91) 999-9999"], ["for", "isAdmin"], ["formControlName", "isAdmin"], ["for", "apartment"], ["formControlName", "apartment", "id", "icon", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["for", "zip"], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", "", 1, "inputfield", "w-full"], ["for", "country"], ["optionValue", "id", "formControlName", "country", "styleClass", "width:40rem", "placeholder", "Select a City", "filterBy", "name", "optionLabel", "name", 3, "options", "filter", "showClear"], [1, "p-error"], [4, "ngIf"]], template: function UserFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormComponent_Template_p_button_click_8_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserFormComponent_Template_p_button_click_9_listener() { return ctx.navigate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UserFormComponent_small_18_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UserFormComponent_small_23_Template, 3, 2, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UserFormComponent_small_29_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "p-inputMask", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UserFormComponent_small_36_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Is Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p-inputSwitch", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, UserFormComponent_small_42_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, UserFormComponent_small_47_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, UserFormComponent_small_53_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Zip");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, UserFormComponent_small_59_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, UserFormComponent_small_65_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "p-dropdown", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, UserFormComponent_small_71_Template, 2, 0, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", ctx.editMode ? "Edit User" : "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx.editMode ? "Update" : "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.password.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.phone.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.isAdmin.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.apartment.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.street.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.zip.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.city.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.countries)("filter", true)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserForm.country.invalid && ctx.isSubmitted);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_9__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_10__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__.InputMask, primeng_inputswitch__WEBPACK_IMPORTED_MODULE_15__.InputSwitch, primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__.Dropdown], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8826:
/*!*************************************************************************!*\
  !*** ./apps/admin/src/app/pages/users/user-list/user-list.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": () => (/* binding */ UserListComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 3013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toast */ 7965);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/card */ 7745);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toolbar */ 7921);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/table */ 3490);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 3473);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/tag */ 3771);

















function UserListComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-sortIcon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Is Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserListComponent_ng_template_12_p_tag_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-tag", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
} }
function UserListComponent_ng_template_12_p_tag_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-tag", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true);
} }
function UserListComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, UserListComponent_ng_template_12_p_tag_6_Template, 1, 1, "p-tag", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, UserListComponent_ng_template_12_p_tag_7_Template, 1, 1, "p-tag", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_ng_template_12_Template_p_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteUser(user_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserListComponent_ng_template_12_Template_p_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const user_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.updateUser(user_r2._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r2.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !user_r2.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getCountryName(user_r2.country));
} }
const _c0 = function () { return { width: "50vw" }; };
class UserListComponent {
    constructor(messageService, userService, confirmationService, router) {
        this.messageService = messageService;
        this.userService = userService;
        this.confirmationService = confirmationService;
        this.router = router;
        this.users = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getUsers();
    }
    deleteUser(userId) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this user?',
            header: 'Delete user',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.userService.deleteUser(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(response => {
                    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is deleted.' });
                    this._getUsers();
                }, error => {
                    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not deleted' });
                });
            },
            reject: (type) => {
            }
        });
    }
    updateUser(userId) {
        this.router.navigateByUrl(`users/form/${userId}`);
    }
    _getUsers() {
        this.userService.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(users => {
            console.log(users);
            this.users = users;
        });
    }
    getCountryName(countryKey) {
        if (countryKey) {
            return this.userService.getCountry(countryKey);
        }
        else {
            return null;
        }
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_4__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["gaurav-enterprises-user-list"]], decls: 14, vars: 5, consts: [[1, "admin-page"], ["header", "Users", "subheader", "List of all users"], [1, "p-grid"], [1, "p-col-12"], [1, "p-toolbar-group-left"], ["styleClass", "p-button-success", "routerLink", "form", "label", "New", "icon", "pi pi-plus"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["rejectButtonStyleClass", "p-button-text", 3, "baseZIndex"], ["pSortableColumn", "name"], ["field", "name"], ["icon", "pi pi-check", "severity", "success", 3, "rounded", 4, "ngIf"], ["icon", "pi pi-times", "severity", "danger", 3, "rounded", 4, "ngIf"], ["styleClass", "p-button-danger mr-2", "icon", "pi pi-trash", 3, "click"], ["styleClass", "p-button-success", "icon", "pi pi-pencil", 3, "click"], ["icon", "pi pi-check", "severity", "success", 3, "rounded"], ["icon", "pi pi-times", "severity", "danger", 3, "rounded"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "p-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p-table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, UserListComponent_ng_template_11_Template, 11, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserListComponent_ng_template_12_Template, 13, 5, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p-confirmDialog", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("baseZIndex", 10000);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_6__.Toast, primeng_card__WEBPACK_IMPORTED_MODULE_7__.Card, primeng_toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_9__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, primeng_table__WEBPACK_IMPORTED_MODULE_10__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_10__.SortIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_tag__WEBPACK_IMPORTED_MODULE_13__.Tag], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1076:
/*!************************************************************!*\
  !*** ./apps/admin/src/app/shared/shell/shell.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShellComponent": () => (/* binding */ ShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 9567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);



class ShellComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShellComponent.ɵfac = function ShellComponent_Factory(t) { return new (t || ShellComponent)(); };
ShellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShellComponent, selectors: [["admin-shell"]], decls: 4, vars: 0, consts: [[1, "admin-wrapper"], [1, "admin-main"]], template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "admin-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9567:
/*!****************************************************************!*\
  !*** ./apps/admin/src/app/shared/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);




class SidebarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logoutUser() {
        this.authService.logout();
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["admin-sidebar"]], decls: 29, vars: 0, consts: [[1, "admin-sidebar"], [1, "logo"], ["width", "50px", "src", "../../../assets/images/glogo.jpg"], [1, "links"], ["routerLink", "/"], [1, "pi", "pi-home"], ["routerLink", "/products"], [1, "pi", "pi-briefcase"], ["routerLink", "/categories"], [1, "pi", "pi-list"], ["routerLink", "/orders"], [1, "pi", "pi-shopping-cart"], ["routerLink", "/users"], [1, "pi", "pi-users"], [3, "click"], [1, "pi", "pi-sign-out"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_a_click_26_listener() { return ctx.logoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 5244:
/*!********************************!*\
  !*** ./apps/admin/src/main.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1211);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3909);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 3629);




if (environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 3629:
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: "https://gaurav-shop-backend.herokuapp.com/api/v1/"
};


/***/ }),

/***/ 583:
/*!**********************************!*\
  !*** ./libs/orders/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* reexport safe */ _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.OrdersModule),
/* harmony export */   "Order": () => (/* reexport safe */ _lib_models_order__WEBPACK_IMPORTED_MODULE_1__.Order),
/* harmony export */   "Cart": () => (/* reexport safe */ _lib_models_cart_model__WEBPACK_IMPORTED_MODULE_2__.Cart),
/* harmony export */   "CartItem": () => (/* reexport safe */ _lib_models_cart_model__WEBPACK_IMPORTED_MODULE_2__.CartItem),
/* harmony export */   "CartItemDetails": () => (/* reexport safe */ _lib_models_cart_model__WEBPACK_IMPORTED_MODULE_2__.CartItemDetails),
/* harmony export */   "OrderItem": () => (/* reexport safe */ _lib_models_order_item_model__WEBPACK_IMPORTED_MODULE_3__.OrderItem),
/* harmony export */   "OrderService": () => (/* reexport safe */ _lib_services_order_service__WEBPACK_IMPORTED_MODULE_4__.OrderService),
/* harmony export */   "CART_KEY": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CART_KEY),
/* harmony export */   "CartService": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService),
/* harmony export */   "ORDER_STATUS": () => (/* reexport safe */ _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__.ORDER_STATUS)
/* harmony export */ });
/* harmony import */ var _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/orders.module */ 6108);
/* harmony import */ var _lib_models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/order */ 4009);
/* harmony import */ var _lib_models_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/cart.model */ 6786);
/* harmony import */ var _lib_models_order_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/order-item.model */ 8860);
/* harmony import */ var _lib_services_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/order.service */ 3244);
/* harmony import */ var _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services/cart.service */ 4296);
/* harmony import */ var _lib_order_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/order.constants */ 3814);









/***/ }),

/***/ 1278:
/*!*************************************************************************!*\
  !*** ./libs/orders/src/lib/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartIconComponent": () => (/* binding */ CartIconComponent)
/* harmony export */ });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/badge */ 3422);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);





class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(cart => {
            var _a;
            this.cartCount = (_a = cart === null || cart === void 0 ? void 0 : cart.items.length) !== null && _a !== void 0 ? _a : 0;
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "routerLink", "/cart", "severity", "danger", 1, "pi", "pi-shopping-cart", "p-mr-4", "p-text-secondary", 2, "font-size", "1.5rem", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.cartCount.toString());
    } }, directives: [primeng_badge__WEBPACK_IMPORTED_MODULE_2__.BadgeDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 9954:
/*!*********************************************************************************!*\
  !*** ./libs/orders/src/lib/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSummaryComponent": () => (/* binding */ OrderSummaryComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/orders */ 583);
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5257);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 4207);











function OrderSummaryComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function OrderSummaryComponent_div_30_Template_p_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.navigateToCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class OrderSummaryComponent {
    constructor(cartService, productService, router) {
        this.cartService = cartService;
        this.productService = productService;
        this.router = router;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isCheckout = false;
        this.router.url.includes('checkout') ? this.isCheckout = true : this.isCheckout = false;
    }
    ngOnInit() {
        this._getOrderSummary();
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
    _getOrderSummary() {
        this.cartService.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe((cart) => {
            this.totalPrice = 0;
            if (cart) {
                cart.items.map((item) => {
                    this.productService
                        .getProduct(item.productId)
                        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1))
                        .subscribe((product) => {
                        this.totalPrice += product.price * item.quantity;
                    });
                });
            }
        });
    }
    navigateToCheckout() {
        this.router.navigate(['/checkout']);
    }
}
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], decls: 31, vars: 11, consts: [[1, "order-summary"], [1, "summary-price"], [1, "grid", 2, "width", "100%"], [1, "col-6"], [1, "free"], [1, "to-checkout"], [4, "ngIf"], ["styleClass", "checkout-button", "label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Item Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Packing & Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, OrderSummaryComponent_div_30_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](11, 3, ctx.totalPrice, "INR", "symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](29, 7, ctx.totalPrice, "INR", "symbol"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCheckout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 6786:
/*!**************************************************!*\
  !*** ./libs/orders/src/lib/models/cart.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart),
/* harmony export */   "CartItem": () => (/* binding */ CartItem),
/* harmony export */   "CartItemDetails": () => (/* binding */ CartItemDetails)
/* harmony export */ });
class Cart {
}
class CartItem {
}
class CartItemDetails {
}


/***/ }),

/***/ 8860:
/*!********************************************************!*\
  !*** ./libs/orders/src/lib/models/order-item.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
}


/***/ }),

/***/ 4009:
/*!*********************************************!*\
  !*** ./libs/orders/src/lib/models/order.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
}


/***/ }),

/***/ 3814:
/*!************************************************!*\
  !*** ./libs/orders/src/lib/order.constants.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ORDER_STATUS": () => (/* binding */ ORDER_STATUS)
/* harmony export */ });
const ORDER_STATUS = {
    0: {
        label: 'Pending',
        color: 'primary'
    },
    1: {
        label: 'Processed',
        color: 'warning'
    },
    2: {
        label: 'Shipped',
        color: 'warning'
    },
    3: {
        label: 'Delivered',
        color: 'success'
    },
    4: {
        label: 'Failed',
        color: 'danger'
    }
};


/***/ }),

/***/ 6108:
/*!**********************************************!*\
  !*** ./libs/orders/src/lib/orders.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cart.service */ 4296);
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ 1278);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/badge */ 3422);
/* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart-page/cart-page.component */ 7275);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ 9954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ 9714);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 103);
/* harmony import */ var primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputmask */ 6352);
/* harmony import */ var _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/thank-you/thank-you.component */ 213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4788);

























const routes = [
    { path: 'cart', component: _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent },
    { path: 'checkout', component: _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent },
    { path: 'success', component: _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent }
];
class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule,
            primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__.InputMaskModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent,
        _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent,
        _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent,
        _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent,
        _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, primeng_badge__WEBPACK_IMPORTED_MODULE_8__.BadgeModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.DropdownModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputTextModule,
        primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__.InputMaskModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule], exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent, _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_11__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_inputmask__WEBPACK_IMPORTED_MODULE_14__.InputMask, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent], []);


/***/ }),

/***/ 7275:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/cart-page/cart-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);









function CartPageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CartPageComponent_div_9_Template_p_button_onClick_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.deleteCartItem(cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p-inputNumber", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onInput", function CartPageComponent_div_9_Template_p_inputNumber_onInput_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.updateCartItemQuantity($event, cartItem_r1); })("ngModelChange", function CartPageComponent_div_9_Template_p_inputNumber_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; return cartItem_r1.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Subtotal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", cartItem_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("alt", cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](9, 10, 250, "INR", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showButtons", true)("inputId", cartItem_r1.product._id)("ngModel", cartItem_r1.quantity)("min", 1)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](19, 14, (cartItem_r1 == null ? null : cartItem_r1.product == null ? null : cartItem_r1.product.price) * cartItem_r1.quantity, "INR", "symbol"));
} }
class CartPageComponent {
    constructor(router, cartService, productsService) {
        this.router = router;
        this.cartService = cartService;
        this.productsService = productsService;
        this.cartItemsDetails = [];
        this.cartCount = 0;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this._getCartDetails();
    }
    updateCartItemQuantity(event, cartItem) {
        console.log(event);
        this.cartService.setCartItem({
            productId: cartItem.product._id,
            quantity: event.value
        }, true);
    }
    _getCartDetails() {
        this.cartService.cart$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe(respCart => {
            var _a;
            this.cartCount = (_a = respCart === null || respCart === void 0 ? void 0 : respCart.items.length) !== null && _a !== void 0 ? _a : 0;
            this.cartItemsDetails = [];
            respCart.items.forEach((cartItem) => {
                this.productsService.getProduct(cartItem.productId).subscribe((respProduct) => {
                    console.log(respProduct);
                    this.cartItemsDetails.push({
                        product: respProduct,
                        quantity: cartItem === null || cartItem === void 0 ? void 0 : cartItem.quantity
                    });
                });
            });
        });
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    deleteCartItem(cartItem) {
        console.log(cartItem);
        this.cartService.deleteCartItem(cartItem.product._id);
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_1__.ProductsService)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 12, vars: 2, consts: [[1, "cart-page"], [1, "grid"], [1, "col-8"], ["label", "Continue Shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping", "mb-5"], ["class", "cart-item p-fluid mb-5", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "cart-item", "p-fluid", "mb-5"], [1, "col-2"], [1, "cart-item-image", 3, "src"], [1, "col-7"], [1, "cart-item-name"], [1, "cart-item-price"], [1, "cart-item-remove"], ["icon", "pi pi-trash", 3, "onClick"], [1, "col-3"], [1, "p-field", "cart-item-quantity"], ["mode", "decimal", 3, "showButtons", "inputId", "ngModel", "min", "max", "onInput", "ngModelChange"], [1, "cart-item-subtotal"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Shipping after the payment, Delivery time : 1 to 4 working days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, CartPageComponent_div_9_Template, 20, 18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" My Cart: ", ctx.cartCount, " Item(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cartItemsDetails);
    } }, encapsulation: 2 });


/***/ }),

/***/ 9714:
/*!****************************************************************************!*\
  !*** ./libs/orders/src/lib/pages/checkout-page/checkout-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageComponent": () => (/* binding */ CheckoutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/users */ 2852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ 4296);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ 3244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 3013);














function CheckoutPageComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_16_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, CheckoutPageComponent_small_16_span_1_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CheckoutPageComponent_small_16_span_2_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm == null ? null : ctx_r1.checkoutForm.email == null ? null : ctx_r1.checkoutForm.email.errors == null ? null : ctx_r1.checkoutForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.checkoutForm == null ? null : ctx_r1.checkoutForm.email == null ? null : ctx_r1.checkoutForm.email.errors == null ? null : ctx_r1.checkoutForm.email.errors.email);
} }
function CheckoutPageComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Street is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Apartment is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Zip is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "City is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Country is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CheckoutPageComponent {
    constructor(route, usersService, formBuilder, cartService, orderService, messageService) {
        this.route = route;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.cartService = cartService;
        this.orderService = orderService;
        this.messageService = messageService;
        this.countries = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.isSubmitted = false;
        this.orderItems = [];
        this.userId = '6123f96d9288004378a2f90d';
    }
    ngOnInit() {
        this._initUserForm();
        this._getCartItems();
        this._getCountries();
    }
    _initUserForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            apartment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    _getCartItems() {
        const cart = this.cartService.getCart();
        this.orderItems = cart.items.map((item) => {
            return {
                product: item.productId,
                quantity: item.quantity
            };
        });
        console.log(this.orderItems);
    }
    _getCountries() {
        this.countries = this.usersService.getCountries();
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: `${Date.now()}`
        };
        this.orderService.createOrder(order).subscribe(() => {
            //redirect to thank you page
            //to payment page
            this.cartService.emptyCart();
            this.route.navigate(['/success']);
        }, error => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Unable to place the order' });
        });
    }
    backToCart() {
        this.route.navigate(['/cart']);
    }
}
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gaurav_enterprises_users__WEBPACK_IMPORTED_MODULE_0__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__.OrderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_7__.MessageService)); };
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], decls: 55, vars: 12, consts: [[1, "checkout-page"], ["label", "Back to cart", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "grid", "checkout-form"], [1, "col-8"], [3, "formGroup"], [1, "p-fluid", "formgrid", "grid"], [1, "p-field", "col-4"], ["for", "name"], ["formControlName", "name", "id", "name", "type", "text", "pInputText", ""], ["class", "p-error", 4, "ngIf"], [1, "field", "col-4"], ["for", "email"], ["formControlName", "email", "id", "email", "type", "text", "pInputText", ""], ["for", "color"], ["mask", "(999) 999-9999", "formControlName", "phone", "placeholder", "(999) 999-9999"], ["for", "street"], ["formControlName", "street", "id", "street", "type", "text", "pInputText", ""], ["formControlName", "apartment", "id", "apartment", "type", "text", "pInputText", ""], ["formControlName", "zip", "id", "zip", "type", "text", "pInputText", ""], ["for", "city"], ["formControlName", "city", "id", "city", "type", "text", "pInputText", ""], [1, "field", "col"], ["for", "country"], ["formControlName", "country", "optionLabel", "name", "optionValue", "id", "styleClass", "width:40rem", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "filter", "showClear"], [1, "col-4"], [1, "checkout-button"], ["label", "Place-Order", 3, "onClick"], [1, "p-error"], [4, "ngIf"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CheckoutPageComponent_Template_p_button_onClick_2_listener() { return ctx.backToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CheckoutPageComponent_small_11_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CheckoutPageComponent_small_16_Template, 3, 2, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "p-inputMask", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, CheckoutPageComponent_small_22_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Street");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CheckoutPageComponent_small_28_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Apartment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, CheckoutPageComponent_small_33_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CheckoutPageComponent_small_38_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, CheckoutPageComponent_small_44_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "p-dropdown", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, CheckoutPageComponent_small_50_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "p-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CheckoutPageComponent_Template_p_button_onClick_54_listener() { return ctx.placeOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.name == null ? null : ctx.checkoutForm.name.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.email == null ? null : ctx.checkoutForm.email.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.phone == null ? null : ctx.checkoutForm.phone.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.street == null ? null : ctx.checkoutForm.street.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.apartment == null ? null : ctx.checkoutForm.apartment.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.zip == null ? null : ctx.checkoutForm.zip.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.city == null ? null : ctx.checkoutForm.city.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.countries)("filter", true)("showClear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.checkoutForm == null ? null : ctx.checkoutForm.country == null ? null : ctx.checkoutForm.country.invalid) && ctx.isSubmitted);
    } }, encapsulation: 2 });


/***/ }),

/***/ 213:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/thank-you/thank-you.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);



class ThankYouComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(); };
ThankYouComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["orders-thank-you"]], decls: 7, vars: 0, consts: [[1, "checkout-page"], [1, "thankyou-page"], ["label", "Back to shop", "routerLink", "/"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thank you for shopping with us!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We have received your order and it will be delivered in 2-3 days.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 4296:
/*!******************************************************!*\
  !*** ./libs/orders/src/lib/services/cart.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CART_KEY": () => (/* binding */ CART_KEY),
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);


const CART_KEY = "Cart";
class CartService {
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getCart());
    }
    initCartLocalStorage() {
        const cart = this.getCart();
        if (!cart) {
            const initialCart = {
                items: []
            };
            localStorage.setItem(CART_KEY, JSON.stringify(initialCart));
        }
    }
    getCart() {
        let cartJSON = localStorage.getItem('Cart');
        const cart = JSON.parse(cartJSON);
        return cart;
    }
    emptyCart() {
        const initialCart = {
            items: []
        };
        localStorage.setItem(CART_KEY, JSON.stringify(initialCart));
        this.cart$.next(initialCart);
    }
    setCartItem(cartItem, updateCartItem) {
        var _a;
        const cart = this.getCart();
        const cartItemExist = (_a = cart.items) === null || _a === void 0 ? void 0 : _a.find((item) => item.productId === cartItem.productId);
        if (cartItemExist) {
            cart.items.map((item) => {
                if (item.productId === cartItemExist.productId) {
                    if (updateCartItem) {
                        item.quantity = cartItem.quantity;
                    }
                    else {
                        item.quantity = item.quantity + cartItem.quantity;
                    }
                    return item;
                }
            });
        }
        else {
            cart.items.push(cartItem);
        }
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        this.cart$.next(cart);
        return cart;
    }
    deleteCartItem(productId) {
        const cart = this.getCart();
        const newCart = cart.items.filter((item) => item.productId !== productId);
        cart.items = newCart;
        const cartJson = JSON.stringify(cart);
        console.log(cartJson);
        localStorage.setItem(CART_KEY, cartJson);
        this.cart$.next(cart);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3244:
/*!*******************************************************!*\
  !*** ./libs/orders/src/lib/services/order.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8497);




class OrderService {
    constructor(http) {
        this.http = http;
    }
    getOrder(orderId) {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}orders/${orderId}`);
    }
    getOrders() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}orders`);
    }
    createOrder(order) {
        return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'orders', order);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}orders/${orderId}`);
    }
    updateOrder(status, orderId) {
        return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}orders/${orderId}`, status);
    }
    orderCount() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}orders/get/count`);
    }
    getTotalSalesCount() {
        return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}orders/get/totalsales`);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3142:
/*!************************************!*\
  !*** ./libs/products/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* reexport safe */ _lib_products_module__WEBPACK_IMPORTED_MODULE_0__.ProductsModule),
/* harmony export */   "CategoriesService": () => (/* reexport safe */ _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService),
/* harmony export */   "ProductsService": () => (/* reexport safe */ _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService),
/* harmony export */   "Category": () => (/* reexport safe */ _lib_models_category_model__WEBPACK_IMPORTED_MODULE_3__.Category),
/* harmony export */   "Product": () => (/* reexport safe */ _lib_models_products_model__WEBPACK_IMPORTED_MODULE_4__.Product)
/* harmony export */ });
/* harmony import */ var _lib_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/products.module */ 7125);
/* harmony import */ var _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/categories.service */ 370);
/* harmony import */ var _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/products.service */ 3884);
/* harmony import */ var _lib_models_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/category.model */ 7345);
/* harmony import */ var _lib_models_products_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/products.model */ 7903);







/***/ }),

/***/ 5934:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/categories-banner/categories-banner.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesBannerComponent": () => (/* binding */ CategoriesBannerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/categories.service */ 370);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3984);







const _c0 = function (a0) { return { backgroundColor: a0 }; };
function CategoriesBannerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "category/" + category_r1._id)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, category_r1.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("pi pi-", category_r1.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
} }
class CategoriesBannerComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this.categories = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.categoryService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((categories) => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
CategoriesBannerComponent.ɵfac = function CategoriesBannerComponent_Factory(t) { return new (t || CategoriesBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService)); };
CategoriesBannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesBannerComponent, selectors: [["products-categories-banner"]], decls: 5, vars: 1, consts: [[1, "categories-banner"], [1, "grid"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-2"], [1, "category", 3, "routerLink", "ngStyle"], [1, "category-icon"], [1, "category-name"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CategoriesBannerComponent_div_4_Template, 6, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 6633:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/featured-products/featured-products.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedProductsComponent": () => (/* binding */ FeaturedProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 3884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);





function FeaturedProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "products-product-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r1);
} }
class FeaturedProductsComponent {
    constructor(productService) {
        this.productService = productService;
        this.featuredProducts = [];
        this.endSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    _getFeaturedProducts() {
        this.productService.getFeaturedProducts(4).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSub$)).subscribe(products => {
            this.featuredProducts = products;
        });
    }
    ngOnDestroy() {
        this.endSub$.next();
        this.endSub$.complete();
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeaturedProductsComponent, selectors: [["products-featured-products"]], decls: 5, vars: 1, consts: [[1, "featured-products"], [1, "grid"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FeaturedProductsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
    } }, encapsulation: 2 });


/***/ }),

/***/ 4493:
/*!*********************************************************************************!*\
  !*** ./libs/products/src/lib/components/product-item/product-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItemComponent": () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var _models_products_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/products.model */ 7903);
/* harmony import */ var _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gaurav-enterprises/orders */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4207);







function ProductItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ProductItemComponent_div_0_Template_p_button_onClick_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.addProductToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/products/" + ctx_r0.product._id)("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](7, 4, ctx_r0.product.price, "INR", "symbol"));
} }
class ProductItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
    }
    addProductToCart() {
        const cartItem = {
            productId: this.product._id,
            quantity: 1
        };
        this.cartService.setCartItem(cartItem);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_1__.CartService)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["products-product-item"]], inputs: { product: "product" }, decls: 1, vars: 1, consts: [["class", "product-item", 4, "ngIf"], [1, "product-item"], [1, "product-item-wrapper"], ["alt", "", 1, "image", 3, "routerLink", "src"], [1, "name"], [1, "price"], ["styleClass", "mt-3 add-to-cart", "label", "Add to cart", "icon", "pi pi-shopping-cart", 3, "onClick"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductItemComponent_div_0_Template, 9, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 4549:
/*!***************************************************************************************!*\
  !*** ./libs/products/src/lib/components/products-search/products-search.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSearchComponent": () => (/* binding */ ProductsSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);

class ProductsSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsSearchComponent.ɵfac = function ProductsSearchComponent_Factory(t) { return new (t || ProductsSearchComponent)(); };
ProductsSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsSearchComponent, selectors: [["products-search"]], decls: 3, vars: 0, consts: [[1, "products-search"], [1, "pi", "pi-search"], ["type", "text", "placeholder", "Find products", "name", "search", "id", "search", 1, "products-search-input"]], template: function ProductsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 7345:
/*!********************************************************!*\
  !*** ./libs/products/src/lib/models/category.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
class Category {
    constructor(_id) {
        this._id = _id;
    }
}


/***/ }),

/***/ 7903:
/*!********************************************************!*\
  !*** ./libs/products/src/lib/models/products.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
}


/***/ }),

/***/ 9320:
/*!****************************************************************************!*\
  !*** ./libs/products/src/lib/pages/product-page/product-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/orders */ 583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 3884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _ui_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../ui/src/lib/components/gallery/gallery.component */ 6457);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/rating */ 8015);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 4207);















function ProductPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ui-gallery", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_div_0_Template_p_rating_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.product.rating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p-inputNumber", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_div_0_Template_p_inputNumber_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductPageComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.addProductToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("images", ctx_r0.product.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.product.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.product.rating)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](13, 12, ctx_r0.product.price, "INR", "symbol"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](16, 16, +(ctx_r0.product == null ? null : ctx_r0.product.price) + 18, "INR", "symbol"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.quantity)("showButtons", true)("min", 1)("max", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx_r0.product.richDescription, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class ProductPageComponent {
    constructor(productService, cartService, route) {
        this.productService = productService;
        this.cartService = cartService;
        this.route = route;
        this.quantity = 1;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.productId) {
                this._getProduct(params.productId);
            }
        });
    }
    addProductToCart() {
        const cartItem = {
            productId: this.product._id,
            quantity: this.quantity
        };
        this.cartService.setCartItem(cartItem);
    }
    _getProduct(id) {
        this.productService.getProduct(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.endSubs$)).subscribe(resProduct => {
            console.log(resProduct);
            this.product = resProduct;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next();
        this.endSubs$.complete();
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_gaurav_enterprises_orders__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["products-product-page"]], decls: 1, vars: 1, consts: [["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], [1, "col-6"], [3, "images"], [1, "col-6", "product"], [1, "product-name"], [1, "product-desc"], [1, "product-rating"], [3, "ngModel", "disabled", "ngModelChange"], [1, "product-price"], [1, "price-before"], [1, "product-quantity"], [1, "p-field", "p-col-12", "p-md-3", "p-0"], ["for", "minmax-buttons"], ["mode", "decimal", "inputId", "minmax-buttons", 3, "ngModel", "showButtons", "min", "max", "ngModelChange"], [1, "product-action", "mt-3"], ["pButton", "", "pRipple", "", "type", "button", "label", "Buy Now", 1, "p-button-rounded", "mr-2"], ["pButton", "", "pRipple", "", "type", "button", "label", "Add to Cart", 1, "p-button-rounded", 3, "click"], [1, "grid", "product-rich-description"], [1, "col-12"], [3, "innerHTML"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 31, 20, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ui_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__.GalleryComponent, primeng_rating__WEBPACK_IMPORTED_MODULE_8__.Rating, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 7354:
/*!******************************************************************************!*\
  !*** ./libs/products/src/lib/pages/products-list/products-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var _gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gaurav-enterprises/products */ 3142);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ 3884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3984);







function ProductsListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_onChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r4.categoryFilter(); })("ngModelChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const category_r3 = restoredCtx.$implicit; return category_r3.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("binary", ctx_r2.trueVal)("value", category_r3)("ngModel", category_r3.checked)("inputId", category_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", category_r3._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r3.name);
} }
function ProductsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductsListComponent_div_2_div_3_Template, 4, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
const _c0 = function (a0, a1) { return { "col-4": a0, "col-3": a1 }; };
function ProductsListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "products-product-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, !ctx_r7.isCategoryPage, ctx_r7.isCategoryPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", p_r8);
} }
function ProductsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductsListComponent_div_4_div_1_Template, 2, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.products);
} }
const _c1 = function (a0, a1) { return { "col-9": a0, "col-12": a1 }; };
class ProductsListComponent {
    constructor(productService, categoryService, route) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.route = route;
        this.products = [];
        this.categories = [];
        this.trueVal = true;
        this.isCategoryPage = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            params.categoryId ? this._getProducts([params.categoryId]) : this._getProducts();
            params.categoryId ? this.isCategoryPage = true : this.isCategoryPage = false;
        });
        this._getCategories();
    }
    categoryFilter() {
        const selectedCategories = this.categories.filter(c => c.checked).map(category => category._id);
        this._getProducts(selectedCategories);
    }
    _getProducts(categoriesFilter) {
        this.productService.getProducts(categoriesFilter).subscribe(resProducts => {
            this.products = resProducts;
        });
    }
    _getCategories() {
        this.categoryService.getCategories().subscribe(resCats => {
            this.categories = resCats;
        });
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_gaurav_enterprises_products__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["products-list"]], decls: 5, vars: 6, consts: [[1, "products-page"], [1, "grid"], ["class", "col-3", 4, "ngIf"], [3, "ngClass"], ["class", "grid", 4, "ngIf"], [1, "col-3"], ["class", "p-field-checkbox mt-3", 4, "ngFor", "ngForOf"], [1, "p-field-checkbox", "mt-3"], ["name", "group2", 3, "binary", "value", "ngModel", "inputId", "onChange", "ngModelChange"], [3, "for"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductsListComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductsListComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCategoryPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c1, !ctx.isCategoryPage, ctx.isCategoryPage));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products);
    } }, encapsulation: 2 });


/***/ }),

/***/ 7125:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/products.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/products-search/products-search.component */ 4549);
/* harmony import */ var _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/categories-banner/categories-banner.component */ 5934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-item/product-item.component */ 4493);
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/featured-products/featured-products.component */ 6633);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/checkbox */ 2332);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products-list/products-list.component */ 7354);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/product-page/product-page.component */ 9320);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/rating */ 8015);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputnumber */ 705);
/* harmony import */ var _gaurav_enterprises_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @gaurav-enterprises/ui */ 9142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4788);



















const routes = [
    { path: 'products', component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductsListComponent },
    { path: 'category/:categoryId', component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductsListComponent },
    { path: 'products/:productId', component: _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__.ProductPageComponent }
];
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.CheckboxModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule,
            _gaurav_enterprises_ui__WEBPACK_IMPORTED_MODULE_6__.UiModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_0__.ProductsSearchComponent,
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesBannerComponent,
        _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__.ProductItemComponent,
        _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedProductsComponent,
        _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductsListComponent,
        _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__.ProductPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.CheckboxModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        primeng_rating__WEBPACK_IMPORTED_MODULE_11__.RatingModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_12__.InputNumberModule,
        _gaurav_enterprises_ui__WEBPACK_IMPORTED_MODULE_6__.UiModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule], exports: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_0__.ProductsSearchComponent,
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesBannerComponent,
        _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__.ProductItemComponent,
        _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedProductsComponent,
        _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductsListComponent,
        _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
        _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_5__.ProductPageComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetComponentScope"](_components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_3__.FeaturedProductsComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__.ProductItemComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetComponentScope"](_pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__.ProductsListComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, primeng_checkbox__WEBPACK_IMPORTED_MODULE_9__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_2__.ProductItemComponent], []);


/***/ }),

/***/ 370:
/*!**************************************************************!*\
  !*** ./libs/products/src/lib/services/categories.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8497);




class CategoriesService {
    constructor(http) {
        this.http = http;
    }
    getCategory(categoryId) {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}categories/${categoryId}`);
    }
    getCategories() {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}categories`);
    }
    createCategory(category) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'categories', category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}categories/${categoryId}`);
    }
    updateCategory(category) {
        return this.http.put(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}categories/${category._id}`, category);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3884:
/*!************************************************************!*\
  !*** ./libs/products/src/lib/services/products.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);




class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getProduct(productId) {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}products/${productId}`);
    }
    getProducts(categoriesFilter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
        }
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}products`, { params: params });
    }
    createProduct(product) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'products', product);
    }
    deleteProduct(productId) {
        return this.http.delete(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}products/${productId}`);
    }
    updateProduct(product, id) {
        console.log(id);
        return this.http.put(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}products/${id}`, product);
    }
    getProductsCount() {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}products/get/count`);
    }
    getFeaturedProducts(count) {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}products/get/featured/${count}`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9142:
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* reexport safe */ _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__.UiModule)
/* harmony export */ });
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui.module */ 6546);



/***/ }),

/***/ 9281:
/*!***************************************************************!*\
  !*** ./libs/ui/src/lib/components/banner/banner.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 4207);


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["ui-banner"]], decls: 10, vars: 0, consts: [[1, "banner"], [1, "grid"], [1, "col-5", "col-offset-1", "banner-text"], ["label", "See more", "styleClass", "mt-3 banner-button", "icon", "pi pi-chevron-right", "iconPos", "right"], [1, "col-6", "banner-image", "animate__animated", "animate_slideInLeft"], ["src", "assets/images/banner-image.svg", "alt", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Best Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "in Every Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button], encapsulation: 2 });


/***/ }),

/***/ 6457:
/*!*****************************************************************!*\
  !*** ./libs/ui/src/lib/components/gallery/gallery.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 2057);


const _c0 = function (a0) { return { "background-image": a0 }; };
function GalleryComponent_div_0_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_0_li_5_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const imageUrl_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.changeSelectedImage(imageUrl_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageUrl_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, "url(" + imageUrl_r2 + ")"));
} }
function GalleryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleryComponent_div_0_li_5_Template, 1, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.selectedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
} }
class GalleryComponent {
    constructor() {
        this.selectedImageUrl = '';
    }
    ngOnInit() {
        this.selectedImageUrl = this.images[0];
    }
    changeSelectedImage(imageUrl) {
        this.selectedImageUrl = imageUrl;
    }
    get hasImages() {
        var _a;
        return ((_a = this.images) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["ui-gallery"]], inputs: { images: "images" }, decls: 1, vars: 1, consts: [["class", "gallery", 4, "ngIf"], [1, "gallery"], [1, "main-image"], ["alt", "", 3, "src"], [1, "images"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [3, "ngStyle", "click"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleryComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasImages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], encapsulation: 2 });


/***/ }),

/***/ 6546:
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banner/banner.component */ 9281);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 6457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);





class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent,
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule], exports: [_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent,
        _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent] }); })();


/***/ }),

/***/ 2852:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_0__.UsersModule),
/* harmony export */   "usersRoutes": () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_0__.usersRoutes),
/* harmony export */   "UsersService": () => (/* reexport safe */ _lib_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService),
/* harmony export */   "User": () => (/* reexport safe */ _lib_models_user_model__WEBPACK_IMPORTED_MODULE_2__.User),
/* harmony export */   "AuthService": () => (/* reexport safe */ _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__.AuthGuard),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__.JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/users.module */ 9965);
/* harmony import */ var _lib_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/users.service */ 4885);
/* harmony import */ var _lib_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/user.model */ 6893);
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/auth.service */ 4414);
/* harmony import */ var _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/auth-guard.service */ 9721);
/* harmony import */ var _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services/jwt.interceptor */ 5665);








/***/ }),

/***/ 6893:
/*!*************************************************!*\
  !*** ./libs/users/src/lib/models/user.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 1648:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4414);
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/local-storage.service */ 1992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4207);












function LoginComponent_small_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_small_17_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_small_17_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm == null ? null : ctx_r0.loginForm.email == null ? null : ctx_r0.loginForm.email.errors == null ? null : ctx_r0.loginForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm == null ? null : ctx_r0.loginForm.email == null ? null : ctx_r0.loginForm.email.errors == null ? null : ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_small_23_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loginForm == null ? null : ctx_r1.loginForm.password == null ? null : ctx_r1.loginForm.password.errors == null ? null : ctx_r1.loginForm.password.errors.required);
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.authMessage);
} }
class LoginComponent {
    constructor(formBuilder, auth, localStorageService, router) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.localStorageService = localStorageService;
        this.router = router;
        this.isSubmitted = false;
        this.authError = false;
        this.authMessage = 'Email or password are wrong!';
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid)
            return;
        const loginData = {
            email: this.loginForm.email.value,
            password: this.loginForm.password.value
        };
        this.auth.login(loginData.email, loginData.password).subscribe((user) => {
            console.log(user);
            this.authError = false;
            this.localStorageService.setToken(user.token || '');
            this.router.navigate(['/']);
        }, (error) => {
            this.authError = true;
            console.log(error);
            if (error.status !== 400) {
                this.authMessage = 'Error in the Server, please try again later.';
            }
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 4, consts: [[1, "login-register"], [1, "login-register-panel", "mt-3"], [1, "grid", "mt-5"], [1, "col-6"], ["src", "../../../assets/images/market.png", "alt", ""], [1, "col-6", "p-5"], [3, "formGroup"], [1, "grid", "mt-4"], [1, "col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["formControlName", "email", "type", "text", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["formControlName", "password", "type", "password", "pInputText", "", "placeholder", "Password"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Welcome!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 3, 2, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 1, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function LoginComponent_Template_p_button_onClick_25_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.loginForm == null ? null : ctx.loginForm.email == null ? null : ctx.loginForm.email.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.loginForm == null ? null : ctx.loginForm.password == null ? null : ctx.loginForm.password.invalid) && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button], encapsulation: 2 });


/***/ }),

/***/ 9721:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/services/auth-guard.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 1992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3984);





class AuthGuard {
    constructor(router, localStorageToken) {
        this.router = router;
        this.localStorageToken = localStorageToken;
    }
    canActivate(route, state) {
        const token = this.localStorageToken.getToken();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            console.log(tokenDecode);
            if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp)) {
                return true;
            }
        }
        this.router.navigate(['login']);
        return false;
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4414:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/services/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ 1992);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3984);








class AuthService {
    constructor(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.apiURLAuth = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'users';
    }
    login(email, password) {
        return this.http.post(`${this.apiURLAuth}/login`, { email: email, password: password });
    }
    logout() {
        this.token.removeToken();
        this.router.navigate(['/login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5665:
/*!********************************************************!*\
  !*** ./libs/users/src/lib/services/jwt.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 1992);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);





class JwtInterceptor {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    intercept(request, next) {
        const token = this.localStorageService.getToken();
        const isApiUrl = request.url.startsWith(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL);
        if (token && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.LocalStorageService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 1992:
/*!**************************************************************!*\
  !*** ./libs/users/src/lib/services/local-storage.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorageService": () => (/* binding */ LocalStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4788);

class LocalStorageService {
    constructor() { }
    setToken(data) {
        localStorage.setItem('jwtToken', data);
    }
    getToken() {
        return localStorage.getItem('jwtToken') || '';
    }
    removeToken() {
        return localStorage.removeItem('jwtToken');
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4885:
/*!******************************************************!*\
  !*** ./libs/users/src/lib/services/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-iso-countries */ 6733);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4788);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8497);





class UsersService {
    constructor(http) {
        this.http = http;
        i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.registerLocale(__webpack_require__(/*! i18n-iso-countries/langs/en.json */ 1662));
    }
    getUser(userId) {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}users/${userId}`);
    }
    getUsers() {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}users`);
    }
    createUser(user) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'users', user);
    }
    deleteUser(userId) {
        return this.http.delete(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}users/${userId}`);
    }
    updateUser(user) {
        return this.http.put(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}users/${user._id}`, user);
    }
    getCountry(countryKey) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.getName(countryKey, 'en');
    }
    getCountries() {
        return Object.entries(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_1__.getNames("en", { select: "official" })).map(entry => {
            return {
                id: entry[0],
                name: entry[1]
            };
        });
    }
    getUsersCount() {
        return this.http.get(`${_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL}users/get/count`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9965:
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersRoutes": () => (/* binding */ usersRoutes),
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 2057);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3984);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 1648);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 3928);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 4207);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4751);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4788);










const usersRoutes = [];
const routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    }
];
class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        { provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JWT_OPTIONS, useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JWT_OPTIONS },
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5244)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map