import React from 'react'
import classes from "./Etap2.module.scss"
import mainClasses from "../Styles.module.scss"
import GoBack from '../../GoBack/GoBack'

const Etap22 = (props) => {

  const VRERarr = props.IOR.map((item, index, arr) => 
    item.items.map((it, idex) => 
       Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2))
    )
  ).flat()

  const maxVRER = Math.max(...VRERarr)
  const minVRER = Math.min(...VRERarr)
  const mpr = (maxVRER - minVRER)/3
  const ganga = ("["+ minVRER.toFixed(2) + ";" + (minVRER + mpr).toFixed(2) + "), ["+ (minVRER + mpr).toFixed(2) + ";" + (minVRER + 2*mpr).toFixed(2) + "), ["+ (minVRER + 2*mpr).toFixed(2) + ";" + (maxVRER).toFixed(2) + "]")
  return (
    <div className={mainClasses.EtapContainer}>
      <div className="mx-3 pb-2">     
         <div className="d-flex">
           <GoBack />
           <button type="button" className="btn btn-info m-2" onClick={() => props.history.push(`${process.env.PUBLIC_URL}/etap-2-1`)}>Ймовірності настання ризикових подій, встановлені експертами</button>
         </div>
          <h3>
            Величина ризиків
          </h3>
          <h4>{ganga}</h4>
          <table className="table">
           <thead>
           <tr className="table-primary">
                <th scope="row">#</th>
                <td>{"Ризикові події"}</td>
                <td>ER</td>
                <td>LRER</td>
                <td>VRER</td>
                <td>{"Пріоритет"}</td>
              </tr>
              </thead>
              <tbody>
                {props.IOR.map((item, index, arr) => 
                    item.items.map((it, idex) => 
                    <tr key={"tr" + idex} className={`${
                      (
                        (Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                        >= minVRER && 
                      Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                        < Number(minVRER+mpr).toFixed(2)) && "table-success"
                      )
                        ||
                      (    
                        (Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                          >= Number(minVRER+mpr).toFixed(2)) && 
                        Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                          < Number(minVRER+2*mpr).toFixed(2) &&  "table-warning"
                      )
                      ||
                      (
                        (Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                        >= Number(minVRER+2*mpr).toFixed(2) && 
                        Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                        <= maxVRER) && "table-danger"
                      )
                    }`}>
                      <th scope="row">{(item.id + (idex + 1)) || idex+1}</th>
                      <td>{it.itemTitle}</td>
                      <td>{Number((it.marks.reduce((acc, currVal) => acc+currVal , 0)/10).toFixed(2))*Number(it.value)}</td>
                      <td>
                        <input 
                            type="number" 
                            min={0} max={1} step={0.01} 
                            className={classes.TdInput}
                            value={it.LRER}
                            onChange={(e) => {
                              let temp = props.IOR;
                              temp[index].items[idex].LRER = Number(e.target.value)
                              props.setIOR([...temp])
                            }}
                          />
                      </td>
                      <td>{Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2))}</td>
                        {
                          (
                            (Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                            >= minVRER && 
                          Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                            < Number(minVRER+mpr).toFixed(2)) && <td>НИЗЬКИЙ</td> 
                          )
                            ||
                          (    
                            (Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                              >= Number(minVRER+mpr).toFixed(2)) && 
                            Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                              < Number(minVRER+2*mpr).toFixed(2) && <td>СЕРЕДНІЙ</td>
                          )
                          ||
                          (
                            (Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                            >= Number(minVRER+2*mpr).toFixed(2) && 
                            Number((it.LRER * (it.marks.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.value)).toFixed(2)) 
                            <= maxVRER) && <td>ВИСОКИЙ</td>
                          )
                        }
                    </tr>
                  )
                  )}
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Etap22
