export interface Address {
  city: string;
  street: string;
  house: string;
  room: string;
}

export interface ApartmentInfo {
  title: string;
  rooms: number;
  address: Address;
  area: number;
  unit: string;
}

export interface UserName {
  first_name: string;
  last_name: string;
  middle_name: string;
}

export interface UserInfo {
  type: string;
  id: number;
  attributes: UserName;
}
