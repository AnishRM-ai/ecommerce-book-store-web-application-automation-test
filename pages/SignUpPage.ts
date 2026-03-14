import { expect, Locator, Page } from "@playwright/test";
import { goTo } from "../utils/navigation";

export class SignUpPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPassword: Locator;
    readonly signupBtn: Locator;


    constructor(page:Page){
        this.page = page;
        
        this.usernameInput = page.getByLabel('User Name');
        this.emailInput = page.getByLabel('Email');
        this.passwordInput = page.locator('#password');
        this.confirmPassword = page.locator('#password2');
        this.signupBtn = page.locator('#submit');
    };

    async goto(){
        await goTo(this.page, 'bookstore/user/signup');
    };

    async fillSignup(username: string, email:string, password:string, password2:string){
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.confirmPassword.fill(password2);
        await this.signupBtn.click();
    };

}