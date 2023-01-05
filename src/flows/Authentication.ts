import { loginPage } from "@pages/Login";

export default class AuthenticationFlow {
    private readonly _userName: string;
    private readonly _password: string;

    constructor(accountData: any) {
        this._userName = accountData.loginName.userName;
        this._password = accountData.loginName.password;
    }

    public async login() {
        await loginPage.openLoginPage()
        await loginPage.inputUserName(this._userName);
        await loginPage.inputPassword(this._password);
        await loginPage.clickLoginBtn();

        const loginBtn = await loginPage.LOGIN_BTN
        await expect(loginBtn).not.toExist();
    }

}