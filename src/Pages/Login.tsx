import React, { FC } from 'react'

const Login: FC = () => {
    const countVowels = (str: any) => {
        const vowels: string[] = ['a', 'e', 'i', 'o', 'u']
        const stringArray = [...str]
        const vowelInString = vowels?.filter(letter => stringArray.includes(letter))
        console.log(vowelInString?.length, 'vowelI')
    }
    countVowels('cypress')
    const countDivElements = (val:any) => {
        const elements = val.split('>')
        console.log(elements, "eleenn")

    }
    const ele = '<div><b><p></p></b></div>'
    countDivElements(ele)
    return (
        <div>
            <h1 className="header">Hi I am Cypress</h1>
        </div>
    )
}

export default Login
