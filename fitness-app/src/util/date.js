// Aika ja pvm -string kutsumishetkellä
const getTimestamp = () => {
    var curr = new Date()
    var time = curr.getHours() + ":" + curr.getMinutes()
    const date = curr.getDate() + "/" + (curr.getMonth() + 1) + "/" + curr.getFullYear()
    return (time + " " + date)
}

export default getTimestamp