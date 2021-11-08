import React from 'react'
import classes from "../Etap2/Etap2.module.scss"


const Etap41 = (props) => {

  console.log(props)
  return (
    <div className="mx-3">     
       <button type="button" className="btn btn-secondary" onClick={() => props.history.push("/")}>BACK</button>
       <button type="button" className="btn btn-info" onClick={() => props.history.push("etap-4-2")}>Результуюча величина ризиків</button>
       <h3>Результуюче оцінювання ризиків</h3>
       <table className="table">
         <thead>
         <tr className="table-secondary">
              <th scope="row">#</th>
              <td>{"Ризикові події"}</td>
              {Array(10).fill(0).map((_, idx) => <td children={"pers" + (idx+1)} key={"pers" + idx} />)}
              <td>ERPER</td>
            </tr>
            </thead>
            <tbody>
              {props.IOR.map((item, index, arr) => 
                  item.items.map((it, idex) => 
                  <tr key={"tr" + idex}>
                    <th scope="row">{(item.id + (idex + 1)) || idex+1}</th>
                    <td>{it.itemTitle}</td>
                    {
                    it.marks2.map((m, idx) => 
                      <td key={"m"+idx} >
                        <input 
                          type="number" 
                          min={0} max={1} step={0.01} 
                          className={classes.TdInput}
                          value={m}
                          onChange={(e) => {
                            let temp = props.IOR;
                            temp[index].items[idex].marks2[idx] = Number(e.target.value)
                            props.setIOR([...temp])
                          }}
                        />
                      </td>
                    )}
                    <td>{Number((it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10).toFixed(2))*Number(it.resolveOption?.value || 1)}</td>
                  </tr>
                )
                )}
            </tbody>
        </table>
    </div>
  )
}

export default Etap41
