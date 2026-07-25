// import Esk from './Comp1';
import Comp1 from './Comp1';
import Form from './Form';
export default function Product(){
    let feature = ["(1)durable and very fast using in the","(2)durable and not very fast using in the","(3)durable and very fast","(4)sidglfavd","(5)fweoifg"];
    let object = {amit:{name:"amit",class:"BCA",age:23},sumit:{name:"sumit",class:"BCA2",age:43},jack:{name:"jack",class:"BCA#",age:24}}
    const faa = [{name:"amit",class:"BCA",age:23},{name:"sumit",class:"BCA2",age:43},{name:"jack",class:"BCA#",age:24}];
    let oldprice=["54","45","54","76"];


  return (
    <>
<div>
    <Comp1 title="this phone"des="this is descriptions(1)" feature={feature[0]} object1={object.amit} price ={780} oldprice={oldprice[0]} data1={[faa[0]]}/>
    <Comp1 title ="this is phone "des="this  descriptions(3)" feature={feature[2]} object1={object.sumit} price={354} oldprice={oldprice[1]} data1={[faa[1]]}/>
    <Comp1 title ="this is phone "des="this  descriptions(3)" feature={feature[2]} object1={object.sumit} price={564} oldprice={oldprice[1]} data1={[faa[2]]}/>
    <Comp1 title = "this is phone" des="this descriptions(2)" feature={feature[1]} object1={object.jack} price={678} oldprice={oldprice[1]}/>
    <Comp1 title ="this is phone "des="this  descriptions(3)" feature={feature[2]} object1={object.sumit}/>
    <Comp1 title ="this is phone "des="this  descriptions(3)" feature={feature[3]} object1={object.sumit}/>
    <Comp1 title ="this is phone "des="this  descriptions(3)" feature={feature[4]} object1={object.sumit}/>
</div>
<Form />
    </>
  )
}
