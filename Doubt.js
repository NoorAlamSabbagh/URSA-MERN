function car(carName) {
    let carProps = {
        name: carName,
        color: "red",
        getCarName() {
            return this
        }
    }

    return carProps
}
var result = car("Maruti")
console.log(result.getCarName())//????