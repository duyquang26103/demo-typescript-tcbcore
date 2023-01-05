import {tcbElement, tcbWait} from 'tcb-core';
import {pageNavigator} from "@utils/PageNavigator";

const USER_NAME_TXT = '//input[@name="username"]';
const PASSWORD_TXT = '//input[@name="password"]';
const LOGIN_BTN = '.login-button'

class Login {

    get LOGIN_BTN() {
        return tcbElement.$(LOGIN_BTN);
    }

    public async openLoginPage() {
        await pageNavigator.open('login');
    }

    public async inputUserName(username: string) {
        await tcbElement.setValue(USER_NAME_TXT, username);
    }

    public async inputPassword(password: string) {
        await tcbElement.setValue(PASSWORD_TXT, password);
    }

    public async clickLoginBtn() {
        await tcbElement.click(LOGIN_BTN);

    }

}

export const loginPage = new Login();
