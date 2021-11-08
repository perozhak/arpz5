import React, { useState } from 'react'

const Etap1Table = ({
  is1, is2, ...props
}) => {
 
  const [IOR, setIOR] = useState(props.IOR || [])

  return (
    <div className="my-2 mx-2">
      { is1 ? <h3>
        1.1. Визначення можливих джерел появи ризиків

      </h3> : <h3>
        1.2. Ідентифікація потенційних ризикових подій
      </h3>
       }
      { IOR.map((item, index, arr) => 
        <table className="table" key={index}>
          <thead>
          <tr className="table-secondary">
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
              <tr key={"tr" + idx}>
                <th scope="row">{(item.id + (idx + 1)) || idx+1}</th>
                <td>{it.itemTitle}</td>
                <td onClick={() => {
                  let temp = IOR;
                  temp[index].items[idx].value = !temp[index].items[idx].value
                  setIOR([...temp])
                  props.setIOR([...temp])
                }}
                  style={{cursor: 'pointer'}}
                >{Number(it.value)}</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      <div>TOTAL COUNT: {

        IOR.reduce((accumulator, currentValue, index, inArr) => {
          accumulator += currentValue.items.reduce((acc, currVal) => {
            acc++;
            return acc
          }, 0)
          return accumulator
        },0) 
          
        }</div>

        <div>SUM OF % : 
          {IOR.reduce((AC, CV, IDX, ARR) => {
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
            ) + '%'}
            
        </div>
    </div>
  )
}

export default Etap1Table
