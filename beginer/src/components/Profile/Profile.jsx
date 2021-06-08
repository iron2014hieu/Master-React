import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './profile.asyncActions'

export default function Profile() {
  const profile = useSelector(state => state.profile.profile)
  const dispatch = useDispatch()

  useEffect(() => {
    // Không giống dispatch 1 action
    // getUser()(dispatch)
    // Dispatch 1 async action giống y hệt 1 action thông thường
    dispatch(getUser())
  }, [dispatch])

  return (
    <div>
      <div>Tên: {profile.name}</div>
      <div>Tuổi: {profile.age}</div>
    </div>
  )
}
