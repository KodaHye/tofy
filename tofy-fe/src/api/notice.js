import { noticeInstance } from "./index";

const notice = noticeInstance();

function getNoticeList(success, fail) {
    notice.get().then(success).catch(fail);
}

export { getNoticeList };