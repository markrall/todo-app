import React from 'react'
import {ErrorBoundary} from 'react-error-boundary'

// TODO: implement type
// @ts-ignore
function ErrorFallback({error}) {
  return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
      </div>
  )
}

const onErrorHandler = (error: Error, info: { componentStack: string }) => {
  console.error({error, info})
}

function App() {
  return (
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={onErrorHandler}>
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ErrorBoundary>
  )
}

export default App
