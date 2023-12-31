import { puppyList } from './data.js'
import { useState } from 'react'
import './index.css'

function App() {

const [puppies, setPuppies] = useState(puppyList);
const [featPupId, setFeatPupId] = useState(null);
console.log("puppyList: ", puppies);
const featuredPup = puppies.find((puppy) => puppy.id === featPupId)
console.log("featured pup: ", featuredPup)

return (
    <>
        
      <div>
        {
          puppies.map((puppy) => {

            return (
            
            <p class="pupBG" onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            
            
            );
          
            
          })

          

        }


          {featPupId && (
            <div>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )}
      </div>
    </>
  )


};

export default App
