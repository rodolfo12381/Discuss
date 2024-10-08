import Link from "next/link";
import  {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Avatar
} from '@nextui-org/react';
import { auth } from '@/auth';
import * as actions from  '@/actions';

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode;
    if (session?.user) {
        authContent = <Avatar src={session.user.image || ''}/>
    } else {
        authContent = <>
            <NavbarItem>
                <Button type="submit" color="secondary" variant="bordered">
                    Sign In
                </Button>
            </NavbarItem>
            <NavbarItem>
                <Button type="submit" color="primary" variant="flat">
                    Sign Up
                </Button>
            </NavbarItem>
        </>
    }

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Input/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent  justify="end">
                {authContent}
            </NavbarContent>
        </Navbar>
    )
}