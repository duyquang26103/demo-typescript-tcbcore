import { tcbElement } from 'tcb-core';
import { pageNavigator } from "@utils/PageNavigator";

const ADD_ATTENDANCE_LNK = "//a[@href='/k/7/edit']";
const DELETE_FIRST_RECORD_BTN = "//tr[1]/td[13]//button[@class='recordlist-remove-gaia']";
const CONFIRM_DELETE_ATTENDANCE_PUP = "//a[text()='Delete']";
const CONFIRM_DELETE_SCHEDULE_PUP = "//button[text()='Yes']";
const DELETE_SUCCESS_PUP = "//h2[text()='Your appointment has been deleted successfully!']";

class ListView {

    get DELETE_SUCCESS_PUP() {
        return tcbElement.$(DELETE_SUCCESS_PUP)
    }

    public async accessToListView() {
        await pageNavigator.open('k/7/');
    }

    public async clickAddAttendance() {
        await tcbElement.click(ADD_ATTENDANCE_LNK);
    }

    public async clickDeleteAttendance() {
        await tcbElement.click(DELETE_FIRST_RECORD_BTN);
    }

    public async clickConfirmDeleteAttendance() {
        await tcbElement.click(CONFIRM_DELETE_ATTENDANCE_PUP);
    }

    public async clickConfirmDeleteSchedule() {
        await tcbElement.click(CONFIRM_DELETE_SCHEDULE_PUP);
    }

}

export const listViewPage = new ListView();
