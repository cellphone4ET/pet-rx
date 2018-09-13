import React from 'react';
import Pet from './pet';

export default function Pets(props) {

  let petsArray = [
    {
      Basic_Information: {
        name: 'Murphy',
        species: 'Dog' ,
        license: '#01928387465',
        MicroChip: '#1029384756' ,
        Birthday: '10/01/2016',
        Age: '2'
      },
      Shelter_Breeder: {
        Name: 'Tacoma Humane Society',
        Phone: '253-867-5309'
      },
      Veterinary_Information: {
        Name: 'Button\'s Veterinary Hospital' ,
        Phone: '787-908-7689'
      },
      Health_Conditions: {
        Allergies: 'Grass',
        Chronic_Conditions: 'Invertebral disc disease'
      },
      Checkup_History: {
        Checkup: {
          date: '10/01/2017',
          notes: 'One year checkup'
        }
      },
      Vaccination_History: {
        Vaccination: {
          type: 'Rabies',
          date: '10/01/2017',
          history: ['10/01/2017']
        }
      },
      Weight: {
        Current_Weight: {
          Weight: '90lb',
          date: '10/01/2017'
        },
        Weight_History: []
      }
    },

    {
      Basic_Information: {
        name: 'Lucy',
        species: 'Dog' ,
        license: '#01928387465',
        MicroChip: '#1029384756' ,
        Birthday: '10/01/2016',
        Age: '2'
      },
      Shelter_Breeder: {
        Name: 'Tacoma Humane Society',
        Phone: '253-867-5309'
      },
      Veterinary_Information: {
        Name: 'Button\'s Veterinary Hospital' ,
        Phone: '787-908-7689'
      },
      Health_Conditions: {
        Allergies: 'Grass',
        Chronic_Conditions: 'Invertebral disc disease'
      },
      Checkup_History: {
        Checkup: {
          date: '10/01/2017',
          notes: 'One year checkup',
          history: ['10/01/2017']
        }
      },
      Vaccination_History: {
        Vaccination: {
          type: 'Rabies',
          date: '10/01/2017',
          history: ['10/01/2017']
        }
      },
      Weight: {
        Current_Weight: {
          Weight: '90lb',
          date: '10/01/2017'
        },
        Weight_History: []
      }
    }
  ];

  for (let i = 0; i < petsArray.length; i++) {
    let singlePetObj = petsArray[i];
    console.log(singlePetObj)
    singlePetObj.map(pet => (
      console.log(Basic_Information.name)
    ));
  }





  return (
    <div>RenderedPets</div>
  );
}
