const { Given, When, Then } = require('@wdio/cucumber-framework');
const { Before } = require('@wdio/cucumber-framework');
const loginHelper = require('../helper/login-helper');

const login = Before(function () {
    loginHelper.login();
})

Given(/^admin on the category page$/, async () => {
    await $('//div/*[text()="kategori"]').click();
    await browser.pause(1000);
    const url = browser.getUrl();
    expect(url).toHaveUrlContaining("categories")
});

When(/^admin click tambah button$/, async () => {
    await $('//div/*[text()="tambah"]').click();
    await browser.pause(1000);
    const url = browser.getUrl();
    expect(url).toHaveUrlContaining("create")
});

When(/^admin type category name : (.+) and description : (.+)$/, async (catName,catDesc) => {   
    await $('#nama').setValue(catName);
    await $('#deskripsi').setValue(catDesc);
    await $('//button[text()="simpan"]').click();
    await browser.pause(1000);
});

Then(/^showing toast success message : (.+)$/, async(message) =>{
    const toastMessage = await $('//div[@role="alert"]/div/div[2]')
    expect(toastMessage).toHaveTextContaining(message);
})

When(/^admin type description : (.+)$/, async (catDescNeg) => {   
    await $('#deskripsi').setValue(catDescNeg);
    await $('//button[text()="simpan"]').click();
    await browser.pause(1000);
});

Then(/^showing warning message : (.+)$/, async(warningMessage) =>{
    const warntMessage = await $('[role="alert"]')
    expect(warntMessage).toHaveTextContaining(warningMessage);
})