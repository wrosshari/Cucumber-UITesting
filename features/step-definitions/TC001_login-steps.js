const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^admin on the login page$/, async () => {
    await browser.url("https://kasirdemo.belajarqa.com/");
    await browser.pause(1000);
    expect(browser.url).toHaveUrl("https://kasirdemo.belajarqa")
});

When(/^admin input email : (.+) and password :(.+)$/, async (email, password) => {
    await $('#email').setValue(email);
    await $('#password').setValue(password);
    await $('button[type="submit"]').click();
});

Then(/^url contain (.+) and showing title kasirAja$/, async (pathName) => {
    
    const url = browser.getUrl();
    expect(url).toHaveUrlContaining(pathName)
    //await assert.strictEqual(path, pathName);
});


When(/^admin input invalid email : (.+) and invalid password : (.+)$/, async (invalidEmail, invalidPassword) => {
    await $('#email').setValue(invalidEmail);
    await $('#password').setValue(invalidPassword);
    await $('button[type="submit"]').click();
    await browser.pause(3000);
});

Then(/^showing alert message : (.+)$/, async (alertMessage) => {

    const alert = await $('[role="alert"]');    
    expect(alert).toHaveTextContaining(alertMessage);
});