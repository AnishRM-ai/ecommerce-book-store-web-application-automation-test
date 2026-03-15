import {Page, Locator, expect} from '@playwright/test';
import { goTo } from '../utils/navigation';

export class SigninPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly submitbtn: Locator;
    readonly errorMsg: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.getByLabel('Password');
        this.submitbtn = page.getByRole('button', {name:'Sign in'});
        this.errorMsg = page.getByText('Incorrect Password');
    };

    async goto(){
        await goTo(this.page, '/bookstore/user/signin');
    };

    async fillDetails(email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitbtn.click();
    };

}