import { listViewPage } from "@pages/ListView";
import { tcbWait } from "tcb-core";

export default class ListViewFlow {

    public async deleteFirstAttendance() {
        await listViewPage.accessToListView();
        await listViewPage.clickDeleteAttendance();
        await listViewPage.clickConfirmDeleteAttendance();
        await listViewPage.clickConfirmDeleteSchedule();
        await tcbWait.pause(3000);
        await this.verifyDeleteSuccessfully()
    }

    private async verifyDeleteSuccessfully() {
        const deleteSuccessfullyPup = await listViewPage.DELETE_SUCCESS_PUP
        await expect(deleteSuccessfullyPup).toBeDisplayed()
    }
}