import React, { useEffect, useState } from 'react'

export const Products = () => {
  const [data, setData] = useState([]);
  const [tempData,setTemp]=useState([]);
  useEffect(() => {
    fetch(`https://fabaly-json-api.herokuapp.com/products`)
      .then((res) => res.json())
      .then((d) => { setData(d);setTemp(d) })
      .catch((err) => console.log(err))
  }, [])
  const sorting = (e) => {
    const option = e.target.value;
    if (option === "hightolow") {
      const updatelist = [...tempData].sort((a, b) => +(b.price) - +(a.price))
      setData(updatelist)
    }
    if (option === "lowtohigh") {
      const updatelist = [...tempData].sort((a, b) => +(a.price) - +(b.price))
      setData(updatelist)
    }
  }
  const colorsAll = (e) => {
    const option = e.target.value;
    if (option === "blue") {
      const updatelist = tempData.filter((ev) => ev.color === option)
      setData(updatelist)
    }

    if (option === "pink") {
      const updatelist = tempData.filter((ev) => ev.color === option)
      setData(updatelist)
    }

    if (option === "red") {
      const updatelist = tempData.filter((ev) => ev.color === option)
      setData(updatelist)
    }

    if (option === "green") {
      const updatelist = tempData.filter((ev) => ev.color === option)
      setData(updatelist)
    }

    if (option === "yellow") {
      const updatelist = tempData.filter((ev) => ev.color === option)
      setData(updatelist)
    }
    if (option === "maroon") {
      const updatelist = tempData.filter((ev) => ev.color === option)
      setData(updatelist)
    }
  }
  return (
    <div className='product'>
      <h3>We can sort price from low to high or vice verse and we can filter by color</h3>
      <select className="sort" onChange={sorting}>
        <option value="sorting">Sorting</option>
        <option value="lowtohigh">Low To High</option>
        <option value="hightolow">High To Low</option>
      </select>
      <select className="color" onChange={colorsAll}>
        <option value="all"> Colour</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
        <option value="maroon">Maroon</option>
        <option value="yellow">Yellow</option>
      </select>
      <table border={"1px solid black"}>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (<tr key={item.id}>
            <td>{item.productName}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
          </tr>))}
        </tbody>
      </table>
      {/* <div>{data.map((item)=><div key={item.id}>{item.color},{item.price}</div>)}</div> */}
    </div>
  )
}
