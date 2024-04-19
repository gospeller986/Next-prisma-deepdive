import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import React from 'react'


async function fetchData () {
    const response = await axios.get('http://localhost:3000/api/user') 
    
    await new Promise ( r => setTimeout(r,5000) )

    return response.data ;
}

export default async function page() {
    const data = await fetchData() ;
  return (
    <div>
        {data.name}
        {data.email}
    </div>
  )
}

export function POST (req : NextRequest) {
    const body = req.json() ;
    // hit the database here 

    return NextResponse.json({
        message : "You are signed up"
    })
}

