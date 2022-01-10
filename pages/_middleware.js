import { NextResponse } from "next/server"

export default function middleware(req) {
    const {token} = req.cookies
    const url = req.url
    // console.info(req)
    // console.info(req.cookies)
    // console.info(url)
    if(token && url == '/login'){
        return NextResponse.redirect('/dashboard')
    }

    if(url == '/test'){
        return NextResponse.rewrite('/notfound')
    }
}