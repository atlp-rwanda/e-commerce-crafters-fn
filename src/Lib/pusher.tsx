import Pusher from "pusher-js"

const pusher = new Pusher("dbe65278dec138e8f049",{
    cluster: "mt1"

})

export default pusher