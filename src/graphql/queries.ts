/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      creatorId
      createdAt
      updatedAt
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        creatorId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const roomsByCreatorId = /* GraphQL */ `
  query RoomsByCreatorId(
    $creatorId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomsByCreatorId(
      creatorId: $creatorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        creatorId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoomMetaKey = /* GraphQL */ `
  query GetRoomMetaKey($id: ID!) {
    getRoomMetaKey(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listRoomMetaKeys = /* GraphQL */ `
  query ListRoomMetaKeys(
    $filter: ModelRoomMetaKeyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomMetaKeys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRoomMetaData = /* GraphQL */ `
  query GetRoomMetaData($roomId: ID!, $metaKey: String!) {
    getRoomMetaData(roomId: $roomId, metaKey: $metaKey) {
      roomId
      metaKey
      value
      createdAt
      updatedAt
    }
  }
`;
export const listRoomMetaData = /* GraphQL */ `
  query ListRoomMetaData(
    $roomId: ID
    $metaKey: ModelStringKeyConditionInput
    $filter: ModelRoomMetaDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRoomMetaData(
      roomId: $roomId
      metaKey: $metaKey
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        roomId
        metaKey
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const roomMetaDataByMetaKeyByValue = /* GraphQL */ `
  query RoomMetaDataByMetaKeyByValue(
    $metaKey: String
    $value: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRoomMetaDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomMetaDataByMetaKeyByValue(
      metaKey: $metaKey
      value: $value
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        roomId
        metaKey
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
