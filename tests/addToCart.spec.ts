import { test, expect } from "@playwright/test";
import { InventoryPage } from "../pages/InventoryPage";
import { user } from "../test-data/users";

test.describe('Book store page functionality testing.',()=> {
    test('User can add book to cart.', async({page}) => {
        const bookstore = new InventoryPage(page);
        await bookstore.goto();
        await bookstore.searchBook('Agile');
        await bookstore.openBook('Agile Testing');
        await bookstore.addBookToCart();
        await bookstore.goToCart();
        await expect(page).toHaveURL('/bookstore/cart');
    })
});