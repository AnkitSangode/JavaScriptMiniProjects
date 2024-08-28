const passwordGenerator = () => {
    password = "";
    str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    char =  "!, @, $, %, ^, &, *, +, #"

    for (let i= 1; i<str.length ; i++) {
        pass=Math.floor(Math.random()*str.length + 1);
        password = password+str.charAt(pass)
        console.log(password)
    }

}