import React, { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'

const LineGraph = () => {
    const lineGraphRef = useRef<SVGSVGElement | null>(null)
    const data = [12, 31, 22, 17, 25, 55, 29, 123, 9, 1]
    const svgHeight = 500
    const svgWidth = 700
    // creating the SVG area 

    // rect y value should be subtracted from the height of SVG  
    useLayoutEffect(() => {
        const svgElement: any = d3.select(lineGraphRef?.current).style('background-color', "green").attr("height", svgHeight).attr('width', svgWidth)
        svgElement?.selectAll('rect').data(data).enter().append('rect').attr('fill', 'white').attr('height', (d:any) => d * 3).attr('width', 40).attr('x', (d:any, i:number) => i * 60).attr('y', (d:any) => svgHeight-(3*d))

    }, [])
    useLayoutEffect(() => { console.log(lineGraphRef?.current, 'changes') }, [lineGraphRef?.current])
    return (
        <svg ref={lineGraphRef}>

        </svg>
    )
}

export default LineGraph
