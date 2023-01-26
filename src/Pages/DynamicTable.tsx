import { Button, Grid, TextField,Snackbar } from '@mui/material'
import _, { includes } from 'lodash'
import React, { ChangeEvent, useState } from 'react'
const obj: any = {}
const DynamicTable = () => {
    const [classCha, setClassCha] = useState<any>({})
    const [shuffle, setShuffle] = useState<boolean>(false)
    const [listOfGrades, setListOfGrades] = useState<any[]>([{id:0,promotionPassMark:null,gradeID:5,gradeName:"Grade 1"},{id:1,promotionPassMark:null,gradeID:1,gradeName:"Grade 1"},{id:2,promotionPassMark:null,gradeID:2,gradeName:"Grade 2"},{id:3,promotionPassMark:null,gradeID:3,gradeName:"Grade 3"},{id:4,promotionPassMark:null,gradeID:4,gradeName:"Grade 4"}])
    const [allGrade, setAllGrade] = useState<string>('')
    const [marks, setMarks] = useState<any>({})
    const [gradeMarks, setGradeMarks] = useState<any[]>([])
    const [alertMessage, setAlertMessage] = useState<string>('')
    const [disable, setDisable] = useState<boolean>(false)

    const data = [{
        id: 0,
        name: "Name",
        result: "35",
    },
    {
        id: 1,
        name: "LastName",
        result: "50",
    },
    {
        id: 1,
        name: "vicky",
        result: "50",
    },
    {
        id: 1,
        name: "joe",
        result: "50",
    },
    {
        id: 1,
        name: "f",
        result: "50",
        val: "fail"
    },
    {
        id: 1,
        name: "a",
        result: "50",
        val: "fail"
    }, {
        id: 1,
        name: "i",
        result: "50",
        val: "fail"
    }

    ]

    const selectClaHandler = (e: any) => {
        console.log(e.target.value)
        console.log(+e.target.name)
        const name = +e.target.name
        const value = e.target.value
        obj[name] = value
        console.log(obj)
        setClassCha((prev: any) => ({ ...prev, obj }))
        // setClassCha((prev)=>({
        // ...prev,
        // className:value
        // }))
    }

    console.log(classCha, "class")
    const randomHandler = () => {
        setShuffle((p) => !p)
        setClassCha({})
        const ar = ["1", "2", "3", "4", "5", "6"]
        const oj: any = ar.map((val: any) => {
            obj[Math.floor(1 + Math.random() * data?.length)] = val
            setClassCha((pr: any) =>
            ({
                ...pr,
                obj
            }))
            return obj
        }

        )
        console.log(oj, "oj")
    }
    console.log(Math.floor(Math.random() * 7))

    const allGradeMarksHandler = (val: any) => {
        const mark = val.target.value
        setAllGrade(mark)
        const updatedMarks = _.map(listOfGrades, (grade: any) => ({ ...grade, promotionPassMark: mark }))
        setListOfGrades(updatedMarks)
    }

    const specificGradeMarkHandler = (e: any) => {
        setAllGrade("-")
        const updatedMarks = _.map(listOfGrades, (gr: any) => {
            if (gr.gradeID === +e.target.name) {
                return {
                    ...gr,
                    promotionPassMark: e.target.value
                }
            }
            else {
                return gr
            }
        })
        setListOfGrades(updatedMarks)

    } 
    
    console.log(listOfGrades,"listr")
    const validateMarks = ()=>{
        const allMarksEntered = _.every(listOfGrades,(val:any)=>!_.isEmpty(val?.promotionPassMark))
        const hasPercentage =  _.every(listOfGrades,(val:any)=>(val?.promotionPassMark?.includes("%") && (/^[0-9][0-9]?$|^100$/).test(val?.promotionPassMark?.slice(0,-1))))
        if(!allMarksEntered){setAlertMessage("Please fill the mandatory fields")}
        else if(allMarksEntered && !hasPercentage){setAlertMessage("Percentage should be between from 0to100%")}
        else if(allMarksEntered && hasPercentage){
            const payloadCreator = (val: any) => {
                if (val?.length > 0) {
                    console.log(val, "val")
                    const { promotionPassMark, gradeID } = val.shift()
                    console.log(promotionPassMark, gradeID, "pop")
                    setGradeMarks((prev) => [...prev, { gradeId: +gradeID, promotionPassMark: +promotionPassMark.slice(0, -1) }])
                    payloadCreator(val)
                }
            }
            if(!disable)payloadCreator(listOfGrades.map(val => val))
            setDisable(true)
        }
    }
    console.log(gradeMarks,"grade")
    return (
        <Grid container  style={{display:"flex",justifyContent:"center"}}>
            <Snackbar open={!!alertMessage} message={alertMessage} autoHideDuration={1000}
            onClose={()=>setAlertMessage('')}
            />
            <Grid item>
            <TextField className='schAdminInputCtr w-100' type='text'
                label="Enter Passing Marks*"
                value={allGrade} placeholder='Enter Passing Marks*'
                // onBlur={allGradeMarksHandler}
                onChange={allGradeMarksHandler}
                // disabled={listOfGrades?.length > 0 && listOfGrades[0]?.promotionPassMark !== null}
                disabled={disable}

            />
            {_.map(listOfGrades, (grade: any, index: any) => <tr key={grade.gradeID} className='mb-3'>
                <td className='w_td'>Passing mark for <strong> {grade?.gradeName}</strong></td>
                <td>
                    <TextField className='schAdminInputCtr w-100 mx-0'
                        label="Enter Passing Marks*"
                        value={allGrade !== "-"?allGrade:grade?.promotionPassMark}
                        name={grade?.gradeID}
                        onChange={specificGradeMarkHandler}
                        // disabled={grade?.promotionPassMark ? true : grade?.promotionPassMark === 0 ? true : false}
                        disabled={disable}
                    /></td>
            </tr>)}
                <Button onClick={validateMarks}>
                    Validate
                </Button>
            </Grid>

            {/* <table>
                <thead>
                    <tr>
                        <th>
                            S.No
                        </th>
                        <th>
                            Name
                        </th>  <th>
                            Result
                        </th>  <th>
                            Migrate To
                        </th>
                    </tr>

                </thead>
                <tbody>
                    <tr>
                        {data.map((stu: any, index: any) => <tr>
                            <td>{stu?.name}</td>
                            <td>{stu?.result}</td>
                            <td>
                                {JSON.stringify(Object.keys(classCha)?.length>0&&classCha?.obj[(index + 1)?.toString()])}
                                <select value={stu?.val !=="fail"?Object.keys(classCha)?.length>0&&classCha?.obj[(index + 1)?.toString()]:"fail"} name={(index + 1).toString()} onChange={selectClaHandler}>
                                <option value="fail">
                                        Fail
                                    </option>
                                    <option value="1">
                                        1
                                    </option>
                                    <option value="2">
                                        2
                                    </option>
                                    <option value="3">
                                        3
                                    </option>
                                    <option value="4">
                                        4
                                    </option>
                                    <option value="5">
                                        5
                                    </option>
                                    <option value="6">
                                        6
                                    </option>
                                </select>
                            </td>
                        </tr>)} */}
            {/* <td>
                            S.No
                        </td>
                        <td>
                            Name
                        </td>  <td>
                            Result
                        </td>  <td>
                            Migrate To
                        </td> */}
            {/* </tr>

                </tbody>
            </table> */}
            {/* <button onClick={randomHandler}>
                Randomize
            </button> */}

        </Grid>
    )
}

export default DynamicTable
