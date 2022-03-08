import React from "react";
import { transDate } from "../utils/common";
import { ActItem } from "../types";

function InfoCardAct({ StartTime, EndTime, Organizer, Address }: ActItem) {
  return (
    <div className="detail">
      <p>
        <strong className="focus">活動時間:</strong>
        {`${transDate(StartTime)}-${transDate(EndTime)}`}
      </p>
      {/* <p>
            <strong className="focus">聯絡電話:</strong>
            {Phone}
          </p> */}
      <p>
        <strong className="focus">主辦單位:</strong>
        {Organizer}
      </p>
      <p>
        <strong className="focus">活動地點:</strong>
        {Address}
      </p>
      {/*
          <p>
            <strong className="focus">活動費用:</strong>
            {Remarks}
          </p>
          <p>
            <strong className="focus">注意事項:</strong>
            {Remarks}
          </p> */}
    </div>
  );
}

export default InfoCardAct;
