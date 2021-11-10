import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from "react-router-dom"
import { createBrowserHistory } from 'history'
import Dashboard from './components/Dashboard/Dashboard';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Etap1 from "./components/Etaps/Etap1/Etap1";
import Etap21 from "./components/Etaps/Etap2/Etap21";
import Etap22 from "./components/Etaps/Etap2/Etap22";
import Etap3 from "./components/Etaps/Etap3/Etap3";
import Etap41 from "./components/Etaps/Etap4/Etap41";
import Etap42 from "./components/Etaps/Etap4/Etap42";
import React, {useState} from 'react'

const hist = createBrowserHistory()

const App = () => {

  const [IOR1, setIOR1] = useState([
      {
        title: "Множина джерел появи технічних ризиків",
        id: "t",
        items: [
          {
            itemTitle: "Функціональні характеристики ПЗ",
            value: true 
          },
          {
            itemTitle: "Характеристики якості ПЗ",
            value: true 
          },
          {
            itemTitle: "Характеристики надійсності ПЗ",
            value: true 
          },
          {
            itemTitle: "Застосовність ПЗ",
            value: true 
          },
          {
            itemTitle: "Часова продуктивність ПЗ",
            value: true 
          },
          {
              itemTitle: "супроводжуваність ПЗ",
              value: true 
          },
          {
              itemTitle: "повторне використання компонент ПЗ",
              value: true 
          }
        ]
      },
      {
        title: "Множина джерел появи вартісних ризиків",
        id: "c",
        items: [
          {
            itemTitle: "Обмеження сумарного бюджету на програмний проект",
            value: true
          },
          {
            itemTitle: "Недоступна вартість реалізації програмного проекту",
            value: true,
          },
          {
            itemTitle: "Низька ступіть реалізму при оцінюванні витрат на програмний проект",
            value: true,
          }
        ]
      },
      {
          title: "Множина джерел появи планових ризиків",
          id: "p",
          items: [
            {
              itemTitle: "властивості та можливості гнучкості внесення змін до планів життєвого циклу розроблення ПЗ",
              value: true
            },
            {
              itemTitle: "можливості порушення встановлених термінів реалізації етапів життєвого циклу розроблення ПЗ",
              value: true,
            },
            {
              itemTitle: "низька ступінь реалізму при встановленні планів і етапів життєвого циклу розроблення ПЗ",
              value: true,
            }
          ]
      },
      {
          title: "Множина джерел появи ризиків реалізації процесів і процедур управління програмним проектом",
          id: "m",
          items: [
            {
              itemTitle: "хибна стратегія реалізації програмного проекту",
              value: true
            },
            {
              itemTitle: "неефективне планування проекту розроблення ПЗ",
              value: true,
            },
            {
              itemTitle: "неякісне оцінювання програмного проекту",
              value: true,
            },
            {
              itemTitle: "прогалини в документуванні етапів реалізації програмного проекту",
              value: true,
            },
            {
              itemTitle: "промахи в прогнозуванні результатів реалізації програмного проекту",
              value: true,
            }
          ]
      }
    ])
  
  const [IOR2, setIOR2] = useState([
      {
        title: "Множина настання технічних ризикових подій",
        id: "t",
        items: [
          {
            itemTitle: "Затримки у постачанні обладнання, необхідного для підтримки процесу розроблення ПЗ",
            value: true 
          },
          {
            itemTitle: "небажання команди виконавців ПЗ використовувати інструментальні засоби для підтримки процесу розроблення ПЗ",
            value: true 
          },
          {
            itemTitle: "відмова команди виконавців від CASE-засобів розроблення ПЗ",
            value: true 
          },
          {
            itemTitle: "формування запитів на більш потужні інструментальні засоби розроблення ПЗ",
            value: true 
          },
          {
              itemTitle: "недостатня продуктивність баз(и) даних для підтримки процесу розроблення ПЗ",
              value: true 
          },
          {
              itemTitle: "програмні компоненти, які використовують повторно в ПЗ, мають дефекти та обмежені функціональні можливості",
              value: true 
          },
          {
              itemTitle: "неефективність програмного коду, згенерованого CASE-засобами розроблення ПЗ",
              value: true 
          },
          {
              itemTitle: "неможливість інтеграції CASE-засобів з іншими інструментальними засобами для підтримки процесу розроблення ПЗ",
              value: true 
          },
          {
              itemTitle: "швидкість виявлення дефектів у програмному коді є нижчою від раніше запланованих термінів",
              value: true 
          },
          {
              itemTitle: "поява дефектних системних компонент, які використовують для розроблення ПЗ",
              value: true 
          }
        ]
      },
      {
        title: "множина настання вартісних ризикових подій",
        id: "c",
        items: [
          {
            itemTitle: "недооцінювання витрат на реалізацію програмного проекту (надмірно низька вартість)",
            value: true
          },
          {
            itemTitle: "переоцінювання витрат на реалізацію програмного проекту (надмірно висока вартість)",
            value: true,
          },
          {
            itemTitle: "фінансові ускладнення у компанії-замовника ПЗ",
            value: true,
          },
          {
              itemTitle: "фінансові ускладнення у компанії-розробника ПЗ",
              value: true,
          },
          {
              itemTitle: "збільшення бюджету програмного проекта з ініціативи компанії-розробника ПЗ під час його реалізації",
              value: true,
          },
          {
              itemTitle: "збільшення бюджету програмного проекта з ініціативи компанії-розробника ПЗ під час його реалізації",
              value: true,
          },
          {
              itemTitle: "висока вартість виконання повторних робіт, необхідних для зміни вимог до ПЗ;",
              value: true,
          },
          {
              itemTitle: "реорганізація структурних підрозділів у компанії-замовника ПЗ",
              value: true,
          },
          {
              itemTitle: "реорганізація команди виконавців у компанії-розробника ПЗ",
              value: true,
          }
        ]
      },
      {
          title: "множина настання планових ризикових подій",
          id: "p",
          items: [
            {
              itemTitle: "зміни графіка виконання робіт з боку замовника чи виконавця",
              value: true
            },
            {
              itemTitle: "порушення графіка виконання робіт у компанії-розробника ПЗ",
              value: true
            },
            {
              itemTitle: "потреба зміни користувацьких вимог до ПЗ з боку компанії-замовника ПЗ",
              value: true
            },
            {
              itemTitle: "потреба зміни функціональних вимог до ПЗ з боку компанії-розробника ПЗ",
              value: true
            },
            {
              itemTitle: "потреба виконання великої кількості повторних робіт, необхідних для зміни вимог до ПЗ",
              value: true
            },
            {
              itemTitle: "недооцінювання тривалості етапів реалізації програмного проекту з боку компанії-розробника ПЗ",
              value: true
            },
            {
              itemTitle: "переоцінювання тривалості етапів реалізації програмного проекту",
              value: true
            },
            {
              itemTitle: "остаточний розмір ПЗ перевищує заплановані його характеристики",
              value: true
            },
            {
              itemTitle: "остаточний розмір ПЗ значно менший за планові його характеристики",
              value: true
            },
            {
              itemTitle: "поява на ринку аналогічного ПЗ до виходу замовленого",
              value: true
            },
            {
              itemTitle: "поява на ринку більш конкурентоздатного ПЗ",
              value: true
            }
          ]
      },
      {
          title: "множина настання ризикових подій реалізації процесів і процедур управління програмним проектом",
          id: "m",
          items: [
            {
              itemTitle: "низький моральний стан персоналу команди виконавців ПЗ",
              value: true
            },
            {
              itemTitle: "низька взаємодія між членами команди виконавців ПЗ",
              value: true
            },
            {
              itemTitle: "пасивність керівника (менеджера) програмного проекту",
              value: true
            },
            {
              itemTitle: "недостатня компетентність керівника (менеджера) програмного проекту",
              value: true
            },
            {
              itemTitle: "незадоволеність замовника результатами етапів реалізації програмного проекту",
              value: true
            },
            {
              itemTitle: "недостатня кількість фахівців у команді виконавців ПЗ з необхідним професійним рівнем",
              value: true
            },
            {
              itemTitle: "хвороба провідного виконавця в найкритичніший момент розроблення ПЗ",
              value: true
            },
            {
              itemTitle: "одночасна хвороба декількох виконавців підчас розроблення ПЗ",
              value: true
            },
            {
              itemTitle: "неможливість організації необхідного навчання персоналу команди виконавців ПЗ",
              value: true
            },
            {
              itemTitle: "зміна пріоритетів у процесі управління програмним проектом",
              value: true
            },
            {
              itemTitle: "недооцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ",
              value: true
            },
            {
              itemTitle: "переоцінювання необхідної кількості розробників (підрядників і субпідрядників) на етапах життєвого циклу розроблення ПЗ",
              value: true
            },
            {
              itemTitle: "надмірне документування результатів на етапах реалізації програмного проекту",
              value: true
            },
            {
              itemTitle: "недостатнє документування результатів на етапах реалізації програмного проекту",
              value: true
            },
            {
              itemTitle: "нереалістичне прогнозування результатів на етапах реалізації програмного проекту",
              value: true
            },
            {
              itemTitle: "недостатній професійний рівень представників від компанії-замовника ПЗ",
              value: true
            }
          ]
      }
    ].map(
        item => ({
          ...item,
          items: item.items.map(it => ({
            ...it,
            marks: Array(10).fill(0).map(_ => Number(Math.random().toFixed(2))), // set marks,
            marks2: Array(10).fill(0).map(_ => Number(Math.random().toFixed(2))), // set marks2,
            LRER: Number(Math.random().toFixed(2)), // set LRER
            ELRER: Number(Math.random().toFixed(2)) // set ELRER
          }))
        })
      )
    )


  

  const etap1 = (props) => <Etap1 IOR1={IOR1} IOR2={IOR2} setIOR1={setIOR1} setIOR2={setIOR2} {...props}/>
  const etap21 = (props) => <Etap21 IOR={IOR2} setIOR={setIOR2} {...props}/>
  const etap22 = (props) => <Etap22 IOR={IOR2} setIOR={setIOR2} {...props}/>
  const etap3 = (props) => <Etap3 IOR={IOR2} setIOR={setIOR2} {...props}/>
  const etap41 = (props) => <Etap41 IOR={IOR2} setIOR={setIOR2} {...props}/>
  const etap42 = (props) => <Etap42 IOR={IOR2} setIOR={setIOR2} {...props}/>

  return (
      <Router history={hist}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/etap-1`} component={etap1} />
          <Route exact path={`${process.env.PUBLIC_URL}/etap-2-1`} component={etap21} />
          <Route exact path={`${process.env.PUBLIC_URL}/etap-2-2`} component={etap22} />
          <Route exact path={`${process.env.PUBLIC_URL}/etap-3`} component={etap3} />
          <Route exact path={`${process.env.PUBLIC_URL}/etap-4-1`} component={etap41} />
          <Route exact path={`${process.env.PUBLIC_URL}/etap-4-2`} component={etap42} />
          <Redirect to={`${process.env.PUBLIC_URL}/`} />
        </Switch>
      </Router>
  );
}

export default withRouter(App);

