import { getServers } from "dns";

const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}

getServers('Hernán')