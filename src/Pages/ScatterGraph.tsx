import React,{FC,useRef,useLayoutEffect} from 'react'
import * as d3 from 'd3'
type expenseType ={
    name:string
    amount:number
    date:Object
}
const ScatterGraph:FC = () => {
    const w = 700
    const h = 500
    const padding =30
    const svgRef = useRef<SVGSVGElement | null>(null)
    const expensesData = [{name:"rice",amount:10,date:new Date()},{name:"wheat",amount:20,date:new Date()},{name:"mutton",amount:200,date:new Date()},{name:"chicken",amount:150,date:new Date()},{name:"orange",amount:60,date:new Date()},{name:"apple",amount:20,date:new Date()},]
    useLayoutEffect(() => {
        const svgElement = d3.select(svgRef?.current).style('background-color','magenta')
        svgElement.attr('width',w).attr('height',h)
        svgElement.selectAll('circle').data(expensesData,(d:any)=>d.name).enter().append('circle').text((d)=>d.name).attr('r',5).attr('cx',d=>d.amount+30).attr('cy',d=>h-3*d.amount).append('title').text(d=>d.amount).attr('fill','green')
      
    }, [])
    return (
        <div style={{display:"flex",justifyContent:"center",marginTop:"50vh",marginBottom:"50vh"}}>
            <svg ref={svgRef}>

            </svg>

            
        </div>
    )
}

export default ScatterGraph
