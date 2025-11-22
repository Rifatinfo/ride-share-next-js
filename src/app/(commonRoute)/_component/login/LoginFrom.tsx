"use client";


import { Input } from "@/components/ui/input";
import { Card } from "@/src/components/ui/card";
import { useActionState } from "react";
import { loginAction } from "../../_action/auth";


const LoginFrom = () => {
    const [state, fromAction, isLoading] = useActionState(loginAction, null);
    return (
        <div>
            <form>
                <Card className="p-5 space-y-4">
                    <Input name="email" type="email" placeholder="Email"></Input>
                    <Input name="password" type="password" placeholder="password"></Input>
                    {/* <ActionButton>Login</ActionButton> */}
                </Card>
            </form>
        </div>
    );
};

export default LoginFrom;