import {tcbElement} from 'tcb-core';
import { sprintf } from 'sprintf-js';

const INPUT_BY_TITLE_TXB = "//span[text()='%s']/parent::div/following-sibling::div//input";
const SELECT_BY_TITLE_DDL = "//span[text()='Attendance']/parent::div/following-sibling::div//div[@class='gaia-argoui-select']";
const LOOK_UP_BTN = "//span[text()='Employee ID']/parent::div/following-sibling::div//button[text()='Lookup']";

class AttendanceAdd {

    public async inputEmployeeId(employeeId: string) {
        const employeeIdTxb = sprintf(INPUT_BY_TITLE_TXB, 'Employee ID')
        await tcbElement.setValue(employeeIdTxb, employeeId)
    }

    public async clickLookUpBtn() {
        await tcbElement.click(LOOK_UP_BTN)
    }

    public async inputRequestDate(requestDate: string) {
        const requestDateTxb = sprintf(INPUT_BY_TITLE_TXB, 'Request Date / From Date')
        await tcbElement.setValue(requestDateTxb, requestDate)
    }

    public async inputAbsentFrom(fromDate: string) {
        const absentFromDateTxb = sprintf(INPUT_BY_TITLE_TXB, 'Absent From')
        await tcbElement.setValue(absentFromDateTxb, fromDate)
    }

    public async inputAbsentTo(fromDate: string) {
        const absentToDateTxb = sprintf(INPUT_BY_TITLE_TXB, 'Absent To')
        await tcbElement.setValue(absentToDateTxb, fromDate)
    }

    public async selectAttendanceType(type: string) {
        const attendanceTypeDll = sprintf(SELECT_BY_TITLE_DDL, 'Attendance')
        await tcbElement.getAttribute(attendanceTypeDll, type)
    }


}

export const attendanceAddPage = new AttendanceAdd();
