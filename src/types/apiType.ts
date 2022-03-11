export type ActItem = {
  type?: string;
  ActivityID: string;
  Class: string;
  StartTime: string;
  EndTime: string;
  Organizer: string;
  Phone: string;
  ActivityName: string;
  Description: string;
  Address: string;
  Position: {
    PositionLat: number;
    PositionLon: number;
  };
  City?: string;
  Picture?: {
    PictureUrl1?: string;
  };
};

export type SpotItem = {
  type?: string;
  ScenicSpotID: string;
  Class: string;
  ScenicSpotName: string;
  DescriptionDetail: string;
  OpenTime: string;
  Phone: string;
  Remarks: string;
  Position: {
    PositionLat: number;
    PositionLon: number;
  };
  Address?: string;
  City?: string;
  TicketInfo?: string;
  Picture?: {
    PictureUrl1?: string;
  };
};

export type RestItem = {
  type?: string;
  RestaurantID: string;
  RestaurantName: string;
  Class: string;
  OpenTime: string;
  Description: string;
  Phone: string;
  Position: {
    PositionLat: number;
    PositionLon: number;
  };
  WebsiteUrl?: string;
  Address?: string;
  City?: string;
  Picture?: {
    PictureUrl1?: string;
  };
};

export enum typeList {
  activity = "Activity",
  spot = "ScenicSpot",
  restaurant = "Restaurant",
}
