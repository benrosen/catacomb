/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
      id
      creatorId
      createdAt
      updatedAt
    }
  }
`;
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
      id
      creatorId
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
      id
      creatorId
      createdAt
      updatedAt
    }
  }
`;
export const createRoomMetaKey = /* GraphQL */ `
  mutation CreateRoomMetaKey(
    $input: CreateRoomMetaKeyInput!
    $condition: ModelRoomMetaKeyConditionInput
  ) {
    createRoomMetaKey(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateRoomMetaKey = /* GraphQL */ `
  mutation UpdateRoomMetaKey(
    $input: UpdateRoomMetaKeyInput!
    $condition: ModelRoomMetaKeyConditionInput
  ) {
    updateRoomMetaKey(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoomMetaKey = /* GraphQL */ `
  mutation DeleteRoomMetaKey(
    $input: DeleteRoomMetaKeyInput!
    $condition: ModelRoomMetaKeyConditionInput
  ) {
    deleteRoomMetaKey(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createRoomMetaData = /* GraphQL */ `
  mutation CreateRoomMetaData(
    $input: CreateRoomMetaDataInput!
    $condition: ModelRoomMetaDataConditionInput
  ) {
    createRoomMetaData(input: $input, condition: $condition) {
      roomId
      metaKey
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateRoomMetaData = /* GraphQL */ `
  mutation UpdateRoomMetaData(
    $input: UpdateRoomMetaDataInput!
    $condition: ModelRoomMetaDataConditionInput
  ) {
    updateRoomMetaData(input: $input, condition: $condition) {
      roomId
      metaKey
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteRoomMetaData = /* GraphQL */ `
  mutation DeleteRoomMetaData(
    $input: DeleteRoomMetaDataInput!
    $condition: ModelRoomMetaDataConditionInput
  ) {
    deleteRoomMetaData(input: $input, condition: $condition) {
      roomId
      metaKey
      value
      createdAt
      updatedAt
    }
  }
`;
