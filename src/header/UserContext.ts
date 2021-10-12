import { createContext } from 'react'
import { User } from '../models/User'

const UserContext = createContext<null | User>(null)

export { UserContext }
