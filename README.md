# navigate-debug
Showing a weird bug of useNavigate() in React 16

Repo to go along my Stack Overflow post.

The React Router Dom function navigate() from
const navigate = useNavigate()

does not work inside a useEffect for a component being rendered.

Console shows a warning as if navigate is used outside useEffect, which it isn't

The React 16 and React 17 folder work
React 18 works but still outputs the warning

See 
