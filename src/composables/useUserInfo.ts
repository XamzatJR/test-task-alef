import { ref } from 'vue'

export interface IUser {
  name: string
  age: string
}
export interface IChild {
  id: number
  name: string
  age: string
}
const user = ref<IUser>({ name: '', age: '' })
const children = ref<IChild[]>([])

export function useUserInfo() {
  function setUser(newUser: IUser) {
    user.value = newUser
  }
  function setChildren(newChildren: IChild[]) {
    children.value = newChildren
  }
  return { user, children, setUser, setChildren }
}
