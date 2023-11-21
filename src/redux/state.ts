import {rerenderEntireTree} from "../index";

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello", likesCount: 2},
            {id: 1, message: "My Second post", likesCount: 8},
            {id: 1, message: "It try to learn React", likesCount: 24},
            {id: 1, message: "I can`t stop it!", likesCount: 88},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Anastasiya"},
            {id: 2, name: "Yuri"},
            {id: 3, name: "Elena"},
            {id: 4, name: "Kristina"},
            {id: 5, name: "Evgeniy"},
            {id: 6, name: "Natali"},
        ],
        messages: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "How is your IT?"},
            {id: 4, message: "I Try to learn React and JS"},
            {id: 5, message: "Also my favourite football team MC"},
        ]
    },
    sidebar: {}
}
export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree()
}