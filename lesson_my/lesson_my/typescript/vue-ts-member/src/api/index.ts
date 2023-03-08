// import { MemberEntity } from "../model/memberEntity"
// import { members } from "./member"


// const baseURl:string = 'https://api.github.com/orgs/lemoncode'
// // 函数约定返回值
// // Promise 类
// // 细化一下  泛型约束 泛指内部的类型
// const fetchMembers = ():Promise<MemberEntity[]> => {
//     return Promise.resolve(members)
// }

// const fetchMembersAsync = ():Promise<MemberEntity[]> => {
//     const membersURL = `${baseURl}/members`
//     return fetch(membersURL)                // Promise<Response>
//         .then(response => response.json())  // promise<{}>
//         .then(mapToMembers)
// }
// // any  不约束
// const mapToMembers = (githubMembers:any[]) => {
//     // 把后端接口给我们的不合规范的数据， 格式化
//     return githubMembers.map(mapToMember)
// }

// const mapToMember = (githubMember:any):MemberEntity => {
//     return {
//         id: githubMember.id,
//         login: githubMember.login,
//         avatar_url: githubMember.avatar_url
//     }
// }

import { MemberEntity } from "../model/memberEntity"

const baseURl = 'https://api.github.com/orgs/lemoncode'
// typescript 在架构上 为前端项目引入 模型层
export const fetchMembersAsync = ():Promise<MemberEntity[]> => {
    const membersURL = `${baseURl}/members`
    return fetch(membersURL)      // 二进制Response 不满足页面需求
        .then(response => response.json())   // Any[]  不满足页面精确需求
        .then(mapToMembers)  // Any[] Any   后端的接口数据  满足页面model 需要
}

const mapToMembers = (githubMembers:any[]) => {  //githubMembers // 有很多是不需要的
//     return githubMembers.map(member => ({
//         id: member.id,
//         login: member.login,
//         avatar_url: member.avatar_url
//     }))
    return githubMembers.map(mapToMember) 
}

const mapToMember = (githubMember:any):MemberEntity => {
    return {
        id: githubMember.id,
        login: githubMember.login,
        avatar_url: githubMember.avatar_url
    }
}