class loginHelper {

    async login () {       
        await browser.url("https://kasirdemo.belajarqa.com/");
        await $('#email').setValue('samplexx@ex.com');
        await $('#password').setValue('123adsfadf@');
        await $('button[type="submit"]').click();
    }
}

module.exports = new loginHelper();