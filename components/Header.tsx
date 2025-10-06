import React from 'react'
import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Header = () => {
    return (
        <header className={"sticky top-0 header"}>
            <div className={"container header-wrapper"}>
                <Link href={"/"}>
                    <Image src={"/assets/icons/logo.svg"} alt={"Signalist Logo"} width={144} height={32} className={"h-8 w-auto cursor-pointer"}/>
                </Link>
                <nav className={"hidden sm:block"}></nav>
            <NavItems />
            </div>
            {/*    User Dropdown*/}
        </header>
    )
}
export default Header
