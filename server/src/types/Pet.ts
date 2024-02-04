export type Pet = {
  petInfo: {
    id: string
    name: string
    type: string
    image: string
    birthdate?: string
  },
  ownerInfo: {
    id: string
    name: string
  },
  allowedAccess?: PetAccess[]
}

export type PetAccess = {
  userId: string
  name: string
}