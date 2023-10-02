import { ref } from 'vue'

export interface Info {
  name: string
  age: string
}
const user = ref<Info>({ name: '', age: '' })
const children = ref<Info[]>([])

export function useUserInfo() {
  function setUser(newUser: Info) {
    user.value = newUser
  }
  function setChildren(newChildren: Info[]) {
    children.value = newChildren
  }
  return { user, children, setUser, setChildren }
}
