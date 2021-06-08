import counterReducer from './components/Counter/counter.reducer'
import profileReducer from './components/Profile/profile.reducer'

const rootReducer = {
  counter: counterReducer,
  profile: profileReducer
}

export default rootReducer
