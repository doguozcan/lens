const Login = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col gap-2 w-full max-w-sm">
        <p className="text-primary text-5xl animate-pulse">lens</p>
        <p>welcome to lens</p>
        <p>enter your email to get a magic link</p>
        <input className="input input-primary input-bordered input-sm" />
        <button className="btn btn-primary btn-outline btn-sm">send</button>
      </div>
    </div>
  )
}
export default Login
