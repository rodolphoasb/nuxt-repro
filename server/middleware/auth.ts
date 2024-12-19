import { withClerkMiddleware } from 'h3-clerk'

export default eventHandler(async (event) => {
    const isAny2TableRoute = event.path.startsWith('/api/any2table')
    const clerkMiddleware = withClerkMiddleware()

    if (!isAny2TableRoute)
        return clerkMiddleware(event)
})
