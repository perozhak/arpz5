import React, { useState } from 'react'

const Etap1Table = ({
  is1, is2, ...props
}) => {
 
  const [IOR, setIOR] = useState(props.IOR || [])

  //eslint-disable-next-line
  const [count, setCount] = useState(IOR.reduce((accumulator, currentValue, index, inArr) => {
    accumulator += currentValue.items.reduce((acc, currVal) => {
      acc++;
      return acc
    }, 0)
    return accumulator
  },0) )
  //eslint-disable-next-line
  const [perc, setPerc] = useState(IOR.reduce((AC, CV, IDX, ARR) => {
    AC+=
      Math.round(ARR[IDX].items.reduce((accumulator, currentValue, index, array) => {
        if (currentValue.value) accumulator++;
        return accumulator
      }, 0) 
      /
      ARR.reduce((accumulator, currentValue, index, inArr) => {
        accumulator += currentValue.items.reduce((acc, currVal) => {
          acc++;
          return acc
        }, 0)
        return accumulator
      },0) * 10000) / 100 
                  
      return AC;
    }, 0
    ).toFixed(2) + '%')


  return (
    <div className="mt-2 mx-3 pb-2">
      { is1 ? <h3>
        1.1. Визначення можливих джерел появи ризиків

      </h3> : <h3>
        1.2. Ідентифікація потенційних ризикових подій
      </h3>
       }
      { IOR.map((item, index, arr) => 
        <table className="table" key={index}>
          <thead>
          <tr className="table-primary">
            <th scope="row">{item.id || index+1}</th>
            <td>{item.title}</td>
            <td>
              {
                arr[index].items.reduce((accumulator, currentValue, index, array) => {
                  if (currentValue.value) accumulator++;
                  return accumulator
                }, 0)
              }
            </td>
            <td>
              {
                Math.round(arr[index].items.reduce((accumulator, currentValue, index, array) => {
                  if (currentValue.value) accumulator++;
                  return accumulator
                }, 0) 
                /
               arr.reduce((accumulator, currentValue, index, inArr) => {
                  accumulator += currentValue.items.reduce((acc, currVal) => {
                    acc++;
                    return acc
                  }, 0)
                  return accumulator
                },0) * 10000) / 100 
                + "%"            
              }
            </td>
          </tr>
          </thead>
          <tbody>
            {item.items.map((it, idx) => 
              <tr key={"tr" + idx} className="table-info">
                <th scope="row">{(item.id + (idx + 1)) || idx+1}</th>
                <td className="w-75">{it.itemTitle}</td>
                <td onClick={() => {
                  let temp = IOR;
                  temp[index].items[idx].value = !temp[index].items[idx].value
                  setIOR([...temp])
                  props.setIOR([...temp])
                }}
                  style={{cursor: 'pointer'}}
                >{Number(it.value)}</td>
                <td />
              </tr>
            )}
            {
              index === arr.length-1 && 
              <tr  className="table-primary">
                <th scope="row" />
                <td className="w-75" />
                <td >{count}</td>
                <td >{perc}</td>
            </tr>
            }
          </tbody>
        </table>
      )}     
    </div>
  )
}

export default Etap1Table
