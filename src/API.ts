/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRoomInput = {
  id?: string | null,
  creatorId: string,
};

export type ModelRoomConditionInput = {
  creatorId?: ModelIDInput | null,
  and?: Array< ModelRoomConditionInput | null > | null,
  or?: Array< ModelRoomConditionInput | null > | null,
  not?: ModelRoomConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Room = {
  __typename: "Room",
  id: string,
  creatorId: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRoomInput = {
  id: string,
  creatorId?: string | null,
};

export type DeleteRoomInput = {
  id: string,
};

export type CreateRoomMetaKeyInput = {
  id?: string | null,
  name: string,
};

export type ModelRoomMetaKeyConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRoomMetaKeyConditionInput | null > | null,
  or?: Array< ModelRoomMetaKeyConditionInput | null > | null,
  not?: ModelRoomMetaKeyConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type RoomMetaKey = {
  __typename: "RoomMetaKey",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRoomMetaKeyInput = {
  name?: string | null,
};

export type DeleteRoomMetaKeyInput = {
  id: string,
};

export type CreateRoomMetaDataInput = {
  roomId: string,
  metaKey: string,
  value: string,
};

export type ModelRoomMetaDataConditionInput = {
  value?: ModelStringInput | null,
  and?: Array< ModelRoomMetaDataConditionInput | null > | null,
  or?: Array< ModelRoomMetaDataConditionInput | null > | null,
  not?: ModelRoomMetaDataConditionInput | null,
};

export type RoomMetaData = {
  __typename: "RoomMetaData",
  roomId: string,
  metaKey: string,
  value: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRoomMetaDataInput = {
  roomId: string,
  metaKey: string,
  value?: string | null,
};

export type DeleteRoomMetaDataInput = {
  roomId: string,
  metaKey: string,
};

export type ModelRoomFilterInput = {
  id?: ModelIDInput | null,
  creatorId?: ModelIDInput | null,
  and?: Array< ModelRoomFilterInput | null > | null,
  or?: Array< ModelRoomFilterInput | null > | null,
  not?: ModelRoomFilterInput | null,
};

export type ModelRoomConnection = {
  __typename: "ModelRoomConnection",
  items?:  Array<Room | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelRoomMetaKeyFilterInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelRoomMetaKeyFilterInput | null > | null,
  or?: Array< ModelRoomMetaKeyFilterInput | null > | null,
  not?: ModelRoomMetaKeyFilterInput | null,
};

export type ModelRoomMetaKeyConnection = {
  __typename: "ModelRoomMetaKeyConnection",
  items?:  Array<RoomMetaKey | null > | null,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelRoomMetaDataFilterInput = {
  roomId?: ModelIDInput | null,
  metaKey?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelRoomMetaDataFilterInput | null > | null,
  or?: Array< ModelRoomMetaDataFilterInput | null > | null,
  not?: ModelRoomMetaDataFilterInput | null,
};

export type ModelRoomMetaDataConnection = {
  __typename: "ModelRoomMetaDataConnection",
  items?:  Array<RoomMetaData | null > | null,
  nextToken?: string | null,
};

export type CreateRoomMutationVariables = {
  input: CreateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type CreateRoomMutation = {
  createRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMutationVariables = {
  input: UpdateRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type UpdateRoomMutation = {
  updateRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMutationVariables = {
  input: DeleteRoomInput,
  condition?: ModelRoomConditionInput | null,
};

export type DeleteRoomMutation = {
  deleteRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMetaKeyMutationVariables = {
  input: CreateRoomMetaKeyInput,
  condition?: ModelRoomMetaKeyConditionInput | null,
};

export type CreateRoomMetaKeyMutation = {
  createRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMetaKeyMutationVariables = {
  input: UpdateRoomMetaKeyInput,
  condition?: ModelRoomMetaKeyConditionInput | null,
};

export type UpdateRoomMetaKeyMutation = {
  updateRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMetaKeyMutationVariables = {
  input: DeleteRoomMetaKeyInput,
  condition?: ModelRoomMetaKeyConditionInput | null,
};

export type DeleteRoomMetaKeyMutation = {
  deleteRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoomMetaDataMutationVariables = {
  input: CreateRoomMetaDataInput,
  condition?: ModelRoomMetaDataConditionInput | null,
};

export type CreateRoomMetaDataMutation = {
  createRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoomMetaDataMutationVariables = {
  input: UpdateRoomMetaDataInput,
  condition?: ModelRoomMetaDataConditionInput | null,
};

export type UpdateRoomMetaDataMutation = {
  updateRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoomMetaDataMutationVariables = {
  input: DeleteRoomMetaDataInput,
  condition?: ModelRoomMetaDataConditionInput | null,
};

export type DeleteRoomMetaDataMutation = {
  deleteRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRoomQueryVariables = {
  id: string,
};

export type GetRoomQuery = {
  getRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomsQueryVariables = {
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomsQuery = {
  listRooms?:  {
    __typename: "ModelRoomConnection",
    items?:  Array< {
      __typename: "Room",
      id: string,
      creatorId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type RoomsByCreatorIdQueryVariables = {
  creatorId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomsByCreatorIdQuery = {
  roomsByCreatorId?:  {
    __typename: "ModelRoomConnection",
    items?:  Array< {
      __typename: "Room",
      id: string,
      creatorId: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoomMetaKeyQueryVariables = {
  id: string,
};

export type GetRoomMetaKeyQuery = {
  getRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomMetaKeysQueryVariables = {
  filter?: ModelRoomMetaKeyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoomMetaKeysQuery = {
  listRoomMetaKeys?:  {
    __typename: "ModelRoomMetaKeyConnection",
    items?:  Array< {
      __typename: "RoomMetaKey",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRoomMetaDataQueryVariables = {
  roomId: string,
  metaKey: string,
};

export type GetRoomMetaDataQuery = {
  getRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoomMetaDataQueryVariables = {
  roomId?: string | null,
  metaKey?: ModelStringKeyConditionInput | null,
  filter?: ModelRoomMetaDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListRoomMetaDataQuery = {
  listRoomMetaData?:  {
    __typename: "ModelRoomMetaDataConnection",
    items?:  Array< {
      __typename: "RoomMetaData",
      roomId: string,
      metaKey: string,
      value: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type RoomMetaDataByMetaKeyByValueQueryVariables = {
  metaKey?: string | null,
  value?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoomMetaDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoomMetaDataByMetaKeyByValueQuery = {
  roomMetaDataByMetaKeyByValue?:  {
    __typename: "ModelRoomMetaDataConnection",
    items?:  Array< {
      __typename: "RoomMetaData",
      roomId: string,
      metaKey: string,
      value: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRoomSubscription = {
  onCreateRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomSubscription = {
  onUpdateRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomSubscription = {
  onDeleteRoom?:  {
    __typename: "Room",
    id: string,
    creatorId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomMetaKeySubscription = {
  onCreateRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomMetaKeySubscription = {
  onUpdateRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomMetaKeySubscription = {
  onDeleteRoomMetaKey?:  {
    __typename: "RoomMetaKey",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoomMetaDataSubscription = {
  onCreateRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoomMetaDataSubscription = {
  onUpdateRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoomMetaDataSubscription = {
  onDeleteRoomMetaData?:  {
    __typename: "RoomMetaData",
    roomId: string,
    metaKey: string,
    value: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
