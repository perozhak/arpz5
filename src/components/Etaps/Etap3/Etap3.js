import React from 'react'
import ReactSelect from 'react-select'

const resolveOptions = [
  {
    label: "Попереднє навчання членів проектного колективу",
    value: Math.random().toFixed(2)
  },
  {
    label: "узгодження детального переліку вимог до ПЗ із замовником",
    value: Math.random().toFixed(2)
  },
  {
    label: "внесення узгодженого переліку вимог до ПЗ замовника в договір",
    value: Math.random().toFixed(2)
  },
  {
    label: "внесення узгодженого переліку вимог до ПЗ замовника в договір",
    value: Math.random().toFixed(2)
  },
  {
    label: "точне слідування вимогам замовника з узгодженого переліку вимог до ПЗ",
    value: Math.random().toFixed(2)
  },
  {
    label: "попередні дослідження ринку",
    value: Math.random().toFixed(2)
  },
  {
    label: "експертна оцінка програмного проекту досвідченим стороннім консультантом",
    value: Math.random().toFixed(2)
  },
  {
    label: "консультації досвідченого стороннього консультанта",
    value: Math.random().toFixed(2)
  },
  {
    label: "тренінг з вивчення необхідних інструментів розроблення ПЗ",
    value: Math.random().toFixed(2)
  },
  {
    label: "укладання договору страхування",
    value: Math.random().toFixed(2)
  },
  {
    label: "використання шаблонних рішень з вдалих попередніх проектів при управлінні програмним проектом",
    value: Math.random().toFixed(2)
  },
  {
    label: "підготовка документів, які показують важливість даного проекту для досягнення фінансових цілей компанії-розробника",
    value: Math.random().toFixed(2)
  },
  {
    label: "реорганізація роботи проектного колективу так, щоб обов'язки та робота членів колективу перекривали один одного",
    value: Math.random().toFixed(2)
  },
  {
    label: "придбання (замовлення) частини компонент розроблюваного ПЗ",
    value: Math.random().toFixed(2)
  },
  { 
    label: "заміна потенційно дефектних компонент розроблюваного ПЗ придбаними компонентами, які гарантують якість виконання роботи",
    value: Math.random().toFixed(2)
  },
  {
    label: "придбання більш продуктивної бази даних",
    value: Math.random().toFixed(2)
  },
  {
    label: "використання генератора програмного коду",
    value: Math.random().toFixed(2)
  },
  {
    label: "реоганізація роботи проектного колективу залежно від рівня труднощів виконання завдань та професійних рівнів розробників",
    value: Math.random().toFixed(2)
  },
  {
    label: "повторне використання придатних компонент ПЗ, які були розроблені для інших програмних проектів",
    value: Math.random().toFixed(2)
  },
  {
    label: "аналіз доцільності розроблення даного ПЗ.",
    value: Math.random().toFixed(2)
  }
]

const Etap3 = (props) => {

  return (
    <div className="mx-3">     
    <button type="button" className="btn btn-secondary" onClick={() => props.history.push("/")}>BACK</button>
    <h3>Ймовірності настання ризикових подій, встановлені експертами</h3>
    <table className="table">
      <thead>
      <tr className="table-secondary">
           <th scope="row">#</th>
           <td>{"Ризикові події"}</td>
           <td>Рішення</td>
         </tr>
         </thead>
         <tbody>
           {props.IOR.map((item, index, arr) => 
               item.items.map((it, idex) => 
               <tr key={"tr" + idex}>
                <th scope="row">{(item.id + (idex + 1)) || idex+1}</th>
                <td>{it.itemTitle}</td>
                <td  >
                  <ReactSelect 
                    value={it.resolveOption}
                    placeholder={"Виберіть спосіб рішення"}
                    options={resolveOptions}
                    onChange={
                      (value) => {
                          let temp = props.IOR;
                          temp[index].items[idex].resolveOption = value
                          props.setIOR([...temp])
                      }}
                  />
                </td>
               </tr>
             )
             )}
         </tbody>
     </table>
 </div>
  )
}

export default Etap3
