export function Login() {
 const handleLoginSubmit = (e) => {        
        e.preventDefault();
    } 
    return (

        <form  onSubmit={handleLoginSubmit}>
            <input type ="email" name="email" placeholder="Enter your email"></input>
            <input type="password" name="password" placeholder="Enter your password"> </input>
            <button type="submit">Login</button>
        </form> 


    )
}