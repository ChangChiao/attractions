import { SpotItem } from "../types";

function InfoCardSpot({ OpenTime, Phone, Address, TicketInfo, Remarks }: SpotItem) {
  return (
    <div className="detail">
      <p>
        <strong className="focus">開放時間:</strong>
        {OpenTime}
      </p>
      <p>
        <strong className="focus">服務電話:</strong>
        <a href={`tel:${Phone}`}>{Phone}</a>
      </p>
      <p>
        <strong className="focus">景點地址:</strong>
        {Address}
      </p>
      {/* <p>
            <strong className="focus">官方網站:</strong>

          </p> */}
      <p>
        <strong className="focus">票價資訊:</strong>
        {TicketInfo}
      </p>
      <p>
        <strong className="focus">注意事項:</strong>
        {Remarks || "無"}
      </p>
    </div>
  );
}

export default InfoCardSpot;
