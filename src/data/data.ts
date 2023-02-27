const Calculate = (time:number, percentage: number, start:number):number[] => {
    let ANew:number[] = []
    for(let i:number = 0; i < time; i++){
        ANew.push(Math.round(start * Math.pow((1 + percentage), i)))
    }
  return ANew
}
type Pro = {
  nombre: string,
  cantidad: number
}


export const Plan:Pro[] = [
   {
    nombre:"Lower Abs",
    cantidad: 10
   },
   {
    nombre:"Stairs",
    cantidad: 2
   },
   {
    nombre:"Leg Raises",
    cantidad: 4
   },
   {
    nombre:"Push Ups",
    cantidad: 5
   },
   {
    nombre:"Squats",
    cantidad: 10
   },
   {
    nombre:"Abs",
    cantidad: 3
   },
   {
    nombre:"Burpees",
    cantidad: 3
   },
   {
    nombre:"Pull Ups",
    cantidad: 1
   },
   {
    nombre:"Plank",
    cantidad: 25
   },
  
]

export const NDay:number = 0

