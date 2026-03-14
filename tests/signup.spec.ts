import {test, expect} from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';
import { user } from '../test-data/users';

test.describe('Signup Feature autmation test', () => {
    test('Sign in using valid credentials.', async({page}) => {
        const signup = new SignUpPage(page);
        await signup.goto();
        await signup.fillSignup(user.username, user.email, user.password, user.password);
        await expect(page).toHaveURL('/bookstore/user/signin');

    })
});