import {test, expect} from '@playwright/test';
import { SigninPage } from '../pages/SigninPage';


test.describe('Sign in feature testing.', () => {
    test('signin using correct credentials.', async({page}) => {
        const signin = new SigninPage(page);
        await signin.goto();
        await signin.fillDetails("practice019@gmail.com", "Password123!");
        await expect(page).toHaveURL('/bookstore/user/profile');
    });
    test('signup using wrong credential', async({page}) => {
        const signin = new SigninPage(page);
        await signin.goto();
        await signin.fillDetails("practice019@gmail.com", "asdasd");
        await expect(signin.errorMsg).toBeVisible();
    });
});