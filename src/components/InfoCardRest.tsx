import { RestItem } from "../types";

function InfoCardRest({ OpenTime, Phone, Address, WebsiteUrl }: RestItem) {
  return (
    <div className="detail">
      <p>
        <h3 className="focus">營業時間:</h3>
        {OpenTime}
      </p>
      <p>
        <h3 className="focus">聯絡電話:</h3>
        <a href={`tel:${Phone}`}>{Phone}</a>
      </p>
      <p>
        <h3 className="focus">餐廳地址:</h3>
        {Address}
      </p>
      <p>
        <h3 className="focus">官方網站:</h3>
        {WebsiteUrl ? (
          <a href={WebsiteUrl} target="_blank" rel="noreferrer">
            {WebsiteUrl}
          </a>
        ) : (
          <span>無</span>
        )}
      </p>
    </div>
  );
}

export default InfoCardRest;
