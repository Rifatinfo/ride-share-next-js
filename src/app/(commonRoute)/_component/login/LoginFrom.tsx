"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "../../_action/auth";
import { Card } from "@/components/ui/card";
import { Input } from "../../../../../components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ActionButton from "../page/ActionButton";



const LoginFrom = () => {
    const [state, fromAction, isLoading] = useActionState(loginAction, null);
    const router = useRouter();
    console.log(fromAction, state);
    
    useEffect(() => {
        if (!state) return;

        if (!state.success) {
            toast.error(state.message || "Login failed");
        }

        if (state.success) {
            toast.success("Login successful!");
            setTimeout(() => {
                router.push("/");
            }, 400);
        }
    }, [state, router]);
    return (
        <div>
            <form action={fromAction}>
                <Card className="p-5 space-y-4">
                    <Input name="name" type="name" placeholder="name"></Input>
                    <Input name="email" type="email" placeholder="Email"></Input>
                    <Input name="password" type="password" placeholder="password"></Input>
                    <ActionButton>Login</ActionButton>
                </Card>
            </form>
        </div>
    );
};

export default LoginFrom;