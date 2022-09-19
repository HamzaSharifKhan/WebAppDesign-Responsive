import React from 'react'
import { useSelector } from 'react-redux'
export default function UI() {
     const name=useSelector(state=>state.user.name)
  return (
     <>
    <div>یہاں پر میں ایک کمپونینٹ کا ڈیٹا شو کروا راہا ہوں</div>
    <div>1:{name}</div>
    </>
  )
}
