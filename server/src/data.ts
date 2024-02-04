import { Pet } from "./types/Pet";

export const samplePets: Pet[] = [
  {
    petInfo: {
      id: "65bd3cc02b54f3ff4ef50db8",
      name: "Obi",
      type: "Dog",
      image: "/images/pet-icons/dog.png",
      birthdate: "June 2023"
    },
    ownerInfo: {
      id: "65bd3668e02e5aa165dbc175",
      name: "Luke Wald",
    },
    allowedAccess: [
      {
        userId: "65bd37eb41c81bfaf4488be8",
        name: "Kelsey Wald"
      },
    ]
  },
  {
    petInfo: {
      id: "65bd3cca658dd00ee881ce1b",
      name: "Sunny",
      type: "Cat",
      image: "../images/pet-icons/cat.png",
      birthdate: "November 2018"
    },
    ownerInfo: {
      id: "65bd3668e02e5aa165dbc175",
      name: "Luke Wald"
    }
  },
  {
    petInfo: {
      id: "65bd3cd2fec57f46195d8405",
      name: "Moose",
      type: "Dog",
      image: "../images/pet-icons/dog.png",
      birthdate: "March 2022"
    },
    ownerInfo: {
      id: "65bd37eb41c81bfaf4488be8",
      name: "Kelsey Wald"
    }
  }
]