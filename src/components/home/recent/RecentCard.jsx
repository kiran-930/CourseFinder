import React from "react"

export const list = [
  {
    id: 1,
    cover: "../../../src/assets/images/list/1.jpg",
    name: "Harvard University",
    location: "210 Zirak Road, Canada",
    
  },
  {
    id: 2,
    cover: "../../../src/assets/images/list/2.jpg",
    name: "Princeton University",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "../../../src/assets/images/list/3.jpg",
    name: "Yale University",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "../../../src/assets/images/list/4.jpg",
    name: "McGill University",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "../../../src/assets/images/list/5.jpg",
    name: "University of Copenhagen",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "../../../src/assets/images/list/6.jpg",
    name: "Ecole Polytechnique ",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
]

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>

                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              
            </div>
          )
        })}
      </div>

      
    </>
  )
}

export default RecentCard