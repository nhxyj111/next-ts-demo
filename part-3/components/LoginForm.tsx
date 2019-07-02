import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { loginUser } from "../lib/auth";
import Router from "next/router";

const LoginForm: React.FC<{}> = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }

  }, [setEmail, setPassword])

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    loginUser(email, password).then(() => {
      Router.push('/profile')
    }).catch(err => {
      const e = err.response && err.response.data || err.message
      setError(e)
      setLoading(false)
    })
  }, [email, password])

  return (
    <form onSubmit={handleSubmit}>
      {/* <pre>{email}</pre>
      <pre>{password}</pre> */}

      <div><input type="email" name="email" placeholder="email" onChange={handleChange} /></div>
      <div><input type="password" name="password" placeholder="password" onChange={handleChange} /></div>
      <button disabled={loading} type="submit">Submit{loading ? 'ing' : ''}</button>
      {!!error && <div>{error}</div>}
    </form>
  )
}

export default LoginForm