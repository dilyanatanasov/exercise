// // let title = "Titanic";
// //
// // let newTitle: string = "Titanic, Test";
// // let age: number = 10;
// // let bool: boolean = true // false
// //
// // let array: string[] = ["dsadas","das"]
// //
// // type User = {
// //     id: number,
// //     first_name: string,
// //     last_name: string,
// //     is_active?: boolean
// // }
// //
// // let user: User = {
// //     id: 1,
// //     first_name: "Dilyan",
// //     last_name: "Atanasov",
// //     is_active: true,
// // }
// //
//
// type Movie = {
//     id: number,
//     title: string,
//     genre: MOVIE_GENRE,
//     director: string,
//     duration: number
// }
// enum MOVIE_GENRE {
//     ACTION = "action",
//     COMEDY = "comedy",
//     HORROR = "horror"
// }
//
// let spidermanFarFromHome: Movie = {
//     id: 1,
//     title: "Spiderman Far From Home",
//     director: "Sergei Alekov",
//     duration: 160,
//     genre: MOVIE_GENRE.ACTION
// }
// let spidermanHomeComming: Movie = {
//     id: 2,
//     title: "Spiderman Home Comming",
//     director: "Sergei Alekov",
//     duration: 160,
//     genre: MOVIE_GENRE.ACTION
// }
// let array = [spidermanFarFromHome, spidermanHomeComming]
// const reuslt = array.filter(movie => movie.genre === MOVIE_GENRE.ACTION)
// // console.log(reuslt)
//
// enum CAR_TYPE {
//     COMBI = "combi",
//     CABRIOLET = "cabriolet",
//     SEDAN = "sedan"
// }
//
// class Car {
//     protected type: CAR_TYPE;
//
//     constructor() {
//         this.type = CAR_TYPE.SEDAN
//     }
//
//     setType(type: CAR_TYPE): void {
//         this.type = type
//     }
//
//     getType(): CAR_TYPE {
//         return this.type
//     }
// }
// const car = new Car();
// car.setType(CAR_TYPE.CABRIOLET)
// // console.log(car.getType())
//
// class Audi extends Car {
//
// }


const waitTwoSeconds = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 2000)
    })
}

(async () => {
    console.log(1)
    console.log(2)
    console.log(await waitTwoSeconds())
    console.log(4)
})()

