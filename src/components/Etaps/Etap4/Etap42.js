import React from 'react'
import GoBack from '../../GoBack/GoBack'
import classes from "../Etap2/Etap2.module.scss"
import mainClasses from '../Styles.module.scss'


const Etap42 = (props) => {

  const EVRERarr = props.IOR.map((item, index, arr) => 
    item.items.map((it, idex) => 
       Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2))
    )
  ).flat()

  const maxEVRER = Math.max(...EVRERarr)
  const minEVRER = Math.min(...EVRERarr)
  const mpr = (maxEVRER - minEVRER)/3
  const ganga = ("["+ minEVRER.toFixed(2) + ";" + (minEVRER + mpr).toFixed(2) + "), ["+ (minEVRER + mpr).toFixed(2) + ";" + (minEVRER + 2*mpr).toFixed(2) + "), ["+ (minEVRER + 2*mpr).toFixed(2) + ";" + (maxEVRER).toFixed(2) + "]")
  return (
    <div className={mainClasses.EtapContainer}>
      <div className="mx-3 pb-2">     
         <div className="d-flex">
           <GoBack />
           <button type="button" className="btn btn-info m-2" onClick={() => props.history.push(`${process.env.PUBLIC_URL}/etap-4-1`)}>Результуюче оцінювання ризиків</button></div>
          <h3>
            Результуюча величина ризиків
          </h3>
          <h4>{ganga}</h4>
          <table className="table">
           <thead>
           <tr className="table-primary">
                <th scope="row">#</th>
                <td>{"Ризикові події"}</td>
                <td>ERPER</td>
                <td>ELRER</td>
                <td>EVRER</td>
                <td>{"Пріоритет"}</td>
              </tr>
              </thead>
              <tbody>
                {props.IOR.map((item, index, arr) => 
                    item.items.map((it, idex) => 
                    <tr key={"tr" + idex} className={` ${
                      (
                        (Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                        >= minEVRER && 
                      Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                        < Number(minEVRER+mpr).toFixed(2)) && "table-success"
                      )
                        ||
                      (    
                        (Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                          >= Number(minEVRER+mpr).toFixed(2)) && 
                        Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                          < Number(minEVRER+2*mpr).toFixed(2) &&  "table-warning"
                      )
                      ||
                      (
                        (Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                        >= Number(minEVRER+2*mpr).toFixed(2) && 
                        Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                        <= maxEVRER) && "table-danger"
                      )
                    }`}>
                      <th scope="row">{(item.id + (idex + 1)) || idex+1}</th>
                      <td>{it.itemTitle}</td>
                      <td>{(Number((it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10).toFixed(2))*Number(it.resolveOption?.value || 1)).toFixed(2)}</td>
                      <td>
                        <input 
                            type="number" 
                            min={0} max={1} step={0.01} 
                            className={classes.TdInput}
                            value={it.ELRER}
                            onChange={(e) => {
                              let temp = props.IOR;
                              temp[index].items[idex].ELRER = Number(e.target.value)
                              props.setIOR([...temp])
                            }}
                          />
                      </td>
                      <td>{Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2))}</td>
                        {
                          (
                            (Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                            >= minEVRER && 
                          Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                            < Number(minEVRER+mpr).toFixed(2)) && <td>НИЗЬКИЙ</td> 
                          )
                            ||
                          (    
                            (Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                              >= Number(minEVRER+mpr).toFixed(2)) && 
                            Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                              < Number(minEVRER+2*mpr).toFixed(2) && <td>СЕРЕДНІЙ</td>
                          )
                          ||
                          (
                            (Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                            >= Number(minEVRER+2*mpr).toFixed(2) && 
                            Number((it.ELRER * (it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10)*Number(it.resolveOption?.value || 1)).toFixed(2)) 
                            <= maxEVRER) && <td>ВИСОКИЙ</td>
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

export default Etap42
