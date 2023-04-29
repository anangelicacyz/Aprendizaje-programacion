const datos = [
{id:1, title:'Iron man', year:2008},
{id:2, title:'spiderman', year:2017},
{id:3, title:'Avengers', year:2019},
{id:4, title:'Hello', year:2022},
]

console.log(6 === '6')
const getDatos = () =>{
    setTimeout(() => {
        return datos
    }, 3000)
}
console.log(getDatos())