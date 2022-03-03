export const API_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism";
export const API_SPOT = API_URL + "/ScenicSpot";
export const API_RESTAURANT = API_URL + "/Restaurant";
export const API_ACTIVITY = API_URL + "/Activity";

type MenuList = {
  value: string;
  label: string;
};

type CityList = MenuList;

type CatagoryItem = {
  keyword: string;
  cover: string;
  title: string;
};

type CatagoryList = {
  activity: CatagoryItem[];
  spot: CatagoryItem[];
  restaurant: CatagoryItem[];
};

export const TYPE_LIST: MenuList[] = [
  { value: "activity", label: "節慶活動" },
  { value: "spot", label: "探索景點" },
  { value: "restaurant", label: "品嚐美食" },
];

export const MENU_LIST = [
  { name: "探索景點", path: "spot" },
  { name: "節慶活動", path: "activity" },
  { name: "品嚐美食", path: "restaurant" },
];

export const CITY_LIST: CityList[] = [
  { label: "臺北市", value: "Taipei" },
  { label: "新北市", value: "NewTaipei" },
  { label: "桃園市", value: "Taoyuan" },
  { label: "臺中市", value: "Taichung" },
  { label: "臺南市", value: "Tainan" },
  { label: "高雄市", value: "Kaohsiung" },
  { label: "基隆市", value: "Keelung" },
  { label: "新竹市", value: "Hsinchu" },
  { label: "新竹縣", value: "HsinchuCounty" },
  { label: "苗栗縣", value: "MiaoliCounty" },
  { label: "彰化縣", value: "ChanghuaCounty" },
  { label: "南投縣", value: "NantouCounty" },
  { label: "雲林縣", value: "YunlinCounty" },
  { label: "嘉義縣", value: "ChiayiCounty" },
  { label: "嘉義市", value: "Chiayi" },
  { label: "屏東縣", value: "PingtungCounty" },
  { label: "宜蘭縣", value: "YilanCounty" },
  { label: "花蓮縣", value: "HualienCounty" },
  { label: "臺東縣", value: "TaitungCounty" },
  { label: "金門縣", value: "KinmenCounty" },
  { label: "澎湖縣", value: "PenghuCounty" },
  { label: "連江縣", value: "LienchiangCounty" },
];

export const CATEGORYLIST: CatagoryList = {
  activity: [
    { keyword: "節慶", cover: "event_type_1", title: "節慶活動" },
    { keyword: "自行車", cover: "event_type_2", title: "自行車活動" },
    { keyword: "休閒", cover: "event_type_3", title: "遊憩活動" },
    { keyword: "產業", cover: "event_type_4", title: "產業文化活動" },
    { keyword: "2021", cover: "event_type_5", title: "年度活動" },
    { keyword: "秋", cover: "event_type_6", title: "四季活動" },
  ],
  spot: [
    { keyword: "風景", cover: "spot_type_1", title: "自然風景類" },
    { keyword: "工廠", cover: "spot_type_2", title: "觀光工廠類" },
    { keyword: "休閒", cover: "spot_type_3", title: "遊憩類" },
    { keyword: "農業", cover: "spot_type_4", title: "休閒農業類" },
    { keyword: "生態", cover: "spot_type_5", title: "生態類" },
    { keyword: "溫泉", cover: "spot_type_6", title: "溫泉類" },
    { keyword: "古蹟", cover: "spot_type_7", title: "古蹟類" },
  ],
  restaurant: [
    { keyword: "特產", cover: "food_type_1", title: "地方特產" },
    { keyword: "中式", cover: "food_type_2", title: "中式美食" },
    { keyword: "甜點", cover: "food_type_3", title: "甜點冰品" },
    { keyword: "異國", cover: "food_type_4", title: "異國料理" },
    { keyword: "伴手禮", cover: "food_type_5", title: "伴手禮" },
    { keyword: "素食", cover: "food_type_6", title: "素食" },
  ],
};
