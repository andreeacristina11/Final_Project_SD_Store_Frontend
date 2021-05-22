export interface Role{
  name: string;
  id: number;
}

export interface UserDto{
  email: string;
  password: string;
  imageUrl: string;
  firstName: string;
  lastName: string;
  messagingChannel: string;
  role: string;
  addressDto: AddressDto;
}

export interface AddressDto{
  country: string;
  city: string;
  street: string;
  zipcode: number;
}

