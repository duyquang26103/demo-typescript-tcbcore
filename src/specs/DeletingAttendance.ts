// @ts-ignore
import { adminUsers } from '@data/AdminUsers';
import ListViewFlow from "@root/src/flows/ListView";
import AuthenticationFlow from "@root/src/flows/Authentication";

describe('My Login application', () => {
    before(`Login with test account - ${adminUsers.loginName.userName}`, async () => {
        await new AuthenticationFlow(adminUsers).login();
    });

    it('[1]: Delete the first attendance', async () => {
        const listViewFlow = new ListViewFlow();
        await listViewFlow.deleteFirstAttendance()
    })
})


