import { NextResponse } from "next/server"

export default function(req) {
    const {token} = req.cookies
    const url = req.url
    // console.info(req)
    // console.info(req.cookies)
    // console.info(url)
    if(token && url == '/login'){
        return NextResponse.redirect('/dashboard')
    }
}