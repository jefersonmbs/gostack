
interface createUser{
    name?: string;
    email: string;
    password: string;
}

export default function  createUser({name, email, password} : createUser){
    const user ={
        name,
        email,
        password,
    }

    return user;
}