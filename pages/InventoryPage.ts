import {expect, Page, Locator} from '@playwright/test';
import { goTo } from '../utils/navigation';

export class InventoryPage{
    readonly page: Page;
    readonly bookCards: Locator;
    readonly searchInput: Locator;
    readonly addToCartBtn: Locator;
    // readonly sortByPrice: Locator;
    readonly cartLink: Locator;

    constructor(page:Page){
        this.page = page;

        this.bookCards = page.locator('.card-product-user');
        this.searchInput = page.locator('#search-input');
        this.addToCartBtn = page.getByRole('link', {name:'Add To card'});
        this.cartLink = page.getByAltText('Cart');

    }

    async goto(){
        await goTo(this.page, '/bookstore');
    };

    async searchBook(bookname: string){
        await this.searchInput.fill(bookname);
    }

    async openBook(bookname: string){
        await this.bookCards.getByText(bookname).click();
    }

    async addBookToCart(){
        await this.addToCartBtn.first().click();
    }

    async goToCart(){
        await this.cartLink.click();
    }
}