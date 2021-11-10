import React from 'react'
import GoBack from '../../GoBack/GoBack';
import classes from "../Etap2/Etap2.module.scss"
import mainClasses from "../Styles.module.scss"


const Etap41 = (props) => {

  return (
    <div className={mainClasses.EtapContainer}>
      <div className="mx-3 pb-2">     
          <div className="d-flex"> 
            <GoBack />
            <button type="button" className="btn btn-info m-2" onClick={() => props.history.push(`${process.env.PUBLIC_URL}/etap-4-2`)}>Результуюча величина ризиків</button>
          </div>
         <h3>Результуюче оцінювання ризиків</h3>
         <table className="table">
           <thead>
           <tr className="table-primary">
                <th scope="row">#</th>
                <td>{"Ризикові події"}</td>
                {Array(10).fill(0).map((_, idx) => <td children={"pers" + (idx+1)} key={"pers" + idx} />)}
                <td>ERPER</td>
              </tr>
              </thead>
              <tbody>
                {props.IOR.map((item, index, arr) => 
                    item.items.map((it, idex) => 
                    <tr key={"tr" + idex} className="table-info">
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
                      <td>{Number(Number((it.marks2.reduce((acc, currVal) => acc+currVal , 0)/10).toFixed(2))*Number(it.resolveOption?.value || 1)).toFixed(2)}</td>
                    </tr>
                  )
                  )}
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Etap41
