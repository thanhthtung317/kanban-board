import { normalize, schema } from "normalizr"
import nestedData from './nested-data.json'

const user = new schema.Entity('users')
const card = new schema.Entity('cards', {assignedTo: user})
const list = new schema.Entity('lists', {cards:[card]})

const normalizedList = normalize(nestedData.lists, [list])
const normalizedUser = normalize(nestedData.users, [user])

export const lists = {
    entitis: normalizedList.entities.lists,
    ids: normalizedList.result
}

export const users = {
    entities: normalizedUser.entities.users,
    ids: normalizedUser.result
}

export const cards = {
    entities: normalizedList.entities.cards,
    ids: Object.keys(normalizedList.entities.cards)
}

export default {
    lists,
    users,
    cards
}