import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { v4 as uuidv4 } from 'uuid'



const center = [55.76, 37.64];

// const images = [...Array(26)].map((n, i) => { 
//   const letter = String.fromCharCode(i + 97);
//   return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
// })



function MapComponent(): JSX.Element {

  const [coords, setCoords] = useState<Array<[]>>([])

  useEffect(() => {
      const addresses = ['Тверская область, Кашинский район, Верхняя Троица', 'верская область, Кашинский район, б-ца им. Калинина']

  const promises = addresses.map(async address => {
    const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=53ab01a5-fcd6-4af6-8795-4f7d5fdf4504&geocode=${encodeURIComponent(address)}`)
    const data = await response.json();
    const foundCoordinates =
      data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
        .split(' ')
        .map(parseFloat)
        .reverse();
    return foundCoordinates
  
  })

  Promise.all(promises)
  .then(res => setCoords(res))
  }, [])


  


return (
  <YMaps query={{ load: "package.full" }} >
    <Map
      state={{
        center,
        zoom: 9,
        controls: []
      }}
      width="500px"
      height="500px"
    >
      {coords.map((n) => (
        <Placemark
          key={uuidv4}
          geometry={n}
          options={{
            iconLayout: "default#image",
            iconImageSize: [50, 50],
            iconImageHref: 'https://img.icons8.com/ios-filled/2x/marker'
          }}
        />
      ))}
    </Map>
  </YMaps>
)
}

export default MapComponent

