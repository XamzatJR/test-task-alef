<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'
import { type IChild, type IUser, useUserInfo } from '@/composables/useUserInfo'

const user = ref<IUser>({ name: '', age: '' })
const children = ref<IChild[]>([])
const MAX_CHILDS = 5

const { setChildren, setUser } = useUserInfo()
const $router = useRouter()
function addChild() {
  if (children.value.length < MAX_CHILDS) {
    children.value.push(
      {
        id: Date.now(),
        name: '',
        age: '',
      },
    )
  }
}
function removeChild(childId: number) {
  children.value = children.value.filter(el => el.id !== childId)
}
function handleSubmit() {
  setUser(user.value)
  setChildren(children.value)
  $router.push({ name: 'preview' })
}
</script>

<template>
  <form action="#" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-2.5 w-full">
      <AppInput
        id="username"
        label="Имя"
        name="username"
        required pattern="\p{L}{3,16}"
        placeholder="Введите имя"
        :model-value="user.name"
        @update:model-value="newValue => user.name = newValue"
      />
      <AppInput
        id="userage"
        label="Возраст"
        name="userage"
        required pattern="\d{1,2}"
        placeholder="Введите возраст"
        :model-value="user.age"
        @update:model-value="newValue => user.age = newValue"
      />
    </div>
    <section class="mt-11">
      <div class="flex justify-between items-center">
        <h2 class="text-black text-base font-medium">
          Дети (макс. 5)
        </h2>
        <AppButton type="button" class="text-primary border-2 border-primary rounded-full" @click="addChild">
          <template #icon>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="24px / plus">
                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z" fill="#01A7FD" />
              </g>
            </svg>
          </template>
          Добавить ребенка
        </AppButton>
      </div>
      <div class="flex flex-col gap-2.5 mt-5">
        <template v-if="children.length">
          <fieldset v-for="child in children" :key="child.id" class="flex gap-4">
            <AppInput
              label="Имя"
              :name="`child-name-${child.id}`"
              required pattern="\p{L}{3,16}"
              placeholder="Введите имя"
              :model-value="child.name"
              @update:model-value="newValue => child.name = newValue"
            />
            <AppInput
              label="Возраст"
              :name="`child-age-${child.id}`"
              required pattern="\d{1,2}"
              placeholder="Введите возраст"
              :model-value="child.age"
              @update:model-value="newValue => child.age = newValue"
            />
            <AppButton
              type="button" class="text-primary"
              @click="removeChild(child.id)"
            >
              Удалить
            </AppButton>
          </fieldset>
        </template>
      </div>
    </section>
    <AppButton type="submit" class="text-white bg-primary border-2 border-primary rounded-full mt-8">
      Сохранить
    </AppButton>
  </form>
</template>

<style lang="scss" scoped>

</style>
